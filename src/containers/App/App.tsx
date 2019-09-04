import * as React from 'react'

import cow from 'assets/images/sample.jpg'

/**
 * Application wrapper
 */
const App: React.FC = () => {
  return (
    <div className='app'>
      <h1>**PERHAPS cow stares at you**</h1>
      <img src={cow} alt='perhaps cow' />
      <br />
      <p>**you star <a href='https://github.com/sikozonpc/Webpack-React-Sass-boilerplate'>sikozonpc</a> on Github **</p>
    </div>
  )
}

export default App
