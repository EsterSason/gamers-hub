import React from 'react';

import './App.css';
import Register from './register/Register';
import Header from './header/Header';

const App = () => (
  <div>
    <Header />
    <Register />
  </div>
);

// class App extends Component {
//   render() {
//     return <Signup />;
//   }
// }

export default App;
