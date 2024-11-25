// "use client";

import { COLORS } from "utils/constants";
import { theme as antdTheme } from "antd";

import dynamic from "next/dynamic";
// const ConfigProvider = dynamic(() => import("antd/es/config-provider")
const ConfigProvider = dynamic(
  () => import("antd").then((module) => module.ConfigProvider)
  // { ssr: false }
);
const AntdRegistry = dynamic(
  () => import("@ant-design/nextjs-registry").then((module) => module.AntdRegistry)

  // { ssr: false }
);

const AntProvider = ({ children, theme }: { theme: Theme; children: React.ReactNode }) => (
  <AntdRegistry>
    <ConfigProvider
      theme={{
        algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,

        token: {
          fontFamily: "",
          colorPrimary: COLORS.primaryColor,
          colorFillSecondary: COLORS.secondaryColor,
          colorLink: "", // <= disable antd link color
          colorLinkHover: "", // <= disable antd link color
          colorLinkActive: "", // <= disable antd link color
        },
      }}>
      {children}
    </ConfigProvider>
  </AntdRegistry>
);

export default AntProvider;
