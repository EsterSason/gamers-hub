import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Register from './register/Register';
import Header from './header/Header';
import Login from './login/Login';

const App = () => (
  <Router>
    <div>
      <Header />
      {/* <Route path="/" component={App} /> */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
);

// class App extends Component {
//   render() {
//     return <Signup />;
//   }
// }

export default App;
