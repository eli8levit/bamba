import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { useScroll, useTransform } from "framer-motion";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function App() {
  const { scrollY } = useScroll();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative flex h-full flex-col items-center justify-center bg-main bg-[length:1000px] bg-center">
        {/*<motion.img*/}
        {/*  style={{ rotate }}*/}
        {/*  // transition={{*/}
        {/*  //   repeat: Infinity,*/}
        {/*  //   repeatType: "loop",*/}
        {/*  //   duration: 60,*/}
        {/*  //   type: "linear",*/}
        {/*  // }}*/}
        {/*  src={Blob}*/}
        {/*  className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full object-contain"*/}
        {/*/>*/}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
