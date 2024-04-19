import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const RemoteMf1Component = dynamic(() => import('Mf1/PAGES'));
const RemoteMf2Component = dynamic(() => import('Mf2/MyComponent'), { ssr: false });
// const RemoteMf2Component = React.lazy(() => import('Mf2/MyComponent'));

export default function Home() {
  return (
   <div>
   <h1>Shell Application</h1>
    {/* Next.js component rendered server side */}
    <RemoteMf1Component />  
    {/* React.js component rendered client side */}
    <RemoteMf2Component />
   </div>
  );
}
