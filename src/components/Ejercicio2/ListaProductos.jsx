export default function ListaProductos(props) {
  return (
    <div>
      <h3>Lista de Productos</h3>
      <ul>
        {props.productos.map((producto,ListaProductos ) => (
          <li key={ListaProductos}>{producto}</li>
        ))}
      </ul>
    </div>
  )
}
