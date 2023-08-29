import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { ClassComponent } from './components/ClassComponent';
import { DemoComponent } from './components/DemoComponent';
import { Demo } from './components/Demo';
import { EventDemo } from './components/EventDemo';
import { ParentComponent } from './components/ParentComponent';
import { UseStateDemo } from './components/UseStateDemo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Aboutus } from './components/Aboutus';
import { Contactus } from './components/Contactus';
import { Navigations } from './components/Navigations';
import { PagenotFound } from './components/PagenotFound';
import { EditProduct } from './components/EditProduct';
import { AddProduct } from './components/AddProduct';
import { ProductContext } from './context/ProductContext';
import { Product } from './utility/Product';
import { ProductDetails } from './components/ProductDetails';
import { Login } from './components/Login';
import { APICall } from './components/APICall';


function App() {
  //const msg = "Hello"
  const products :Product[]= [
    { id: 1, name: 'TV', price:7000},
    { id: 2, name: 'Tablet', price: 10000 },
    { id: 3, name: 'laptop', price: 8000 },
   
  ];
  return (
    <div>
      <APICall/>
      <ProductContext.Provider value={products}>
      <Router>
        <Navigations></Navigations>

        <Routes>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/displayProducts" element={<Demo/>}></Route>
          <Route path="/aboutus" element={<Aboutus/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
         <Route path="/addproduct" element={<AddProduct/>}></Route>
          <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
          <Route path="/getProduct/:id" element={<ProductDetails/>}></Route>
          <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
          <Route path="/*" element={<PagenotFound/>}></Route>
          {/*This route should be must be the last route and it is called as wildcard route*/}

        </Routes>

      </Router>
      {/* <ClassComponent/>
      <DemoComponent name="Souji" address="Pune" empId={12} department="od" ></DemoComponent>
     <Demo/>
     <EventDemo></EventDemo>
     <ParentComponent></ParentComponent>
     <UseStateDemo/> */}
     </ProductContext.Provider>
    </div>
  );
}

export default App;
