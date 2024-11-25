import { AppDispatch } from "../store";

export const setDeviceSizeAction = (data: DeviceSize) => {
  return (dispatch: AppDispatch) => dispatch({ type: "SET_DEVICE_SIZE", data });
};

export const setActiveRouteAction = (data: string) => {
  return (dispatch: AppDispatch) => dispatch({ type: "SET_ACTIVE_ROUTE", data });
};

export const setDisplayHeaderAction = (data: boolean) => {
  return (dispatch: AppDispatch) => dispatch({ type: "SET_DISPLAY_HEADER", data });
};

export const setBreakpointAction = (data: "xl" | "lg" | "md" | "sm" | "xs") => {
  return (dispatch: AppDispatch) => dispatch({ type: "SET_BREAKPOINT", data });
};
