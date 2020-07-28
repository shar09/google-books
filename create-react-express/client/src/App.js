import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Header />
                    <Route exact path="/" component={Search} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </div>
            </Router>
        )
}

export default App;