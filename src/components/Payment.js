import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PaymentWithProduct from "./PaymentWithProduct";
import PaymentEmptyCart from "./PaymentEmptyCart";

const Payment = () => {
 const {selectedProducts} = useContext(CartContext)
  return (
    <div >
      <Navbar />

      {selectedProducts.length === 0 ? <PaymentEmptyCart /> : <PaymentWithProduct />}

      

      <Footer />
    </div>
  );
};

export default Payment;
