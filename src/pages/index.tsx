import Head from "next/head";
import { Container } from "./home";
import { Product } from "components/Product";

export default function Home() {
  return (
    <>
        <Head>
            <title>Dashboard | MKS Sistemas</title>
        </Head>
        <Container>
            <Product />
        </Container>
    </>
  );
}
