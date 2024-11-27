"use client";

import dynamic from "next/dynamic";
import { store } from "store/store";

const Provider = dynamic(() => import("react-redux").then((module) => ({ default: module.Provider })));
const ReduxProvider = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
