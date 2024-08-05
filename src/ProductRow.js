export default function ProductRow({product}){

  const colorName = product.isInStock ? 'black' : 'red';
  
  return (
      <tr className="gap-3">
        <td
          style={{
            color : colorName,
          }}
          >
            {product.name}</td>
        <td>{product.price}</td>
      </tr>

  );
}