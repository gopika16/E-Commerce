import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeProductsCards/HomeSectionCard";

const ProductsCarousel = ({data, sectionName}) => {

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 }
  };

  const items = data.map((items) => <HomeSectionCard product = {items}/>);


  return (
    <div className="">
      <h2 className="text-2xl font-bold text-gray-800 py-5">{sectionName}</h2>  
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
  );
};

export default ProductsCarousel;
