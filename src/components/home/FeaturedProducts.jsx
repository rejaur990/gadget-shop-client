
import ProductsCard from './ProductsCard';

const FeaturedProducts = () => {
    return (
        <div className=' lg:flex items-center justify-between gap-4'>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
        </div>
    );
};

export default FeaturedProducts;