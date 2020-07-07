import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      }
    ]
  }
  render() {
    return (
      <div>
        <Title title="services" />
      </div>
    )
  };
};