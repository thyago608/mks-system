import  { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SidebarDrawerProvider } from "context/SidebarDrawerContext";
import { Header } from "components/Header";
import { Aside } from "components/Aside";
import { Footer } from "components/Footer";
import store from "store";
import { GlobalStyle } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SidebarDrawerProvider>
        <GlobalStyle />
        <Header />
        <Aside />
        <Component {...pageProps} />
        <Footer />
      </SidebarDrawerProvider>
    </Provider>
  );
}

export default MyApp;
