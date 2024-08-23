import {create} from "zustand";
import {combine} from "zustand/middleware";

const useProductStore = create(combine({
    products:[]
}))