"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import InstagramFeed from "./components/InstagramFeed";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Soft Breads", desc: "Roti harian yang lembut", image: "/home/category_bread.jpeg", color: "bg-[#FDF5E6]" },
    { name: "Whole Cakes", desc: "Untuk momen spesial", image: "/home/category_cake.jpeg", color: "bg-[#FFF0F5]" },
    { name: "Slice Cakes", desc: "Kenikmatan personal", image: "/home/category_slice.jpeg", color: "bg-[#F0F8FF]" },
    { name: "Danish Pastry", desc: "Tekstur berlapis & renyah", image: "/home/category_pastry.jpeg", color: "bg-[#F5F5DC]" },
    { name: "Dry Cookies", desc: "Camilan premium", image: "/home/category_cookies.jpeg", color: "bg-[#FAF0E6]" },
    { name: "Gift Sets", desc: "Hantaran eksklusif", image: "/home/category_gift.jpeg", color: "bg-[#F9F5F6]" },
  ];

  const signatures = [
    {
      name: "Floss Roll",
      category: "Signature Bread",
      desc: "Roti gulung dengan abon premium yang melimpah. Ikonik dan tak tertandingi.",
      image: "/product/floss_roll.jpeg",
      stats: ["Best Seller", "Freshly Baked"],
    },
    {
      name: "Rich Chocolate Cake",
      category: "Premium Cake",
      desc: "Lapisan cokelat Belgia yang intens dengan tekstur cake yang lembut.",
      image: "/product/rich_chocolate.jpeg",
      stats: ["Premium Cocoa", "Award Winning"],
    },
    {
      name: "Hokkaido Milk Toast",
      category: "Japanese Series",
      desc: "Roti tawar susu khas Jepang dengan kelembutan serat yang luar biasa.",
      image: "/product/hokkaido_bread.jpeg",
      stats: ["Natural Yeast", "Kids Favorite"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#4a4a4a] font-sans selection:bg-[#917333] selection:text-white overflow-x-hidden">
      {/* Navigasi */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <button className={`lg:hidden transition-colors ${isScrolled ? "text-[#822238]" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <div className="flex-1 lg:flex-none text-center lg:text-left flex justify-center lg:justify-start">
            <img src="/logo-mako-red.png" alt="Mako Bakery" className={`h-8 w-auto object-contain transition-all duration-500 ${isScrolled ? "opacity-100" : "brightness-0 invert opacity-90"}`} />
          </div>

          <div className="hidden lg:flex space-x-12 font-bold text-[11px] uppercase tracking-[0.3em]">
            <Link href="#" className={`transition-colors hover:text-[#917333] ${isScrolled ? "text-[#822238]" : "text-white"}`}>
              Menu
            </Link>
            <Link href="#" className={`transition-colors hover:text-[#917333] ${isScrolled ? "text-[#822238]" : "text-white"}`}>
              Our Story
            </Link>
            <Link href="#" className={`transition-colors hover:text-[#917333] ${isScrolled ? "text-[#822238]" : "text-white"}`}>
              Promotions
            </Link>
            <Link href="#" className={`transition-colors hover:text-[#917333] ${isScrolled ? "text-[#822238]" : "text-white"}`}>
              Locations
            </Link>
          </div>

          <div className={`flex space-x-6 items-center transition-colors ${isScrolled ? "text-[#822238]" : "text-white"}`}>
            <button className="hover:text-[#917333] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button className="hover:text-[#917333] transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-[#917333] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#822238]/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white z-10 pointer-events-none"></div>
          {/* Mobile Hero Image */}
          <img src="/home/mobile_hero_image.png" alt="Mako Bakery" className="w-full h-[calc(100%+50%)] object-cover md:hidden absolute inset-0 -translate-y-[15px]" />
          {/* Desktop Hero Image */}
          <img src="/home/desktop_hero_image.png" alt="Mako Bakery" className="hidden md:block w-full h-full object-cover absolute inset-0" />
        </div>

        <div className="relative z-20 text-center text-white px-6">
          {/* Efek glow putih di balik teks desktop version untuk memberikan kontras */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[120%] bg-white/60 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

          {/* <h3 className="text-xl text- font-black uppercase tracking-[0.6em] mb-6 animate-in fade-in slide-in-from-bottom duration-700">Premium Japanese Craftsmanship</h3> */}
          <h2 className="text-6xl lg:text-[10rem] font-serif font-bold mb-8 leading-[0.9] text-[#822238] drop-shadow-2xl">
            Soft as <br />
            <span className="italic font-light text-[#917333]">Clouds.</span>
          </h2>
          <button className="bg-[#ffffff] text-[#822238] px-12 py-5 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl tracking-widest text-xs uppercase hover:bg-[#917333] hover:text-white">Lihat Menu Hari Ini</button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-[#822238]">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </header>

      {/* Kategori */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-[#917333] text-xs font-black uppercase tracking-[0.4em] mb-4">Curated Selections</h3>
              <h2 className="text-5xl font-serif font-bold text-[#822238]">Jelajahi Menu</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-right">Pilih kategori favoritmu untuk melihat koleksi roti dan kue terbaik kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group relative h-80 rounded-[40px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 ${cat.color} opacity-20 mix-blend-multiply group-hover:opacity-40 transition-opacity`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>

                <div className="relative h-full p-10 pb-8 flex items-end justify-between z-10">
                  <div>
                    <h4 className="text-[#822238] text-2xl font-serif font-bold mb-1">{cat.name}</h4>
                    <p className="text-[#822238]/80 text-sm font-medium">{cat.desc}</p>
                  </div>
                  <div className="w-10 h-10 bg-[#822238] rounded-full flex items-center justify-center text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all shadow-md shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collection */}
      <section className="py-32 bg-[#822238] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none select-none flex flex-col justify-between items-center">
          {/* Membuat 8-10 baris untuk memenuhi tinggi section secara merata */}
          {[...Array(10)].map((_, rowIndex) => (
            <div key={rowIndex} className={`flex whitespace-nowrap leading-none`}>
              {/* Mengulang teks "MAKO" cukup banyak agar tidak ada celah saat animasi loop */}
              {[...Array(20)].map((_, i) => (
                <span key={i} className="text-[160px] me-12 font-black">
                  MAKO
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-24">
            <h3 className="text-[#917333] text-xs font-black uppercase tracking-[0.5em] mb-4">The Masterpieces</h3>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold">Signature Collection</h2>
            <div className="w-24 h-1 bg-[#917333] mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {signatures.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[50px] p-10 flex flex-col group hover:bg-white hover:text-[#822238] transition-all duration-700">
                <div className="aspect-square bg-white/10 rounded-[40px] mb-10 flex items-center justify-center overflow-hidden group-hover:bg-[#822238]/5 transition-colors relative">
                  <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-4">
                    {item.stats.map((s, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest border border-current px-2 py-1 rounded-full opacity-60">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-3xl font-serif font-bold mb-4">{item.name}</h4>
                  <p className="opacity-60 text-sm leading-relaxed mb-8 group-hover:opacity-80">{item.desc}</p>
                </div>
                <button className="flex items-center justify-between w-full font-bold uppercase tracking-[0.2em] text-[10px] pt-6 border-t border-white/10 group-hover:border-[#822238]/10 transition-colors">
                  <span>Lihat Detail Produk</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator Mini Section */}
      <section className="py-32 bg-[#FCF8F3] relative overflow-hidden">
        {/* Background image section */}
        <img src="/home/location_hero.png" alt="Store Locations" className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 bg-white/90 backdrop-blur-md rounded-[60px] p-10 lg:p-20 shadow-xl border border-white/50">
            <div className="flex-1">
              <h2 className="text-4xl font-serif font-bold text-[#822238] mb-6">Nikmati Roti Hangat di Dekatmu.</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">Lebih dari 80 outlet tersebar di seluruh Indonesia. Temukan yang terdekat dari lokasimu sekarang.</p>
              <div className="flex gap-4">
                <button className="bg-[#822238] text-white px-8 py-4 rounded-full font-bold hover:bg-[#917333] transition-colors">Cari Toko</button>
                <button className="border-2 border-[#822238] text-[#822238] px-8 py-4 rounded-full font-bold hover:bg-[#822238] hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Gunakan Lokasi Anda
                </button>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video relative rounded-[40px] overflow-hidden shadow-lg border border-gray-100">
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1mPAxtDUEgqlURz0xQhApPA5pjr72vHg&ehbc=2E312F&noprof=1" className="absolute top-0 left-0 w-full h-full border-0 -mt-12" title="Store Locations Map"></iframe>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />

      {/* Footer */}
      <footer className="bg-[#822238] text-white pt-32 pb-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold tracking-tighter">
                MAKO<span className="text-[#917333]">.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs font-medium uppercase tracking-wider">Japanese inspired premium bakery. Dibuat dengan cinta setiap hari.</p>
              <div className="flex space-x-4">
                <Link href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#917333] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#917333] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#917333]">Shop</h4>
              <nav className="flex flex-col space-y-4 text-white/50 text-sm font-bold uppercase tracking-widest">
                <Link href="#" className="hover:text-white transition-colors">
                  Semua Roti
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Cake Koleksi
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Hampers Natal
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#917333]">Support</h4>
              <nav className="flex flex-col space-y-4 text-white/50 text-sm font-bold uppercase tracking-widest">
                <Link href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Cek Pengiriman
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Bantuan
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#917333]">Stay Warm</h4>
              <p className="text-white/30 text-[10px] leading-relaxed font-black uppercase tracking-widest">Berlangganan newsletter untuk promo bank terbaru.</p>
              <div className="relative">
                <input type="text" placeholder="EMAIL ANDA" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#917333] transition-all text-xs font-black tracking-widest" />
                <button className="absolute right-0 bottom-4 text-[#917333] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.4em] text-white/20 uppercase">
            <p>© 2024 MAKO CAKE & BAKERY. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-10">
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
