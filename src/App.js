import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AllServicess from './components/AllServicess/AllServicess';
import Package from './components/Package/Package';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';
import Details from './components/Details/Details';
import About from './components/About/About';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
           <AllServicess></AllServicess>
          </Route>
          <PrivateRoute path="/package">
           <Package></Package>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/details">
         <Details></Details>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
