import "./App.css";
import Login  from "./Login";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Zoom } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {

const [{user},dispatch]=useStateValue();

useEffect(()=>{

 const unsubscribe= auth.onAuthStateChanged((authUser)=>{
    if (authUser){


      dispatch({
  type: "SET_USER",
  user:authUser
})

    }
    
    else
    {
      dispatch({
        type: "SET_USER",
        user:null
      })
      

    }
  });
  return()=>{
    unsubscribe();
  }



},[])

console.log("user lol ", user)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          ></Route>

          <Route path="/login" element={<Login/>}></Route>


          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
