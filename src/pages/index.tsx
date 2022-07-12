import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "services/api";
import { Container } from "./home";
import { Product } from "components/Product";

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Dashboard | MKS Sistemas</title>
      </Head>
      <Container>
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get("/products", {
    params: { page: 1, rows: 10, sortBy: "id", orderBy: "ASC" },
  });

  const productsFormatted = response.data.products.map((product: Product) => {
    return {
      ...product,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price)),
    };
  });

  return {
    props: {
      products: productsFormatted,
    },
  };
};
