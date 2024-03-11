import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import NavCom from "./NavCom";
import LayoutCom from "./LayoutCom";
import Image from "next/image";

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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boramedia.co.kr" />
        <meta property="og:title" content="BORAMEDIA" />
        <meta
          property="og:image"
          content="https://res-console.cloudinary.com/dquicfvbk/media_explorer_thumbnails/76de6740b9612292840f92681c65b6d4/detailed"
        />
        <meta
          property="og:description"
          content="[TEAMBORA] is comprised of 5 team members, each with 12 years of experience."
        />
        <meta property="og:site_name" content="BORAMEDIA" />
        <meta property="og:locale" content="ko_KR" />
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
      </body>
    </html>
  );
}
