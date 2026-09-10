import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info } from 'lucide-react';

const Toast = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm">
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-white backdrop-blur-md border ${
        toastMessage.type === 'info' 
          ? 'bg-zinc-900/95 border-zinc-700' 
          : 'bg-emerald-950/95 border-emerald-500/40 text-emerald-100'
      }`}>
        {toastMessage.type === 'info' ? (
          <Info className="w-5 h-5 text-amber-400 shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        )}
        <p className="text-sm font-medium tracking-wide">{toastMessage.message}</p>
      </div>
    </div>
  );
};

export default Toast;
