import { Link } from 'react-router';
import { ShoppingCart, Star } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Đã thêm "${product.name}" vào giỏ hàng`);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-sm text-slate-800">{product.rating}</span>
          </div>
          <span className="text-slate-400 text-sm">({product.reviews})</span>
        </div>

        <h3 className="font-bold text-xl mb-3 text-slate-800 group-hover:text-orange-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
          <span className="text-sm text-slate-500 font-medium">Công suất:</span>
          <span className="font-semibold text-slate-800 bg-slate-50 px-3 py-1 rounded-lg">{product.power}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              {formatPrice(product.price)}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}