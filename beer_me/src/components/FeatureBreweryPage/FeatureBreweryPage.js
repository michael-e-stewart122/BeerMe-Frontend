import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import FeatureBreweryCard from './FeatureBreweryCard';

class FeatureBreweryPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{}</Col>
        </Row>
        <Row>
          <FeatureBreweryCard />
        </Row>
      </Container>
    );
  }
}

export default FeatureBreweryPage;

// import React, { Component } from 'react';
// import BreweryCard from '../BreweryPage/BreweryCards/BreweryCard';
//
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardLink,
//   CardTitle,
//   CardSubtitle
// } from 'reactstrap';
//
// const FeatureBreweryCard = props => {
//   let {
//     id,
//     brewery_name,
//     address,
//     city,
//     state,
//     zip,
//     phone,
//     url
//   } = props.brewery;
//   console.log('props.brewery', props.brewery);
// class FeatureBreweryPage extends Component {
//   render() {
//     return (
//       <div>
//         <Card>
//           <CardBody>
//             <CardTitle />
//             <CardSubtitle />
//           </CardBody>
//           <img
//             width="75%"
//             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//             alt="Card image cap"
//           />
//           <CardBody>
//             <CardText>{brewery_name}</CardText>
//             <CardLink href="#">Card Link</CardLink>
//             <CardLink href="#">Another Link</CardLink>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
//
// export default FeatureBreweryPage;
