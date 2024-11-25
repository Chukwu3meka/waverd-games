// "use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import MenuContainer from "./MenuContainer";
import SocialContainer from "../../shared/social/SocialContainer";

import { COLORS } from "utils/constants";
import { Button, Flex, Typography } from "antd";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "API Hub", path: "/apihub" },
  { title: "Manager", path: "/games" },
];

const Header = ({ className, authenticated, theme, themeHandler, visible, profile }: HeaderProps) => (
  <header id="header" data-test-id={className} className={styles[className]}>
    <main>
      <Button
        type="text"
        onClick={themeHandler}
        aria-label="change-theme"
        icon={theme === "light" ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
      />

      <Link href="/">
        <>
          <Typography.Text ellipsis={true} style={{ fontWeight: 700, fontSize: "1.7em" }}>
            Wave
          </Typography.Text>
          <Typography.Text ellipsis={true} style={{ fontWeight: 700, fontSize: "1.7em", color: COLORS.primaryColor }}>
            Research
          </Typography.Text>
        </>
      </Link>

      {visible.nav ? (
        <Flex align="flex-end">
          {navLinks.map(({ title, path }) => (
            <Typography.Text key={title} style={{ fontWeight: 700 }}>
              <Link href={path} key={title}>
                {title}
              </Link>
            </Typography.Text>
          ))}
        </Flex>
      ) : (
        <></>
      )}

      {visible.mobile ? (
        <MenuContainer profile={profile} authenticated={authenticated} />
      ) : (
        <Flex align="center">
          {/* <SocialContainer fontSize="22px" filterParams={["twitter", "instagram", "whatsapp"]} /> */}

          <div>
            {/* {!authenticated && (
              <Link href="/accounts/signin">
                <Button
                  // type="primary"
                  // iconPosition="end"
                  icon={<BiLogIn />}
                  // size="large"
                  //
                  variant="outlined"
                  //
                >
                  Sign In
                </Button>
              </Link>
            )} */}

            {authenticated && (
              <a href={`${process.env.BASE_URL}/accounts/signout`} rel="noopener noreferrer">
                <Button variant="outlined" icon={<BiLogOut />}>
                  Sign out
                </Button>
              </a>
            )}
          </div>
        </Flex>
      )}
    </main>
  </header>
);

export default Header;
