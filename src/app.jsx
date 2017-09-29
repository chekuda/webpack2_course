// const createAppendCard = (header, body) => {
//   const cardFragment = document.createDocumentFragment()
//   const cardElement = document.createElement("div")
//   const cardHeader = `<h2 class="card-header">${header}</h2>`
//   const cardBody = `<div class="card-body">${body}</div>`

//   cardElement.innerHTML = `<div class="card">${cardHeader}${cardBody}</div>`

//   cardFragment.appendChild(cardElement)

//   document.body.appendChild(cardFragment)
// }
// export default createAppendCard

import React, { Component } from 'react'
import styles from './index.css'

class App extends Component {
  render() {
    return (
      <div className='card'>
            <div className='card-header'>jose</div>
      </div>
    )
  }
}

export default App
