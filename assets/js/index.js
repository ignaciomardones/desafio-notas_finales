let product1 = prompt('Ingrese el primer producto: ', 'Leche');
let precioProduct1 = prompt(`Ingrese el precio de:  ${ product1 }`, '20');
let product2 = prompt('Ingrese el segundo producto: ', 'Cereal');
let precioProduct2 = prompt(`Ingrese el precio de:  ${ product2 }`, '55');
let total_compra = parseFloat(precioProduct1) + parseFloat(precioProduct2);

document.write(`
    <h1 class="mb-5">Gastos de compras:</h1>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${ product1 }</th>
            <td>${ precioProduct1 }</td>
          </tr>
          <tr>
            <th scope="row">${ product2 }</th>
            <td>${ precioProduct2 }</td>
          </tr>
          <tr>
            <th scope="row">TOTAL</th>
            <td>${ total_compra }</td>
          </tr>
        </tbody>
      </table>
`);