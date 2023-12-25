import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <SessionProvider session={session}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ConfigProvider>
  );
}
