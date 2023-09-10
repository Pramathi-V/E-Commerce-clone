import React, { useEffect } from "react";
import './App.css';
import Header from "./header";
import Home from "./home"
import Checkout from "./checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './payment'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order_s from "./Orders"


const promise=loadStripe("pk_test_51NnkSESEgQqKbDUZYtejqRUMbXnjMdSKQs0AB2bledJFB2N5CxrOgeeQLAykpQH0UAhfwhHylSKP4f0GkwwmDO6500PfpmFZPe");

const HomePage = () => (
  <>
    <Header />
    <Home />
  </>
);
const Checko = () => {
  return (

    <div><Header />
      <Checkout /> </div>
  );
};

const Orders = () => {
  return (

    <div>
      <Header />
      <Order_s />
    </div>
  );
};
const Log = () => {
  return(
    <div>
      <Login />
      </div>
  );
};
const Pay = () => {
  return(
    <div>
      <Header/>
      <Elements stripe={promise}>
      <Payment />
      </Elements>
    </div>
  )
}

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
     auth.onAuthStateChanged(authUser => {
      console.log('user', authUser);

      if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
     })
  }, [])

  return (
    <Router>
    <div className="app">
    
      <Routes>
        <Route path="/checkout" element = {<Checko />}></Route>
        <Route path="/login" element = {<Log />}></Route>
        <Route path='/payment' element = {<Pay />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path="/" element = {<HomePage />}></Route>
      </Routes>
      {/* Header */}
      

      {/* Home */}
    
      </div>
    </Router>
  );
}

export default App;
