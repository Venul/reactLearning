export default props => (
  <div style={{
    border: '1px solid #ccc',
    marginBottom: '10px',
    display: 'block',
    padding: '10px'
  }}>
    <h2>Car name: {props.name}</h2>
    <p>Car year: {props.year}</p>
    <button onClick={props.onDelete}>Delete</button>
</div>
)