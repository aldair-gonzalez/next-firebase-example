import ProductCard from './ProductCard'

const getAllProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return data
}

async function ProductContainer () {
  const products = await getAllProducts()

  return (
    <section className='flex flex-col items-center justify-center'>
      <h2>Products</h2>
      <div className='flex gap-2'>
        {
          products.map(product => (
            <ProductCard key={product.id} name={product.name} price={product.price} />
          ))
        }
      </div>
    </section>
  )
}
export default ProductContainer
