import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Autoplay 스타일 추가
import styles from "./banner.module.css"; // 수정된 부분: CSS 모듈 임포트

// import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Autoplay 모듈 임포트

export default function Banner() {
  return (
    <>
      <Swiper
        className={styles.mySwiper} // CSS 모듈을 사용한 클래스 이름 적용
        modules={[Pagination, Autoplay]} // Autoplay 모듈을 modules 배열에 추가
        autoplay={{
          delay: 5000, // 자동 재생 간격 (밀리초)
          disableOnInteraction: true, // 사용자 상호작용 후에도 자동 재생 계속
        }}
        pagination={{ clickable: true }} // 페이지네이션 활성화 및 클릭 가능하게 설정
      >
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src={process.env.PUBLIC_URL + "/images/-4__1-01.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src={process.env.PUBLIC_URL + "/images/-4__1-02.png"} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles["swiper-slide"]}>
          <img src={process.env.PUBLIC_URL + "/images/-4__1-03.png"} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
