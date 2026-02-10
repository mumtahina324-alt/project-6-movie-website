import { useContext } from "react";
import { MovieContext } from "../../Context";
import CartItem from "./CartItem";

export default function Cart({ onClose }) {
  const { state, dispatch } = useContext(MovieContext);
  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-105 sm:max-w-150 lg:max-w-246 p-4 max-h-[90vh] overflow-auto">
        {/* Cart header */}
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-4xl font-bold Mb-20">Your Cart</h2>
          <div className="space-y-8 lg:space-y-12 max-h-112.5 overflow-auto mb-10 lg:mb-14">
            {/* Cart items */}
            {state.cartData.length > 0 ? (
              state.cartData.map((movie) => (
                <CartItem
                  key={movie.id}
                  movie={movie}
                  onRemove={handleRemoveFromCart}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-semibold">Your cart is empty</p>
              </div>
            )}
          </div>
          {/* Cart footer */}
          {/* Cart footer */}
          <div className="flex items-center justify-end gap-3">
            <button className="bg-primary hover:bg-primary/90 transition rounded-lg py-2.5 px-6 flex items-center justify-center gap-2 text-white font-semibold text-sm shadow-sm">
              Checkout
            </button>

            <button
              onClick={onClose}
              className="border border-gray-300 dark:border-gray-600
               text-gray-700 dark:text-gray-300
               hover:bg-gray-100 dark:hover:bg-white/10
               transition rounded-lg py-2.5 px-6
               font-semibold text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
