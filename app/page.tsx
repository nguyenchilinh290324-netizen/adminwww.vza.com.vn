import Image from 'next/image'
import { 
  Search, Phone, ChevronRight, Menu, CheckCircle, 
  Truck, RefreshCcw, ShoppingCart, Star 
} from 'lucide-react'

// Dữ liệu sản phẩm (lấy từ phiên bản cũ)
const mockProducts = [
  {
    partNumber: 'LX935',
    name: 'Đồng hồ đo nhiệt ẩm công nghiệp (Cảm biến ngoài)',
    brand: 'RongCE / QINGMAI',
    spec: '-40~80°C · 0~99.9%RH · ±0.3°C · Đầu dò dây dài 3m',
    price: 'Liên hệ',
    image: '/images/lx935.png',
    badge: 'BÁN CHẠY',
  },
  {
    partNumber: 'RC919',
    name: 'Màn hình hiển thị nhiệt ẩm LED cỡ lớn',
    brand: 'RongCE / QINGMAI',
    spec: 'Kích thước 600x400mm · Hỗ trợ chuẩn RS485 Modbus',
    price: 'Liên hệ',
    image: '/images/rc919.png',
    badge: 'ĐỘ CHÍNH XÁC CAO',
  },
  {
    partNumber: 'RC5001',
    name: 'Máy đo chất lượng không khí để bàn (CO2/PM2.5)',
    brand: 'RongCE / QINGMAI',
    spec: 'Pin sạc 2000mAh · Cổng Type-C · Cảm biến đa chỉ tiêu',
    price: 'Liên hệ',
    image: '/images/rc5001.png',
    badge: 'SẴN HÀNG',
  },
  {
    partNumber: 'YIHUA 982D',
    name: 'Trạm hàn vi mạch thông minh cao cấp',
    brand: 'YIHUA',
    spec: 'Tay hàn chuẩn C245 · Gia tốc cực nhanh · Màn hình KTS',
    price: 'Liên hệ',
    image: '/images/982d.png',
    badge: 'TOP RATED',
  },
  {
    partNumber: 'YIHUA 3005D III',
    name: 'Nguồn DC ổn định dòng điện điều chỉnh cao cấp',
    brand: 'YIHUA',
    spec: 'Điện áp 30V 5A · Chống đoản mạch · Hiển thị LED 4 số',
    price: 'Liên hệ',
    image: '/images/3005d.png',
    badge: 'CHUẨN PHÒNG LAB',
  }
]

const categories = [
  { name: 'Đo nhiệt độ & độ ẩm', count: '120+ sản phẩm', icon: '🌡️' },
  { name: 'Chất lượng không khí', count: '85+ sản phẩm', icon: '💨' },
  { name: 'Thiết bị hàn khò Yihua', count: '150+ sản phẩm', icon: '⚡' },
  { name: 'Vật tư phòng sạch', count: '300+ sản phẩm', icon: '🛡️' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. TOP BAR */}
      <div className="bg-[#cc0000] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>Chào mừng bạn đến với VZA.COM.VN</div>
          <div className="hidden md:flex gap-6">
            <span className="flex items-center gap-1"><CheckCircle size={14} /> 100% chính hãng</span>
            <span className="flex items-center gap-1"><RefreshCcw size={14} /> Thanh toán khi nhận hàng</span>
            <span className="flex items-center gap-1"><Truck size={14} /> Giao hàng toàn quốc</span>
            <span className="flex items-center gap-1"><RefreshCcw size={14} /> Đổi trả trong 7 ngày</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER BAR */}
      <header className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
          {/* Logo VZA */}
          <div className="flex flex-col items-center justify-center min-w-[120px]">
            <Image src="/logo.png" alt="VZA Logo" width={50} height={50} className="object-contain" />
            <span className="text-2xl font-black text-[#cc0000] tracking-widest mt-1">VZA</span>
          </div>

          {/* Thanh tìm kiếm */}
          <div className="flex-1 max-w-2xl flex">
            <input 
              type="text" 
              placeholder="Nhập mã sản phẩm (VD: LX935, YIHUA 982D)..." 
              className="w-full border-2 border-[#cc0000] border-r-0 px-4 py-2 outline-none focus:bg-gray-50"
            />
            <button className="bg-[#cc0000] px-6 text-white transition hover:bg-red-700">
              <Search size={20} />
            </button>
          </div>

          {/* Hotline & Ngôn ngữ */}
          <div className="flex items-center gap-4">
            <a href="tel:0933935329" className="hidden sm:flex bg-[#cc0000] text-white items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition hover:bg-red-700 shadow-sm">
              <Phone size={16} /> 0933.935.329
            </a>
            <a href="tel:0898997570" className="hidden sm:flex bg-[#cc0000] text-white items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition hover:bg-red-700 shadow-sm">
              <Phone size={16} /> 0898.997.570
            </a>
            <div className="flex items-center gap-2 font-bold text-sm ml-2 border-l-2 border-gray-200 pl-4">
              <button className="text-[#cc0000]">VN</button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-500 hover:text-[#cc0000] transition">EN</button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. NAVIGATION MENU */}
      <nav className="max-w-7xl mx-auto px-4 py-3 hidden md:block border-b border-gray-100">
        <ul className="flex items-center gap-8 text-sm font-bold text-gray-800 uppercase pl-[280px]">
          <li><a href="#" className="text-[#cc0000] transition">Trang chủ</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Giới thiệu</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Sản phẩm</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Tin tức & Sự kiện</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Bảo hành</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Hỗ trợ</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Liên hệ</a></li>
        </ul>
      </nav>

      {/* 4. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Cột trái: Danh mục sản phẩm */}
          <div className="w-full lg:w-[260px] shrink-0 z-10">
            <div className="bg-[#cc0000] text-white font-bold py-3 px-4 flex items-center gap-2 uppercase text-sm rounded-t-md">
              <Menu size={18} /> Danh mục sản phẩm
            </div>
            <ul className="border border-t-0 border-gray-200 bg-white text-sm rounded-b-md shadow-sm">
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🎁</span> Khuyến mại đặc biệt
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🔥</span> Sản phẩm bán chạy
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>Đo nhiệt độ & độ ẩm CN</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>Thiết bị đo chất lượng khí</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>Thiết bị hàn & trạm khò</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
              <li className="p-3.5 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>Vật tư công nghiệp khác</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
            </ul>
          </div>

          {/* Cột giữa: Slider ảnh động */}
<div className="flex-1 bg-gray-100 rounded-sm overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
  <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
    <img src="/slider-1.jpg" alt="VZA Slider" className="w-full h-full object-cover" />
  </div>
</div>

          {/* Cột phải: 2 Banner danh mục nổi bật */}
<div className="w-full lg:w-[260px] flex flex-col gap-4">
  <div className="h-[192px] bg-slate-800 rounded-sm overflow-hidden relative flex items-center justify-center">
     <img src="/banner-1.jpg" alt="VZA Banner 1" className="w-full h-full object-cover" />
  </div>
  <div className="h-[192px] bg-slate-800 rounded-sm overflow-hidden relative flex items-center justify-center">
     <img src="/banner-2.jpg" alt="VZA Banner 2" className="w-full h-full object-cover" />
  </div>
</div>
        </div>
      </section>

      {/* 5. CATEGORY HIGHLIGHTS (Phần Thân 1) */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-black text-gray-800 uppercase mb-6 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
          Danh mục nổi bật
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#cc0000] hover:shadow-md transition bg-white group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-bold text-gray-800 group-hover:text-[#cc0000] transition">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRODUCT GRID (Phần Thân 2) */}
      <section className="max-w-7xl mx-auto px-4 py-8 mb-12">
        <div className="flex justify-between items-end border-b-2 border-[#cc0000] pb-2 mb-6">
          <h2 className="text-2xl font-black text-gray-800 uppercase flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
            Sản phẩm đề xuất
          </h2>
          <a href="#" className="text-sm font-bold text-[#cc0000] hover:underline hidden sm:block">Xem tất cả &raquo;</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockProducts.map((product, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md bg-white hover:shadow-xl hover:border-[#cc0000] transition duration-300 flex flex-col relative group">
              
              {/* Badge */}
              <div className="absolute top-2 left-2 bg-[#cc0000] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">
                {product.badge}
              </div>

              {/* Image Box */}
              <div className="h-48 bg-gray-50 p-4 flex items-center justify-center relative overflow-hidden rounded-t-md">
                {/* Thay thẻ div này bằng thẻ <img src={product.image} /> khi có ảnh thật */}
                <div className="text-gray-400 text-xs text-center border-2 border-dashed border-gray-300 w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  [Ảnh {product.partNumber}]
                </div>
              </div>

              {/* Content Box */}
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[11px] text-gray-500 mb-1">{product.brand}</span>
                <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cc0000] transition line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Specs */}
                <p className="text-[11px] text-gray-600 bg-gray-50 p-2 rounded-sm mb-3 line-clamp-2">
                  {product.spec}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-[#cc0000]">{product.price}</span>
                    <button className="bg-gray-100 hover:bg-[#cc0000] hover:text-white p-2 rounded-full transition text-gray-600">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-white border-t-4 border-[#cc0000] pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-black text-[#cc0000] mb-4">CÔNG TY TNHH CÔNG NGHỆ KIM MINH ĐÀI VN</h3>
            <p className="text-sm text-gray-700 mb-2"><strong>Địa chỉ:</strong> Tổ 1 Khu Phố Mỹ Khoan, Phường Nhơn Trạch, Thành Phố Đồng Nai, Việt Nam</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Mã số thuế:</strong> 3603954971</p>
            <p className="text-sm text-gray-700"><strong>Email:</strong> kimminhdai0101@gmail.com</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-[#cc0000] mb-4 border-b border-red-100 pb-2">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#" className="hover:text-[#cc0000]">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-[#cc0000]">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-[#cc0000]">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-[#cc0000]">Bảo mật thông tin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#cc0000] mb-4 border-b border-red-100 pb-2">HOTLINE LIÊN HỆ</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="font-bold">0328.612.865 - Phạm Tiến Hỷ</li>
              <li className="font-bold">0373.489.614 - Mrs Trinh</li>
              <li className="font-bold text-[#cc0000]">0933.935.329 - Mr Linh</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          © {new Date().getFullYear()} Bản quyền thuộc về VZA.com.vn (Kim Minh Đài VN)
        </div>
      </footer>
    </div>
  )
}