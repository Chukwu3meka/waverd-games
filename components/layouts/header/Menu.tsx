import Link from "next/link";

const MdMenu = dynamic(() => import("react-icons/md").then((x) => x.MdMenu)),
  VscGame = dynamic(() => import("react-icons/vsc").then((x) => x.VscGame)),
  VscHome = dynamic(() => import("react-icons/vsc").then((x) => x.VscHome)),
  VscHubot = dynamic(() => import("react-icons/vsc").then((x) => x.VscHubot)),
  VscSignIn = dynamic(() => import("react-icons/vsc").then((x) => x.VscSignIn)),
  VscSignOut = dynamic(() => import("react-icons/vsc").then((x) => x.VscSignOut)),
  VscPersonAdd = dynamic(() => import("react-icons/vsc").then((x) => x.VscPersonAdd)),
  AiOutlineClose = dynamic(() => import("react-icons/ai").then((x) => x.AiOutlineClose));

import Image from "next/image";
import dynamic from "next/dynamic";

const SocialContainer = dynamic(() => import("components/shared/social/SocialContainer"));

const navLinks = [
  { id: "home", title: "Home", Icon: VscHome, path: "/" },
  { id: "apihub", title: "Football API Hub", Icon: VscHubot, path: "/apihub" },
  { id: "manager", title: "Football Manager", Icon: VscGame, path: "/games" },
  { id: "signup", title: "Create an Account", Icon: VscPersonAdd, path: "/accounts/signup" },
  { id: "signin", title: "Login to your Account", Icon: VscSignIn, path: "/accounts/signin" },
  { id: "signout", title: "Sign Out from Wave Research", Icon: VscSignOut, path: `${process.env.BASE_URL}/accounts/signout` },
];

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Menu = ({ toggleMenuOpen, menuOpen, profile, authenticated }: MenuProps) => (
  <>
    {/* <Button type="primary" icon={<MdMenu />} aria-label="mobile-menu" onClick={(e) => toggleMenuOpen(e)} />

    <Drawer
      width={350}
      closeIcon={null}
      title={
        <Flex justify="space-between">
          <Flex align="center" gap={10}>
            <img src={profile.avatar} style={{ borderRadius: "50%" }} alt="Profile Image" width={40} height={40} />
            <Flex vertical>
              <Typography strong ellipsis={true}>
                {profile.name}
              </Typography>
              <Typography type="secondary" ellipsis={true}>
                {profile.handle}
              </Typography>
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
                  <Typography strong>{title}</Typography>
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

          <Typography type="secondary" style={{ fontSize: ".8em", textAlign: "center" }}>
            ● All rights reserved. All trademarks are the property of their respective owners ●
          </Typography>

          <Typography strong ellipsis>
            <span>©Wave Research 2018 ~ {new Date().getFullYear()}</span>
          </Typography>
        </Flex>
      </Flex>
    </Drawer> */}
  </>
);

export default Menu;
