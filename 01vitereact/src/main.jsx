import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1> hello kanhaiya </h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {reactElement} */}
    {/* {anotherElement} */}
    {/* <MyApp /> */}
    <App />
  </StrictMode>,
)
