import "styles/globals.scss";
import dynamic from "next/dynamic";
import { merienda, robotoSlab } from "utils/fonts";

// const RootProvider = dynamic(() => import("components/providers/RootProvider"));
const ReduxProvider = dynamic(() => import("components/providers/ReduxProvider"));

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${merienda.className}  ${robotoSlab.className}`}>
    <body>
      <ReduxProvider>
        <p>sss</p>
        {/* <RootProvider>{children}</RootProvider> */}
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
