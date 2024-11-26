"use client";

import dynamic from "next/dynamic";

const ApiHub = dynamic(() => import("components/home/ApiHub"), { ssr: false }),
  Welcome = dynamic(() => import("components/home/Welcome"), { ssr: false }),
  FooterContainer = dynamic(() => import("components/layouts/footer"), { ssr: false }),
  ManagerContainer = dynamic(() => import("components/home/ManagerContainer"), { ssr: false }),
  HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer"), { ssr: false });

const Page = () => (
  <>
    <HeaderContainer position="relative" />
    <Welcome />
    <ManagerContainer />
    <ApiHub />
    {/* <RefreshHome /> */}
    <FooterContainer />
  </>
);

export { Page as default };
