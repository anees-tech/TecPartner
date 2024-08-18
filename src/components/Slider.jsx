import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderForHomePage = () => {
  function Arrows(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "white",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    accessibility: true,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
    pauseOnHover: true,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-4/4 m-auto px-2">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className="bg-white h-450px text-black rounded-xl p-4">
                <div className="h-56 rounded-xl bg-gray-200 flex justify-center items-center">
                  <img
                    src={item.img}
                    alt="image here"
                    className="h-44 w-44 rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-8 p-4">
                  {/* <p className="text-xl font-semibold">{item.name}</p> */}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: `All Pro Estimates`,
    img: `./images/forSlider/all-pro.png`,
  },
  {
    name: `UMP Corporation`,
    img: `./images/forSlider/ump.png`,
  },
  {
    name: `Damas Travels`,
    img: `./images/forSlider/damas.png`,
  },
  {
    name: `Discount Digital Solution`,
    img: `./images/forSlider/Discount.png`,
  },
  {
    name: `Reak Estate PRO`,
    img: `./images/forSlider/RE-pro.png`,
  },
  {
    name: `Apexeon Venture LLC`,
    img: `./images/forSlider/apexeon.png`,
  },
];

export default SliderForHomePage;
