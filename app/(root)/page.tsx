import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.action'

const HomePage = async () => {
  const products = await getLatestProducts()

  return (
    <>
      <ProductList data={products} title="Newest Arrivals" />
    </>
  )
}

export default HomePage
