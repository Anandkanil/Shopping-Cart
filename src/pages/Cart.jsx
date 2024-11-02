import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(cartItems.reduce((acc, curr) => acc + curr.product.price, 0));
  }, [cartItems])

  return <div className="w-full h-screen">
    {/* Empty Cart */}
    {
      cartItems.length === 0 ? (<div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is empty!</h2>
        <button onClick={() => { navigate('/') }} className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
      </div>) : (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center ">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {
              cartItems.map((item, index) => {

                return <CartItems key={item.product.id} itemIndex={index} item={item} />
              })
            }
          </div>
          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-start">
              <div className="flex flex-col gap-5 ">
                <p className="font-semibold text-xl text-green-800 ">YOUR CART</p>
                <p className="font-semibold text-5xl text-green-700 -mt-5">SUMMARY</p>
                <p className="text-xl">Total Items: {cartItems.length}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">Total Amount : {totalAmount}</p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>
            </div>
          </div>
        </div>
      )





    }





  </div>;
};

export default Cart;
