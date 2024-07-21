import React, { Component } from 'react'

export default class Todos extends Component {
  constructor(props){
    super(props)

    this.todoName;
  }  
  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <li>{ this.props.todoName }</li>
    )  
  }  
}  

