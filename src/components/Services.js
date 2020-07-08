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
      },
      {
        icon: <FaHiking />,
        title: 'hiking trails close by',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'close shuttle vans',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
      {
        icon: <FaBeer />,
        title: 'brewerys close by',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
    ]
  }
  render() {
    return (
      <section>
        <Title title="services" />
      </section>
    )
  };
};