import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return <AppRouter />;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Game</h2>;
}

function End() {
  
  function routeToHome(){

    window.location.replace('./');
  };

  return (
    <h2>End</h2>,
    <button type="submit" onClick={routeToHome}>Home</button>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
{/*         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game/">Game</Link>
            </li>
            <li>
              <Link to="/end">End</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact component={Home} />
        <Route path="/game" component={About} />
        <Route path="/end" component={End} />
      </div>
    </Router>
  );
}

export default AppRouter;
export { App };
