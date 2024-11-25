interface VisibleState {
  nav: boolean;
  mobile: boolean;
}

interface HeaderProps {
  authenticated: boolean;
  // swapColorFn: Function;
  // color: ColorState;
  theme: Theme;
  profile: Profile;
  themeHandler: React.MouseEventHandler<HTMLButtonElement>;
  visible: VisibleState;
  className: "relativeHeader" | "stickyHeader" | "hiddenHeader";
}

interface HeaderContainerProps {
  profile: Profile;
  deviceWidth: number;
  displayHeader: boolean;
  authenticated: boolean;
  setThemeAction?: Function;
  position: "relative" | "sticky";
}

interface MenuContainerProps {
  profile: Profile;
  authenticated: boolean;
}

interface MenuProps {
  profile: Profile;
  menuOpen: boolean;
  authenticated: boolean;
  toggleMenuOpen: Function;
}
