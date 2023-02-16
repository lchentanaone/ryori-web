import { createContext } from "react";
import { placeholderURL } from "../mockData/global.ts";

export const Context = createContext({
    cart: [{
        "id": "001",
        "qty": 1,
        "label" : "Falafel with salad",
        "calorieCount": 180,
        "price" : 189.99,
        "discount" : 0.15,
        "image" : placeholderURL + "150"
        
    }],
    setCart: () => {}
});