// import SocialContainer from "components/shared/social";

import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Divider, Drawer, Flex, Steps, Typography } from "antd";
// import { MenuProps } from "interfaces/components/others/layouts.interface";
import { VscGame, VscHome, VscHubot, VscPersonAdd, VscSignIn, VscSignOut } from "react-icons/vsc";
import SocialContainer from "components/shared/social/SocialContainer";
import Image from "next/image";

const navLinks = [
  { id: "home", title: "Home", Icon: VscHome, path: "/" },
  { id: "apihub", title: "Football API Hub", Icon: VscHubot, path: "/apihub" },
  { id: "manager", title: "Football Manager", Icon: VscGame, path: "/games" },
  { id: "signup", title: "Create an Account", Icon: VscPersonAdd, path: "/accounts/signup" },
  { id: "signin", title: "Login to your Account", Icon: VscSignIn, path: "/accounts/signin" },
  { id: "signout", title: "Sign Out from Wave Research", Icon: VscSignOut, path: `${process.env.BASE_URL}/accounts/signout` },
];

const Menu = ({ toggleMenuOpen, menuOpen, profile, authenticated }: MenuProps) => (
  <>
    <Button type="primary" icon={<MdMenu />} aria-label="mobile-menu" onClick={(e) => toggleMenuOpen(e)} />

    <Drawer
      width={350}
      closeIcon={null}
      title={
        <Flex justify="space-between">
          <Flex align="center" gap={10}>
            <img src={profile.avatar} style={{ borderRadius: "50%" }} alt="Profile Image" width={40} height={40} />
            <Flex vertical>
              <Typography.Text strong ellipsis={true}>
                {profile.name}
              </Typography.Text>
              <Typography.Text type="secondary" ellipsis={true}>
                {profile.handle}
              </Typography.Text>
            </Flex>
          </Flex>

          <Button type="text" onClick={(e) => toggleMenuOpen(e)} aria-label="change-theme" icon={<AiOutlineClose />} />
        </Flex>
      }
      onClose={(e) => toggleMenuOpen(e)}
      open={menuOpen}>
      <Flex vertical justify="space-between" style={{ height: "calc(100vh - 150px)", maxWidth: "100vw", overflow: "hidden" }}>
        <Steps
          direction="vertical"
          items={navLinks
            .filter((nav) => (authenticated ? !["signup", "signin"].includes(nav.id) : !["signout"].includes(nav.id)))
            .map(({ Icon, path, title }) => ({
              icon: <Icon />,
              status: "finish",
              title: (
                <Link href={path}>
                  <Typography.Text strong>{title}</Typography.Text>
                </Link>
              ),
            }))}
        />

        <Flex vertical align="center">
          <Divider />

          <div>
            <Image
              src="/images/layout/waverd.webp"
              alt="Wave Research"
              width={60}
              height={60}
              style={{
                position: "relative",
                zIndex: 5,
                border: "5px solid var(--primary-color)",
                borderRadius: "50%",
              }}
            />
          </div>

          <SocialContainer filterParams={["twitter", "instagram", "whatsapp", "linkedin", "facebook"]} fontSize="20px" />

          <Typography.Text type="secondary" style={{ fontSize: ".8em", textAlign: "center" }}>
            ● All rights reserved. All trademarks are the property of their respective owners ●
          </Typography.Text>

          <Typography.Text strong ellipsis>
            <span>©Wave Research 2018 ~ {new Date().getFullYear()}</span>
          </Typography.Text>
        </Flex>
      </Flex>
    </Drawer>
  </>
);

export default Menu;
