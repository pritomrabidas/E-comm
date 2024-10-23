// import Horizontal from "../Component/Product/Horizontal"
import RealteProduct from "../Component/Product/RealteProduct"
import ProductReview from "../Component/Product/ProductReview"
import ProductSlider from "../Component/Product/ProductSlider"

const page = () => {
  return (
    <div className="2xl:pt-24 xl:pt-24 lg:pt-24 md:pt-16 sm:pt-16 pt-14">
      <ProductSlider/>
      <ProductReview/>
      <RealteProduct/>
    </div>
  )
}

export default page