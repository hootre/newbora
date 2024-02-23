export let navs = [
  {
    title: "home",
    acitve: true,
  },
  {
    title: "about",
    acitve: false,
  },
  {
    title: "demos",
    acitve: false,
  },
  {
    title: "contact",
    acitve: false,
  },
];

export let mainTitle = {
  subTitle: "by BORA",
  title_1: "2024",
  title_2: "SHOWREEL",
};
import aboutImg from "/public/images/dummy-img-600x800.jpg";
import { BsPeopleFill } from "react-icons/bs";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
const cld = new Cloudinary({ cloud: { cloudName: "dquicfvbk" } });

export let aboutText = {
  top_title: "MOVIE MAKERS",
  title: "TEAM BORA",
  subscription: (
    <pre className="pre">
      TEAMBORA is comprised of 5 team members, each with 12 years of experience.
      Over the years, we have created numerous works and consist of team members
      who work in various fields. We will bring your ideas to life. We always
      look forward to hearing from you.
    </pre>
  ),
  top_image: aboutImg,
  iconList: [
    <TfiYoutube key={1} />,
    <FaInstagram key={2} />,
    <MdWeb key={3} />,
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
      title: "TEMP_4",
      href: ["Uy5KyqZgXdo"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/image1/cjh8lz2vg8nni1bi5sna")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/image1/xiurtkcjdow69bxiy1s9")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/image1/nh7m1trjkxsjr3xp3pmu")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      new: true,
    },
    {
      id: 2,
      title: "I AM 배우 프로필 프로젝트",
      href: [
        "cHNJ8pGA8lo",
        "rws2PK3tIAk",
        "e5GM-R7XotU",
        "1CbFHZyD640",
        "9c943K0qkTc",
      ],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/image2/tu3lqvqziv6hly99ebet")}
        />
      ),

      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/image2/g0w7tnueqaqpplpiqduh")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/image2/v1fabgvilx3rss21wak0")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/image2/jfmhoprjuwcv6c8p4s5c")}
        />
      ),
      content_title_3: "Temp를 제작하면서 ",
      content_subscription_3:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      new: true,
    },
    {
      id: 3,
      title: "훈마니의 항공촬영 드론ver",
      href: ["GVgtyPkVLUY", "RERvflAzyoo"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/image3/qnzjern8eyjwrskiqj5o")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/image3/ybgiesf3g8owghhic5ii")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/image3/cxenayeoipzzscjna58d")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      new: true,
    },
    {
      id: 4,
      title: "한국관광공사 칸타비 서포터즈 in 가평",
      href: ["xU5uqPZ5bLc", "COcdAyY8Cbs", "vahpOw2ErC8", "pabr9kisHC0"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/kantabi/zsjgqswdf92qrfcqyvpw")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/kantabi/fbykpixy8pq6g3h0zm0y")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/kantabi/mwcdsufojtyp5ttoxrnj")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/kantabi/ulbhcak9aejchtt8njsg")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",
      new: true,
    },
    {
      id: 5,
      title: "한국관광공사 VISIT KOREA YEAR X 차은우",
      href: ["vr7ywDFE9QY", "XwAaOiGDvTo", "6pko78JC1hg", "FOe78vXJ854"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/차은우/weduplqybfcb4xmkm0gx")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/차은우/zdyprzzjmlwmgh9wi8wh")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/차은우/hg0q1qcgzxp350ayx8hs")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      new: true,
    },
    {
      id: 6,
      title: "한국관광공사 제주 팸투어 세로ver",
      href: [
        "WWpcBk7Ufig",
        "OocxbMcXqDY",
        "OuSGe4-uvkg",
        "JGkEjH-rEXE",
        "Oi9kIaVrOxo",
      ],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/제주 팸투어/ilhfmzpvyz4dxmsnh4gf")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/제주 팸투어/enasd16drfvzkgp1d0bi")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/제주 팸투어/tzkny3lkq95vomulpu6o")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/제주 팸투어/ay02ongxnhsgsdtqmjek")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",
      new: true,
    },
    {
      id: 7,
      title: "PUMA",
      href: ["t2FV93j1aDE"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/퓨마/i3abbeh8xamzpqxfflii")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/퓨마/xbskxfe6sqmts3hhuuzn")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/퓨마/bni2mwu4ducocbriyhiw")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      new: true,
    },
    {
      id: 8,
      title: "일본정부관광국 홍보영상",
      href: ["4KbzGQEH7wU", "16ghX5_8Cx0"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/일본정부관광국/mflyrpuhjigevhkqgcdm")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/일본정부관광국/wqvqrhcnlxtyxobllagn")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/일본정부관광국/cggru5wyrzi6pfbc0ukj")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/일본정부관광국/nphkblgjwqzpsyedn4z0")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",
      new: true,
    },
    {
      id: 9,
      title: "울프라운치",
      href: ["AetUzkiK4Lc"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/울프라운치/g2j0etoxrph8jpky9ynk")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/울프라운치/bfvjbuktx5jvsekq5pad")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/울프라운치/p22ct8wxdl6gcjsr98us")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",

      new: true,
    },
    {
      id: 10,
      title: "암웨이",
      href: ["P_meXPECOK8", "Bd1JEfLo8VU", "FGBNw7WnE0g", "1eWOjNnlErI"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/암웨이/kjz1jjooiufoiwtoghkd")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/암웨이/eneiuhetd7nti4kyzt4w")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/암웨이/ylaayqkxp4acbrvj9pye")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/암웨이/hkewm97a6v1js5hgmnym")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",

      new: true,
    },
    {
      id: 11,
      title: "아스트로 하라메",
      href: ["vIGA1ywlfks", "oTR3gx6MkQQ"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/하라메/xyxbjawothj67txsc5n8")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/하라메/nbxqtcecawbvrrxwtasr")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/하라메/ajflgkpvh27hkmv4oo5g")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/하라메/qwrzxwtx75hpawqiwozo")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",

      new: true,
    },
    {
      id: 12,
      title: "아스트로 컨셉",
      href: ["bsITqTBv1bg"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/아스트로컨셉/gyv58qfemvo33evyrk28")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/아스트로컨셉/lkl8ewefqcwau77plzux")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/아스트로컨셉/fvfhf0ppuujbdjj10x9o")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/아스트로컨셉/ovjyyl1xe4vfpzh7hv70")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",

      new: true,
    },
    {
      id: 13,
      title: "버스커버스커 김형태",
      href: ["X8m7bigVGow", "KrLodmi6tvc", "COK17JjDgXs", "NCE5AroaMSo"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/김형태/dcc8oguyoutvhupyozhz")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/김형태/pfvhqx2cc44a9k6jrbsd")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/김형태/os9m3gulq8ba0gumvxai")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage
          cldImg={cld.image("newbora/김형태/nnjr047aqrqs161lhmax")}
        />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",

      new: true,
    },
    {
      id: 14,
      title: "YOUTUBE 500CC",
      href: ["kdZYjJRWAn8", "frq2i-nN7kk", "_wgEeqb8wSQ"],
      image: (
        <AdvancedImage
          cldImg={cld.image("newbora/500cc/n2x7eraqivc6qwoblarj")}
        />
      ),
      content_img_1: (
        <AdvancedImage
          cldImg={cld.image("newbora/500cc/pjtb4zdmjkbzyx4aissx")}
        />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage
          cldImg={cld.image("newbora/500cc/wtmslbmtltvajrfoatze")}
        />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",

      new: true,
    },
    {
      id: 15,
      title: "24K SOO",
      href: ["qG9CndmDqsw"],
      image: (
        <AdvancedImage cldImg={cld.image("newbora/24K/p7a4wgcoxkh2dqyflx9h")} />
      ),
      content_img_1: (
        <AdvancedImage cldImg={cld.image("newbora/24K/uv9ifqxiamlcnkqdo4mb")} />
      ),
      content_title_1: "Temp를 제작하면서 ",
      content_subscription_1:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_2: (
        <AdvancedImage cldImg={cld.image("newbora/24K/wmwblvjcvof8h9pqh8kg")} />
      ),
      content_title_2: "Temp를 제작하면서 ",
      content_subscription_2:
        "조명을 화이트로 멋들어지게 쓰고 이러한 조명으로 배우를 더 뽀샤시하게 만들었으며 작은 카메라로 용케도 잘 찍었던 촬영입니다 ",
      content_img_3: (
        <AdvancedImage cldImg={cld.image("newbora/24K/wncbrq20t5e2nitufrpo")} />
      ),
      content_title_3: "칸타비 서포터즈 발대식",
      content_subscription_3: "촬영 : 전동찬, 권정혁",

      new: true,
    },
  ],
};
