import styled from "@emotion/styled";

const NavContainer = styled.nav`
  #navbar-collapse {
    max-height: 0px;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    &.active {
      height: auto;
      max-height: 220px;
    }
  }
  &.navbar-bg-switch {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    z-index: 999;
  }
  &.navbar-fixed-top {
    top: 0;
    border-width: 0 0 1px;
  }
  &.navbar-fixed-bottom,
  &.navbar-fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  &.navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .logo {
    padding-top: 19px;
    padding-left: 0;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }
  .navbar-brand {
    float: left;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }
  .navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
  }
  .navbar-toggle .icon-bar + .icon-bar {
    margin-top: 4px;
  }

  .navbar-collapse {
    padding-right: 15px;
    padding-left: 15px;
    overflow-x: visible;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid transparent;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .navbar-fixed-bottom .navbar-collapse,
  .navbar-fixed-top .navbar-collapse {
    max-height: 340px;
  }
  .navbar-collapse.in {
    overflow-y: auto;
  }
  .collapse {
    display: none;
  }
  .collapse.in {
    display: block;
  }
  .navbar-nav {
    margin: 7.5px -15px;
  }
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .nav > li {
    position: relative;
    display: block;
  }
  .navbar-nav li.active {
    color: #ccc !important;
    text-decoration: none;
  }
  .main-navigation .navbar-nav li a {
    position: relative;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    padding: 45px 15px 35px 15px;
    right: -15px;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    z-index: 1;
  }
  .navbar-nav > .active > a {
    color: #ccc !important;
    background: none;
    text-decoration: none;
  }
  .navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
  }
  .nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
  }
  .main-navigation-bg,
  .bg-color-1,
  .slick-auto {
    background: #111;
  }
  .main-navigation-bg {
    background: rgba(255, 255, 255, 1);
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  }

  /* --------------------------- media */
  @media only screen and (max-width: 1200px) {
    .logo {
      padding-left: 10px;
      margin-left: 0;
    }
    .main-navigation .navbar-nav li a {
      right: 8px;
    }
  }
  @media only screen and (max-width: 1080px) {
    .logo {
      padding-left: 0;
      margin-left: -15px;
    }
    .main-navigation .navbar-nav li a {
      right: -30px;
    }
  }
  @media only screen and (max-width: 995px) {
    .logo {
      margin-left: -33px;
    }
    .main-navigation .navbar-nav li a {
      right: -48px;
    }
  }
  @media only screen and (max-width: 880px) {
    .logo {
      padding-top: 15px;
      padding-left: 8px;
      margin-left: auto;
    }
    .main-navigation .navbar-nav li a {
      right: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-toggle {
      margin-top: -60px;
      margin-right: 4px;
    }
    .main-navigation .navbar-nav li a {
      color: #000;
      padding: 10px 15px;
      text-align: center;
    }
    .navbar-toggle .icon-bar {
      margin-right: -14px;
    }
    .navbar-collapse {
      background: #111;
    }
    .main-navigation .navbar-nav li a,
    .main-navigation .navbar-nav li a:hover {
      color: #5f5f5f;
    }
    .navbar-toggle .icon-bar {
      background: #fff;
      margin-right: -14px;
    }
  }

  @media (min-width: 768px) {
    .navbar-fixed-bottom,
    .navbar-fixed-top {
      border-radius: 0;
    }
    .navbar {
      border-radius: 4px;
    }
    .container {
      width: 750px;
    }
    .container-fluid > .navbar-collapse,
    .container-fluid > .navbar-header,
    .container > .navbar-collapse,
    .container > .navbar-header {
      margin-right: 0;
      margin-left: 0;
    }
    .navbar-header {
      float: left;
    }
    .navbar-fixed-bottom .navbar-collapse,
    .navbar-fixed-top .navbar-collapse,
    .navbar-static-top .navbar-collapse {
      padding-right: 0;
      padding-left: 0;
    }
    .navbar-collapse.collapse {
      display: block !important;
      height: auto !important;
      padding-bottom: 0;
      overflow: visible !important;
    }
    .navbar-collapse {
      width: auto;
      border-top: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    .navbar-right {
      float: right !important;
      margin-right: -15px;
    }
    .navbar-nav {
      float: left;
      margin: 0;
    }
    .navbar-nav > li {
      float: left;
    }
    .navbar-nav > li > a {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .navbar > .container .navbar-brand,
    .navbar > .container-fluid .navbar-brand {
      margin-left: -15px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;
const VerticalContainer = styled.div`
  .vertical-lines-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    left: 0;
    top: 0;
    margin: 0;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    pointer-events: none;
    z-index: 2;
  }
  .vertical-lines {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 1;
    -moz-opacity: 1;
    -webkit-opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  }
  .vertical-effect {
    position: relative;
    width: 25%;
    height: 100%;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid rgba(119, 119, 119, 0.2);
  }
  .vertical-effect:first-child::before {
    top: 0;
    -webkit-animation: raindrop 6s ease-out infinite;
    -moz-animation: raindrop 6s ease-out infinite;
    -ms-animation: raindrop 6s ease-out infinite;
    -o-animation: raindrop 6s ease-out infinite;
    animation: raindrop 6s ease-out infinite;
    background: -webkit-linear-gradient(
      top,
      rgba(225, 225, 225, 0),
      rgba(225, 225, 225, 1)
    );
    background: -ms-linear-gradient(
      top,
      rgba(225, 225, 225, 0),
      rgba(225, 225, 225, 1)
    );
    background: linear-gradient(
      top,
      rgba(225, 225, 225, 0),
      rgba(225, 225, 225, 1)
    );
  }
  .vertical-effect:first-child::before,
  .vertical-effect:last-child::before {
    content: "";
    position: absolute;
    right: -2px;
  }
  .vertical-effect::before {
    content: "";
    position: absolute;
    display: block;
    width: 3px;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    -ms-animation-direction: normal;
    -o-animation-direction: normal;
    animation-direction: normal;
  }
  .vertical-effect:last-child::before {
    bottom: 0;
    -webkit-animation: raindrop-reverse 6s ease-out infinite;
    -moz-animation: raindrop-reverse 6s ease-out infinite;
    -ms-animation: raindrop-reverse 6s ease-out infinite;
    -o-animation: raindrop-reverse 6s ease-out infinite;
    animation: raindrop-reverse 6s ease-out infinite;
    background: -webkit-linear-gradient(
      top,
      rgba(225, 225, 225, 1),
      rgba(225, 225, 225, 0)
    );
    background: -ms-linear-gradient(
      top,
      rgba(225, 225, 225, 1),
      rgba(225, 225, 225, 0)
    );
    background: linear-gradient(
      top,
      rgba(225, 225, 225, 1),
      rgba(225, 225, 225, 0)
    );
  }
  @keyframes raindrop {
    0% {
      top: -10%;
      opacity: 0;
      height: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 100%;
      height: 35%;
    }
  }

  @keyframes raindrop-reverse {
    0% {
      bottom: -10%;
      opacity: 0;
      height: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      height: 35%;
    }
  }
`;
const MainVideoContainer = styled.div`
  &.upper-page {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
  }
  .hero-fullscreen {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
  }
  .hero-fullscreen-FIX {
    width: 100%;
    height: 100%;
  }
  .hero-bg {
    position: relative;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .bg-img-SINGLE {
    background-image: url("https://t4.ftcdn.net/jpg/04/87/04/49/360_F_487044940_PkeLOH9k4H80QBBVTgQJAknEaxvM0dZS.jpg");
  }

  .center-container {
    position: absolute;
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100%;
    background: none;
  }

  .center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .center-block {
    display: table-cell;
    vertical-align: middle;
  }
  h2.home-page-title {
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #fff;
    margin: -2px 0 0 11px;
  }
  .inner-divider-half {
    height: 50px;
  }

  .inner-divider,
  .inner-divider-half,
  .inner-divider-ultra-half {
    position: relative;
    width: 100%;
    margin: 0 auto;
    background: none;
    z-index: -1;
  }
  h1.home-page-title {
    position: relative;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 115px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: #fff;
    margin: -14px auto -5px auto;
    width: 100%;
    line-height: 100%;
    z-index: 1;
  }
  .inner-divider-half {
    height: 50px;
  }

  .inner-divider,
  .inner-divider-half,
  .inner-divider-ultra-half {
    position: relative;
    width: 100%;
    margin: 0 auto;
    background: none;
    z-index: -1;
  }
  .more-wraper-center {
    position: relative;
    width: 120px !important;
    max-width: 120px;
    height: 120px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    a,
    a:hover,
    a:visited,
    a:active,
    a:focus {
      color: #5f5f5f;
      text-decoration: none;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      -ms-transition: all 0.5s linear;
      -o-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }
    .more-button-circle {
      display: block;
      width: 100%;
      height: 100%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      border-radius: 50%;
      background-clip: content-box;
      padding: 2.5px;
      cursor: pointer;
    }

    .more-button-bg-center {
      background: none;
      border: 2px dashed #e0e0e0;
    }
    .more-button-txt-center {
      position: absolute;
      top: 60px;
      left: 60px;
      width: 120px !important;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      font-family: "Oswald", sans-serif;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: normal;
      color: #e0e0e0;
      margin: 0 auto;
      cursor: pointer;
    }
  }
  .scroll-indicator {
    position: absolute;
    bottom: 90px;
    left: 50%;
    -webkit-transform: translate(-50%, 50%);
    -moz-transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
    z-index: 1005;
  }
  .scroll-indicator-wrapper {
    position: absolute;
    width: 1px !important;
    height: 100%;
    left: 0;
    left: -1px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    opacity: 1;
    -moz-opacity: 1;
    -webkit-opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    visibility: visible;
    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    -ms-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }
  .scroll-line {
    display: block;
    width: 1px;
    height: 50px;
    background: none;
  }
`;
const PageTopBtn = styled.a`
  .to-top-arrow {
    position: fixed;
    right: 30px;
    bottom: -10px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background: #db0018;
    opacity: 0;
    -moz-opacity: 0;
    -webkit-opacity: 0;
    filter: alpha(opacity=0);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-transform: translateY(40px);
    -moz-transform: translateY(40px);
    -ms-transform: translateY(40px);
    -o-transform: translateY(40px);
    transform: translateY(40px);
    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    -ms-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
    z-index: 105;
  }
  .to-top-arrow,
  .slick-prev:before,
  .slick-next:before {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }
  .to-top-arrow.show {
    bottom: 10px;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
    opacity: 1;
    -moz-opacity: 1;
    -webkit-opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  }
  .show {
    display: block !important;
  }
  .ion-ios-arrow-up:before {
    content: "\f3d8";
  }
`;
const MainContainer = styled.main`
  .preloader-bg,
  #preloader {
    background: #000;
  }
  .preloader-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 999999;
  }
  #preloader {
    position: fixed;
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 999999;
  }
  #preloader-status {
    display: table-cell;
    vertical-align: middle;
  }
  .loader {
    position: absolute;
    width: 45px;
    height: 45px;
    left: 50%;
    top: auto;
    margin-left: -22px;
    margin-top: 2px;
    -webkit-animation: rotate 1s infinite linear;
    -moz-animation: rotate 1s infinite linear;
    -ms-animation: rotate 1s infinite linear;
    -o-animation: rotate 1s infinite linear;
    animation: rotate 1s infinite linear;
    border: 3px solid rgba(255, 255, 255, 0.75);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }
  .preloader-position {
    position: absolute;
    margin: 0 auto;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }
  .loader span {
    position: absolute;
    width: 45px;
    height: 45px;
    top: -3px;
    left: -3px;
    border: 3px solid transparent;
    border-top: 3px solid rgba(0, 0, 0, 0.75);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export {
  MainContainer,
  NavContainer,
  VerticalContainer,
  MainVideoContainer,
  PageTopBtn,
};
