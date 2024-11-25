"use cleint";

import styles from "./styles.module.scss";
import SocialContainer from "../../shared/social/SocialContainer";

import Link from "next/link";
// import { Button, Flex, Typography } from "antd";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

//

import { Suspense, lazy } from "react";

const Button = lazy(() => import("antd/es/button"));

// const MenuContainer = lazy(() => import("./mobile-menu"));

const navLinks = [
  { title: "Home", path: "/" },
  { title: "API Hub", path: "/apihub" },
  { title: "Manager", path: "/games" },
];

// const Spin = lazy(() => import("antd/es/spin"));
// <Suspense fallback="1111ss">
//       <Spin fullscreen spinning={true} />
//     </Suspense>

const Header = ({ className, authenticated, theme, themeHandler, visible, profile }: HeaderProps) => (
  <header id="header" data-test-id={className} className={styles[className]}>
    <main>
      {/* <Button
        type="text"
        onClick={themeHandler}
        aria-label="change-theme"
        icon={theme === "light" ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
      /> */}

      {/* <Link href="/">
        <Typography.Text ellipsis={true} style={{ fontWeight: 700, fontSize: "1.7em", color: color.first }}>
          Wave Research
        </Typography.Text>
      </Link> */}

      {/* {visible.nav ? (
        <Flex align="flex-end">
          {navLinks.map(({ title, path }) => (
            <Typography.Text key={title} style={{ fontWeight: 700 }}>
              <Link to={path} key={title}>
                {title}
              </Link>
            </Typography.Text>
          ))}
        </Flex>
      ) : (
        <></>
      )} */}

      {/* {visible.mobile ? (
        <p>ss</p>
      ) : (
        // <Suspense>
        //   <MenuContainer profile={profile} authenticated={authenticated} />
        // </Suspense>
        <Flex align="center">
          <SocialContainer fontSize="22px" filterParams={["twitter", "instagram", "whatsapp"]} />

          <div>
            {!authenticated && (
              <Link href="/accounts/signin">
                <Button type="primary" iconPosition="end" icon={<BiLogIn />} size="large">
                  Sign In
                </Button>
              </Link>
            )}

            {authenticated && (
              <a href={`${process.env.BASE_URL}/accounts/signout`} rel="noopener noreferrer">
                <Button variant="outlined" icon={<BiLogOut />}>
                  Sign out
                </Button>
              </a>
            )}
          </div>
        </Flex>
      )} */}
    </main>
  </header>
);

export default Header;
