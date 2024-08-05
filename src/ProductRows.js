import ProductRow from './ProductRow';
import ProductCategory from './ProductCategory';

export default function ProductRows({products, valueSearch, onlyShowProdoctsInStock}){

let productsFiltered = products.filter((product)=>{
  return product.name.toLowerCase().includes(valueSearch.toLowerCase());
});
if(onlyShowProdoctsInStock){
  productsFiltered = products.filter((product) => {
    return product.isInStock;
  });
}
let category = null;

  return(
    <>
      {
        productsFiltered.map(
          (product, idx) => {
              if(product.category !== category){
                category = product.category;
                return <>
                  <ProductCategory category={category} key={`category-${idx}`}/>
                  <ProductRow product={product} key={`product-${idx}`} />
                </>
              }
              else{
                return  <ProductRow product={product} key={`product-${idx}`}/>
              }
         }
        )
      }
    </>
  );
}