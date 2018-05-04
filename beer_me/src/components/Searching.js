// import React, { Component } from "react"
// import { Grid, Image } from "semantic-ui-react"
//
// const Searching = () => (
//   <Grid container columns={2}>
//     <Grid.Column>
//       <Image src="https://cdn10.phillymag.com/wp-content/uploads/2014/11/Craft-Beer.jpg" />
//     </Grid.Column>
//
//     <Grid.Column>
//       <Image src="http://0104.nccdn.net/1_5/025/200/258/banner---temp-3.jpg" />
//     </Grid.Column>
//   </Grid>
// )
//
// export default Searching

import React from "react"
import { Grid, Image } from "semantic-ui-react"

const Searching = () => (
  <Grid columns="three" divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="https://cdn.britannica.com/700x450/72/186972-049-26ACDCBE.jpg" />
        <h1> Search Beer</h1>
      </Grid.Column>
      <Grid.Column>
        <Image src="http://0104.nccdn.net/1_5/025/200/258/banner---temp-3.jpg" />
        <h1>Search Brewery</h1>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://pbs.twimg.com/profile_images/885917064828862464/ErVbyAIR.jpg" />
        <h1>Brewery of the Month!</h1>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Searching
