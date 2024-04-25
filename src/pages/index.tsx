import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
//import React from "react";
import React, {Suspense} from "react";
//import RemoteMf1Component from 'Mf1/PAGES';

const inter = Inter({ subsets: ["latin"] });

// @ts-ignore
const RemoteMf1Component = dynamic(() => import('Mf1/PAGES'));
//const RemoteMf1Component = React.lazy(() => import('Mf1/PAGES'));
// @ts-ignore
const RemoteMf2Component = dynamic(() => import('Mf2/MyComponent'), { ssr: false });

export default function Home() {
  return (
   <div>
   <h1>Shell Application</h1>
    {/* Next.js component rendered server side */}
    {/*<Suspense fallback={<div>Loading...</div>}>
        <RemoteMf1Component />
    </Suspense> */}
    <RemoteMf1Component />
    {/* React.js component rendered client side */}
    <RemoteMf2Component />
   </div>
  );
}
