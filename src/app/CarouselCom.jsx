"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCom = ({ children, item }) => {
  // 비디오 캐러셀
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/0.jpg`;

  const customRenderThumb = (children) => {
    children.map((item, idx) => {
      return <img key={idx} src={getVideoThumb(item)} />;
    });
  };
  return (
    <Carousel
      thumbWidth={150}
      renderItem={customRenderItem}
      renderThumbs={() => customRenderThumb(item.href)}
    >
      {children}
    </Carousel>
  );
};

export default CarouselCom;
