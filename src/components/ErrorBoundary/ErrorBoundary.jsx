import React, { Component, } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError : false
  }

  componentDidCatch(error, info){
    this.setState({hasError: true})
    console.log('Error Boundary:', error, info);
  }

  render =()=>
    this.state.hasError 
    ? <h1>Something went wrong. Thank you for your cooperation.</h1> 
    : this.props.children
}