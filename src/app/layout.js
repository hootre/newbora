import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import NavCom from "./NavCom";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import logo from "/public/images/logo.png";
const Jquery = dynamic(() => import("./Jquery"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "BORAMEDIA",
  description:
    "[TEAMBORA] is comprised of 5 team members, each with 12 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>BORAMEDIA</title>
        <meta
          name="description"
          content="[TEAMBORA] is comprised of 5 team members, each with 12 years of experience."
        />

        <meta property="og:url" content="https://boramedia.co.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BORAMEDIA" />
        <meta
          property="og:description"
          content="[TEAMBORA] is comprised of 5 team members, each with 12 years of experience."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/b8f3565b-9e1c-4f9b-80ac-31e8e31071e5.png?token=S811tOC6Dih9P4epWr1ZFVIFtnm8ITzhD72SDnDhHvI&height=630&width=1200&expires=33246136571"
        />

        <meta name="twitter:card" content="summary_large_image" /> 
        <meta property="twitter:domain" content="boramedia.co.kr" />
        <meta property="twitter:url" content="https://boramedia.co.kr/" />
        <meta name="twitter:title" content="BORAMEDIA" />
        <meta
          name="twitter:description"
          content="[TEAMBORA] is comprised of 5 team members, each with 12 years of experience."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/b8f3565b-9e1c-4f9b-80ac-31e8e31071e5.png?token=S811tOC6Dih9P4epWr1ZFVIFtnm8ITzhD72SDnDhHvI&height=630&width=1200&expires=33246136571"
        />

        <link
          href="https://db.onlinewebfonts.com/c/650e75c44483de69a226a69a55c25e82?family=Acumin+Pro+Bold"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://www.youtube.com/iframe_api" defer></script>
      </head>
      <body>
        <main className="mainContainer">
          <NavCom />
          <div className="vertical-lines-wrapper">
            <div className="vertical-lines"> 
              <div className="vertical-lines-wrapper">
                <div className="vertical-effect"></div>
                <div className="vertical-effect mobile_vertical"></div>
                <div className="vertical-effect"></div>
              </div>
            </div>
            <div className="vertical-effect"></div>
            <div className="vertical-effect mobile_vertical"></div>
            <div className="vertical-effect"></div>
          </div>
          <div className="preloader-bg"></div>
          <div id="preloader">
            <div id="preloader-status">
              <Image src={logo} alt="logo" className="loading_logo" />
            </div>
          </div>
          {children}
          <Jquery />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
