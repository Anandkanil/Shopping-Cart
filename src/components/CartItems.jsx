import React from 'react'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast';
import { removeProduct } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
const CartItems = ({ item, key, itemIndex }) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(removeProduct(item.product.id));
        toast.error("Item removed from Cart!")
    }
    return (
        <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
            <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
                <img className="w-[30%] object-cover" src={item.product.image} alt="cart product" />
                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h1 className="text-xl text-slate-700 font-semibold">{item.product.title}</h1>
                    <h1 className="text-base text-slate-700 font-medium">{item.product.description.length > 50 ? `${item.product.description.substr(0, 100)}...` : item.product.description}</h1>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-green-600">${item.product.price}</p>
                        <div onClick={removeFromCart} className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"><MdDelete /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems