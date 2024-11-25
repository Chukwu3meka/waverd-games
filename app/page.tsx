"use client";
// import dynamic from "next/dynamic";
// const HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer"));

// import dynamic from "next/dynamic";

// const ApiHub = dynamic(() => import("components/home/ApiHub"), { ssr: false }),
//   Welcome = dynamic(() => import("components/home/Welcome"), { ssr: false }),
//   ManagerContainer = dynamic(() => import("components/home/ManagerContainer"), { ssr: false }),
//   HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer"), { ssr: false });

const Page = () => (
  <>
    {/* <HeaderContainer position="relative" />
    <Welcome />
    <ManagerContainer />
    <ApiHub />
    <RefreshHome />
    <FooterContainer />
    qq{" "}
  */}
    <p style={{ height: "1000px" }}>a home page</p>
  </>
);

export { Page as default };
