import React, { Component } from 'react';
import './BackImage.css';
import { Jumbotron, Container } from 'reactstrap';

const BackImage = props => {
  return (
    <div>
      <Container fluid>
        <img
          className="backImg"
          src="http://jackieos.com/wordpress/wp-content/uploads/2014/03/wood_background.jpg"
        />
        <p className="lead" />
      </Container>
    </div>
  );
};

export default BackImage;
