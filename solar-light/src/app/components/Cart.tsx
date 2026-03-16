import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const handleCheckout = () => {
    toast.success('Chức năng thanh toán đang được phát triển!');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-slate-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Giỏ hàng của bạn đang trống
          </h1>
          <p className="text-slate-600 mb-8">
            Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Tiếp tục mua sắm
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mb-8">Giỏ hàng của bạn</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 flex gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <Link
                    to={`/products/${item.id}`}
                    className="font-bold text-lg text-slate-800 hover:text-orange-500 transition-colors mb-2 block"
                  >
                    {item.name}
                  </Link>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-orange-500">
                      {formatPrice(item.price)}
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
                        }}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="font-bold text-xl mb-6 text-slate-800">Tóm tắt đơn hàng</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Tạm tính:</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Phí vận chuyển:</span>
                  <span className="font-semibold text-green-600">Miễn phí</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-slate-800">Tổng cộng:</span>
                    <span className="font-bold text-2xl text-orange-500">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors mb-4"
              >
                Tiến hành thanh toán
              </button>

              <div className="text-sm text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Miễn phí vận chuyển toàn quốc</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Bảo hành chính hãng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Đổi trả trong 7 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
