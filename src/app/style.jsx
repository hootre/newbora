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
  &.navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
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

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .logo {
    padding-top: 17px;
    padding-left: 0;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }
  &.main-navigation-bg .logo {
    padding-top: 6px;
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
      width: 30px;
      height: 30px;
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
  .main-navigation .navbar-nav li a:hover {
    color: var(--accent-color);
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
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
    color: var(--accent-color) !important;
    background: none;
    text-decoration: none;
  }
  .active-scroll-spy {
    color: var(--accent-color) !important;
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
  &.main-navigation-bg {
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  }
  &.main-navigation-bg,
  .bg-color-1,
  .slick-auto {
    background: #111;
    min-height: 20px;
  }
  &.main-navigation-bg .main-navigation .navbar-nav li a,
  &.main-navigation-bg .main-navigation .navbar-nav li a:hover,
  .intro-years h2,
  .intro-years h4 {
    color: #5f5f5f;
  }
  &.main-navigation-bg .main-navigation .navbar-nav li a {
    padding: 19px 15px 0 15px;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
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
      margin-top: -45px;
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
  &.vertical-lines-wrapper {
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
  .vertical-effect:first-of-type::before {
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
  .vertical-effect:first-of-type::before,
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
    position: relative;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    overflow: hidden;
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
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 880px) {
    h1.home-page-title {
      font-size: 85px;
      margin: -10px auto -4px auto;
    }
  }
  @media only screen and (max-width: 768px) {
    h2.home-page-title {
      display: block;
      visibility: visible;
    }
  }
  @media only screen and (max-width: 640px) {
    h1.home-page-title {
      font-size: 55px;
      margin: -9px auto -2px auto;
    }
    .more-button-txt-center {
      width: 80px !important;
      height: 80px;
      top: 50%;
      left: 50%;
    }
    .more-wraper-center {
      width: 80px !important;
      height: 80px;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      .icon {
        -webkit-animation: roopTop 1s ease-out infinite;
        -moz-animation: roopTop 1s ease-out infinite;
        -ms-animation: roopTop 1s ease-out infinite;
        -o-animation: roopTop 1s ease-out infinite;
        animation: roopTop 1s ease-out infinite;
      }
    }
  }
  .icon {
    font-size: 20px;
  }
  @keyframes roopTop {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
`;
const MainContainer = styled.main`
  position: relative;
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
const WorksInfoContainer = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  .sections {
    position: relative;
    z-index: 5;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .intro-years h3 {
    position: relative;
    font-family: "Montserrat", Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 155px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #fff;
    width: 100%;
    line-height: 100%;
    margin: -20px auto;
    z-index: 0;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
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
const WorksContainer = styled.section`
  .btn-group-vertical > .btn-group:after,
  .btn-group-vertical > .btn-group:before,
  .btn-toolbar:after,
  .btn-toolbar:before,
  .clearfix:after,
  .clearfix:before,
  .container-fluid:after,
  .container-fluid:before,
  .container:after,
  .container:before,
  .dl-horizontal dd:after,
  .dl-horizontal dd:before,
  .form-horizontal .form-group:after,
  .form-horizontal .form-group:before,
  .modal-footer:after,
  .modal-footer:before,
  .modal-header:after,
  .modal-header:before,
  .nav:after,
  .nav:before,
  .navbar-collapse:after,
  .navbar-collapse:before,
  .navbar-header:after,
  .navbar-header:before,
  .navbar:after,
  .navbar:before,
  .pager:after,
  .pager:before,
  .panel-body:after,
  .panel-body:before,
  .row:after,
  .row:before {
    display: table;
    content: " ";
  }
  :after,
  :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  .sections {
    position: relative;
    z-index: 5;
  }

  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  /* vimeo video list css */
  .vimeo-shadowbox {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 0.5s ease;
    overflow-y: scroll;

    &--hidden {
      transition: all 0.5s ease;
      opacity: 0;
      z-index: -1000;
      visibility: hidden;
      pointer-events: none;
    }
    &__video-wrapper {
      position: relative;
      width: 100%;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 1920px;
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
    .contentBox_1 {
      display: flex;
      margin-top: 40px;
      gap: 3rem;
      .contents {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        width: 100%;
        h2 {
          font-size: 20px;
          font-weight: bold;
        }
        div {
          color: #aaa;
        }
      }
      img {
        width: 70%;
        object-fit: contain;
      }
    }
    .contentBox_2 {
      display: flex;
      padding-top: 40px;
      flex-direction: row-reverse;
      gap: 3rem;
      .contents {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        width: 100%;
        height: 100%;
        h2 {
          font-size: 20px;
          font-weight: bold;
        }
        div {
          color: #aaa;
        }
      }
      img {
        width: 70%;
        object-fit: contain;
      }
    }
    .bg_line {
      width: 2px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__video {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;

      iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 70%;
        padding: 10px;
      }
    }

    &__close-button {
      width: 30px;
      height: 30px;
      border: 1px solid #fff;
      border-radius: 50%;
      position: absolute;
      right: -5px;
      top: -5px;
      overflow: hidden;
      text-indent: -9999em;
      background: #000;
      > svg {
        color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-xs-1,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (max-width: 768px) {
    .vimeo-shadowbox__video-wrapper {
      gap: 5rem;
    }
    .contentBox_1,
    .contentBox_2 {
      flex-direction: column !important;
      align-items: center;
      justify-content: center;

      .contents {
        text-align: center !important;
      }
    }
    iframe {
      width: 100% !important;
      height: 100% !important;
    }
  }
  @media (min-width: 768px) {
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9 {
      float: left;
    }
    .col-sm-12 {
      width: 100%;
    }
  }
  @media (min-width: 992px) {
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9 {
      float: left;
    }
    .col-md-12 {
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9 {
      float: left;
    }
    .col-lg-12 {
      width: 100%;
    }
    .col-lg-4 {
      width: 33.33333333%;
    }
  }
`;
const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 5em 2em;
  overflow: hidden;
  .r-container {
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
  }
  .image-overlay-3 {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: transparent;
    background-image: radial-gradient(
      at bottom left,
      var(--accent-color) 0%,
      transparent 70%
    );
    opacity: 0.15;
    mix-blend-mode: lighten;
    transition:
      background 0.3s,
      border-radius 0.3s,
      opacity 0.3s;
  }
  .z_box {
    z-index: 2;
  }
  .social-item:hover {
    background-color: var(--accent-color);
  }
  .accent-color {
    color: var(--accent-color);
  }

  .fs-5 {
    font-size: 1.25rem !important;
  }
  .me-3 {
    margin-right: 1rem !important;
  }
  .divider::after {
    display: block;
    content: "";
    border-bottom: 0;
    flex-grow: 1;
    border-top: 3px solid var(--accent-color);
    max-width: 80px;
    min-width: 80px;
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }

  .col {
    flex: 1 0 0%;
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
  .gap-3 {
    gap: 1rem !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .flex-column {
    flex-direction: column !important;
  }

  .h-100 {
    height: 100% !important;
  }
  .d-flex {
    display: flex !important;
  }
  .divider {
    display: flex;
    align-items: center;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .accent-color {
    color: var(--accent-color);
  }
  .fs-5 {
    font-size: 1.25rem !important;
  }
  .me-3 {
    margin-right: 1rem !important;
  }
  .divider::after {
    display: block;
    content: "";
    border-bottom: 0;
    flex-grow: 1;
    border-top: 3px solid var(--accent-color);
    max-width: 80px;
    min-width: 80px;
  }
  .font-1 {
    font-family: var(--font-1);
  }

  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }
  .lh-1 {
    line-height: 1 !important;
  }
  .fw-bold {
    font-weight: 700 !important;
  }
  h4 {
    font-size: 52px;
    font-weight: bold;
  }
  .h4,
  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .img-fluid {
    max-width: 300px;
    object-fit: cover;
    height: auto;
  }
  .gap-3 {
    gap: 1rem !important;
  }

  .flex-row {
    flex-direction: row !important;
  }
  .d-flex {
    display: flex !important;
  }
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled),
  button:not(:disabled) {
    cursor: pointer;
  }

  button,
  a[type="button"] {
    padding-inline: 2rem;
    padding-block: 0.7rem;
    border: 2px solid var(--accent-color);
    text-decoration: none;
    transition: all 0.5s;
    color: white;
  }
  .social-item {
    border-radius: 50%;
    aspect-ratio: 1/1;
    font-size: 20px;
    width: 2em;
  }
  .p-2 {
    padding: 0.5rem !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .about-img {
    padding: 40px 0;
  }
  .d-flex {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }
  .col {
    flex: 1 0 0%;
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .w-100 {
    width: 100% !important;
  }
  .position-relative {
    position: relative !important;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .text-center {
    text-align: center !important;
  }
  .gap-3 {
    gap: 1rem !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .flex-column {
    flex-direction: column !important;
  }
  .d-flex {
    display: flex !important;
  }
  .icon {
    font-size: 50px;
    color: var(--accent-color);
  }
  .font-2 {
    font-family: var(--font-2);
  }
  .fw-bold {
    font-weight: 700 !important;
  }
  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }
  .fa-user-group::before {
    content: "\f500";
  }
  .z_box2 {
    z-index: 2;
  }
  .fz50 {
    font-size: 40px;
  }
  @media (min-width: 62px) {
    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }
  }
  @media (min-width: 1200px) {
    .h4,
    h4 {
      font-size: 1.5rem;
    }
  }
`;
const ContactContainer = styled.section`
  padding: 10em 2em;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .r-container {
    padding: 4em 0em;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    .footer {
      text-align: center;
    }
    .flex-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 15px;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .col {
    flex: 1 0 0%;
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
  .divider {
    display: flex;
    align-items: center;
  }
  .accent-color {
    color: var(--accent-color);
  }
  .fs-5 {
    font-size: 1.25rem !important;
  }
  .me-3 {
    margin-right: 1rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  .divider::after {
    display: block;
    content: "";
    border-bottom: 0;
    flex-grow: 1;
    border-top: 3px solid var(--accent-color);
    max-width: 80px;
    min-width: 80px;
  }
  .font-1 {
    font-family: var(--font-1);
  }
  .toast {
    --bs-toast-zindex: 1090;
    --bs-toast-padding-x: 0.75rem;
    --bs-toast-padding-y: 0.5rem;
    --bs-toast-spacing: 1.5rem;
    --bs-toast-max-width: 350px;
    --bs-toast-font-size: 0.875rem;
    --bs-toast-color: ;
    --bs-toast-bg: rgba(255, 255, 255, 0.85);
    --bs-toast-border-width: 1px;
    --bs-toast-border-color: var(--bs-border-color-translucent);
    --bs-toast-border-radius: 0.375rem;
    --bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-toast-header-color: #6c757d;
    --bs-toast-header-bg: rgba(255, 255, 255, 0.85);
    --bs-toast-header-border-color: rgba(0, 0, 0, 0.05);
    width: var(--bs-toast-max-width);
    max-width: 100%;
    font-size: var(--bs-toast-font-size);
    color: var(--bs-toast-color);
    pointer-events: auto;
    background-color: var(--bs-toast-bg);
    background-clip: padding-box;
    border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
    box-shadow: var(--bs-toast-box-shadow);
    border-radius: var(--bs-toast-border-radius);
  }
  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }
  .lh-1 {
    line-height: 1 !important;
  }
  .fw-bold {
    font-weight: 700 !important;
  }
  .mb-5 {
    margin-bottom: 3rem !important;
  }
  h4 {
    font-size: 42px;
  }
  .text-gray {
    color: var(--gray-color) !important;
  }
  .mt-5 {
    margin-top: 3rem !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .flex-column {
    flex-direction: column !important;
  }
  .h-100 {
    height: 100% !important;
  }
  .d-flex {
    display: flex !important;
  }
  .toast:not(.show) {
    display: none;
  }
  .rounded-0 {
    border-radius: 0 !important;
  }
  .bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .border-success {
    --bs-border-opacity: 1;
    border-color: rgba(
      var(--bs-success-rgb),
      var(--bs-border-opacity)
    ) !important;
  }
  .toast-body {
    padding: var(--bs-toast-padding-x);
    word-wrap: break-word;
  }

  .border {
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  }
  .shadow-none {
    box-shadow: none !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }
  .d-flex {
    display: flex !important;
  }
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled),
  button:not(:disabled) {
    cursor: pointer;
  }
  .bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
  }

  .text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
  }
  .ps-1 {
    padding-left: 0.25rem !important;
  }
  .pe-0 {
    padding-right: 0 !important;
  }
  .me-2 {
    margin-right: 0.5rem !important;
  }
  .m-auto {
    margin: auto !important;
  }
  .border-0 {
    border: 0 !important;
  }
  button,
  a[type="button"] {
    padding-inline: 2rem;
    padding-block: 0.7rem;
    border: 2px solid white;
    text-decoration: none;
    transition: all 0.5s;
    color: white;
    &:hover {
      border: 2px solid var(--accent-color);
      color: var(--accent-color);
    }
  }
  button,
  select {
    text-transform: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .border-danger {
    --bs-border-opacity: 1;
    border-color: rgba(
      var(--bs-danger-rgb),
      var(--bs-border-opacity)
    ) !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .flex-column {
    flex-direction: column !important;
  }
  .w-100 {
    width: 100% !important;
  }

  .d-flex {
    display: flex !important;
  }
  .form-control.is-valid,
  .was-validated .form-control:valid {
    border-color: #198754;
    padding-right: calc(1.5em + 0.75rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .form input,
  .form textarea {
    background-color: transparent;
    color: var(--accent-color);
    border-width: 1px;
    border-style: solid;
    border-color: #343434;
    border-radius: 0;
    width: 100%;
  }
  .p-3 {
    padding: 1rem !important;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #dc3545;
  }
  .form input:focus,
  .form textarea:focus {
    background-color: transparent;
    color: var(--accent-color);
    border: solid 1px var(--accent-color);
    box-shadow: none;
  }
  .form-control.is-valid:focus,
  .was-validated .form-control:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }
  .icon {
    font-size: 40px;
    color: var(--accent-color);
    margin-right: 10px;
  }
  .btn {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: #212529;
    --bs-btn-bg: transparent;
    --bs-btn-border-width: 1px;
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-hover-border-color: transparent;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem
      rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  .form .submit_form {
    padding-inline: 2rem;
    padding-block: 0.7rem;
    border: 2px solid #fff;
    text-decoration: none;
    transition: all 0.5s;
    color: white;
    &:hover {
      color: var(--accent-color);
      border: 2px solid var(--accent-color);
    }
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .maps {
    width: 100%;
    height: 400px;
    filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
      hue-rotate(0deg);
  }
  .text-gray {
    max-width: 768px;
  }
  @media (max-width: 767px) {
    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 100%;
    }
  }
`;

export {
  MainContainer,
  NavContainer,
  VerticalContainer,
  MainVideoContainer,
  PageTopBtn,
  WorksInfoContainer,
  WorksContainer,
  AboutContainer,
  ContactContainer,
};
