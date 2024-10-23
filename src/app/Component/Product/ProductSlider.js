"use client";
import Image from "next/image";
import { useState } from "react"; // for zoom functionality (optional)
const ProductSlider = () => {
  const [selectedImage, setSelectedImage] = useState([0]);
  const productImages = [
    "/bages-1.jpg",
    "/bages-2.jpg",
    "/bages-3.jpg",
    "/belt-1.jpg",
  ];
  // const zoomProps = {
  //   width: 500,
  //   height: 500,
  //   // zoomWidth: 600,
  //   img: selectedImage,
  // };
  return (
    <section>
      <div className="container mx-auto flex">
        <div className="product-slider w-1/2">
          <div className="large-image">
            <Image
              src={productImages[selectedImage]}
              width={100}
              height={100}
              alt="Image"
              className="w-40 h-32"
            />
          </div>
          <div className="thumbnails">
            {productImages.map((image, index) => (
              <Image
                width={100}
                height={100}
                key={index}
                src={image}
                onClick={() => setSelectedImage(image)}
                className={`thumbnail ${
                  selectedImage === image ? "active" : productImages
                }`}
                alt={`product-thumbnail-${index}`}
                style={{ cursor: "pointer", width: "100px", margin: "10px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
