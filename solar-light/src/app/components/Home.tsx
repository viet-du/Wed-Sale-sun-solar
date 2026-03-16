import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Sun, Shield, Leaf, Zap, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-400/10 to-orange-600/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full mb-6"
              >
                <Sun className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-700">Giải pháp năng lượng xanh #1</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                  Chiếu Sáng
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600">
                  Năng Lượng Mặt Trời
                </span>
              </h1>
              <p className="text-xl mb-10 text-slate-600 leading-relaxed">
                Tiết kiệm điện năng, thân thiện môi trường, bền bỉ với thời gian. 
                Đầu tư thông minh cho tương lai xanh.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  Khám phá sản phẩm
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  Tư vấn miễn phí
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">5000+ khách hàng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">4.9/5 đánh giá</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl opacity-20 blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1594735974070-b678995b9f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWUlMjBldmVuaW5nfGVufDF8fHx8MTc3MzYyMDgxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Solar lights"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">98%</div>
                    <div className="text-sm text-slate-600 font-medium">Khách hàng hài lòng</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Ưu điểm vượt trội</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 mt-2">
                Tại sao chọn chúng tôi?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Những lợi ích tuyệt vời khi sử dụng đèn năng lượng mặt trời
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sun,
                title: 'Năng lượng sạch',
                description: 'Sử dụng 100% năng lượng từ mặt trời, không phát thải CO2',
                color: 'from-yellow-500 to-orange-500',
                bgColor: 'from-yellow-50 to-orange-50',
              },
              {
                icon: Zap,
                title: 'Tiết kiệm chi phí',
                description: 'Giảm 100% hóa đơn tiền điện cho hệ thống chiếu sáng',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50',
              },
              {
                icon: Shield,
                title: 'Bền bỉ',
                description: 'Tuổi thọ cao, chống thời tiết tốt, bảo hành dài hạn',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50',
              },
              {
                icon: Leaf,
                title: 'Thân thiện',
                description: 'Bảo vệ môi trường, góp phần phát triển bền vững',
                color: 'from-green-500 to-emerald-500',
                bgColor: 'from-green-50 to-emerald-50',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                  <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Sản phẩm chất lượng</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 mt-2">
                Sản phẩm nổi bật
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Những sản phẩm được khách hàng yêu thích và tin dùng nhất
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              Xem tất cả sản phẩm
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Phản hồi khách hàng</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 mt-2">
                Khách hàng nói gì về chúng tôi
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Anh Minh',
                role: 'Chủ nhà hàng',
                content: 'Đèn rất sáng và tiết kiệm điện. Tôi đã lắp cho cả khu vườn nhà hàng và rất hài lòng.',
                rating: 5,
              },
              {
                name: 'Chị Hương',
                role: 'Gia đình',
                content: 'Chất lượng tốt, giá cả hợp lý. Đội ngũ tư vấn nhiệt tình, lắp đặt nhanh chóng.',
                rating: 5,
              },
              {
                name: 'Anh Tuấn',
                role: 'Chủ resort',
                content: 'Đã sử dụng được 2 năm, đèn vẫn hoạt động tốt. Rất đáng đầu tư!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Sẵn sàng chuyển đổi sang năng lượng sạch?
            </h2>
            <p className="text-xl mb-10 text-orange-50 leading-relaxed">
              Liên hệ với chúng tôi ngay để được tư vấn miễn phí và nhận ưu đãi đặc biệt!
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Liên hệ ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}