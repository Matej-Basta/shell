import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import React from "react";
import { GetServerSideProps } from 'next';
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

// @ts-ignore
const Header = dynamic(() => import('structure/Header'));
// @ts-ignore
const Footer = dynamic(() => import('structure/Footer'));
// @ts-ignore
const Products = dynamic(() => import('products/Products'));
// @ts-ignore
const Payment = dynamic(() => import('payment/Payment'), { ssr: false });

export default function Home() {

  return (
   <>
    <Header />
    <main className={styles.main}>
        <Products />
        <Payment />
    </main>
    <Footer />
   </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
    },
  };
};
