import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const RemoteMf1Component = dynamic(() => import('Mf1/PAGES'));
const RemoteMf2Component = dynamic(() => import('Mf2/MyComponent'), { ssr: false });


export default function Home() {
  return (
   <div>
   <h1>Shell Application</h1>
    <RemoteMf1Component />
    <RemoteMf2Component />
   </div>
  );
}
