import { Check } from 'lucide-react';

const SuccessMessage = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed top-28 right-8 z-[100] animate-bounce-in">
      <div className="bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border border-emerald-400/30 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Check className="w-5 h-5 text-white" strokeWidth={3} />
        </div>
        <div>
          <p className="font-bold text-lg leading-tight">Submitted!</p>
          <p className="text-sm text-emerald-100">We'll get back to you shortly.</p>
        </div>
      </div>
    </div>
  );
};
export default SuccessMessage