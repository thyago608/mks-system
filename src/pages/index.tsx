import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Container, MoreProduct } from "../styles/home";
import { Product } from "components/Product";
import axios from "services/api";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  priceNumber: number;
}

interface HomeProps {
  productsPagination: {
    next_page: number;
    results: Product[];
  };
}

export default function Home({ productsPagination }: HomeProps) {
  const [products, setProducts] = useState<Product[]>(productsPagination.results);
  const [currentPage, setCurrentPage] = useState(2);

  async function handleMoreProducts() {
    const response = await axios.get("/products", {
      params: { page: currentPage, rows: 5, sortBy: "id", orderBy: "ASC" },
    });

    const productsFormatted = response.data.products.map((product: Product) => {
      return {
        ...product,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(product.price)),
        priceNumber: product.price,
      };
    });

    setCurrentPage(currentPage + 1);
    setProducts([...products, ...productsFormatted]);
  }

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
      <MoreProduct>
        <button type="button" onClick={handleMoreProducts}>
          mais produtos
        </button>
      </MoreProduct>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("/products", {
    params: { page: 1, rows: 5, sortBy: "id", orderBy: "ASC" },
  });

  const productsFormatted = response.data.products.map((product: Product) => {
    return {
      ...product,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price)),
      priceNumber: product.price,
    };
  });

  const productsPagination = {
    next_page: 2,
    results: productsFormatted
  }

  return {
    props: {
      productsPagination
    },
    revalidate: 60 * 60 * 24, //1 hour
  };
};
