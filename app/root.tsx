import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import config from "tailwind.config";
import styles from "./tailwind.css";
import Manifest from "../public/site.webmanifest";
import { V2_MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "manifest", href: Manifest },
];

export const meta: V2_MetaFunction = () => {
  return [
    { "theme-color": `${config.theme.extend.colors["tree-poppy"]["200"]}` },
    { title: "I'm Bamba" },
    { description: "I'm, super cute little puppy" },
    { "og:title": "I'm Bamba" },
    {
      "og:description": "Super cute little puppy",
    },
    { "og:image": "https://imbamba.co/bg.jpg" },
    { "og:url": "https://iambamba.co/" },
    { "twitter:url": "https://iambamba.co/" },
    { "twitter:title": "I'm Bamba" },
    {
      "twitter:description": "Super cute little puppy",
    },
    { "twitter:image": "https://imbamba.co/bg.jpg" },
    { "twitter:card": "summary_large_image" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative flex min-h-full flex-col items-center justify-center bg-main bg-[length:1000px] bg-center">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
