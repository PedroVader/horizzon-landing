const brands = [
  "/images/PNG/zillow.png",
  "/images/PNG/idelista.png",
  "/images/PNG/Logo_Fotocasa.png",
  "/images/PNG/remax.png",
  "/images/PNG/Tesla_symbol_1.png",
  "/images/PNG/OpenAI_Symbol_1.png",
  "/images/PNG/Apple_Logo_1.png",
];

const BrandsCarousel = () => {
  return (
    <div className="overflow-hidden mt-16">
      <div className="brands-scroll flex gap-10 animate-scroll whitespace-nowrap">
        {brands.concat(brands).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`brand-${i}`}
            className="h-8 md:h-10 filter invert brightness-100 grayscale opacity-80 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;
