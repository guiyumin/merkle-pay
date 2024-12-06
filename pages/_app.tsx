import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { fontSans, fontMono } from "root/config/fonts";
import "root/styles/globals.css";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (typeof window !== "undefined") {
    window.toast = new Notyf({
      position: {
        x: "center",
        y: "top",
      },
    });
  }

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
