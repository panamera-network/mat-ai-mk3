// components/OrderPanel.tsx

export default function OrderPanel() {
  return (
    <div className="min-w-[360px] min-h-[230px] w-full h-full p-4 flex flex-col justify-between border-r-2 border-t-2 border-[#00ffff]/80 shadow-inner">
  <h3 className="text-lg font-bold text-white mb-4 text-center">Order Panel</h3>

  <div className="order-info text-white text-sm space-y-2">
    <div className="flex justify-between">
      <span>Symbol:</span>
      <span>XAUUSD</span>
    </div>
    <div className="flex justify-between">
      <span>Order Type:</span>
      <span>Buy Limit</span>
    </div>
    <div className="flex justify-between">
      <span>Lot Size:</span>
      <span>0.10</span>
    </div>
    <div className="flex justify-between">
      <span>Entry Price:</span>
      <span>2325.00</span>
    </div>
    <div className="flex justify-between">
      <span>SL / TP:</span>
      <span>2300.00 / 2350.00</span>
    </div>
  </div>

  <div className="order-actions flex gap-2 mt-4">
    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-bold transition">Execute</button>
    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md py-2 font-bold transition">Cancel</button>
  </div>
</div>

  );
}
