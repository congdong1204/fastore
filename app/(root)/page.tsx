import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'

const HomePage = async () => {
  return (
    <>
      <ProductList data={sampleData} title="Newest Arrivals" limit={5} />
    </>
  )
}

export default HomePage
