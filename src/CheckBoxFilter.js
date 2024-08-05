export default function CheckBoxFilter({setonlyShowProdoctsInStock, onlyShowProdoctsInStock}){

  function toggleCheckBox(){
    setonlyShowProdoctsInStock(!onlyShowProdoctsInStock);
  }
  return (
    <>
      <div>
        <input type="checkbox" onClick={toggleCheckBox}/>
        <label>only show products in stock</label>

      </div>
    </>
  );
}