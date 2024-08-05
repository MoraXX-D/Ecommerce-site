import { createContext } from "react";
export const UserContext = createContext(
    {
        'login':false,
    }
);

export const CartContext = createContext({
    cartData: [], // Default to an empty array
    setCartData: () => {} // Default function does nothing
});
