
import ProductsCard from './ProductsCard';

const FeaturedProducts = () => {
    return (
        <div className='flex items-center justify-between gap-4'>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
          <ProductsCard/>
        </div>
    );
};

export default FeaturedProducts;