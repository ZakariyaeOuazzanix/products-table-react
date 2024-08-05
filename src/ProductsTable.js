import ProductRows from './ProductRows'

export default function ProductsTable({products, valueSearch, onlyShowProdoctsInStock}){


  return (
    <>
      <table>
          <th>Name</th>
          <th>Price</th>

        <tbody>
          <ProductRows products={products} valueSearch={valueSearch} onlyShowProdoctsInStock={onlyShowProdoctsInStock}/>
        </tbody>
      </table>

    </>
  );
}