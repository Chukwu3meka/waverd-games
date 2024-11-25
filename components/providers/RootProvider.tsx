"use client";

import dynamic from "next/dynamic";
import WebVitals from "components/shared/web-vitals/WebVitals";

import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { setCssThemeVar } from "utils/helpers";
import { setProfileAction } from "store/actions/account";
import { HEADER_HEIGHT, INIT_PROFILE } from "utils/constants";
import { setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction, setActiveRouteAction } from "store/actions/layout";

const Spin = dynamic(() => import("antd").then((x) => x.Spin));
const AntProvider = dynamic(() => import("components/providers/AntProvider"), { ssr: false });
const HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer"));

const RootProvider = (props: any) => {
  const { user, setProfileAction, setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction, setActiveRouteAction } = props;

  const pathname = usePathname(),
    [initialized, setInitialized] = useState(false),
    [prevScrollPos, setPrevScrollPos] = useState(0),
    [displayHeader, setDisplayHeader] = useState(false),
    [theme, setTheme] = useState<Theme>(INIT_PROFILE.theme);

  useEffect(() => {
    const profile = user || INIT_PROFILE;

    handleResize();
    setInitialized(true);
    setDisplayHeader(true);
    setTheme(profile.theme);
    setCssThemeVar(profile.theme);

    if (setProfileAction) setProfileAction(profile);

    console.log(`%cInitializing Wave Research...${new Date().toLocaleTimeString()}`, "color: green; font-family:serif; font-size: 12px");
    document.documentElement.style.setProperty("--headerHeight", `${HEADER_HEIGHT}px`); // <= Set relative (not sticky) header height
    document.documentElement.style.setProperty("--visibleScreen", `${window.innerHeight}px`); // <=  --visibleScreen: to fix wrong VH in  iPhone

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (setActiveRouteAction) setActiveRouteAction(pathname);
    return () => {
      if (setActiveRouteAction) setActiveRouteAction(pathname);
    };
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (initialized && props.displayHeader !== displayHeader) {
      setDisplayHeader(!!props.displayHeader);
      if (setDisplayHeaderAction) setDisplayHeaderAction(!!props.displayHeader);
    }
  }, [props.displayHeader]);

  useEffect(() => {
    setTheme(props.theme!);
  }, [props.theme]);

  const handleResize = () => {
    if (setDeviceSizeAction && setBreakpointAction) {
      import("utils/constants").then((module) => {
        const { xl, lg, md, sm } = module.BREAKPOINTS;

        const { innerWidth: width, innerHeight: height } = window;

        setDeviceSizeAction({ width, height });
        setBreakpointAction(width > xl ? "xl" : width > lg ? "lg" : width > md ? "md" : width > sm ? "sm" : "xs");
      });
    }
  };

  const handleScroll = () => {
    const w = window,
      yScrollPosition = w.scrollY,
      pageTopReached = yScrollPosition < 81,
      scrollingToPageTop = yScrollPosition < prevScrollPos,
      areaHeight = Math.round(w.innerHeight + yScrollPosition) + 2,
      pageBottomReached = areaHeight >= document.body.offsetHeight,
      newDisplayHeader = !pageTopReached && (scrollingToPageTop || pageBottomReached);

    setPrevScrollPos(yScrollPosition);

    // ? Update displayHeader only when new state is diff from prev
    if (initialized && newDisplayHeader !== displayHeader) {
      setDisplayHeader(newDisplayHeader);
      if (setDisplayHeaderAction) setDisplayHeaderAction(newDisplayHeader);
    }
  };

  return initialized ? (
    <AntProvider theme={theme}>
      <HeaderContainer position="sticky" />
      <WebVitals />
      {props.children}
    </AntProvider>
  ) : (
    <Spin fullscreen spinning={true} />
  );
};

const mapDispatchToProps = { setProfileAction, setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction, setActiveRouteAction },
  mapStateToProps = (state: RootState) => ({ theme: state.account.profile.theme, displayHeader: state.layout.displayHeader });

export default connect(mapStateToProps, mapDispatchToProps)(RootProvider);
