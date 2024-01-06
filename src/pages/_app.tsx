import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import { ContextProvider } from "@/SocketContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  const show = router.asPath !== "/live";
  return (
    <ConfigProvider theme={theme}>
      <SessionProvider session={session}>
        <ContextProvider>
          {show && <Nav />}
          <div className="min-h-[calc(100vh-67px)]">
            <Component {...pageProps} />
          </div>
          {show && <Footer />}
        </ContextProvider>
      </SessionProvider>
    </ConfigProvider>
  );
}
