"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Search, Phone, ChevronRight, Menu, CheckCircle, 
  Truck, RefreshCcw, ShoppingCart, Star 
} from 'lucide-react'

// Dữ liệu sản phẩm
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

// Từ điển đa ngôn ngữ
const translations = {
  vi: {
    welcome: 'Chào mừng bạn đến với VZA.COM.VN',
    authentic: '100% chính hãng',
    cod: 'Thanh toán khi nhận hàng',
    shipping: 'Giao hàng toàn quốc',
    return: 'Đổi trả trong 7 ngày',
    searchPlaceholder: 'Nhập mã sản phẩm (VD: LX935, YIHUA 982D)...',
    home: 'Trang chủ',
    about: 'Giới thiệu',
    products: 'Sản phẩm',
    news: 'Tin tức & Sự kiện',
    warranty: 'Bảo hành',
    support: 'Hỗ trợ',
    contact: 'Liên hệ',
    categoryTitle: 'Danh mục sản phẩm',
    specialPromo: 'Khuyến mại đặc biệt',
    bestSeller: 'Sản phẩm bán chạy',
    cat1: 'Đo nhiệt độ & độ ẩm CN',
    cat2: 'Thiết bị đo chất lượng khí',
    cat3: 'Thiết bị hàn & trạm khò',
    cat4: 'Vật tư công nghiệp khác',
    highlightTitle: 'Danh mục nổi bật',
    recommendTitle: 'Sản phẩm đề xuất',
    viewAll: 'Xem tất cả »',
    hotline: 'HOTLINE',
    priceContact: 'Liên hệ',
    noProductFound: 'Không tìm thấy sản phẩm nào phù hợp.'
  },
  en: {
    welcome: 'Welcome to VZA.COM.VN',
    authentic: '100% Authentic',
    cod: 'Cash on delivery',
    shipping: 'Nationwide shipping',
    return: '7-day return policy',
    searchPlaceholder: 'Enter product code (e.g. LX935, YIHUA 982D)...',
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    news: 'News & Events',
    warranty: 'Warranty',
    support: 'Support',
    contact: 'Contact',
    categoryTitle: 'Product Categories',
    specialPromo: 'Special Promotions',
    bestSeller: 'Best Sellers',
    cat1: 'Industrial Temp & Humidity',
    cat2: 'Air Quality Monitors',
    cat3: 'Soldering & Rework Stations',
    cat4: 'Other Industrial Supplies',
    highlightTitle: 'Highlighted Categories',
    recommendTitle: 'Recommended Products',
    viewAll: 'View All »',
    hotline: 'HOTLINE',
    priceContact: 'Contact',
    noProductFound: 'No products found.'
  }
}

// Định nghĩa kiểu ngôn ngữ cho TypeScript
type LangType = 'vi' | 'en';

export default function Home() {
  const [lang, setLang] = useState<LangType>('vi'); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredProducts, setFilteredProducts] = useState(mockProducts); 

  const t = translations[lang];

  // Hàm xử lý tìm kiếm
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredProducts(mockProducts);
      return;
    }
    const lowerQuery = searchQuery.toLowerCase();
    const results = mockProducts.filter((product) => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.partNumber.toLowerCase().includes(lowerQuery) ||
      product.spec.toLowerCase().includes(lowerQuery)
    );
    setFilteredProducts(results);
    
    // Tự động cuộn xuống phần sản phẩm khi tìm kiếm
    document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    { name: t.cat1, count: '120+ items', image: '/categories/nhiet-do.png' },
    { name: t.cat2, count: '85+ items', image: '/categories/chat-luong-khi.png' },
    { name: t.cat3, count: '150+ items', image: '/categories/han-kho.png' },
    { name: t.cat4, count: '300+ items', image: '/categories/vat-tu.png' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. TOP BAR */}
      <div className="bg-[#cc0000] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>{t.welcome}</div>
          <div className="hidden md:flex gap-6">
            <span className="flex items-center gap-1"><CheckCircle size={14} /> {t.authentic}</span>
            <span className="flex items-center gap-1"><RefreshCcw size={14} /> {t.cod}</span>
            <span className="flex items-center gap-1"><Truck size={14} /> {t.shipping}</span>
            <span className="flex items-center gap-1"><RefreshCcw size={14} /> {t.return}</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER BAR */}
      <header className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
          
          {/* Logo VZA - Trỏ về trang chủ */}
          <Link href="/" className="flex flex-col items-center justify-center min-w-[120px] cursor-pointer">
            <Image src="/logo.png" alt="VZA Logo" width={50} height={50} className="object-contain" />
            <span className="text-2xl font-black text-[#cc0000] tracking-widest mt-1">VZA</span>
          </Link>

          {/* Thanh tìm kiếm */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl flex">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if(e.target.value === '') setFilteredProducts(mockProducts);
              }}
              placeholder={t.searchPlaceholder}
              className="w-full border-2 border-[#cc0000] border-r-0 px-4 py-2 outline-none focus:bg-gray-50"
            />
            <button type="submit" className="bg-[#cc0000] px-6 text-white transition hover:bg-red-700 flex items-center justify-center">
              <Search size={20} />
            </button>
          </form>

          {/* Hotline & Ngôn ngữ */}
          <div className="flex items-center gap-4 pt-3 lg:pt-0">
            <a 
              href="https://zalo.me/0933935329" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative hidden sm:flex bg-[#cc0000] text-white items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition hover:bg-red-700 shadow-sm mt-3"
            >
              <span className="absolute -top-4 left-3 text-[10px] text-gray-400 font-semibold uppercase">{t.hotline}</span>
              <Phone size={16} /> 0933.935.329
            </a>

            <a 
              href="https://zalo.me/0898997570" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative hidden sm:flex bg-[#cc0000] text-white items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition hover:bg-red-700 shadow-sm mt-3"
            >
              <span className="absolute -top-4 left-3 text-[10px] text-gray-400 font-semibold uppercase">{t.hotline}</span>
              <Phone size={16} /> 0898.997.570
            </a>

            <div className="flex items-center gap-2 font-bold text-sm ml-2 border-l-2 border-gray-200 pl-4 h-full">
              <button 
                onClick={() => setLang('vi')} 
                className={lang === 'vi' ? 'text-[#cc0000]' : 'text-gray-500 hover:text-[#cc0000] transition'}
              >
                VN
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'text-[#cc0000]' : 'text-gray-500 hover:text-[#cc0000] transition'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. NAVIGATION MENU */}
      <nav className="max-w-7xl mx-auto px-4 py-3 hidden md:block border-b border-gray-100">
        <ul className="flex items-center gap-8 text-sm font-bold text-gray-800 uppercase pl-[280px]">
          <li><Link href="/" className="text-[#cc0000] transition">{t.home}</Link></li>
          <li><Link href="#" className="hover:text-[#cc0000] transition">{t.about}</Link></li>
          <li><Link href="#" className="hover:text-[#cc0000] transition">{t.products}</Link></li>
          <li><Link href="#" className="hover:text-[#cc0000] transition">{t.news}</Link></li>
          <li><Link href="#" className="hover:text-[#cc0000] transition">{t.warranty}</Link></li>
          <li><Link href="#" className="hover:text-[#cc0000] transition">{t.support}</Link></li>
          <li><Link href="#" className="hover:text-[#cc0000] transition">{t.contact}</Link></li>
        </ul>
      </nav>

      {/* 4. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-[260px] shrink-0 z-10">
            <div className="bg-[#cc0000] text-white font-bold py-3 px-4 flex items-center gap-2 uppercase text-sm rounded-t-md">
              <Menu size={18} /> {t.categoryTitle}
            </div>
            <ul className="border border-t-0 border-gray-200 bg-white text-sm rounded-b-md shadow-sm">
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🎁</span> {t.specialPromo}
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🔥</span> {t.bestSeller}
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>{t.cat1}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>{t.cat2}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>{t.cat3}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
              <li className="p-3.5 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group">
                <span>{t.cat4}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#cc0000]" />
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-gray-100 rounded-sm overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <img src="/slider-1.jpg" alt="VZA Slider" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-[260px] flex flex-col gap-4">
            <div className="h-[192px] bg-gray-100 rounded-sm overflow-hidden relative flex items-center justify-center">
               <img src="/banner-1.jpg" alt="VZA Banner 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[192px] bg-gray-100 rounded-sm overflow-hidden relative flex items-center justify-center">
               <img src="/banner-2.jpg" alt="VZA Banner 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATEGORY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-black text-gray-800 uppercase mb-6 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
          {t.highlightTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#cc0000] hover:shadow-md transition bg-white group">
              
              {/* Box chứa ảnh - Sử dụng thẻ Image của Next.js */}
              <div className="h-16 w-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  width={120} 
                  height={120} 
                  className="object-contain"
                />
              </div>

              <h3 className="font-bold text-gray-800 group-hover:text-[#cc0000] transition">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRODUCT GRID */}
      <section id="product-section" className="max-w-7xl mx-auto px-4 py-8 mb-12">
        <div className="flex justify-between items-end border-b-2 border-[#cc0000] pb-2 mb-6">
          <h2 className="text-2xl font-black text-gray-800 uppercase flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
            {t.recommendTitle}
          </h2>
          <a href="#" className="text-sm font-bold text-[#cc0000] hover:underline hidden sm:block">{t.viewAll}</a>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="border border-gray-200 rounded-md bg-white hover:shadow-xl hover:border-[#cc0000] transition duration-300 flex flex-col relative group">
                
                <div className="absolute top-2 left-2 bg-[#cc0000] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">
                  {product.badge}
                </div>

                <div className="h-48 bg-gray-50 p-4 flex items-center justify-center relative overflow-hidden rounded-t-md">
                  <div className="text-gray-400 text-xs text-center border-2 border-dashed border-gray-300 w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    [Ảnh {product.partNumber}]
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[11px] text-gray-500 mb-1">{product.brand}</span>
                  <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cc0000] transition line-clamp-2">
                    {product.name}
                  </h3>
                  
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
                      <span className="text-lg font-black text-[#cc0000]">{product.price === 'Liên hệ' ? t.priceContact : product.price}</span>
                      <button className="bg-gray-100 hover:bg-[#cc0000] hover:text-white p-2 rounded-full transition text-gray-600">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-md">
            {t.noProductFound}
          </div>
        )}
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
          © {new Date().getFullYear()} Bản quyền thuộc về VZA.COM.VN (Kim Minh Đài VN)
        </div>
      </footer>
    </div>
  )
}