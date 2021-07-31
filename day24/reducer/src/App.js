import './App.css';
import Router from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav>
        <link to="/">Home</link>
        <link to="/about">About</link>
        <link to="/profile">Profile</link>
        <link to="/dashboard">Dashboard</link>
      </nav>
      <Switch>
        <AuthContex>
          <Route exact path ="/home">Home</Route>
          <Route exact path ="/about">About</Route>
          <Route exact path ="/profile">Profile</Route>
          <Route exact path ="/dashboard">Dashboard</Route>
        </AuthContex>
      </Switch>
    </Router>
  );
}

export default App;
