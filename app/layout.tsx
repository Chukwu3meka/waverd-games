"use client";

import "styles/globals.scss";
import dynamic from "next/dynamic";
import { store } from "store/store";
import { Merienda, Roboto_Slab } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const RootProvider = dynamic(() => import("components/providers/RootProvider"));
const ReduxProvider = dynamic(() => import("react-redux").then((module) => ({ default: module.Provider })));

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={`${merienda.className}  ${robotoSlab.className}`}>
      <ReduxProvider store={store}>
        <RootProvider>{children}</RootProvider>
      </ReduxProvider>
      ;
    </body>
  </html>
);

export default RootLayout;
