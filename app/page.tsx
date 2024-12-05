import dynamic from "next/dynamic";

const //  ApiHub = dynamic(() => import("components/home/ApiHub")),
  //   Welcome = dynamic(() => import("components/home/Welcome"), { loading: () => <>'loadign'</> }),
  //   FooterContainer = dynamic(() => import("components/layouts/footer")),
  //   ManagerContainer = dynamic(() => import("components/home/ManagerContainer")),
  HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer"));

const Page = () => (
  <div style={{ height: "2000px" }}>
    <HeaderContainer position="relative" />
    {/* <Welcome /> */}
    {/* <ManagerContainer /> */}
    {/* <ApiHub /> */}
    {/* <RefreshHome /> */}
    {/* <FooterContainer /> */}
  </div>
);

// export { Page as default };
export default Page;
