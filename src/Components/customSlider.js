import { useEffect, useMemo, useState } from "react";
import "../Styles/CustomSider.scss";

export default function CustomSlider({ direction, slideNumber }) {
    const slides = useMemo(
        () => [
          {
            id: "first",
            tetimony:

            
              " slide 1No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
          },
          { id: "second", tetimony: "slide 2 eCommerce platform allows people to start for free" },
          { id: "third", tetimony: " slide 3eCommerce platform allows people to start for free and grow their store" },
        ],[]
      );
      useEffect(() => {
        const currentSlide = document.getElementById("first");
        const nextSlide = document.getElementById("second");
        const lastSlide = document.getElementById("third");
        const handleChange = () => {
          if (direction === "next") {
            slides.push(slides.shift());
          }
          if (direction === "prev") {
            slides.unshift(slides.pop());
          }
        };
        handleChange();
        currentSlide.className = `${slides[0].id} slide`;
        nextSlide.className = `${slides[2].id} slide`;
        lastSlide.className = `${slides[1].id} slide`;
      }, [direction, slides, slideNumber]);

  return (
    <div className="customSlider">
      <div id={slides[0]?.id} className="first slide">
        <p className="testimony">{slides[0]?.tetimony}</p>
      </div>
      <div id={slides[1]?.id} className="second slide">
        <p className="testimony">{slides[1]?.tetimony}</p>
      </div>
      <div id={slides[2]?.id} className="third slide">
        <p className="testimony">{slides[2]?.tetimony}</p>
      </div>
    </div>
  );
}

// export default function CustomSlider() {
//   const images = [
//     {
//       image: "Ellipse 10.png",
//       id: "cap1",
//     },
//     {
//       image: "Ellipse 11.png",
//       id: "cap2",
//     },
//     {
//       image: "Ellipse 14.png",
//       id: "cap3",
//     },
//   ];
//   const changeimage = () => {
//     console.log("image changes");
//     images.push(images.shift());
//     console.log(images);

//     const image1 = document.getElementById("cap1");
//     const image2 = document.getElementById("cap2");
//     const image3 = document.getElementById("cap3");

//     image1.className = `change ${images[0].id}`;
//     image2.className = `change ${images[1].id}`;
//     image3.className = `change ${images[2].id}`;
//   };

//   return (
//     <div className="relative bg-[#fff] flex div1">
//       {images.map((image) => (
//         <img
//           key={image.id}
//           src={image.image}
//           className={`change ${image.id}`}
//           id={image.id}
//           alt="jkhg"
//         />
//       ))}

//       <button onClick={changeimage}>Click</button>
//     </div>
//   );
// }
