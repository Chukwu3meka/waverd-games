"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { COLORS } from "utils/constants";
import styles from "./styles.module.scss";

import { BiMoon, BiSun } from "react-icons/bi";
// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// "use client"

// import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Typography from "@/components/ui/typography";
import { Fragment } from "react";
// import Typography from "@/components/ui/typography";

const MenuContainer = dynamic(() => import("./MenuContainer")),
  BiLogIn = dynamic(() => import("react-icons/bi").then((x) => x.BiLogIn)),
  BiLogOut = dynamic(() => import("react-icons/bi").then((x) => x.BiLogOut)),
  MdDarkMode = dynamic(() => import("react-icons/md").then((x) => x.MdDarkMode)),
  SocialContainer = dynamic(() => import("components/shared/social/SocialContainer")),
  MdLightMode = dynamic(() => import("react-icons/md").then((x) => x.MdLightMode));

const navLinks = [
  { title: "Home", path: "/" },
  { title: "API Hub", path: "/apihub" },
  { title: "Manager", path: "/games" },
];

const Header = ({ className, authenticated, theme, themeHandler, visible, profile }: HeaderProps) => (
  <header id="header" data-test-id={className} className={styles[className]}>
    <main>
      <button onClick={themeHandler}>{theme === "light" ? <MdDarkMode fontSize={20} /> : <MdLightMode fontSize={20} />}</button>

      <Link href="/">
        <h1 className="text-3xl font-extrabold">
          <span>Wave</span>
          <span style={{ color: "var(--contrast-color)" }}>Research</span>
        </h1>
      </Link>

      {visible.nav ? (
        <div className="flex items-center">
          {navLinks.map(({ title, path }) => (
            <Link href={path} key={title}>
              {title}
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
      {visible.mobile ? (
        // <MenuContainer profile={profile} authenticated={authenticated} />
        <p>sss22</p>
      ) : (
        <div className="flex items-center">
          <SocialContainer fontSize="17px" filterParams={["twitter", "instagram", "whatsapp"]} />

          <div>
            {!authenticated && (
              <Link href="/accounts/signin">
                <Button>
                  <BiLogIn /> Sign In
                </Button>
              </Link>
            )}

            {authenticated && (
              <a href={`${process.env.BASE_URL}/accounts/signout`} rel="noopener noreferrer">
                <Button>
                  <BiLogOut /> Sign out
                </Button>
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  </header>
);

export default Header;
