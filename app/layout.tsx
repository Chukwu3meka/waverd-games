// "use client";

// import "styles/globals.scss";
// import dynamic from "next/dynamic";
// import { store } from "store/store";
// import { merienda, robotoSlab } from "utils/fonts";

// const RootProvider = dynamic(() => import("components/providers/RootProvider"));
// const ReduxProvider = dynamic(() => import("react-redux").then((module) => ({ default: module.Provider })));

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  // <html lang="en" className={`${merienda.className}  ${robotoSlab.className}`}>
  <html lang="en">
    <body>
      <p>sss</p>
      {/* <ReduxProvider store={store}>
        <RootProvider>{children}</RootProvider>
      </ReduxProvider> */}
    </body>
  </html>
);

export default RootLayout;
