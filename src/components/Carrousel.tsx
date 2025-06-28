import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const brandLogos = [
  { src: "/images/brands/brand1.png", alt: "Brand 1" },
  { src: "/images/brands/brand2.png", alt: "Brand 2" },
  { src: "/images/brands/brand3.png", alt: "Brand 3" },
  { src: "/images/brands/brand4.png", alt: "Brand 4" },
  { src: "/images/brands/brand5.png", alt: "Brand 5" },
  { src: "/images/brands/brand1.png", alt: "Brand 1 duplicate" },
  { src: "/images/brands/brand2.png", alt: "Brand 2 duplicate" },
];

const BrandsCarousel = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;

    const autoSlide = () => {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 2000);
    };

    autoSlide();
    return () => timer.current && clearInterval(timer.current);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider mt-16 overflow-hidden">
      {brandLogos.map((brand, i) => (
        <div
          key={i}
          className="keen-slider__slide flex justify-center items-center"
        >
          <img
            src={brand.src}
            alt={brand.alt}
            className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandsCarousel;
