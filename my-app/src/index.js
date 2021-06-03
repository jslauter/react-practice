import ReactDom from 'react-dom'
import React from 'react'


function Greeting(){
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  )
}

const Person = () => <h2>Bob</h2>
const Message = () => {
  return(
    <h2>Hello, there</h2>
  )
}

ReactDom.render(<Greeting/>, document.getElementById('root'))
