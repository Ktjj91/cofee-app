import {ProductType} from "@/app/types/productType";
import Card from "@/app/components/Card"

interface GalerieProps {
    dataProducts: ProductType[]
}

export default function Galerie({dataProducts} : GalerieProps)
{
    return (
        <div id="produits" className="max-w-[1000px] w-full mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {dataProducts.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
