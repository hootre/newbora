import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import NavCom from "./NavCom";

const Jquery = dynamic(() => import("./Jquery"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "BORAMEDIA",
  description:
    "[TEAMBORA] is comprised of 5 team members, each with 12 years of experience.",
  openGraph: {
    title: "BORAMEDIA",
    description:
      "[TEAMBORA] is comprised of 5 team members, each with 12 years of experience.",
    url: "https://boramedia.co.kr",
    siteName: "BORAMEDIA",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "kr-ko",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.youtube.com/iframe_api" defer></script>
      </head>
      <body>
        {" "}
        <main className="mainContainer">
          <NavCom />
          <div className="vertical-lines-wrapper">
            <div className="vertical-lines">
              <div className="vertical-lines-wrapper">
                <div className="vertical-effect"></div>
                <div className="vertical-effect"></div>
                <div className="vertical-effect"></div>
              </div>
            </div>
            <div className="vertical-effect"></div>
            <div className="vertical-effect"></div>
            <div className="vertical-effect"></div>
          </div>

          <div className="preloader-bg"></div>
          <div id="preloader">
            <div id="preloader-status">
              <div className="preloader-position loader">
                <span></span>
              </div>
            </div>
          </div>
          {children}
          <Jquery />
        </main>
      </body>
    </html>
  );
}
