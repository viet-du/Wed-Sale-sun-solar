import { Sun, Target, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Về SolarLight</h1>
            <p className="text-xl text-orange-50 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến những giải pháp chiếu sáng xanh, 
              tiết kiệm và bền vững cho mọi gia đình Việt Nam
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sứ mệnh</h2>
            <p className="text-slate-600 leading-relaxed">
              Cung cấp các sản phẩm đèn năng lượng mặt trời chất lượng cao với giá cả hợp lý, 
              giúp người Việt Nam tiếp cận dễ dàng với công nghệ xanh, góp phần bảo vệ môi trường 
              và tiết kiệm chi phí năng lượng lâu dài.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Tầm nhìn</h2>
            <p className="text-slate-600 leading-relaxed">
              Trở thành nhà cung cấp đèn năng lượng mặt trời hàng đầu Việt Nam, 
              góp phần xây dựng một tương lai xanh sạch đẹp, nơi mọi gia đình đều 
              có thể sử dụng năng lượng tái tạo một cách hiệu quả và bền vững.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '5000+', label: 'Khách hàng' },
            { number: '20+', label: 'Sản phẩm' },
            { number: '98%', label: 'Hài lòng' },
            { number: '3 năm', label: 'Bảo hành' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-orange-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Chất lượng',
                description: 'Cam kết cung cấp sản phẩm chính hãng, chất lượng cao từ các nhà sản xuất uy tín',
              },
              {
                icon: Users,
                title: 'Khách hàng',
                description: 'Đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu trong mọi hoạt động',
              },
              {
                icon: Sun,
                title: 'Bền vững',
                description: 'Góp phần bảo vệ môi trường thông qua việc phổ biến năng lượng tái tạo',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team/Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Câu chuyện của chúng tôi</h2>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
            <p>
              SolarLight được thành lập với mục tiêu mang năng lượng mặt trời đến gần hơn với mọi người dân Việt Nam. 
              Chúng tôi tin rằng năng lượng sạch không chỉ giúp tiết kiệm chi phí mà còn là trách nhiệm của mỗi người 
              với môi trường.
            </p>
            <p>
              Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực năng lượng tái tạo, chúng tôi luôn nghiên cứu 
              và cập nhật những công nghệ mới nhất để mang đến cho khách hàng những sản phẩm tốt nhất.
            </p>
            <p>
              Từ những ngày đầu thành lập đến nay, chúng tôi đã phục vụ hơn 5000 khách hàng trên toàn quốc, 
              giúp họ tiết kiệm hàng tỷ đồng tiền điện và giảm thiểu hàng nghìn tấn khí thải CO2.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
