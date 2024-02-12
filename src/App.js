//{dynamic value==variable} curly braces for that but not booleans and objects!!!

//in order not to have a fresh req each time you have to let the
// router intercept these request --- but to do that you have to
// use the "Link" from the dom package --- see the navbar file

//route parameters


import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

