export let navs = [
  {
    title: "home",
  },
  {
    title: "about",
  },
  {
    title: "demos",
  },
  {
    title: "contact",
  },
];

export let mainTitle = {
  subTitle: "by BORA",
  title_1: "2024",
  title_2: "SHOWREEL",
};
import aboutTextImg from "/public/images/TTD.png";
import aboutImg from "/public/images/dummy-img-600x800.jpg";
import { BsPeopleFill } from "react-icons/bs";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
const cld = new Cloudinary({ cloud: { cloudName: "dquicfvbk" } });

export let aboutText = {
  top_title: "HI ALEX",
  title: "Professional Photographer",
  subscription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
  top_image: aboutImg,
  image: aboutTextImg,
  iconList: [
    <BsPeopleFill key={1} />,
    <BsPeopleFill key={2} />,
    <BsPeopleFill key={3} />,
    <BsPeopleFill key={4} />,
  ],
  aboutFooter: [
    {
      icon: <BsPeopleFill className="icon" />,
      count: "1,693",
      text: "Happy Costumer",
    },
    {
      icon: <BsPeopleFill className="icon" />,
      count: "99",
      text: "Award Winning",
    },
    {
      icon: <BsPeopleFill className="icon" />,
      count: "35",
      text: "Profesional Team",
    },
    {
      icon: <BsPeopleFill className="icon" />,
      count: "2,987",
      text: "Photos Taken",
    },
  ],
};
export let works = {
  title: "pages",
  title_point: "works",
  subscription: "By all means, choose your style",
  work_list: [
    {
      id: 1,
      title: "Parallax Slider · Film Grain Effect",
      href: "76979871",
      image: (
        <AdvancedImage cldImg={cld.image("newbora/zbqnbwicto9avnrwrcq8")} />
      ),
      new: true,
    },
  ],
};
