import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class HomeHeading extends Component {
  render() {
    return (
      <div>
        <Image
          style={{
            boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
          }}
          src="https://i.imgur.com/iRzBO1g.png"
        />
      </div>
    )
  }
}

export default HomeHeading
