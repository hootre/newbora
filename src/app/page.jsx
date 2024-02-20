"use client";

import dynamic from "next/dynamic";

const Compo = dynamic(() => import("./Compo"), { ssr: false });
const Home = () => {
  return <Compo />;
};
export default Home;
