import {ProductType} from "@/app/types/productType";
import {toast} from "react-toastify";
import {GiWorld} from "react-icons/gi";
import {BiSolidCoffeeBean} from "react-icons/bi";
import {RiRedPacketFill} from "react-icons/ri";
import {useProductsContext} from "@/app/db/CardContext";

interface CardProps {
    item: ProductType;
}

export default function Card({item}: CardProps) {

    const {addToCart} = useProductsContext();
    const handleAddToCart = () => {
        addToCart(item)
        toast.success(`${item.name} ajouté a votre panier !`)
    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4 relative z-[50px] flex flex-col justify-between gap-2">
            <img src={item.image} alt={item.name} className="w-full object-cover mb-4 rounded-md"/>
            <p className=" text-[12px] text-gray-900 flex items-center gap-2">
                <span className="font-bold flex items-center gap-1">
                    <RiRedPacketFill/>
                    <span>Quantité:</span>
                </span>
                <span>Packet de {item.quantityPack}g</span>
            </p>
            <p className=" text-[12px] text-gray-900 flex items-center gap-2">
                <span className="font-bold flex items-center gap-1">
                    <GiWorld/>
                    <span>Origine:</span>
                </span>
                <span>{item.country}</span>
            </p>
            <p className=" text-[12px] text-gray-900 flex items-center gap-2">
                <span className="font-bold flex items-center gap-1">
                    <BiSolidCoffeeBean/>
                    <span>Puissance:</span>
                </span>
                <span>{item.strengh}</span>
            </p>
            <p className="text-[14px] text-gray-400">{item.desc}</p>
            <p className="bg-orange-400 text-white font-bold mt-2 absolute top-2 right-2 p-4 rounded-full">{item.price}€</p>
            <button onClick={handleAddToCart}
                    className="self-end bg-orange-400 hover:bg-orange-600 rounded-md text-white p-2">Ajouter au panier
            </button>
        </div>
    )
}
