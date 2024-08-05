import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import CheckBoxFilter from './CheckBoxFilter'
import ProductsTable from './ProductsTable'
import { useState } from 'react';


/*
Fruits
Apple	$1
Dragonfruit	$1
Passionfruit	$2
Vegetables
Spinach	$2
Pumpkin	$4
Peas	$1
*/
const products = [
{
  name  : 'Apple',
  category : 'Fruits',
  price : '1$',
  isInStock : true,
},
{
  name  : 'Dragonfruit',
  category : 'Fruits',
  price : '1$',
  isInStock : true,
},
{
  name  : 'Passionfruit',
  category : 'Fruits',
  price : '2$',
  isInStock : false,
},
{
  name  : 'Spinach',
  category : 'Vegetables',
  price : '2$',
  isInStock : true,
},
{
  name  : 'Pumpkin',
  category : 'Vegetables',
  price : '4$',
  isInStock : false,
},
{
  name  : 'Peas',
  category : 'Vegetables',
  price : '1$',
  isInStock : true,
},

];

function App() {
  const [valueSearch, setValueSearch] = useState('');
  const [onlyShowProdoctsInStock, setonlyShowProdoctsInStock] = useState(false);

  return (
    <>
    <div className="flex flex-col justify-center items-center text-lg gap-y-3">
      <SearchBar setValueSearch={setValueSearch}/>
      <CheckBoxFilter setonlyShowProdoctsInStock={setonlyShowProdoctsInStock} onlyShowProdoctsInStock={onlyShowProdoctsInStock}/>
      <ProductsTable products={products} valueSearch={valueSearch} onlyShowProdoctsInStock={onlyShowProdoctsInStock}/>
    </div>
    </>
  );
}

export default App;
