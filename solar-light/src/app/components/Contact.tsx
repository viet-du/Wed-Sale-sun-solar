import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto">
            Đội ngũ tư vấn chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Thông tin liên hệ</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Địa chỉ</h3>
                  <p className="text-slate-600">123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Điện thoại</h3>
                  <p className="text-slate-600">0901 234 567</p>
                  <p className="text-slate-600">0902 345 678</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600">info@solarlight.vn</p>
                  <p className="text-slate-600">support@solarlight.vn</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Giờ làm việc</h3>
                  <p className="text-slate-600">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                  <p className="text-slate-600">Thứ 7: 8:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-slate-600">Bản đồ Google Maps</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Gửi tin nhắn</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="0901234567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Nội dung *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    placeholder="Nhập nội dung tin nhắn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
