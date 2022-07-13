import { GetServerSideProps } from "next";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { Container } from "../styles/home";
import { Product } from "components/Product";
import axios from "services/api";

interface Product {
  id: number;
  name: string;
  brand:string;
  description: string;
  photo: string;
  price: string;
  priceNumber:number;
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
        <ToastContainer 
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
      priceNumber: product.price
    };
  });

  return {
    props: {
      products: productsFormatted,
    },
  };
};
