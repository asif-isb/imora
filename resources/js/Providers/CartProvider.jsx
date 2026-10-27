import { useReducer, useEffect, useState } from "react";
import CartContext from "@/js/Context/CartContext";

const initialState = {
    items: [],
    total: 0,
    itemCount: 0
};

const calculateTotals = (items) => {
    return items.reduce((acc, item) => {
        const itemTotal = parseFloat(item.price) * item.quantity;
        return {
            total: acc.total + itemTotal,
            itemCount: acc.itemCount + item.quantity
        };
    }, { total: 0, itemCount: 0 });
};

const cartReducer = (state, action) => {
    let updatedItems;

    switch (action.type) {
        case "ADD_TO_CART":
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (existingItemIndex > -1) {
                updatedItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            } else {
                updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
            }
            return calculateCartState(updatedItems);

        case "REMOVE_FROM_CART":
            updatedItems = state.items.filter(item => item.id !== action.payload);
            return calculateCartState(updatedItems);

        case "UPDATE_QUANTITY":
            updatedItems = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity
                    };
                }
                return item;
            });
            return calculateCartState(updatedItems);

        case "CLEAR_CART":
            return {
                items: [],
                total: 0,
                itemCount: 0
            };

        case "LOAD_CART":
            return calculateCartState(action.payload);

        case "INITIALIZE_TOTALS":
            const { total, itemCount } = calculateTotals(state.items);
            return { ...state, total, itemCount };

        default:
            return state;
    }
};

// Helper function to calculate cart totals
const calculateCartState = (items) => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
        items,
        total,
        itemCount
    };
};

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);
    const [loaded, setLoaded] = useState(false);

    // Load the saved cart in the browser only (localStorage doesn't exist during SSR)
    useEffect(() => {
        try {
            const saved = localStorage.getItem('cart');
            const items = saved ? JSON.parse(saved) : [];
            if (Array.isArray(items) && items.length > 0) {
                dispatch({ type: "LOAD_CART", payload: items });
            }
        } catch (e) {
            // ignore corrupted or unavailable storage
        }
        setLoaded(true);
    }, []);

    // Save only after the initial load, otherwise the empty cart would overwrite the saved one
    useEffect(() => {
        if (!loaded) return;
        try {
            localStorage.setItem('cart', JSON.stringify(cartState.items));
        } catch (e) {}
    }, [cartState.items, loaded]);

    const contextValue = {
        items: cartState.items,
        total: cartState.total,
        itemCount: cartState.itemCount,
        dispatch
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;