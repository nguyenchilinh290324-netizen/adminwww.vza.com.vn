import Image from 'next/image'
import { Search, Phone, ChevronRight, Menu, CheckCircle, Truck, RefreshCcw } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. TOP BAR */}
      <div className="bg-[#cc0000] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>Chào mừng bạn đến với VZA.com.vn</div>
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
              placeholder="Thiết bị kiểm tra..." 
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
      <nav className="max-w-7xl mx-auto px-4 py-3 hidden md:block">
        <ul className="flex items-center gap-8 text-sm font-bold text-gray-800 uppercase pl-[280px]">
          <li><a href="#" className="hover:text-[#cc0000] transition">Trang chủ</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Giới thiệu</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Cửa hàng</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Tin tức & Sự kiện</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Bảo hành</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Hỗ trợ khách hàng</a></li>
          <li><a href="#" className="hover:text-[#cc0000] transition">Liên hệ</a></li>
        </ul>
      </nav>

      {/* 4. HERO SECTION (DANH MỤC + SLIDER) */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Cột trái: Danh mục sản phẩm */}
          <div className="w-full lg:w-[260px] shrink-0">
            <div className="bg-[#cc0000] text-white font-bold py-3 px-4 flex items-center gap-2 uppercase text-sm">
              <Menu size={18} /> Danh mục sản phẩm
            </div>
            <ul className="border border-t-0 border-gray-200 bg-white text-sm">
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🎁</span> Sản phẩm khuyến mại
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
              <li className="p-3.5 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>Thiết bị hàn & trạm khò Yihua</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
            </ul>
          </div>

          {/* Cột giữa: Slider ảnh động */}
          <div className="flex-1 bg-gray-100 rounded-sm overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
            {/* Chèn ảnh slider của bạn vào đây */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-white/50">
              [Ảnh Slider Chính - Thay bằng thẻ img/Image]
            </div>
          </div>

          {/* Cột phải: 2 Banner danh mục nổi bật */}
          <div className="w-full lg:w-[260px] flex flex-col gap-4">
            <div className="h-[192px] bg-slate-800 rounded-sm overflow-hidden relative flex items-center justify-center text-white/50">
               [Ảnh Banner 1]
            </div>
            <div className="h-[192px] bg-slate-800 rounded-sm overflow-hidden relative flex items-center justify-center text-white/50">
               [Ảnh Banner 2]
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (Nền trắng, viền/chữ đỏ) */}
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