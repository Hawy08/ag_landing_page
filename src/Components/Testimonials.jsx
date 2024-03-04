import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from "../Semicomponents/testimonialCard";
import CallToAction from "../Semicomponents/callToAction";
import { Element } from "react-scroll";
import testimonials from "../Semicomponents/testimony";

function Testimonials() {
  return (
    <Element className="flex justify-center w-full" name="section4">
      <div className="flex flex-col w-4/5">
        <div>
          <p className="text-3xl font-bold md:w-1/3">What they are saying</p>
          <p>What Farmers like you have to say...</p>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          className="p-4 my-8 "
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {testimonials.map((item, index) => (
            <WithStyles key={index}
              description={item.description}
              name={item.name}
              occupation={item.occupation}
              area={item.area}
              image={item.image}
            />
          ))}
        </Carousel>
        <div className="flex justify-center ">
          <CallToAction />
        </div>
      </div>
    </Element>
  );
}

export default Testimonials;
