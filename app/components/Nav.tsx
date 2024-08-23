"use client"
import {FaShoppingCart} from "react-icons/fa";
import {GiCoffeeBeans} from "react-icons/gi";
import Link from "next/link"
import {useState} from "react";
import CartModal from "@/app/components/CartModal";
import {useProductsContext} from "@/app/db/CardContext";


export default function Nav() {
    const [cartModalOpen, setCartModalOpen] = useState(false)
    const handleCarteModel = () => {
        setCartModalOpen(!cartModalOpen)
    }
    const {products} = useProductsContext();
    const totalProductCount = products.reduce((totalCount, product) => totalCount + product.quantityProduct, 0);
    return (
        <nav
            className="fixed top-0 left-0 z-[100] w-full h-[50px] shadow-md bg-gray-700 flex justify-between items-center p-5 text-white">
            <Link href="/">
                <GiCoffeeBeans/>
            </Link>
            <div className="flex items-center gap-2">
                <button onClick={handleCarteModel}
                        className="p-2 flex items-center justify-center rounded-full w-8 h 8 hover:bg-gray-400 relative cursor-pointer">
                    <span
                        className="absolute top-0 right-0 bg-red-500 rounded-full p-1 text-[11px] flex items-center justify-center h-4 w-4">{totalProductCount}</span>
                    <FaShoppingCart/>
                </button>
            </div>
            <CartModal cartModalOpen={cartModalOpen} handleCarteModel={handleCarteModel}/>
        </nav>
    )
}