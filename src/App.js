import React from 'react'
import axios from 'axios'

function App() {
  // TODO Function for shortening the URL when the button is clicked

  // TODO Import bit.ly API
  
  return (
    <>
    <label htmlFor="long-url">Insert your URL</label>
    <input type="text" name="long-url" id="long-url" />
    <button type="button">Shorten</button>
    </>
  )
}

export default App