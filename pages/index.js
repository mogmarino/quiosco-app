import Head from "next/head";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export default function Home({ categorias }) {
  console.table(categorias);
  return <h1>Quiosco - App</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  return {
    props: { categorias },
  };
};
