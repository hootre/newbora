export let navs = [
  {
    title: "Home",
    href: "#home",
    acitve: false,
  },
  {
    title: "Works",
    href: "#works",
    acitve: false,
  },
  {
    title: "About",
    href: "#aboutSection",
    acitve: false,
  },
];

export let mainTitle = {
  subTitle: (
    <h2>
      Our team specializes in providing services centered around content,
      storytelling, and narrative. <br />
      With a focus on cinematic visuals, we primarily work on music videos,
      <br />
      advertisements, dramas, and promotional videos.
    </h2>
  ),
  title_1: "We make your story a reality.",
  title_2: "With magical ideas, creativity",
};
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { BiSolidVideoRecording } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import CldImage from "./CldImage";
export let aboutText = {
  top_title: "MOVIE MAKERS",
  subscription: (
    <pre>
      {`[TEAMBORA] is comprised of 5 team members, each with 12 years of experience.
Over the years, we have created numerous works and consist of team members
 who work in various fields.

We will bring your ideas to life.
We always look forward to hearing from you.
`}
    </pre>
  ),
  title: "TEAM BORA",
  image: (
    <CldImage
      width="1600"
      height="900"
      alt="image"
      style={{ width: "100%", height: "auto" }}
      src="newbora/sftzzhf1wm1snqykpzzv"
    />
  ),
  iconList: [
    {
      href: "https://www.youtube.com/@bora8340",
      icon: <TfiYoutube />,
    },
    {
      href: "https://www.instagram.com/boramedia_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      icon: <FaInstagram />,
    },
    {
      href: "https://boramedia.co.kr/",
      icon: <MdWeb />,
    },
  ],
  aboutFooter: [
    {
      icon: <FaBuilding className="icon" />,
      count: "137",
      text: "Happy Costumer",
    },
    {
      icon: <BiMoviePlay className="icon" />,
      count: "385",
      text: "Content provided",
    },
    {
      icon: <FaPeopleGroup className="icon" />,
      count: "5+",
      text: "Profesional Team",
    },
    {
      icon: <BiSolidVideoRecording className="icon" />,
      count: "27",
      text: "Partner company",
    },
  ],
};

export let works = {
  title: "pages",
  title_point: "works",
  subscription: "By all means, choose your style",
  work_list: [
    {
      id: 38,
      title: "교촌에프엔비 바르고봉사단",
      videoType: "row",
      href: ["kRmFMuRrF5k"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/바르고봉사단/emobb9ewxosyw2ynu1jh
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/바르고봉사단/eyfcfhpym0ahw6tnj8km"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 교촌에프엔비 자립준비 지원사업
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/바르고봉사단/jptbif2zil4r98l49gjm
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/바르고봉사단/q9dqvqthsqipicmcqzbx
"
        />
      ),
      new: "2025",
    },
    {
      id: 37,
      title: "교촌에프엔비 자립준비 지원사업",
      videoType: "row",
      href: ["cwji-xu5A2c"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/자립준비/bw7iav4hbklspyqezaez"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/자립준비/agkpespos6n7awfwjnng
"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 교촌에프엔비 자립준비 지원사업
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/자립준비/vsznlcihyk6xplggeo85

"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/자립준비/r6b7juj6uqft5bgpjkvz"
        />
      ),
      new: "2025",
    },
    {
      id: 36,
      title: "교촌에프엔비 아동건강 지원사업",
      videoType: "row",
      href: ["3rj4aaOwV6g"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/아동건강/hsqti6xxduhd7hfbjfl9"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/아동건강/cvicd2qsd8z0zaeg7qlu
"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 교촌에프엔비 아동건강 지원사업
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/아동건강/ddjxtrztipvg72vekj2i

"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/교촌치킨/아동건강/k5vxj0o3morfuhqrdxno"
        />
      ),
      new: "2025",
    },
    {
      id: 35,
      title: "핸드아티코리아 인터뷰 시리즈",
      videoType: "row",
      href: ["2d83i9nLEOs", "ZnbuZyZ109A", "BYg_LXfFpLw", "7K3_ALN1dLA"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/핸드아티코리아 인터뷰/div9tabihspkbiedz0oo"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/핸드아티코리아 인터뷰/fqnbqaqfuzcua8tuswlz
"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 핸드아티코리아 인터뷰 시리즈
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/핸드아티코리아 인터뷰/l5tpox95uf3wguhobyjz

"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/핸드아티코리아 인터뷰/gfkvr6etguqroklhwnjc
"
        />
      ),
      new: "2025",
    },
    {
      id: 34,
      title: "국방전직교육원 홍보영상",
      videoType: "row",
      href: ["mdWmSqe9Q40"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/국방부/hmaf7yv8bxue3bv7qf8l
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/국방부/rbusfcxqkgwlloibgmw1"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 국방전직교육원 홍보영상
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/국방부/yubaj7bqepdfa3ecyw7x

"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/국방부/ndz2qaznohg2oyj7kkus
"
        />
      ),
      new: "2025",
    },
    {
      id: 34,
      title: "메쎄이상 코리아베이비 현장 스케치",
      videoType: "row",
      href: ["644qoZT6okU", "PkoLYM6Cc38", "-zmivZ8Dr88", "fg7joXRJECU"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/코베/zxqdvulw7l2g7mv6zuuk
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/코베/z5olprluhi5upbzgzwrk
"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 메쎄이상 코리아베이비 현장 스케치
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/코베/pvxmue48xjurbuq3jplo

"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/코베/qdn3t7kd2casvmoxgxwj

"
        />
      ),
      new: "2025",
    },
    {
      id: 33,
      title: "메쎄이상 일러스트코리아 현장 스케치",
      videoType: "row",
      href: ["TuWsrizwKT0", "uw3OkNh149g", "hzBSbuf57Ls"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/일러스트코리아/rggjkyym5brxj6m2moiq"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/일러스트코리아/m0gpfykdoyaloszk9vyv
"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 메쎄이상 일러스트코리아 현장 스케치
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/일러스트코리아/zszy6qujnlgks
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/일러스트코리아/tw3pfxijo1jmfamopqvb
"
        />
      ),
      new: "2025",
    },
    {
      id: 32,
      title: "메쎄이상 핸드아티코리아 현장 스케치",
      videoType: "row",
      href: ["0OR_eIZnFRg"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/핸드아티코리아/d7yglkhmeucseat7xiga
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/핸드아티코리아/r4qlkt3mqo2jqa"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 메쎄이상 핸드아티코리아 현장 스케치
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/핸드아티코리아/q13kxpacymq9iz
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/핸드아티코리아/r170tnwawnhbjm"
        />
      ),
      new: "2025",
    },
    {
      id: 31,
      title: "메쎄이상 고카프 현장 스케치",
      videoType: "row",
      href: ["MrUfzdr7WM8", "uoX4P5Dq7TY", "VubHUIRRscw", "iKd0mYiH5mE"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/고카프/dixircm8kk2zfv811itn"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/고카프/hxtbykwcdaelkvponr7"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 메쎄이상 고카프 현장 스케치
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/고카프/oqcm6l5ajrusppru3ka
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/메쎄이상 스케치/고카프/bihexhi28crwp3aztvfe"
        />
      ),
      new: "2025",
    },
    {
      id: 30,
      title: "한화시스템 신의기술1,2화",
      videoType: "row",
      href: ["c1wf0I6PTwI", "G8WAFRyzDVk"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/신의기술/wf9xh8qldxlfev7w3w0u"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/신의기술/o7eg1kbgtzlfhea0zbtp"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 한화시스템 신의기술1,2화
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/신의기술/k2u8sinc0zin8zwuy9iy
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/신의기술/drz05e07ktx9ylgmsubw"
        />
      ),
      new: "2025",
    },
    {
      id: 29,
      title: "아이니 서울 웨딩 박람회",
      videoType: "row",
      href: ["hkpPvGYTMM4"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/아이니/hrbmlwthstgyz3yn9hon"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/아이니/kdpjdg8mjkcstnbpslhc"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 아이니 서울 웨딩 박람회
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/아이니/ukgous8vviyszz80kmd9
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/아이니/jn2celp6txs3shbxsm4r"
        />
      ),
      new: "2025",
    },
    {
      id: 28,
      title: "유튜브 크리에이터 클럽",
      videoType: "row",
      href: ["zjTK4LQw2ZI"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/유튜브 크리에이터클럽/izywv0xmfilj6va5za5f

"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/유튜브 크리에이터클럽/xhrgq93udqled2aojyaz"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 유튜브 크리에이터클럽
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/유튜브 크리에이터클럽/oagfbweogu5rkhcjsad6
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/유튜브 크리에이터클럽/ur8tnytldbqe0k411oem"
        />
      ),
      new: "2025",
    },
    {
      id: 27,
      title: "쿠팡 광주FC 기공식",
      videoType: "row",
      href: ["19vzKH4wC98"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/쿠팡/광주/qzsjgmjdsvwyxfewg69j
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/광주/zrtdglp7lmnpdx139tvb"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 쿠팡 광주FC 준공식
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/광주/skuxm0fquo1guyiiiutl
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/광주/wkd4le8csdgscpow4cix
"
        />
      ),
      new: "2025",
    },
    {
      id: 26,
      title: "쿠팡 김천FC 기공식",
      videoType: "row",
      href: ["RZdvJL5GuUc"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/쿠팡/김천/f6z068u8lqmatcny8axg
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/김천/aqbbmntfvh2y31mpcjur"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 쿠팡 김천FC 기공식
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/김천/uzbeeic1xu13esjfrule
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/김천/f8jfsxep377vgo5xfuig
"
        />
      ),
      new: "2025",
    },
    {
      id: 25,
      title: "쿠팡 남대전FC 준공식",
      videoType: "row",
      href: ["Lk4wGSl7P0E"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/쿠팡/남대전/dsbcrwf49es8ms9carzi
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/남대전/owybzlcfblfza27shgd4"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 쿠팡 남대전FC준공식
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/남대전/fnvpuwgfmsrdaj5p0ik5
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/쿠팡/남대전/hufeanuqvgntrqibarqj
"
        />
      ),
      new: "2025",
    },
    {
      id: 24,
      title: "한지연 The가꿈 활동영상",
      videoType: "row",
      href: ["d61HGVIkQmg"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/한지연/활동영상/ijzkm4bgez8mqooknmbo
"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/활동영상/zo6y31535y0vkytlpahp"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 한지연 The가꿈 활동영상
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/활동영상/imljqwhkyyils2hoc4mp
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/활동영상/bceknaiuqcnhb5ugpxps
"
        />
      ),
      new: "2025",
    },
    {
      id: 23,
      title: "한지연 지역아동센터 20주년 컨퍼런스",
      videoType: "row",
      href: ["d61HGVIkQmg"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/한지연/베이스캠프/zpexec8xgowrjtfzoa1i"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/베이스캠프/oatc7k7uluaeyguerjln"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 한지연 지역아동센터 20주년 컨퍼런스
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/베이스캠프/xlvulwqlv7l64vkq07og
"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/베이스캠프/zxd845lk89tafk0qarmf
"
        />
      ),
      new: "2025",
    },
    {
      id: 22,
      title: "한지연 The가꿈 발대식",
      videoType: "row",
      href: ["675U6H4rCao"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/한지연/발대식/x5mkpai1aphmr9ucmwfe"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/발대식/linafpb8traeu8ggbqrw"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6 ,A7s3
[PROJECT] 한지연 The가꿈 발대식
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/발대식/fmzxsina52cjfzxhewo7"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/한지연/발대식/rqdycatjiypzgfdnzfmu"
        />
      ),
      new: "2025",
    },
    {
      id: 21,
      title: "훈민정음연합회 홍보영상",
      videoType: "row",
      href: ["hoLLNSTWaWQ"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/0225_new/훈민정음연합회/tu2bj8cruf4tsxul46c8"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/훈민정음연합회/cw5awksp3gsspoxbkeqk"
        />
      ),
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX6
[PROJECT] 훈밍정음 연합회
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/훈민정음연합회/km1w6nkjfkklo0s9967d"
        />
      ),
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/0225_new/훈민정음연합회/ak27gld9oi3zkmgkne8z"
        />
      ),
      new: "2025",
    },
    {
      id: 4,
      title: "Korea Tourism Organization: Kantabi Supporters",
      videoType: "col",
      href: ["xU5uqPZ5bLc", "COcdAyY8Cbs", "vahpOw2ErC8", "pabr9kisHC0"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/kantabi/zsjgqswdf92qrfcqyvpw"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/kantabi/fbykpixy8pq6g3h0zm0y"
        />
      ),
      content_title_1: "Kantabi Supporters",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s3, FX6, DJI Mavic3
[Location] Korea Nami Island
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/kantabi/mwcdsufojtyp5ttoxrnj"
        />
      ),
      content_title_2: "Kantabi Supporter Inauguration Ceremony: Nami Island",
      content_subscription_2:
        "Kantabi Supporter Inauguration Ceremony, led by the Korea Tourism Organization (KTO), took place at Nami Island. In addition to capturing the essence of the event, a vertical format video was produced for promotional purposes, aligning with the trends of 2023.To convey the youthful energy of university students and the refreshing beauty of Nami Island, the video exudes a bright and whimsical atmosphere.Kantabi Supporter Inauguration Ceremony captured precious moments amidst the nature of Nami Island, providing attendees with an enjoyable experience.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/kantabi/ulbhcak9aejchtt8njsg"
        />
      ),
      new: "2024",
    },
    {
      id: 5,
      title: "Korea Tourism Organization: Astro Cha Eun-woo",
      videoType: "col",
      href: ["FOe78vXJ854"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/차은우/weduplqybfcb4xmkm0gx"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/차은우/zdyprzzjmlwmgh9wi8wh"
        />
      ),
      content_title_1:
        "Korea Tourism Organization: Public Relations Ambassador Astro Cha Eun-woo",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s3, FX6, DJI Mavic3
[Location] Souel
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/차은우/hg0q1qcgzxp350ayx8hs"
        />
      ),
      content_title_2: "Cha Eunwoo, KTO Ambassador Photoshoot",
      content_subscription_2:
        "ASTRO's member, Cha Eunwoo, was chosen as the ambassador for the Korea Tourism Organization (KTO) and a photoshoot was conducted. Alongside the photoshoot, a short-form video was also filmed, capturing Cha Eunwoo's charming and captivating presence remarkably well.",
      new: "2024",
    },
    {
      id: 6,
      title:
        "Korea Tourism Organization: Kantabi Supporters in Jeju(ShortForm)",
      videoType: "col",

      href: [
        "WWpcBk7Ufig",
        "OocxbMcXqDY",
        "OuSGe4-uvkg",
        "JGkEjH-rEXE",
        "Oi9kIaVrOxo",
      ],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/제주 팸투어/ilhfmzpvyz4dxmsnh4gf"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/제주 팸투어/enasd16drfvzkgp1d0bi"
        />
      ),
      content_title_1: "Kantabi Supporters in Jeju(ShortForm)",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s3, FX6, DJI Mavic3
[Location] JEJU
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/제주 팸투어/tzkny3lkq95vomulpu6o"
        />
      ),
      content_title_2: "Kantabi Supporters Jeju Short-form Film",
      content_subscription_2:
        "This is the short film of the Kantabi Supporters organized by the Korea Tourism Organization (KTO) held in Jeju. The film was shot over a 2-night, 3-day schedule, exploring the beautiful attractions of Jeju with Kantabi supporters.The project was primarily conducted with a one-person run-and-gun shooting style, facing challenging shooting conditions on location.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/제주 팸투어/ay02ongxnhsgsdtqmjek"
        />
      ),
      new: "2024",
    },
    {
      id: 7,
      title: "Puma Korea Annual Closing Ceremony Video Production",
      videoType: "row",
      href: ["t2FV93j1aDE"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/퓨마/i3abbeh8xamzpqxfflii"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/퓨마/xbskxfe6sqmts3hhuuzn"
        />
      ),
      content_title_1: "FUMA KOREA",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s2
[Location] Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/퓨마/bni2mwu4ducocbriyhiw"
        />
      ),
      content_title_2:
        "Puma Korea's 3-Year Journey: Celebrating the Annual Closing Ceremonies",
      content_subscription_2:
        "Over the past three years, we've had the pleasure of creating the closing ceremony videos for Puma Korea, building a strong connection along the way. Puma Korea always approaches their closing ceremonies with a fantastic atmosphere and unique concepts, allowing for a liberating experience. Thanks to the spirited individuals in attendance, we were able to capture footage that reflected the essence of these special themes. However, it's regrettable that some footage may appear blurry or hazy due to the limitations of the a7s2 era.",
      new: "2024",
    },
    {
      id: 8,
      title: "Journeying Through Kansai and Hokkaido Together",
      videoType: "row",
      href: ["4KbzGQEH7wU", "16ghX5_8Cx0"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/일본정부관광국/mflyrpuhjigevhkqgcdm"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/일본정부관광국/wqvqrhcnlxtyxobllagn"
        />
      ),
      content_title_1: "Japan National Tourism Organization",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s3 / BMPCC URSA / GH5
[Location] Japan Kansai / Hokkaido
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/일본정부관광국/cggru5wyrzi6pfbc0ukj"
        />
      ),
      content_title_2: "Journeying Through Kansai and Hokkaido Together",
      content_subscription_2:
        "We've been fortunate to collaborate with the Japan National Tourism Organization on this exciting endeavor. In the Kansai region, we've captured footage of Osaka, Kyoto, Kobe, and Nara. From the harmonious blend of nature and tradition in Kyoto to the illuminations festival in Kobe, the coexistence of deer and parks in Nara, and the vibrant tourist city of Osaka, there was an abundance of captivating scenes to depict, resulting in stunning visuals.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/일본정부관광국/nphkblgjwqzpsyedn4z0"
        />
      ),
      new: "2024",
    },
    {
      id: 9,
      title: "WolfLaunch: Discovering the Beauty of Nature Through Camping",
      videoType: "row",
      href: ["AetUzkiK4Lc"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/울프라운치/g2j0etoxrph8jpky9ynk"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/울프라운치/bfvjbuktx5jvsekq5pad"
        />
      ),
      content_title_1: "WolfLaunch",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s3 
[Location] Korea Gapyung
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/울프라운치/p22ct8wxdl6gcjsr98us"
        />
      ),
      content_title_2: "Discovering the Beauty of Nature Through Camping",
      content_subscription_2:
        "At WolfLaunch, we're dedicated to exploring the wonders of nature through camping. Our team is committed to capturing the essence of outdoor living, where every scene tells a story of connection and serenity amidst the wilderness.From peaceful hikes along forest trails to cozy evenings spent by the campfire, our filming locations are carefully selected to showcase the diverse landscapes and experiences that camping offers. Whether you're seeking adventure or seeking solace, we invite you to join us as we journey through the great outdoors, one campsite at a time.",

      new: "2024",
    },
    {
      id: 10,
      title: "Amway Nutrilite",
      videoType: "row",
      href: ["P_meXPECOK8", "Bd1JEfLo8VU", "FGBNw7WnE0g", "1eWOjNnlErI"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/암웨이/kjz1jjooiufoiwtoghkd"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/암웨이/eneiuhetd7nti4kyzt4w"
        />
      ),
      content_title_1:
        "Amway Nutrilite: Branding Video for the Winter Olympics",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan / Kim hyungtae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7s3 / FX6
[Location] Korea Pyungchang
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/암웨이/ylaayqkxp4acbrvj9pye"
        />
      ),
      content_title_2:
        "Amway Nutrilite: Branding Video for the Winter Olympics",
      content_subscription_2:
        "Amway Nutrilite proudly presents a branding video that encapsulates the spirit of the Winter Olympics. As a global leader in health and wellness, we feel honored to support the world's top athletes, whose resilience and determination inspire us all.Through vibrant portrayals of athletes in action and glimpses into their rigorous training, we illustrate how Nutrilite's products positively impact their performance.Witnessing the energy and dedication of these athletes, alongside the unseen challenges they endure, reinforces our belief in the transformative power of Nutrilite's offerings.Join us in celebrating the moments of glory at the Winter Olympics and the remarkable journey of these athletes, as Amway Nutrilite stands by to support them every step of the way.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/암웨이/hkewm97a6v1js5hgmnym"
        />
      ),

      new: "2024",
    },
    {
      id: 11,
      title: "Astro Moonbin, Sanha",
      videoType: "row",
      href: ["vIGA1ywlfks", "oTR3gx6MkQQ"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/하라메/xyxbjawothj67txsc5n8"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/하라메/nbxqtcecawbvrrxwtasr"
        />
      ),
      content_title_1: "Astro Moonbin, Sanha : Medley Video",
      content_subscription_1: (
        <pre>
          {`[Director] Kim yoobin / Jeon dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX9
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/하라메/ajflgkpvh27hkmv4oo5g"
        />
      ),
      content_title_2: "Astro Moonbin, Sanha : Medley Video",
      content_subscription_2:
        "We've completed a special medley video featuring Astro's Moonbin and Sanha! This video was meticulously crafted to showcase their exceptional musical talent and create a beautiful ambiance, utilizing state-of-the-art technology and professional equipment. Filmed with the Sony FX9 camera, this video boasts high-quality visuals, enhanced further by professional advertising lighting. Shot in a stunning studio, the production exudes a professional atmosphere, elevating the viewing experience. This medley video promises to delight Astro fans and music enthusiasts alike. Each moment is crafted to be special and meaningful. Don't miss out on this captivating experience!",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/하라메/qwrzxwtx75hpawqiwozo"
        />
      ),

      new: "2024",
    },
    {
      id: 12,
      title: "Astro Moonbin, Sanha",
      videoType: "row",
      href: ["bsITqTBv1bg"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/아스트로컨셉/gyv58qfemvo33evyrk28"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/아스트로컨셉/lkl8ewefqcwau77plzux"
        />
      ),
      content_title_1: "Astro Moonbin, Sanha's New Album Concept Video",
      content_subscription_1: (
        <pre>
          {`[Director] Kim yoobin / Jeon dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY FX9
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/아스트로컨셉/fvfhf0ppuujbdjj10x9o"
        />
      ),
      content_title_2: "Astro Moonbin, Sanha's New Album Concept Video",
      content_subscription_2:
        "Introducing Astro's Moonbin and Sanha's latest album concept video! Shot with the Sony FX9 camera, this visual masterpiece was created in collaboration with a professional advertising lighting team and the expertise of our art department.This video offers a glimpse into the artistic journey of Moonbin and Sanha as they venture into new musical territory. With stunning visual effects and the creative input of our art team, viewers can immerse themselves in their innovative vision and artistic achievements.Astro Moonbin and Sanha's new album concept video promises to deliver a fresh and immersive experience for audiences. Dive into their artistic world by watching it now",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/아스트로컨셉/ovjyyl1xe4vfpzh7hv70"
        />
      ),

      new: false,
    },
    {
      id: 13,
      title: "CHUNGCHUN MUSIC",
      videoType: "row",
      href: ["X8m7bigVGow", "KrLodmi6tvc", "COK17JjDgXs", "NCE5AroaMSo"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/김형태/dcc8oguyoutvhupyozhz"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/김형태/pfvhqx2cc44a9k6jrbsd"
        />
      ),
      content_title_1: "CHUNGCHUN MUSIC : HyoungTae ",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan / HyoungTae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7S3
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/김형태/os9m3gulq8ba0gumvxai"
        />
      ),
      content_title_2: "CHUNGCHUN MUSIC : HyoungTae ",
      content_subscription_2:
        "Welcome to the vibrant world of youthful music! This music video is bursting with energy and passion, showcasing captivating moments and exciting journeys. Carefully planned cinematography and detailed direction illuminate the screen with vivid colors and dynamic visual effects. Through the stories of youthful enthusiasm and vigor, we share a diverse range of emotions and experiences. The direction of this video is helmed by our very own director, who was once a member of the Busker Busker band. His musical background adds a special touch to this production, making it an even more unique and vibrant music video.This video encapsulates our passion and commitment. Dive into the extraordinary world of youthful music today! Every moment shared will be a fantastic experience to remember.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/김형태/nnjr047aqrqs161lhmax"
        />
      ),

      new: false,
    },
    {
      id: 14,
      title: "YOUTUBE 500CC",
      videoType: "row",
      href: ["kdZYjJRWAn8", "frq2i-nN7kk", "_wgEeqb8wSQ"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/500cc/n2x7eraqivc6qwoblarj"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/500cc/pjtb4zdmjkbzyx4aissx"
        />
      ),
      content_title_1: "500CC : BORAMEDIA",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7S3 / FX6
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/500cc/wtmslbmtltvajrfoatze"
        />
      ),
      content_title_2:
        "Crafting Cocktails with 500CC: A Visual Journey into Mixology",
      content_subscription_2:
        "BORAMedia's 500CC channel is crafted with a passion for cocktail making and a wealth of expertise. Our videos are meticulously planned and executed, offering viewers the finest visual experiences through optimized camera angles and editing techniques. Each moment is creatively curated, providing our audience with an engaging viewing experience.Beyond simply sharing recipes, we aim to convey the essence and excitement of cocktail making through each video. With 500CC, you can explore the creative realm of cocktail crafting. Don't miss out on our latest videos by subscribing to our channel. We are grateful for your support.",

      new: false,
    },
    {
      id: 15,
      title: "24K",
      videoType: "row",
      href: ["qG9CndmDqsw"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/24K/p7a4wgcoxkh2dqyflx9h"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/24K/uv9ifqxiamlcnkqdo4mb"
        />
      ),
      content_title_1: "Sweet Lies - SOO (24K)",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan / Kim Hyoung Tae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7S3 / FX6
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/24K/wmwblvjcvof8h9pqh8kg"
        />
      ),
      content_title_2: "Sweet Lies - SOO (24K) Music Video: Visual Innovation",
      content_subscription_2:
        "The 'Soo' music video by 24K beautifully integrates projection mapping to deliver a visually stunning expression. While not employing projection mapping extensively, the video effortlessly incorporates its elements to create a new dimension of visual effects.This production harmoniously utilizes projection mapping ideas to craft distinctive visual effects and ambiance. As a result, the 'Soo' music video emerges as a captivating piece of art naturally embracing the utilization of projection mapping.Discover the behind-the-scenes story of this exceptional creation, where the efforts and creativity of the directors and production team culminate in a unique visual experience. Explore how 'Soo' music video seamlessly integrates projection mapping to offer a fresh visual narrative.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/24K/wncbrq20t5e2nitufrpo"
        />
      ),

      new: false,
    },
    {
      id: 16,
      title: "2023 BORA SHOWREEL",
      videoType: "row",
      href: ["nMK6b4CNFl8"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/borashowreel/uyqy6g9q82tsxenngcbx"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/borashowreel/imt9pjok5kchayox1r5l"
        />
      ),
      content_title_1: "2023 BORA SHOWREEL",
      content_subscription_1:
        "2023년을 정리하면서 제작한 보라미디어 쇼릴입니다.",

      new: false,
    },
    {
      id: 17,
      title: "The 기끔 타이포그래피",
      videoType: "row",
      href: ["32TBzWZRk_M", "7RpQ0HhuucU", "RVGwkRRz9rw"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/더가꿈/iutv1j8c0itazzqs1tkw"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/더가꿈/avooz7lft9dgyyftc4px"
        />
      ),
      content_title_1: "The 가꿈 홍보,모집영상 타이포그래피",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan / Kim Hyoung Tae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] Adobe After Effects
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/더가꿈/tkf1ovgod5zjutfkkrmf"
        />
      ),
      content_title_2: "The Gakkum filming episode story",
      content_subscription_2:
        "The Gakkum is one of the main projects of the Korea Association of Local Children's Centers, which provides a mentoring program for local children. In order to photograph these companies, we put a lot of thought into it with the person in charge and produced the best results.",

      new: false,
    },
    {
      id: 18,
      title: "The 기끔 홍보영상",
      videoType: "row",
      href: ["_M1JtG2B5YI", "oggsJu7Jg8M", "cctt5Vmmu64"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/더가꿈 홍보/dcdxvycw6bfvin9gg6rc"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/더가꿈 홍보/cmrmu16rcelvms0gyrca"
        />
      ),
      content_title_1: "The 가꿈 홍보,모집영상",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan / Kim Hyoung Tae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7S3 / FX6
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/더가꿈 홍보/gv9rvauh6k9xrq7xdwo2"
        />
      ),
      content_title_2: "The Gakkum filming episode story",
      content_subscription_2:
        "The Gakkum is one of the main projects of the Korea Association of Local Children's Centers, which provides a mentoring program for local children. In order to photograph these companies, we put a lot of thought into it with the person in charge and produced the best results.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/더가꿈 홍보/u2jrh757okaaixcqifho"
        />
      ),
      new: false,
    },
    {
      id: 19,
      title: "MESSEESSANG GOCAF",
      videoType: "row",
      href: ["nbAMWJFH6TU", "UDIaJMTwgRE"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/고카프/sxiyd1blgh1ho1l6woog"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/고카프/jovzd6snduabb0woh9ev"
        />
      ),
      content_title_1: "MESSEESSANG GOCAF sketch",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan / Kim Hyoung Tae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7S3 / FX6
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/고카프/v1cv809hcnnekvlmuza5"
        />
      ),
      content_title_2: "MESSEESSANG GOCAF filming episode story",
      content_subscription_2:
        "While filming the Messeisang GoCarp video, considering that it is a sketch video, I look for references in various fields and am always thinking about what concept to film with.",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/고카프/milmdpniaiwjya8mlgov"
        />
      ),
      new: false,
    },
    {
      id: 20,
      title: "MESSEESSANG K-PET",
      videoType: "row",
      href: ["geVXUjnp0cM"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/케이펫/alegi8vura0vzbqte5ds"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/케이펫/pmfxpjfgcy3bjstxozby"
        />
      ),
      content_title_1: "MESSEESSANG K-PET sketch",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon dongchan / Kim Hyoung Tae
[D.O.P] Kwon JeongHyeok / Jeon Dongjun
[Equipment] SONY A7S3 / FX6
[Location] Korea Seoul
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/케이펫/u3usrhceqayjjc0kkdpf"
        />
      ),
      content_title_2: "MESSEESSANG K-PET filming episode story",
      content_subscription_2:
        "While filming the Messeisang K-PET video, considering that it is a sketch video, I look for references in various fields and am always thinking about what concept to film with.",

      new: false,
    },
    {
      id: 1,
      title: "TEMP_4",
      videoType: "row",
      href: ["Uy5KyqZgXdo"],

      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/image1/cjh8lz2vg8nni1bi5sna"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image1/xiurtkcjdow69bxiy1s9"
        />
      ),
      content_title_1: "TEMP’s Promotion Movie",
      content_subscription_1: (
        <pre>
          {`[Director] Kim hyungtae
[D.O.P] Jeon DongChan
[Equipment] Sony A7s3 / GM Lens
[Location] verlin-platz
`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image1/nh7m1trjkxsjr3xp3pmu"
        />
      ),
      content_title_2: "Introducing TEMP's: Korea's Leather Workshop",
      content_subscription_2:
        "TEMP's, a Korean leather workshop, specializes in delicately capturing the finish and texture of leather through the use of soft filters in filming. To enhance the overall tone of the video, we incorporate white and wood-tone props, adding a touch of sophistication and elegance.",
      new: false,
    },
    {
      id: 2,
      title: "I AM 배우 프로필 프로젝트",
      videoType: "row",
      href: [
        "cHNJ8pGA8lo",
        "rws2PK3tIAk",
        "e5GM-R7XotU",
        "1CbFHZyD640",
        "9c943K0qkTc",
      ],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/image2/tu3lqvqziv6hly99ebet"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image2/g0w7tnueqaqpplpiqduh"
        />
      ),
      content_title_1: "I AM Personal research Movie",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[D.O.P] Kwon JeongHyeok / Kim JeongMo
[Actor] JooHeawon
[Equipment] Blackmagic BMPCC 6K / SamyangOptics VDSLR
[Location] 태안 신두리해안사구

`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image2/v1fabgvilx3rss21wak0"
        />
      ),
      content_title_2: "Project IAM: Introducing Actors and Enhancing Skills",
      content_subscription_2:
        "Project IAM focuses on introducing actors and strengthening their skills. Using the Blackmagic BMPCC6K, we conducted filming at Sinjudi Coastal Cliffs, one of Korea's largest cliffs, known for its desert-like scenery. In this barren landscape, actors explored their inner selves, depicted beautifully as they embarked on journeys of self-discovery and character exploration. Project IAM provides an opportunity to appreciate both the natural beauty and the acting prowess of the performers, discovering and supporting their potential. Our goal is to convey inspiration and emotion to the audience through this collaborative endeavor",
      content_img_3: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image2/jfmhoprjuwcv6c8p4s5c"
        />
      ),
      new: false,
    },
    {
      id: 3,
      title: "CINEMATIC DRONE",
      videoType: "row",
      href: ["GVgtyPkVLUY", "RERvflAzyoo"],
      image: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "100%", height: "auto" }}
          src="newbora/image3/qnzjern8eyjwrskiqj5o"
        />
      ),

      content_img_1: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image3/ybgiesf3g8owghhic5ii"
        />
      ),
      content_title_1: "CINEMATIC DRONE",
      content_subscription_1: (
        <pre>
          {`[Director] Jeon Dongchan
[Operator] Kim Hunmin
[Equipment] DJI Inspire 3 / DJI Mavic 3 / ARRI Alexa
Drama, CF, Movies, Entertainment, Promotions, Etc.


`}
        </pre>
      ),
      content_img_2: (
        <CldImage
          width="1600"
          height="900"
          alt="image"
          style={{ width: "70%", height: "auto" }}
          src="newbora/image3/cxenayeoipzzscjna58d"
        />
      ),
      content_title_2: "Cinematic Drone Filming Services",
      content_subscription_2:
        "Experience stunning aerial cinematography across various genres including films, dramas, commercials, promotions, music videos, and documentaries. With over 8 years of experience and a diverse portfolio of award-winning projects, we have the expertise to turn any vision into art.We utilize state-of-the-art equipment from DJI, including the Inspire, Mavic, Matrice X8, and more, to ensure the highest quality footage tailored to your project's needs.Our goal is to bring your vision to life from the skies. Explore the endless possibilities with our cinematic drone filming services.",
      new: false,
    },
  ],
};
