import { cookies } from 'next/headers'
import * as LanguageToggleComponent from '@/components/language-toggle'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Headphones,
  PackageCheck,
  Search,
  ShoppingCart,
  Truck,
} from 'lucide-react'

const mockProducts = [
  // 1. Nhóm Thiết bị đo nhiệt độ & độ ẩm công nghiệp (RongCE / Qingmai)
  {
    name: 'Industrial Thermo-Hygrometer (External Probe)',
    partNumber: 'LX935',
    brand: 'RongCE / QINGMAI',
    category: 'Industrial Thermo-Hygrometer',
    spec: '-40~80°C · 0~99.9%RH · ±0.3°C · External probe 3m',
    price: 'Contact for price',
    image: '/images/lx935.png', // <-- Đường dẫn ảnh
    badge: 'BEST SELLER',
  },
  {
    name: 'Large Screen Temp & Humidity Indicator',
    partNumber: 'RC919',
    brand: 'RongCE / QINGMAI',
    category: 'Industrial Thermo-Hygrometer',
    spec: '600x400x32mm · RS485 support · High precision chip',
    price: 'Contact for price',
    image: '/images/rc919.png',
    badge: 'HIGH ACCURACY',
  },
  {
    name: 'Multi-functional Temp & Humidity Display',
    partNumber: 'LX952',
    brand: 'RongCE / QINGMAI',
    category: 'Industrial Thermo-Hygrometer',
    spec: '390x280x30mm · Date/Time display · 5V 1A power',
    price: 'Contact for price',
    image: '/images/lx952.png',
    badge: 'POPULAR',
  },
  {
    name: 'WiFi Industrial Thermo-Hygrometer',
    partNumber: 'LX915W',
    brand: 'RongCE / QINGMAI',
    category: 'Industrial Thermo-Hygrometer',
    spec: 'APP remote monitoring · Data export · External probe',
    price: 'Contact for price',
    image: '/images/lx915w.png',
    badge: 'SMART WIFI',
  },

  // 2. Nhóm Thiết bị đo chất lượng không khí (Air Quality & Gas Detectors)
  {
    name: 'Air Quality Detector (CO2 / PM2.5 / HCHO)',
    partNumber: 'RC5001',
    brand: 'RongCE / QINGMAI',
    category: 'Air Quality & Gas Detectors',
    spec: 'Built-in 2000mAh battery · Type-C · 115x138x28mm',
    price: 'Contact for price',
    image: '/images/rc5001.png',
    badge: 'IN STOCK',
  },
  {
    name: 'Formaldehyde & TVOC Detector',
    partNumber: 'RC5020',
    brand: 'RongCE / QINGMAI',
    category: 'Air Quality & Gas Detectors',
    spec: 'Semiconductor gas sensor · Circular ring display',
    price: 'Contact for price',
    image: '/images/rc5020.png',
    badge: 'NEW MODEL',
  },
  {
    name: 'Industrial Air Quality Monitor',
    partNumber: 'LX962',
    brand: 'RongCE / QINGMAI',
    category: 'Air Quality & Gas Detectors',
    spec: 'CO2, TVOC, PM2.5, HCHO, Temp & Humidity integration',
    price: 'Contact for price',
    image: '/images/lx962.png',
    badge: 'PRO GRADE',
  },

  // 3. Nhóm Thiết bị hàn & trạm khò điện tử chuyên dụng (Yihua)
  {
    name: 'High Precision Soldering & Rework Station',
    partNumber: 'YIHUA 982D',
    brand: 'YIHUA',
    category: 'Welding & Rework Equipment',
    spec: 'C245 precision handle · Rapid heating · Digital control',
    price: 'Contact for price',
    image: '/images/982d.png',
    badge: 'TOP RATED',
  },
  {
    name: 'Dual Display Soldering & Desoldering Station',
    partNumber: 'YIHUA 938BD+',
    brand: 'YIHUA',
    category: 'Welding & Rework Equipment',
    spec: 'Simultaneous iron & hot tweezers · LED digital display',
    price: 'Contact for price',
    image: '/images/938bd.png',
    badge: 'BEST VALUE',
  },
  {
    name: 'Heavy Duty DC Regulated Power Supply',
    partNumber: 'YIHUA 3005D III',
    brand: 'YIHUA',
    category: 'Welding & Rework Equipment',
    spec: '30V 5A adjustable · Low ripple · Short circuit protection',
    price: 'Contact for price',
    image: '/images/3005d.png',
    badge: 'LAB GRADE',
  }
]

const categories = [
  { 
    name: 'Industrial Thermo-Hygrometers', 
    nameVi: 'Đo nhiệt độ & độ ẩm công nghiệp', 
    note: 'LED displays, high-precision sensors & remote monitoring', 
    noteVi: 'Màn hình LED lớn, cảm biến độ chính xác cao & giám sát từ xa', 
    image: '/images/cat-temp.png', 
    count: '1,200+' 
  },
  { 
    name: 'Air Quality & Gas Detectors', 
    nameVi: 'Thiết bị đo chất lượng không khí', 
    note: 'CO2, PM2.5, HCHO, TVOC & environmental monitors', 
    noteVi: 'Máy đo khí CO2, bụi mịn PM2.5, formaldehyde & cảm biến khí độc', 
    image: '/images/cat-air.png', 
    count: '850+' 
  },
  { 
    name: 'Welding & Rework Equipment', 
    nameVi: 'Thiết bị hàn & trạm khò Yihua', 
    note: 'Soldering stations, hot air guns & DC power supplies', 
    noteVi: 'Trạm hàn tinh vi C245, máy khò, hút khói & nguồn DC ổn định', 
    image: '/images/cat-weld.png', 
    count: '1,500+' 
  },
]

const assurances = [
  { title: 'Fast delivery', titleVi: 'Giao hàng nhanh', detail: 'Reliable dispatch to keep production moving.', detailVi: 'Giao hàng đúng hẹn, duy trì hoạt động sản xuất.', icon: Truck },
  { title: 'Genuine quality', titleVi: 'Hàng chính hãng', detail: 'Sourced from authorized brand partners (RongCE & Yihua).', detailVi: 'Nhập khẩu chính hãng trực tiếp từ nhà sản xuất RongCE và Yihua.', icon: BadgeCheck },
  { title: 'CO / CQ documentation', titleVi: 'Chứng từ CO / CQ', detail: 'Traceable certificates available on request.', detailVi: 'Cung cấp đầy đủ chứng từ xuất xứ và chất lượng theo yêu cầu.', icon: PackageCheck },
  { title: 'Technical support', titleVi: 'Hỗ trợ kỹ thuật', detail: 'Practical help from people who know the parts.', detailVi: 'Tư vấn kỹ thuật tận tâm từ đội ngũ am hiểu thiết bị đo lường & điện tử.', icon: Headphones },
]

const productTranslations: Record<string, { name: string; category: string; spec: string; badge: string }> = {
  'LX935': { name: 'Đồng hồ đo nhiệt ẩm công nghiệp (Cảm biến ngoài)', category: 'Đo nhiệt độ & độ ẩm công nghiệp', spec: '-40~80°C · 0~99.9%RH · ±0.3°C · Đầu dò dây dài 3m', badge: 'BÁN CHẠY' },
  'RC919': { name: 'Màn hình hiển thị nhiệt ẩm LED cỡ lớn', category: 'Đo nhiệt độ & độ ẩm công nghiệp', spec: 'Kích thước 600x400mm · Hỗ trợ chuẩn RS485 Modbus', badge: 'ĐỘ CHÍNH XÁC CAO' },
  'LX952': { name: 'Thiết bị hiển thị nhiệt độ độ ẩm & thời gian', category: 'Đo nhiệt độ & độ ẩm công nghiệp', spec: 'Màn hình lớn hiển thị lịch/thời gian · Nguồn 5V 1A', badge: 'PHỔ BIẾN' },
  'LX915W': { name: 'Đồng hồ nhiệt ẩm công nghiệp tích hợp WiFi', category: 'Đo nhiệt độ & độ ẩm công nghiệp', spec: 'Hỗ trợ app điện thoại giám sát từ xa & xuất dữ liệu', badge: 'THÔNG MINH WIFI' },
  'RC5001': { name: 'Máy đo chất lượng không khí để bàn (CO2/PM2.5)', category: 'Thiết bị đo chất lượng không khí', spec: 'Pin sạc 2000mAh · Cổng Type-C · Cảm biến đa chỉ tiêu', badge: 'SẴN HÀNG' },
  'RC5020': { name: 'Máy đo khí Formaldehyde & TVOC cầm tay', category: 'Thiết bị đo chất lượng không khí', spec: 'Cảm biến bán nhạy khí · Vòng hiển thị LED trực quan', badge: 'MẪU MỚI' },
  'LX962': { name: 'Hệ thống đo đa chỉ tiêu chất lượng không khí', category: 'Thiết bị đo chất lượng không khí', spec: 'Đo đồng thời CO2, TVOC, PM2.5, HCHO, Nhiệt độ & Độ ẩm', badge: 'CHUYÊN DỤNG' },
  'YIHUA 982D': { name: 'Trạm hàn vi mạch thông minh cao cấp', category: 'Thiết bị hàn & trạm khò Yihua', spec: 'Tay hàn chuẩn C245 · Gia tốc cực nhanh · Màn hình kỹ thuật số', badge: 'ĐỈNH CAO' },
  'YIHUA 938BD+': { name: 'Trạm hàn kết hợp nhíp nhiệt gắp linh kiện', category: 'Thiết bị hàn & trạm khò Yihua', spec: 'Hàn và gắp linh kiện SMD đồng thời · Kiểm soát nhiệt PID', badge: 'TỐI ƯU' },
  'YIHUA 3005D III': { name: 'Nguồn DC ổn định dòng điện điều chỉnh cao cấp', category: 'Thiết bị hàn & trạm khò Yihua', spec: 'Điện áp 30V 5A · Chống đoản mạch · Hiển thị LED 4 số', badge: 'CHUẨN PHÒNG LAB' },
}

type PageProps = { searchParams: Promise<{ q?: string }> }

export default async function Page({ searchParams }: PageProps) {
  const [{ q = '' }, cookieStore] = await Promise.all([searchParams, cookies()])
  const isVietnamese = cookieStore.get('site_language')?.value !== 'en'
  const searchQuery = q.trim().slice(0, 120)
  const normalizedQuery = searchQuery.toLowerCase()
  const products = normalizedQuery
    ? mockProducts.filter((product) =>
        [product.name, product.partNumber, product.brand, product.category, product.spec]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : mockProducts

  return (
    <main lang={isVietnamese ? 'vi' : 'en'} className="min-h-screen bg-[#f5f7f9] text-[#182432]">
      <div className="bg-[#10263d] px-4 py-2 text-center text-[11px] font-medium tracking-[0.08em] text-white/80 sm:text-xs">
        {isVietnamese ? 'GIẢI PHÁP THIẾT BỊ ĐO LƯỜNG & TỰ ĐỘNG HÓA CHÍNH HÃNG' : 'OFFICIAL INDUSTRIAL MEASUREMENT & AUTOMATION SUPPLY'} <span className="mx-2 text-[#f28a35]">/</span> {isVietnamese ? 'ĐẠI LÝ PHÂN PHỐI RONGCE & YIHUA' : 'AUTHORIZED RONGCE & YIHUA DISTRIBUTOR'}
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-3 lg:px-8">
          <a href="#top" aria-label="VZA Industrial home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#10263d] font-bold text-white">V</span>
            <span className="block text-[18px] font-extrabold tracking-[0.11em] text-[#142b42]">VZA VẬT TƯ</span>
          </a>
          <nav aria-label={isVietnamese ? 'Điều hướng chính' : 'Main navigation'} className="hidden items-center gap-8 text-[13px] font-semibold text-slate-600 lg:flex">
            <a className="transition hover:text-[#e7792a]" href="#categories">{isVietnamese ? 'Danh mục' : 'Categories'}</a>
            <a className="transition hover:text-[#e7792a]" href="#products">{isVietnamese ? 'Sản phẩm' : 'Products'}</a>
            <a className="transition hover:text-[#e7792a]" href="#about">{isVietnamese ? 'Thương hiệu' : 'Our brands'}</a>
            <a className="transition hover:text-[#e7792a]" href="#rfq">{isVietnamese ? 'Liên hệ' : 'Contact'}</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            {LanguageToggleComponent.default ? <LanguageToggleComponent.default isVietnamese={isVietnamese} /> : <LanguageToggleComponent.LanguageToggle isVietnamese={isVietnamese} />}
            <a href="#products" aria-label={isVietnamese ? 'Xem sản phẩm' : 'Browse products'} className="flex size-10 items-center justify-center rounded-md bg-[#e7792a] text-white transition hover:bg-[#cf671c]">
              <ShoppingCart className="size-4" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#112a43]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,29,48,.96)_0%,rgba(13,38,61,.88)_42%,rgba(13,38,61,.14)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-cover bg-[center_54%]" style={{ backgroundImage: "url('/industrial-automation-hero.png')" }} />
        <div className="mx-auto grid min-h-[510px] max-w-[1320px] items-center px-5 py-16 lg:min-h-[570px] lg:px-8">
          <div className="max-w-[660px]">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-[#f6a15f]">
              <span className="h-px w-8 bg-[#f28a35]" /> {isVietnamese ? 'THIẾT BỊ ĐO LƯỜNG & HÀN CÔNG NGHIỆP' : 'INDUSTRIAL MEASUREMENT & SOLDERING SOLUTIONS'}
            </div>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]">
              {isVietnamese ? 'Giải pháp Đo lường & Thiết bị Hàn chuyên dụng' : 'Professional Measurement & Soldering Solutions'}
            </h1>
            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-200 sm:text-base">
              {isVietnamese 
                ? 'Phân phối chính hãng thiết bị đo nhiệt độ, độ ẩm RongCE, máy đo chất lượng không khí và trạm hàn điện tử Yihua chất lượng cao.' 
                : 'Official distributor of RongCE temperature/humidity instruments, air quality detectors, and Yihua professional soldering stations.'}
            </p>
            <form action="#products" method="get" role="search" className="mt-8 flex max-w-[600px] items-center rounded-lg bg-white p-1.5 shadow-xl shadow-black/20">
              <Search className="ml-3 size-[18px] shrink-0 text-slate-400" />
              <label htmlFor="hero-search" className="sr-only">{isVietnamese ? 'Tìm theo mã sản phẩm hoặc từ khóa' : 'Search by part number or keyword'}</label>
              <input id="hero-search" name="q" defaultValue={searchQuery} placeholder={isVietnamese ? 'Tìm mã model (VD: LX935, RC919, 982D)...' : 'Search part number or keyword...'} className="w-full bg-transparent px-3 py-2.5 text-xs text-slate-800 focus:outline-none sm:text-sm" />
              <button className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#e7792a] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#cf671c] sm:px-5">
                {isVietnamese ? 'Tìm kiếm' : 'Search'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d86c21]">{isVietnamese ? 'TÌM NHANH SẢN PHẨM' : 'QUICK FIND'}</p>
            <h2 className="text-2xl font-bold tracking-tight text-[#142b42] sm:text-3xl">{isVietnamese ? 'Danh mục thiết bị chính' : 'Main instrument categories'}</h2>
          </div>
          <a href="#products" className="text-xs font-bold text-[#e7792a] transition hover:underline">{isVietnamese ? 'Xem tất cả sản phẩm ->' : 'View all products ->'}</a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, nameVi, note, noteVi, image, count }) => (
            <a key={name} href="#products" className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#e7792a] hover:shadow-md">
              <div className="flex items-start justify-between">
                {/* Thay thế icon danh mục bằng khung ảnh */}
                <div className="flex size-14 items-center justify-center rounded-lg bg-slate-50 p-2 transition group-hover:bg-orange-50">
                  <img src={image} alt={name} className="h-full w-full object-contain mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                </div>
                <span className="text-xs font-semibold text-slate-400">{count} {isVietnamese ? 'MODEL' : 'ITEMS'}</span>
              </div>
              <h3 className="mt-4 text-base font-bold text-[#142b42] group-hover:text-[#e7792a]">{isVietnamese ? nameVi : name}</h3>
              <p className="mt-1 text-xs text-slate-500">{isVietnamese ? noteVi : note}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {assurances.map(({ title, titleVi, detail, detailVi, icon: Icon }) => (
            <div key={title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#10263d]/5 text-[#10263d]">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#142b42]">{isVietnamese ? titleVi : title}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{isVietnamese ? detailVi : detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d86c21]">{isVietnamese ? 'PHỤC VỤ HỆ THỐNG CÔNG NGHIỆP' : 'INDUSTRIAL CATALOG'}</p>
            <h2 className="text-2xl font-bold tracking-tight text-[#142b42] sm:text-3xl">{isVietnamese ? 'Danh mục sản phẩm & Thông số' : 'Products & Specifications'}</h2>
          </div>
        </div>
        {searchQuery && (
          <p className="mb-5 text-sm text-slate-600">
            {isVietnamese ? `Tìm thấy ${products.length} kết quả cho "${searchQuery}"` : `Found ${products.length} results for "${searchQuery}"`}
          </p>
        )}
        {products.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p className="text-sm text-slate-500">{isVietnamese ? 'Không tìm thấy sản phẩm phù hợp với từ khóa của bạn.' : 'No products found matching your search.'}</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ name, partNumber, brand, category, spec, price, image, badge }) => {
              const tr = productTranslations[partNumber] || { name, category, spec, badge }
              return (
                <div key={partNumber} className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="rounded bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700">{partNumber}</span>
                      <span className="rounded bg-orange-100 px-2.5 py-0.5 text-[10px] font-extrabold text-[#d86c21]">{tr.badge}</span>
                    </div>
                    
                    {/* Khu vực chứa ảnh sản phẩm */}
                    <div className="relative mb-4 flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f8fafc]">
                      <img src={image} alt={tr.name} className="h-full w-full object-contain p-2 mix-blend-multiply transition duration-300 hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    </div>

                    <h3 className="text-base font-bold text-[#142b42]">{tr.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-slate-400">{brand} • {tr.category}</p>
                    <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed border border-slate-100">
                      <strong>{isVietnamese ? 'Thông số:' : 'Specs:'}</strong> {tr.spec}
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold text-slate-900">{price}</span>
                    <a href="#rfq" className="inline-flex items-center gap-1.5 rounded-lg bg-[#10263d] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#e7792a]">
                      {isVietnamese ? 'Yêu cầu báo giá' : 'Request RFQ'} <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section id="rfq" className="bg-[#112a43] text-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 lg:grid-cols-[1.1fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#f6a15f]">{isVietnamese ? 'LIÊN HỆ ĐẶT HÀNG & TƯ VẤN KỸ THUẬT' : 'FAST RFQ & SUPPORT'}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">{isVietnamese ? 'Nhận báo giá nhanh & Hỗ trợ kỹ thuật 24/7' : 'Get quick quote & technical assistance'}</h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {isVietnamese 
                ? 'Chúng tôi cung cấp đầy đủ thông tin kỹ thuật, tài liệu hướng dẫn và báo giá ưu đãi cho đại lý, nhà xưởng và đơn vị tích hợp hệ thống.' 
                : 'We provide complete technical data, manuals, and competitive pricing for industrial partners and system integrators.'}
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 text-slate-800 shadow-xl sm:p-8">
            <h3 className="text-lg font-bold text-[#142b42]">{isVietnamese ? 'Gửi yêu cầu báo giá ngay' : 'Submit your inquiry'}</h3>
            <form action="mailto:kimminhdai0101@gmail.com" method="post" encType="text/plain" className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600">{isVietnamese ? 'Họ và tên / Công ty' : 'Name / Company'}</label>
                <input required placeholder={isVietnamese ? 'Nhập tên hoặc đơn vị của bạn...' : 'Enter your name or company...'} className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-xs text-slate-800 focus:border-[#e7792a] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600">{isVietnamese ? 'Số điện thoại / Zalo' : 'Phone / Zalo'}</label>
                <input required placeholder={isVietnamese ? 'Nhập số điện thoại liên hệ...' : 'Enter your phone number...'} className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-xs text-slate-800 focus:border-[#e7792a] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600">{isVietnamese ? 'Nội dung yêu cầu (Model, số lượng...)' : 'Inquiry details (Model, quantity...)'}</label>
                <textarea required rows={3} placeholder={isVietnamese ? 'VD: Cần báo giá 5 chiếc LX935 và 2 trạm hàn 982D...' : 'E.g., Need quote for 5 units of LX935...'} className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-xs text-slate-800 focus:border-[#e7792a] focus:outline-none" />
              </div>
              <button className="w-full rounded-lg bg-[#e7792a] py-3 text-xs font-bold text-white transition hover:bg-[#cf671c]">
                {isVietnamese ? 'Gửi yêu cầu báo giá' : 'Send RFQ'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0c2033] text-slate-300">
        <div className="mx-auto max-w-[1320px] px-5 py-10 lg:px-8 lg:py-12">
          <div className="grid gap-8 md:grid-cols-[1.15fr_1fr_1fr]">
            <div>
              <p className="text-xs font-extrabold tracking-[0.12em] text-white">CÔNG TY TNHH CÔNG NGHỆ KIM MINH ĐÀI VN</p>
              <p className="mt-3 text-xs text-slate-400">{isVietnamese ? 'Giải pháp tự động hóa và vật tư công nghiệp.' : 'Industrial automation and factory supply solutions.'}</p>
              <p className="mt-3 text-xs"><span className="font-semibold text-white">Mã số thuế:</span> 3603954971</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{isVietnamese ? 'Thông tin doanh nghiệp' : 'Company information'}</h4>
              <p className="mt-3 text-xs leading-6 text-slate-400">
                <span className="font-semibold text-white">Địa chỉ:</span> Tổ 1 Khu Phố Mỹ Tân, Phường Mỹ Xuân, Thị xã Phú Mỹ, Tỉnh Bà Rịa - Vũng Tàu, Việt Nam
              </p>
              <a href="mailto:kimminhdai0101@gmail.com" className="mt-2 inline-block text-xs text-slate-300 transition hover:text-white">kimminhdai0101@gmail.com</a>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{isVietnamese ? 'Liên hệ' : 'Contact'}</h4>
              <ul className="mt-3 flex flex-col gap-2 text-xs text-slate-400">
                <li><span className="text-slate-500">Liên hệ 1:</span> <a href="tel:0328612865" className="hover:text-white">0328612865 – Phạm Tiến Hỷ</a></li>
                <li><span className="text-slate-500">Liên hệ 2:</span> <a href="tel:0373489614" className="hover:text-white">0373489614 – Mrs Trinh</a></li>
                <li><span className="text-slate-500">Liên hệ 3:</span> <a href="tel:0933935329" className="hover:text-white">0933.935.329 – Mr. Linh</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Công Ty TNHH Công Nghệ Kim Minh Đài VN. {isVietnamese ? 'Bảo lưu mọi quyền.' : 'All rights reserved.'}</p>
            <a href="#top" className="inline-flex items-center gap-1 font-semibold hover:text-white">{isVietnamese ? 'Lên đầu trang' : 'Back to top'} <ArrowUpRight className="size-3.5" /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export const dynamic = 'force-dynamic'