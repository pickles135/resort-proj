import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  state={
    isOpen = false 
  }
  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
    render() {
      return (
        <div>
          Hello from the navbar
        </div>
      )
    }
  };   