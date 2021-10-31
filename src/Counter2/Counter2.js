import React from 'react'

export default props => {
  return (
    <div style={{
      border: '2px solid red',
      width: 200,
      margin: '0 auto'
    }}>
      <h3>Counter 2</h3>
      {props.clicked ? <p>Clicked</p> : null}
    </div>
  )
}