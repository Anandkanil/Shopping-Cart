import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { addProduct, removeProduct, } from "../redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);

    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    setloading(true);
    fetchData();

    setloading(false);
  }, [])
  return (
    <div className="w-full min-h-screen">

      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2">
        {
          loading ? (
            <div>No Data Available</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
                <h1 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{product.title}</h1>
                <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">{product.description.length > 50 ? `${product.description.substring(0, 50)}...` : product.description}</h1>
                <img className="w-full object-contain h-[180px]" src={product.image} alt="product" />
                <div className="flex items-center justify-between w-full mt-5">
                  <p className="text-green-600 font-semibold">${product.price}</p>
                  {
                    cartItems.some((p) => p.product.id === product.id)
                      ? <button onClick={() => { dispatch(removeProduct(product.id)); toast.error("Item removed from cart! 🎉"); }} className="group-hover:bg-white group-hover:text-gray-700 transition bg-slate-500 duration-300 ease-in text-white border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">REMOVE ITEM</button> // Render this if product is not found
                      : <button onClick={() => { dispatch(addProduct({ product })); toast.success("Item added to cart! 🎉"); }} className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">ADD TO CART</button> // Render this if product is not found
                    // Render this if product is found
                  }

                </div>
              </div>
            ))

          )
        }
      </div>
    </div>
  )
};

export default Home;
