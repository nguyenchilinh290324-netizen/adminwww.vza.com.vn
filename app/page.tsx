"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Search, Phone, ChevronRight, Menu, CheckCircle, 
  Truck, RefreshCcw, ShoppingCart, Star 
} from 'lucide-react'

// Thêm categoryId và slug chuẩn SEO vào từng sản phẩm
const mockProducts = [
  {
    partNumber: 'LX935',
    categoryId: 'cat1',
    slug: 'dong-ho-do-nhiet-am-cong-nghiep-lx935',
    name: 'Đồng hồ đo nhiệt ẩm công nghiệp (Cảm biến ngoài)',
    brand: 'QINGMAI',
    spec: '-40~80°C · 0~99.9%RH · ±0.3°C · Đầu dò dây dài 3m',
    price: 'Liên hệ',
    image: '/images/lx935.png',
    badge: 'BÁN CHẠY',
  },
  {
    partNumber: 'RC919',
    categoryId: 'cat1',
    slug: 'man-hinh-hien-thi-nhiet-am-led-co-lon',
    name: 'Màn hình hiển thị nhiệt ẩm LED cỡ lớn',
    brand: 'QINGMAI',
    spec: 'Kích thước 600x400mm · Hỗ trợ chuẩn RS485 Modbus',
    price: 'Liên hệ',
    image: '/images/rc919.png',
    badge: 'ĐỘ CHÍNH XÁC CAO',
  },
  {
    partNumber: 'RC5001',
    categoryId: 'cat2',
    slug: 'may-do-chat-luong-khong-khi-de-ban-co2-pm25',
    name: 'Máy đo chất lượng không khí để bàn (CO2/PM2.5)',
    brand: 'RONGCE',
    spec: 'Pin sạc 2000mAh · Cổng Type-C · Cảm biến đa chỉ tiêu',
    price: 'Liên hệ',
    image: '/images/rc5001.png',
    badge: 'SẴN HÀNG',
  },
  {
    partNumber: 'YIHUA 982D',
    categoryId: 'cat3',
    slug: 'tram-han-vi-mach-thong-minh-cao-cap',
    name: 'Trạm hàn vi mạch thông minh cao cấp',
    brand: 'YIHUA',
    spec: 'Tay hàn chuẩn C245 · Gia tốc cực nhanh · Màn hình KTS',
    price: 'Liên hệ',
    image: '/images/982d.png',
    badge: 'TOP RATED',
  },
  {
    partNumber: 'YIHUA 3005D III',
    categoryId: 'cat4',
    slug: 'nguon-dc-on-dinh-dong-dien-dieu-chinh-cao-cap',
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
    cat1: 'QINGMAI', 
    cat2: 'RONGCE', 
    cat3: 'YIHUA', 
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
    cat1: 'QINGMAI', 
    cat2: 'RONGCE', 
    cat3: 'YIHUA', 
    cat4: 'Other Industrial Supplies',
    highlightTitle: 'Highlighted Categories',
    recommendTitle: 'Recommended Products',
    viewAll: 'View All »',
    hotline: 'HOTLINE',
    priceContact: 'Contact',
    noProductFound: 'No products found.'
  }
}

type LangType = 'vi' | 'en';

export default function Home() {
  const [lang, setLang] = useState<LangType>('vi'); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredProducts, setFilteredProducts] = useState(mockProducts); 

  const t = translations[lang];

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
    
    document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    { name: t.cat1, count: '120+ items', image: '/images/categories/nhiet-do.png' },
    { name: t.cat2, count: '85+ items', image: "/images/categories/chat-luong-khi.png" },
    { name: t.cat3, count: '150+ items', image: '/images/categories/hankho.png' },
    { name: t.cat4, count: '300+ items', image: '/images/categories/vat-tu.png' },
  ];

  const mainCategoryBlocks = [
    {
      id: 'cat1',
      title: t.cat1,
      slug: 'do-nhiet-do-do-am',
      subCategories: [
        { name: 'Nhiệt ẩm kế tự ghi', slug: 'nhiet-am-ke-tu-ghi' },
        { name: 'Đồng hồ nhiệt độ', slug: 'dong-ho-nhiet-do' },
        { name: 'Cảm biến công nghiệp', slug: 'cam-bien-cong-nghiep' },
      ]
    },
    {
      id: 'cat2',
      title: t.cat2,
      slug: 'thiet-bi-do-chat-luong-khi',
      subCategories: [
        { name: 'Máy đo CO2', slug: 'may-do-co2' },
        { name: 'Máy đo bụi PM2.5', slug: 'may-do-bui-pm25' },
      ]
    },
    {
      id: 'cat3',
      title: t.cat3,
      slug: 'thiet-bi-han-tram-kho',
      subCategories: [
        { name: 'Trạm hàn vi mạch', slug: 'tram-han-vi-mach' },
        { name: 'Máy khò nhiệt', slug: 'may-kho-nhiet' },
        { name: 'Mũi hàn / Phụ kiện', slug: 'phu-kien-han' },
      ]
    },
    {
      id: 'cat4',
      title: t.cat4,
      slug: 'vat-tu-cong-nghiep-khac',
      subCategories: [
        { name: 'Nguồn DC', slug: 'nguon-dc' },
        { name: 'Kính hiển vi', slug: 'kinh-hien-vi' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="sticky top-0 z-50 w-full flex flex-col bg-white shadow-sm">
        
        {/* TOP BAR */}
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

        {/* HEADER BAR */}
        <header className="bg-white py-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
            <Link href="/" className="flex flex-col items-center justify-center min-w-[120px] cursor-pointer">
              <Image src="/logo.png" alt="VZA Logo" width={50} height={50} className="object-contain" />
              <span className="text-2xl font-black text-[#cc0000] tracking-widest mt-1">VZA</span>
            </Link>

           <form onSubmit={handleSearch} className="w-full lg:flex-1 lg:max-w-2xl flex order-last lg:order-none mt-4 lg:mt-0">
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

            <div className="flex items-center gap-4 pt-3 lg:pt-0">
              <a href="https://zalo.me/0933935329" target="_blank" rel="noopener noreferrer" className="relative hidden sm:flex bg-[#cc0000] text-white items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition hover:bg-red-700 shadow-sm mt-3">
                <span className="absolute -top-4 left-3 text-[10px] text-gray-400 font-semibold uppercase">{t.hotline}</span>
                <Phone size={16} /> 0933.935.329
              </a>

              <a href="https://zalo.me/0898997570" target="_blank" rel="noopener noreferrer" className="relative hidden sm:flex bg-[#cc0000] text-white items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition hover:bg-red-700 shadow-sm mt-3">
                <span className="absolute -top-4 left-3 text-[10px] text-gray-400 font-semibold uppercase">{t.hotline}</span>
                <Phone size={16} /> 0898.997.570
              </a>

              <div className="flex items-center gap-2 font-bold text-sm ml-2 border-l-2 border-gray-200 pl-4 h-full">
                <button onClick={() => setLang('vi')} className={lang === 'vi' ? 'text-[#cc0000]' : 'text-gray-500 hover:text-[#cc0000] transition'}>VN</button>
                <span className="text-gray-300">|</span>
                <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-[#cc0000]' : 'text-gray-500 hover:text-[#cc0000] transition'}>EN</button>
              </div>
            </div>
          </div>
        </header>

        {/* NAVIGATION MENU */}
<div className="border-b border-gray-100 bg-white">
  <ul className="flex md:justify-center items-center gap-4 md:gap-8 text-sm font-bold text-gray-800 uppercase py-3 max-w-7xl mx-auto px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <li><Link href="/" className="text-[#cc0000] transition">{t.home}</Link></li>
            <li><Link href="/gioi-thieu" className="hover:text-[#cc0000] transition">{t.about}</Link></li>
            <li><Link href="/san-pham" className="hover:text-[#cc0000] transition">{t.products}</Link></li>
            <li><Link href="/tin-tuc" className="hover:text-[#cc0000] transition">{t.news}</Link></li>
            <li><Link href="/bao-hanh" className="hover:text-[#cc0000] transition">{t.warranty}</Link></li>
            <li><Link href="/ho-tro" className="hover:text-[#cc0000] transition">{t.support}</Link></li>
            <li><Link href="/lien-he" className="hover:text-[#cc0000] transition">{t.contact}</Link></li>
          </ul>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-[260px] shrink-0 z-10">
            <div className="bg-[#cc0000] text-white font-bold py-3 px-4 flex items-center gap-2 uppercase text-sm rounded-t-md">
              <Menu size={18} /> {t.categoryTitle}
            </div>
            
            <ul className="border border-t-0 border-gray-200 bg-white text-sm rounded-b-md shadow-sm relative">
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🎁</span> {t.specialPromo}
              </li>
              <li className="p-3.5 border-b border-gray-100 hover:text-[#cc0000] flex items-center gap-3 cursor-pointer group">
                <span className="text-red-500 group-hover:scale-110 transition">🔥</span> {t.bestSeller}
              </li>

              {/* MENU CẤP 1: QINGMAI */}
              <li className="p-3.5 border-b border-gray-100 flex justify-between items-center cursor-pointer group/main relative hover:text-[#cc0000] hover:bg-gray-50 transition-colors">
                <span className="font-medium">{t.cat1}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover/main:text-[#cc0000]" />

                {/* MENU CẤP 2: QINGMAI */}
                <div className="absolute left-[100%] lg:top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover/main:block z-50 text-gray-800 rounded-r-md">
                  <ul className="py-2">
                    <li className="px-4 py-3 flex justify-between items-center cursor-pointer group/sub relative hover:text-[#cc0000] hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <span>Đo nhiệt độ độ ẩm</span>
                      <ChevronRight size={14} className="text-gray-400 group-hover/sub:text-[#cc0000]" />
                      
                      {/* MENU CẤP 3: DANH SÁCH SẢN PHẨM QINGMAI */}
                      <div className="absolute left-[100%] lg:top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover/sub:block z-50 rounded-r-md">
                        <div className="px-4 py-3 font-bold text-gray-500 bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider">
                          Danh Sách Sản Phẩm
                        </div>
                        <ul className="py-2 max-h-[300px] overflow-y-auto">
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/lx915" className="block hover:text-[#cc0000]">LX915 - Cảm biến nhiệt ẩm</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/dong-ho-do-nhiet-am-cong-nghiep-lx935" className="block hover:text-[#cc0000]">LX935 - Đồng hồ nhiệt ẩm CN</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/man-hinh-hien-thi-nhiet-am-led-co-lon" className="block hover:text-[#cc0000]">RC919 - Màn hình LED</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              {/* MENU CẤP 1: RONGCE */}
              <li className="p-3.5 border-b border-gray-100 flex justify-between items-center cursor-pointer group/main2 relative hover:text-[#cc0000] hover:bg-gray-50 transition-colors">
                <span className="font-medium">{t.cat2}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover/main2:text-[#cc0000]" />
                
                {/* MENU CẤP 2: RONGCE */}
                <div className="absolute left-[100%] lg:top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover/main2:block z-50 text-gray-800 rounded-r-md">
                  <ul className="py-2">
                    <li className="px-4 py-3 flex justify-between items-center cursor-pointer group/sub2 relative hover:text-[#cc0000] hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <span>Thiết bị đo chất lượng khí</span>
                      <ChevronRight size={14} className="text-gray-400 group-hover/sub2:text-[#cc0000]" />
                      
                      {/* MENU CẤP 3: DANH SÁCH SẢN PHẨM RONGCE */}
                      <div className="absolute left-[100%] lg:top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover/sub2:block z-50 rounded-r-md">
                        <div className="px-4 py-3 font-bold text-gray-500 bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider">
                          Danh Sách Sản Phẩm
                        </div>
                        <ul className="py-2 max-h-[300px] overflow-y-auto">
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/may-do-chat-luong-khong-khi-de-ban-co2-pm25" className="block hover:text-[#cc0000]">RC5001 - Máy đo CO2/PM2.5</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/rc102" className="block hover:text-[#cc0000]">RC102 - Máy đo khí cầm tay</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              {/* MENU CẤP 1: YIHUA */}
              <li className="p-3.5 border-b border-gray-100 flex justify-between items-center cursor-pointer group/main3 relative hover:text-[#cc0000] hover:bg-gray-50 transition-colors">
                <span className="font-medium">{t.cat3}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover/main3:text-[#cc0000]" />
                
                {/* MENU CẤP 2: YIHUA */}
                <div className="absolute left-[100%] lg:top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover/main3:block z-50 text-gray-800 rounded-r-md">
                  <ul className="py-2">
                    <li className="px-4 py-3 flex justify-between items-center cursor-pointer group/sub3 relative hover:text-[#cc0000] hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <span>Thiết bị hàn & trạm khò</span>
                      <ChevronRight size={14} className="text-gray-400 group-hover/sub3:text-[#cc0000]" />
                      
                      {/* MENU CẤP 3: DANH SÁCH SẢN PHẨM YIHUA */}
                      <div className="absolute left-[100%] lg:top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover/sub3:block z-50 rounded-r-md">
                        <div className="px-4 py-3 font-bold text-gray-500 bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider">
                          Danh Sách Sản Phẩm
                        </div>
                        <ul className="py-2 max-h-[300px] overflow-y-auto">
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/tram-han-vi-mach-thong-minh-cao-cap" className="block hover:text-[#cc0000]">YIHUA 982D - Trạm hàn</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-50 transition">
                            <Link href="/san-pham/nguon-dc-on-dinh-dong-dien-dieu-chinh-cao-cap" className="block hover:text-[#cc0000]">YIHUA 3005D III - Nguồn DC</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              {/* MENU CẤP 1: VẬT TƯ KHÁC */}
              <li className="p-3.5 hover:text-[#cc0000] flex justify-between items-center cursor-pointer group hover:bg-gray-50 transition-colors rounded-b-md">
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

      {/* CATEGORY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-black text-gray-800 uppercase mb-6 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
          {t.highlightTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#cc0000] hover:shadow-md transition bg-white group">
              <div className="h-32 w-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  width={200} 
                  height={200} 
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-[#cc0000] transition">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="product-section" className="max-w-7xl mx-auto px-4 py-8 mb-12">
        <div className="flex justify-between items-end border-b-2 border-[#cc0000] pb-2 mb-6">
          <h2 className="text-2xl font-black text-gray-800 uppercase flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
            {t.recommendTitle}
          </h2>
          <Link href="/san-pham" className="text-sm font-bold text-[#cc0000] hover:underline hidden sm:block">{t.viewAll}</Link>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="border border-gray-200 rounded-md bg-white hover:shadow-xl hover:border-[#cc0000] transition duration-300 flex flex-col relative group">
                <div className="absolute top-2 left-2 bg-[#cc0000] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 pointer-events-none">
                  {product.badge}
                </div>

                <Link href={`/san-pham/${product.slug}`} title={product.name} prefetch={false} className="h-48 bg-white p-4 flex items-center justify-center relative overflow-hidden rounded-t-md block">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={200} 
                    height={200} 
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                  />
                </Link>

                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[11px] text-gray-500 mb-1">{product.brand}</span>
                  <Link href={`/san-pham/${product.slug}`} prefetch={false} className="block">
                    <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cc0000] transition line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
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
                      <button className="bg-gray-100 hover:bg-[#cc0000] hover:text-white p-2 rounded-full transition text-gray-600 relative z-10">
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

      {/* KHỐI DANH MỤC CHÍNH VÀ DANH MỤC CON */}
      {mainCategoryBlocks.map((block, index) => {
        const productsInBlock = mockProducts.filter(p => p.categoryId === block.id);
        
        return (
          <section key={block.id} className="max-w-7xl mx-auto px-4 py-6 mb-4">
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-end border-b-2 border-[#cc0000] pb-2 mb-6 gap-4">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase flex items-center gap-3 whitespace-nowrap">
                <span className="w-1.5 h-6 bg-[#cc0000] inline-block"></span>
                {block.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-sm font-medium">
                {block.subCategories.map((sub, sIdx) => (
                  <Link 
                    key={sIdx} 
                    href={`/danh-muc/${block.slug}/${sub.slug}`} 
                    className="text-gray-600 hover:text-[#cc0000] transition"
                  >
                    {sub.name}
                  </Link>
                ))}
                <Link 
                  href={`/danh-muc/${block.slug}`} 
                  className="text-[#cc0000] font-bold hover:underline ml-auto lg:ml-4"
                >
                  {t.viewAll}
                </Link>
              </div>
            </div> 
          
            {productsInBlock.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {productsInBlock.map((product, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-md bg-white hover:shadow-xl hover:border-[#cc0000] transition duration-300 flex flex-col relative group">
                    <div className="absolute top-2 left-2 bg-[#cc0000] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 pointer-events-none">
                      {product.badge}
                    </div>

                    <Link href={`/san-pham/${product.slug}`} title={product.name} prefetch={false} className="h-48 bg-white p-4 flex items-center justify-center relative overflow-hidden rounded-t-md block">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={200} 
                        height={200} 
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                      />
                    </Link>

                    <div className="p-4 flex flex-col flex-1">
                      <span className="text-[11px] text-gray-500 mb-1">{product.brand}</span>
                      <Link href={`/san-pham/${product.slug}`} prefetch={false} className="block">
                        <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cc0000] transition line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-[11px] text-gray-600 bg-gray-50 p-2 rounded-sm mb-3 line-clamp-2">
                        {product.spec}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-black text-[#cc0000]">{product.price === 'Liên hệ' ? t.priceContact : product.price}</span>
                          <button className="bg-gray-100 hover:bg-[#cc0000] hover:text-white p-2 rounded-full transition text-gray-600 relative z-10">
                            <ShoppingCart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-md text-sm">
                Đang cập nhật sản phẩm cho danh mục này.
              </div>
            )}
          </section>
        );
      })}

      {/* FOOTER */}
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
              <li><Link href="#" className="hover:text-[#cc0000]">Hướng dẫn mua hàng</Link></li>
              <li><Link href="#" className="hover:text-[#cc0000]">Chính sách bảo hành</Link></li>
              <li><Link href="#" className="hover:text-[#cc0000]">Chính sách đổi trả</Link></li>
              <li><Link href="#" className="hover:text-[#cc0000]">Bảo mật thông tin</Link></li>
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