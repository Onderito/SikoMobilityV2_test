import React, { useEffect } from "react";
import Slider from "react-slick";
import star from "../assets/star.svg";
import { feedbacks } from "../datas/feedback";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stars = Array(5).fill(<img className="w-4 h-4" src={star} alt="" />);

const ClientFeedbackForm = () => {
  const [settings, setSettings] = React.useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  useEffect(() => {
    const updateSlideToShow = () => {
      if (window.innerWidth < 680) {
        setSettings({ ...settings, slidesToShow: 1 });
        return;
      }
      setSettings({ ...settings, slidesToShow: 2 });
    };
    window.addEventListener("resize", updateSlideToShow);
    return () => window.removeEventListener("resize", updateSlideToShow);
  }, []);

  return (
    <div className="font-Montserrat">
      <h2 className="max-w-3xl mx-auto text-2xl md:text-4xl lg:text-5xl p-5 font-semibold text-[#313131] dark:text-white">
        Il nous ont fait{" "}
        <span className="text-blue-500 dark:text-white">confiance !</span>{" "}
        <br /> A votre tour !
      </h2>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="p-5">
              <div className="flex flex-col  rounded-lg p-4 text-[#616161] shadow-md dark:text-white dark:border-gray-700 dark:border-2">
                <h5 className="text-xl font-semibold leading-7">
                  {feedback.title}
                </h5>
                <p className="mt-2 text-gray-400 text-[919191]">
                  {feedback.comment}
                </p>
                <figure className="flex gap-1 mt-2 items-center">
                  {stars.map((star, index) => (
                    <React.Fragment key={index}>{star}</React.Fragment>
                  ))}
                  <figcaption className="text-black dark:bg-white dark:text-blue-500 rounded-lg w-10 h-5 text-center font-semibold text-sm ml-2">
                    5.0
                  </figcaption>
                </figure>
                <div className="flex justify-between mt-8 text-[919191] text-blue-500  dark:text-white">
                  <p>{feedback.author}</p>
                  <time>{feedback.date}</time>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientFeedbackForm;
