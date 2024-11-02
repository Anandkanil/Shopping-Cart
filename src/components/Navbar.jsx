import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logoImg from '../assets/images/logo.png'
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return <div className="w-full bg-slate-900 ">
    <div className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900 ">
    <div>
      <Link to='/'><img src={logoImg} className="h-14" alt="logo"/></Link>
    </div>
    <div className=" relative flex list-none items-center space-x-6 mr-5 text-slate-100 -tracking-tighterr font-medium">
      <Link to='/'><p className="cursor-pointer font-semibold hover:text-green-400 transition duration-300 ease-in">Home</p></Link>
      <Link to='/cart'><p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in"><FaShoppingCart size={26} />
      {
         cart.length > 0 &&
          <span
          className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
          justify-center items-center animate-bounce rounded-full text-white" 
          >{cart.length}</span>
                  }</p></Link>
    </div>
   </div>
  </div>
};

export default Navbar;