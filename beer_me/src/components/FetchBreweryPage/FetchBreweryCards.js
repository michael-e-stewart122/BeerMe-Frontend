// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import fetchBreweryCard from './fetchBreweryCard';
//
// import {
//   Row,
//   Col,
//   Card,
//   CardTitle,
//   CardImg,
//   CardBody,
//   CardText,
//   CardSubtitle,
//   Button
// } from 'reactstrap';
//
// const fetchBreweryCards = ({ breweries }) => {
//   let listOfBreweries = breweries.map(brewery => (
//     <fetchBreweryCard key={brewery.id} brewery={brewery} />
//   ));
//   console.log('do we get here!!!');
//   return <Row>{listOfBreweries}</Row>;
// };
//
// const mapStateToProps = ({ breweries }) => ({
//   fetchBrewery: breweries
// });
//
// export default connect(mapStateToProps, null)(fetchBreweryCards);
