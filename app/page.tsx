"use client"
import Header from "@/app/components/Header";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../app/db/firebaseConfig"
import Galerie from '../app/components/Galerie'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ProductType} from "@/app/types/productType";
import Footer from "@/app/components/Footer";

export default function Home() {
    const [dataProducts, setDataProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const productCollection = collection(db, "products");
        const productSnapshot = await getDocs(productCollection);
        const productsData = productSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as ProductType[];
        setDataProducts(productsData);
    }


    return (
        <>
            <ToastContainer/>
                <Header/>
                <Galerie dataProducts={dataProducts}/>
                <Footer/>
        </>
    );
}
