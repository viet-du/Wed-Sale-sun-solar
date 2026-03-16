import { useParams, Link, useNavigate } from 'react-router';
import { products } from '../data/products';
import { ShoppingCart, Star, Check, Shield, Truck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Không tìm thấy sản phẩm</h1>
          <Link to="/products" className="text-orange-500 hover:underline">
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Đã thêm "${product.name}" vào giỏ hàng`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại danh sách sản phẩm
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              {product.category}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-slate-500">({product.reviews} đánh giá)</span>
            </div>

            <div className="text-4xl font-bold text-orange-500 mb-6">
              {formatPrice(product.price)}
            </div>

            <p className="text-slate-600 text-lg mb-8">
              {product.description}
            </p>

            {/* Specs */}
            <div className="bg-slate-100 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4 text-slate-800">Thông số kỹ thuật</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Công suất:</span>
                  <span className="font-semibold text-slate-800">{product.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Danh mục:</span>
                  <span className="font-semibold text-slate-800">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Bảo hành:</span>
                  <span className="font-semibold text-slate-800">{product.warranty}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                'Tự động bật/tắt theo ánh sáng',
                'Pin sạc nhanh công nghệ tiên tiến',
                'Chống nước IP65',
                'Tuổi thọ LED lên đến 50,000 giờ',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-100 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-200 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Thêm vào giỏ
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Mua ngay
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-700">Bảo hành chính hãng</div>
              </div>
              <div className="text-center p-4">
                <Truck className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-700">Giao hàng miễn phí</div>
              </div>
              <div className="text-center p-4">
                <Check className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-700">Đổi trả 7 ngày</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Sản phẩm liên quan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(p => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-800">{p.name}</h3>
                    <div className="text-2xl font-bold text-orange-500">
                      {formatPrice(p.price)}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
