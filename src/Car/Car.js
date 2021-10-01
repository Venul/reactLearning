import './Car.css'

export default props => {
  const inputClasses = ['input']

  // управление классами через добавление стилей в массив, потом join

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }


  return (
    <div className='car'>
      <h2>Car name: {props.name}</h2>
      <p>Car year: {props.year}</p>
      <input 
        type="text" 
        onChange={props.onChangeName}
        defaultValue={props.name} 
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
  </div>
  )
}