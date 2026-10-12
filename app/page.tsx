import { cookies } from 'next/headers'
import { LanguageToggle } from '@/components/language-toggle'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Cable,
  Check,
  ChevronDown,
  Clock3,
  Cpu,
  Gauge,
  Headphones,
  Microscope,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Truck,
  Wind,
  Zap,
} from 'lucide-react'

const mockProducts = [
  {
    name: 'Compact pneumatic cylinder',
    partNumber: 'CDQ2B32-50DZ',
    brand: 'SMC',
    category: 'Pneumatic equipment',
    spec: '32 mm bore · 50 mm stroke · Double acting',
    price: 'Contact for price',
    icon: Wind,
    tone: 'blue',
    badge: 'BEST SELLER',
  },
  {
    name: 'Photoelectric sensor',
    partNumber: 'E3Z-D61 2M',
    brand: 'OMRON',
    category: 'Sensors & controls',
    spec: 'Diffuse reflective · 1 m · NPN output',
    price: 'Contact for price',
    icon: Activity,
    tone: 'orange',
    badge: 'IN STOCK',
  },
  {
    name: 'Digital pressure gauge',
    partNumber: 'ISE30A-01-N-M',
    brand: 'SMC',
    category: 'Sensors & controls',
    spec: '−0.1 to 1 MPa · 2-color display · R1/8',
    price: 'Contact for price',
    icon: Gauge,
    tone: 'slate',
    badge: 'POPULAR',
  },
  {
    name: 'ESD-safe work gloves',
    partNumber: 'A101-XL',
    brand: 'ATG',
    category: 'ESD & cleanroom',
    spec: 'Conductive fiber · Size XL · 12 pairs / pack',
    price: 'Contact for price',
    icon: ShieldCheck,
    tone: 'green',
    badge: 'READY TO SHIP',
  },
  {
    name: 'DIN rail power supply',
    partNumber: 'HDR-60-24',
    brand: 'MEAN WELL',
    category: 'Electrical supplies',
    spec: '24 VDC · 2.5 A · 60 W · 35 mm DIN rail',
    price: 'Contact for price',
    icon: Zap,
    tone: 'orange',
    badge: 'IN STOCK',
  },
  {
    name: 'Industrial Ethernet cable',
    partNumber: 'IE-CAT6-5M-BK',
    brand: 'LAPP',
    category: 'Industrial consumables',
    spec: 'CAT6 · 5 m · Shielded · M12 to RJ45',
    price: 'Contact for price',
    icon: Cable,
    tone: 'blue',
    badge: 'QUALITY CHECKED',
  },
]

const categories = [
  { name: 'Pneumatic equipment', nameVi: 'Thiết bị khí nén', note: 'Cylinders, valves & fittings', noteVi: 'Xi lanh, van và đầu nối', icon: Wind, count: '2,400+' },
  { name: 'ESD & cleanroom', nameVi: 'ESD & phòng sạch', note: 'Protection for critical spaces', noteVi: 'Bảo hộ cho khu vực đặc thù', icon: Microscope, count: '860+' },
  { name: 'Sensors & control systems', nameVi: 'Cảm biến & điều khiển', note: 'Sensing, switching & control', noteVi: 'Cảm biến, đóng cắt và điều khiển', icon: Cpu, count: '1,750+' },
  { name: 'Industrial consumables', nameVi: 'Vật tư công nghiệp', note: 'Everyday production essentials', noteVi: 'Vật tư thiết yếu cho sản xuất', icon: Box, count: '3,200+' },
]

const assurances = [
  { title: 'Fast delivery', titleVi: 'Giao hàng nhanh', detail: 'Reliable dispatch to keep production moving.', detailVi: 'Giao hàng đúng hẹn, duy trì hoạt động sản xuất.', icon: Truck },
  { title: 'Genuine quality', titleVi: 'Chất lượng chính hãng', detail: 'Sourced from authorized brand partners.', detailVi: 'Nguồn hàng từ các đối tác thương hiệu uy tín.', icon: BadgeCheck },
  { title: 'CO / CQ documentation', titleVi: 'Chứng từ CO / CQ', detail: 'Traceable certificates available on request.', detailVi: 'Cung cấp chứng từ truy xuất khi khách hàng yêu cầu.', icon: PackageCheck },
  { title: 'Technical support', titleVi: 'Hỗ trợ kỹ thuật', detail: 'Practical help from people who know the parts.', detailVi: 'Tư vấn thiết thực từ đội ngũ am hiểu sản phẩm.', icon: Headphones },
]

const productTranslations: Record<string, { name: string; category: string; spec: string; badge: string }> = {
  'CDQ2B32-50DZ': { name: 'Xi lanh khí nén nhỏ gọn', category: 'Thiết bị khí nén', spec: 'Đường kính 32 mm · Hành trình 50 mm · Tác động kép', badge: 'BÁN CHẠY' },
  'E3Z-D61 2M': { name: 'Cảm biến quang điện', category: 'Cảm biến & điều khiển', spec: 'Phản xạ khuếch tán · 1 m · Ngõ ra NPN', badge: 'SẴN HÀNG' },
  'ISE30A-01-N-M': { name: 'Đồng hồ đo áp suất kỹ thuật số', category: 'Cảm biến & điều khiển', spec: '−0,1 đến 1 MPa · Màn hình 2 màu · R1/8', badge: 'PHỔ BIẾN' },
  'A101-XL': { name: 'Găng tay chống tĩnh điện', category: 'ESD & phòng sạch', spec: 'Sợi dẫn điện · Cỡ XL · 12 đôi / gói', badge: 'SẴN SÀNG GIAO' },
  'HDR-60-24': { name: 'Bộ nguồn gắn thanh DIN', category: 'Vật tư điện', spec: '24 VDC · 2,5 A · 60 W · Thanh DIN 35 mm', badge: 'SẴN HÀNG' },
  'IE-CAT6-5M-BK': { name: 'Cáp Ethernet công nghiệp', category: 'Vật tư công nghiệp', spec: 'CAT6 · 5 m · Có chống nhiễu · M12 đến RJ45', badge: 'ĐÃ KIỂM TRA' },
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
        {isVietnamese ? 'GIẢI PHÁP VẬT TƯ CÔNG NGHIỆP ĐÁNG TIN CẬY' : 'INDUSTRIAL SUPPLY, WITHOUT THE GUESSWORK'} <span className="mx-2 text-[#f28a35]">/</span> {isVietnamese ? 'GIAO HÀNG TOÀN QUỐC' : 'SHIPPING ACROSS VIETNAM'}
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#top" aria-label="VZA Industrial home" className="flex shrink-0 items-center gap-2.5">
  <img src="/placeholder-logo.png" alt="VZA Logo" className="h-9 w-auto object-contain" />
  <span className="block text-[15px] font-extrabold tracking-[0.11em] text-[#142b42]">VZA VẬT TƯ</span>
</a>
          <nav aria-label={isVietnamese ? 'Điều hướng chính' : 'Main navigation'} className="hidden items-center gap-8 text-[13px] font-semibold text-slate-600 lg:flex">
            <a className="transition hover:text-[#e7792a]" href="#categories">{isVietnamese ? 'Danh mục' : 'Categories'}</a>
            <a className="transition hover:text-[#e7792a]" href="#products">{isVietnamese ? 'Sản phẩm' : 'Products'}</a>
            <a className="transition hover:text-[#e7792a]" href="#brands">{isVietnamese ? 'Thương hiệu' : 'Our brands'}</a>
            <a className="transition hover:text-[#e7792a]" href="#about">{isVietnamese ? 'Về chúng tôi' : 'Why Northline'}</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#rfq" className="hidden items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-xs font-bold text-[#193753] transition hover:border-[#e7792a] hover:text-[#c45d16] sm:inline-flex">{isVietnamese ? 'Yêu cầu báo giá' : 'Request a quote'} <ArrowUpRight className="size-4" /></a>
            <LanguageToggle isVietnamese={isVietnamese} />
            <a href="#products" aria-label={isVietnamese ? 'Xem sản phẩm' : 'Browse products'} className="flex size-10 items-center justify-center rounded-md bg-[#e7792a] text-white transition hover:bg-[#cf671c]"><ShoppingCart className="size-[18px]" /></a>
          </div>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#112a43]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,29,48,.96)_0%,rgba(13,38,61,.88)_42%,rgba(13,38,61,.14)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-cover bg-[center_54%]" style={{ backgroundImage: "url('/industrial-automation-hero.png')" }} />
        <div className="absolute inset-y-0 left-0 -z-10 w-1 bg-[#ef812e]" />
        <div className="mx-auto grid min-h-[510px] max-w-[1320px] items-center px-5 py-16 lg:min-h-[570px] lg:px-8">
          <div className="max-w-[660px]">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-[#f6a15f]"><span className="h-px w-8 bg-[#f28a35]" /> {isVietnamese ? 'ĐỐI TÁC TIN CẬY CỦA NHÀ MÁY' : 'YOUR PARTNER ON THE FACTORY FLOOR'}</div>
            <h1 className="max-w-[650px] text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]">{isVietnamese ? 'Giải pháp Tự động hóa Công nghiệp & Vật tư Kỹ thuật Toàn diện' : 'Leading Industrial Automation & Technical Supplies Solution'}</h1>
            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-200 sm:text-base">{isVietnamese ? 'Linh kiện phù hợp, thương hiệu uy tín và hỗ trợ kỹ thuật tận tâm—giúp hoạt động sản xuất của bạn luôn liên tục.' : 'The right components, trusted brands, and responsive technical support—so your operation never has to stand still.'}</p>
            <form action="/" method="get" role="search" className="mt-8 flex max-w-[600px] items-center rounded-lg bg-white p-1.5 shadow-xl shadow-black/20">
              <Search aria-hidden="true" className="ml-3 size-[18px] shrink-0 text-slate-400" />
              <label className="sr-only" htmlFor="hero-search">{isVietnamese ? 'Tìm theo mã sản phẩm hoặc từ khóa' : 'Search by part number or keyword'}</label>
              <input id="hero-search" name="q" defaultValue={searchQuery} placeholder={isVietnamese ? 'Tìm theo mã sản phẩm, thương hiệu hoặc từ khóa' : 'Search by part number, brand, or keyword'} className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400" />
              <button className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#e7792a] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#cf671c] sm:px-5" type="submit">{isVietnamese ? 'Tìm kiếm' : 'Search'} <ArrowRight className="size-4" /></button>
            </form>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-slate-300"><span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#f6a15f]" /> {isVietnamese ? 'Hàng chính hãng' : 'Genuine products'}</span><span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#f6a15f]" /> {isVietnamese ? 'Có CO/CQ' : 'CO/CQ available'}</span><span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#f6a15f]" /> {isVietnamese ? 'Giá ưu đãi doanh nghiệp' : 'Corporate pricing'}</span></div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rfq" className="inline-flex items-center gap-2 rounded-md bg-[#e7792a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#cf671c]">{isVietnamese ? 'Yêu cầu báo giá' : 'Request a Quote'} <ArrowRight className="size-4" /></a>
              <a href="#categories" className="inline-flex items-center gap-2 rounded-md border border-white/35 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10">{isVietnamese ? 'Xem danh mục' : 'Browse Catalog'} <ChevronDown className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="hidden border-t border-white/15 bg-[#0e2338]/85 md:block">
          <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-8 py-4 text-[10px] font-semibold tracking-[0.14em] text-slate-300"><span>{isVietnamese ? 'ĐỒNG HÀNH CÙNG DOANH NGHIỆP VIỆT' : "SUPPLYING VIETNAM'S INDUSTRY"}</span><span>{isVietnamese ? 'KỸ THUẬT' : 'ENGINEERING'}</span><span>{isVietnamese ? 'SẢN XUẤT' : 'MANUFACTURING'}</span><span>{isVietnamese ? 'BẢO TRÌ' : 'MAINTENANCE'}</span><span>{isVietnamese ? 'VẬN HÀNH NHÀ MÁY' : 'FACILITY OPERATIONS'}</span></div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-[10px] font-bold tracking-[0.2em] text-[#d86c21]">{isVietnamese ? 'TÌM NHANH SẢN PHẨM' : 'FIND WHAT YOU NEED'}</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-[#172b40] sm:text-3xl">{isVietnamese ? 'Mua theo danh mục' : 'Shop by category'}</h2></div><a href="#products" className="inline-flex items-center gap-2 text-xs font-bold text-[#214565] hover:text-[#d86c21]">{isVietnamese ? 'Xem tất cả sản phẩm' : 'View all products'} <ArrowRight className="size-4" /></a></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{categories.map(({ name, nameVi, note, noteVi, icon: Icon, count }, index) => <a key={name} href="#products" className="group flex min-h-[150px] flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#aec2d1] hover:shadow-lg hover:shadow-slate-900/5"><div className="flex items-start justify-between"><span className={`flex size-11 items-center justify-center rounded-md ${index === 1 ? 'bg-orange-50 text-[#dc742a]' : 'bg-[#eef4f8] text-[#214565]'}`}><Icon className="size-5" /></span><span className="text-[10px] font-bold tracking-wide text-slate-400">{count} {isVietnamese ? 'MẶT HÀNG' : 'ITEMS'}</span></div><div className="mt-5 flex items-end justify-between gap-3"><div><h3 className="text-sm font-bold text-[#1a3148]">{isVietnamese ? nameVi : name}</h3><p className="mt-1 text-xs text-slate-500">{isVietnamese ? noteVi : note}</p></div><ArrowUpRight className="size-4 shrink-0 text-slate-400 transition group-hover:text-[#e7792a]" /></div></a>)}</div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">{assurances.map(({ title, titleVi, detail, detailVi, icon: Icon }, index) => <div key={title} className="flex gap-4"><span className={`flex size-11 shrink-0 items-center justify-center rounded-md ${index === 1 ? 'bg-orange-50 text-[#df7628]' : 'bg-[#eef4f8] text-[#234c6b]'}`}><Icon className="size-5" /></span><div><h3 className="text-sm font-bold text-[#1a3148]">{isVietnamese ? titleVi : title}</h3><p className="mt-1.5 max-w-[220px] text-xs leading-5 text-slate-500">{isVietnamese ? detailVi : detail}</p></div></div>)}</div>
      </section>

      <section id="products" className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-[10px] font-bold tracking-[0.2em] text-[#d86c21]">{isVietnamese ? 'PHỤC VỤ HOẠT ĐỘNG SẢN XUẤT' : 'BUILT FOR YOUR OPERATION'}</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-[#172b40] sm:text-3xl">{isVietnamese ? 'Sản phẩm nổi bật' : 'Featured products'}</h2><p className="mt-2 text-sm text-slate-500">{isVietnamese ? 'Thiết bị thiết yếu, sẵn sàng khi bạn cần.' : 'Technical essentials, ready when you need them.'}</p></div><a href="#rfq" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-[#1b3a56] hover:border-[#e7792a]">{isVietnamese ? 'Cần hỗ trợ tìm hàng?' : 'Need help sourcing?'} <ArrowRight className="size-4" /></a></div>
        {searchQuery && <p className="mb-5 text-sm text-slate-600">{isVietnamese ? products.length ? `Tìm thấy ${products.length} kết quả cho “${searchQuery}”` : `Không tìm thấy sản phẩm phù hợp với “${searchQuery}”. Hãy thử thương hiệu hoặc mã hàng.` : products.length ? `Showing ${products.length} results for “${searchQuery}”` : `No mock products matched “${searchQuery}”. Try a brand or part number.`}</p>}
        {products.length > 0 && <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map(({ name, partNumber, brand, category, spec, price, icon: Icon, tone, badge }) => <article key={partNumber} className="overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"><div className="relative flex h-[174px] items-center justify-center overflow-hidden bg-[#eef2f5]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,.95),rgba(229,235,240,.2)_68%)]" /><div className="absolute inset-x-0 bottom-0 h-px bg-slate-300/70" /><div className={`relative flex size-[94px] items-center justify-center rounded-2xl border border-white/80 bg-white shadow-[0_16px_38px_rgba(28,47,66,.13)] ${tone === 'orange' ? 'text-[#dc782e]' : tone === 'green' ? 'text-[#39755e]' : tone === 'slate' ? 'text-[#50677d]' : 'text-[#285777]'}`}><Icon className="size-11" strokeWidth={1.35} /></div><span className="absolute left-4 top-4 rounded-sm bg-white px-2 py-1 text-[9px] font-bold tracking-[0.08em] text-[#35556f]">{isVietnamese ? productTranslations[partNumber]?.badge : badge}</span><span className="absolute right-4 top-4 text-[10px] font-bold tracking-wide text-slate-500">{brand}</span></div><div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{isVietnamese ? productTranslations[partNumber]?.category : category}</p><h3 className="mt-2 text-sm font-bold text-[#1a3148]">{isVietnamese ? productTranslations[partNumber]?.name : name}</h3><p className="mt-1.5 font-mono text-[11px] text-[#446078]">{partNumber}</p><p className="mt-3 min-h-[34px] text-xs leading-5 text-slate-500">{isVietnamese ? productTranslations[partNumber]?.spec : spec}</p><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-[11px] font-semibold text-slate-600">{isVietnamese ? 'Liên hệ báo giá' : price}</span><a href="#rfq" className="inline-flex items-center gap-1.5 rounded-md bg-[#193b59] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#254f72]">{isVietnamese ? 'Yêu cầu báo giá' : 'Request quote'} <ArrowRight className="size-3.5" /></a></div></div></article>)}</div>}
      </section>

      <section id="brands" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-12 lg:px-8"><div className="text-center"><p className="text-[10px] font-bold tracking-[0.2em] text-slate-400">{isVietnamese ? 'THƯƠNG HIỆU UY TÍN' : 'BRANDS YOU CAN BUILD ON'}</p><h2 className="mt-2 text-xl font-bold tracking-tight text-[#172b40]">{isVietnamese ? 'Nguồn cung chính hãng. Hiệu suất đã được chứng minh.' : 'Authorized sourcing. Proven performance.'}</h2></div><div className="mt-8 grid grid-cols-2 items-center gap-y-7 text-center sm:grid-cols-3 lg:grid-cols-6">{['SMC', 'OMRON', 'FESTO', 'MITSUBISHI ELECTRIC', 'MEAN WELL', 'LAPP'].map((brand, index) => <div key={brand} className={`text-base font-extrabold tracking-[-0.03em] ${index % 2 ? 'text-[#577087]' : 'text-[#233f58]'}`}>{brand}</div>)}</div></div>
      </section>

      <section id="rfq" className="bg-[#112a43]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20"><div className="flex flex-col justify-center"><p className="text-[10px] font-bold tracking-[0.2em] text-[#f3a060]">{isVietnamese ? 'ĐƠN HÀNG DOANH NGHIỆP & SỐ LƯỢNG LỚN' : 'CORPORATE & BULK ORDERS'}</p><h2 className="mt-3 max-w-[480px] text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">{isVietnamese ? 'Cùng duy trì nhịp độ sản xuất.' : "Let's keep your operation moving."}</h2><p className="mt-4 max-w-[460px] text-sm leading-6 text-slate-300">{isVietnamese ? 'Hãy cho chúng tôi biết nhu cầu của bạn. Đội ngũ sẽ hỗ trợ tìm linh kiện phù hợp và chuẩn bị báo giá riêng.' : 'Tell us what you need. Our team will help you source the right components and prepare a tailored quotation.'}</p><div className="mt-7 flex flex-col gap-3 text-xs text-slate-300"><span className="flex items-center gap-2"><Clock3 className="size-4 text-[#f3a060]" /> {isVietnamese ? 'Phản hồi trong một ngày làm việc' : 'Response within one business day'}</span><span className="flex items-center gap-2"><BadgeCheck className="size-4 text-[#f3a060]" /> {isVietnamese ? 'Cung cấp CO/CQ khi yêu cầu' : 'CO/CQ documentation upon request'}</span></div><div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-6"><span className="flex size-10 items-center justify-center rounded-full bg-white/10"><Headphones className="size-5 text-[#f3a060]" /></span><div><p className="text-xs font-bold text-white">{isVietnamese ? 'Cần tư vấn kỹ thuật?' : 'Need technical help?'}</p><p className="mt-1 text-[11px] text-slate-400">{isVietnamese ? 'Đội ngũ chuyên viên luôn sẵn sàng hỗ trợ.' : 'Our product specialists are ready to assist.'}</p></div></div></div>
          <form action="mailto:sales@northline-industrial.example" method="post" encType="text/plain" className="rounded-lg bg-white p-5 sm:p-7"><div className="mb-6"><h3 className="text-lg font-bold text-[#1a3148]">{isVietnamese ? 'Yêu cầu báo giá' : 'Request a quote'}</h3><p className="mt-1 text-xs text-slate-500">{isVietnamese ? 'Chia sẻ nhu cầu, chúng tôi sẽ sớm liên hệ lại.' : 'Share your requirements and we&apos;ll get back to you.'}</p></div><div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="rfq-name" className="mb-1.5 block text-[11px] font-semibold text-slate-600">{isVietnamese ? 'Họ và tên *' : 'Full name *'}</label><input required id="rfq-name" name="name" autoComplete="name" placeholder={isVietnamese ? 'Họ và tên của bạn' : 'Your name'} className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#315b79]" /></div><div><label htmlFor="rfq-company" className="mb-1.5 block text-[11px] font-semibold text-slate-600">{isVietnamese ? 'Công ty *' : 'Company *'}</label><input required id="rfq-company" name="company" autoComplete="organization" placeholder={isVietnamese ? 'Tên công ty' : 'Company name'} className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#315b79]" /></div><div><label htmlFor="rfq-email" className="mb-1.5 block text-[11px] font-semibold text-slate-600">{isVietnamese ? 'Email công việc *' : 'Work email *'}</label><input required id="rfq-email" name="email" type="email" autoComplete="email" placeholder={isVietnamese ? 'ten@congty.com' : 'name@company.com'} className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#315b79]" /></div><div><label htmlFor="rfq-phone" className="mb-1.5 block text-[11px] font-semibold text-slate-600">{isVietnamese ? 'Số điện thoại' : 'Phone number'}</label><input id="rfq-phone" name="phone" type="tel" autoComplete="tel" placeholder="+84" className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#315b79]" /></div><div className="sm:col-span-2"><label htmlFor="rfq-details" className="mb-1.5 block text-[11px] font-semibold text-slate-600">Parts, quantities &amp; requirements *</label><textarea required id="rfq-details" name="requirements" rows={4} placeholder="Part numbers, quantities, target delivery date..." className="w-full resize-y rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#315b79]" /></div></div><button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#e7792a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#cf671c]">Send quote request <ArrowRight className="size-4" /></button><p className="mt-3 text-[10px] leading-4 text-slate-400">By submitting, you agree to be contacted regarding your inquiry.</p></form>
        </div>
      </section>

      <footer className="bg-[#0c2033] text-slate-300">
        <div className="mx-auto max-w-[1320px] px-5 py-10 lg:px-8 lg:py-12">
          <div className="grid gap-8 md:grid-cols-[1.15fr_1fr_1fr]">
            <div>
              <p className="text-xs font-extrabold tracking-[0.12em] text-white">CÔNG TY TNHH CÔNG NGHỆ KIM MINH ĐÀI VN</p>
              <p className="mt-3 text-xs text-slate-400">{isVietnamese ? 'Giải pháp tự động hóa và vật tư công nghiệp.' : 'Industrial automation and factory supply solutions.'}</p>
              <p className="mt-3 text-xs"><span className="font-semibold text-white">{isVietnamese ? 'Mã số thuế:' : 'Tax ID:'}</span> 3603954971</p>
            </div>
            <div>
              <h2 className="text-xs font-bold text-white">{isVietnamese ? 'Thông tin doanh nghiệp' : 'Company information'}</h2>
              <p className="mt-3 text-xs leading-6 text-slate-400"><span className="font-semibold text-slate-200">{isVietnamese ? 'Địa chỉ:' : 'Address:'}</span> Tổ 1 Khu Phố Mỹ Khoan, Phường Nhơn Trạch, Thành Phố Đồng Nai</p>
              <a href="mailto:kimminhdai0101@gmail.com" className="mt-2 inline-block text-xs text-slate-300 transition hover:text-white">kimminhdai0101@gmail.com</a>
            </div>
            <div>
              <h2 className="text-xs font-bold text-white">{isVietnamese ? 'Liên hệ' : 'Contact'}</h2>
              <ul className="mt-3 flex flex-col gap-2 text-xs text-slate-400">
                <li><span className="text-slate-500">Liên hệ 1: </span><a href="tel:0328612865" className="hover:text-white">0328612865 — Phàm Tiến Hỷ</a></li>
                <li><span className="text-slate-500">Liên hệ 2: </span><a href="tel:0373489614" className="hover:text-white">0373489614 — Mrs Trinh</a></li>
                <li><span className="text-slate-500">Liên hệ 3: </span><a href="tel:0933935329" className="hover:text-white">0933.935.329 — Mr. Linh</a></li>
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
