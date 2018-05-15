// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import FeatureBreweryCard from './FeatureBreweryCard';
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
// const FeatureBreweryCards = ({ breweries }) => {
//   let listOfBreweries = breweries.map(brewery => (
//     <FeatureBreweryCard key={brewery.id} brewery={brewery} />
//   ));
//   console.log('do we get here!!!');
//   return <Row>{listOfBreweries}</Row>;
// };
//
// const mapStateToProps = ({ breweries }) => ({
//   featureBrewery: breweries
// });
//
// export default connect(mapStateToProps, null)(FeatureBreweryCards);
