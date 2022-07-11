import type { AppProps } from "next/app";
import { SidebarDrawerProvider } from "context/SidebarDrawerContext";
import { Header } from "components/Header";
import { Aside } from "components/Aside";
import { Footer } from "components/Footer";
import { GlobalStyle } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <GlobalStyle />
      <Header />
      <Aside />
      <Component {...pageProps} />
      <Footer />
    </SidebarDrawerProvider>
  );
}

export default MyApp;
