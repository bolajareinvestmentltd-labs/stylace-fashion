'use client';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, cartTotal } = useCart();

  // THE WHATSAPP CHECKOUT ENGINE
  const handleWhatsAppCheckout = () => {
    const ceoPhone = "2348000000000"; // TODO: Put Lola's actual number here
    
    let message = `Hello Lola! Is this available? I would like to order:\n\n`;
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (₦${item.price.toLocaleString()})\n`;
    });
    message += `\n*Total: ₦${cartTotal.toLocaleString()}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${ceoPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Dark Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-cream z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
          <h2 className="font-serif text-xl text-primary">Your Bag</h2>
          <X className="w-5 h-5 cursor-pointer text-secondary hover:text-primary" onClick={closeCart} />
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {cart.length === 0 ? (
            <p className="text-center text-secondary font-sans mt-10">Your bag is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="relative w-16 h-20 bg-gray-100">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px"/>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-primary text-sm">{item.name}</h4>
                  <p className="font-sans text-xs text-secondary mt-1">₦{item.price.toLocaleString()}</p>
                  <p className="font-sans text-xs text-secondary mt-1">Qty: {item.quantity}</p>
                </div>
                <Trash2 className="w-4 h-4 text-red-300 cursor-pointer hover:text-red-500" />
              </div>
            ))
          )}
        </div>

        {/* Checkout Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif font-bold text-primary">Total</span>
              <span className="font-serif font-bold text-primary">₦{cartTotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] text-white py-3 font-sans text-sm tracking-widest font-bold hover:bg-[#128C7E] transition-colors"
            >
              CHECKOUT ON WHATSAPP
            </button>
          </div>
        )}
      </div>
    </>
  );
}