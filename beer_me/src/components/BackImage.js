// import React, { Component } from "react"
// import { Image } from "semantic-ui-react"
//
// const BackImage = () => (
//   <Image
//     src="http://daytonbeerweek.com/wp-content/uploads/2016/08/header3.jpg"
//     fluid
//   />
// )
//
// export default BackImage

import React, { Component } from "react"
import "./BackImage.css"
import { Jumbotron, Container } from "reactstrap"

const BackImage = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <img
            className="backImg"
            src="https://thumbs.dreamstime.com/b/old-oak-beer-wine-barrel-background-brewery-winery-tavern-aged-rustic-barrels-wide-angle-format-73341722.jpg"
          />
          <h1 className="display-3">Beer Me</h1>
          <p className="lead" />
        </Container>
      </Jumbotron>
    </div>
  )
}

export default BackImage
