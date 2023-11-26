export default function ListaProductosCondicional(props) {
  return (
    <div>
      <h3>Lista de Productos</h3>
      {props.productos.length === 0 ? (
        <p>No hay elementos en la lista.</p>
      ) : (
        <ul>
          {props.productos.map((producto, ListaProductosCondicional) => (
            <li key={ListaProductosCondicional}>{producto}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
