import { Link } from 'react-router';
import { Sun, Phone, Mail, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2.5 rounded-2xl">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl">SolarLight</div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Chuyên cung cấp các sản phẩm đèn năng lượng mặt trời chất lượng cao, 
              tiết kiệm năng lượng và thân thiện với môi trường.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-sm leading-relaxed">123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-sm">0901 234 567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-sm">info@solarlight.vn</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Theo dõi chúng tôi</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="bg-slate-800 p-3.5 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3.5 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3.5 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Cập nhật tin tức và ưu đãi mới nhất
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 SolarLight. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}