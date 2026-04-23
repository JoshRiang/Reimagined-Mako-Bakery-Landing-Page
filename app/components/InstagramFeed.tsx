"use client";

import React from "react";

const UGC_DATA = [
  { id: 1, type: "image", icon: "👩‍🍳", name: "@perry_masak", text: "Roti hitam" },
  { id: 2, type: "video", icon: "🤳", name: "@dimas_foodie", text: "Unboxing Mako" },
  { id: 3, type: "image", icon: "📸", name: "@clara.sweet", text: "Morning with Mako" },
  { id: 4, type: "video", icon: "🧁", name: "@budi.makan", text: "Chantilly review" },
  { id: 5, type: "image", icon: "✨", name: "@nina_life", text: "Perfect gift!" },
  { id: 6, type: "image", icon: "🥐", name: "@pastry_lover", text: "Flaky & buttery" },
];

export default function InstagramFeed() {
  return (
    <div className="bg-[#ffffff] py-32 font-sans overflow-hidden">
      <p className="text-center w-full my-2">Ini contoh saja, harusnya pakai third party untuk ambil post dari Instagram, Tiktok, dll yang berkaitan atau memiliki tag #MakoExperience</p>
      <div className="container mx-auto px-6 text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-[#822238]/5 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#822238]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#822238] mb-4">#MakoExperience</h2>
        <p className="text-[#917333] font-bold tracking-widest uppercase text-xs">Bagikan momen manismu & tampil di sini</p>
      </div>

      {/* Row 1: ke kiri */}
      <div className="relative flex overflow-x-hidden group mb-8">
        <div className="flex animate-marquee whitespace-nowrap py-4 group-hover:pause">
          {[...UGC_DATA, ...UGC_DATA].map((item, idx) => (
            <UGCItem key={idx} item={item} />
          ))}
        </div>
        {/* Layer duplikat untuk seamless loop */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4 group-hover:pause">
          {[...UGC_DATA, ...UGC_DATA].map((item, idx) => (
            <UGCItem key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2: ke kanan */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marqueeReverse whitespace-nowrap py-4 group-hover:pause">
          {[...UGC_DATA, ...UGC_DATA].map((item, idx) => (
            <UGCItem key={idx} item={item} />
          ))}
        </div>
        <div className="absolute top-0 flex animate-marqueeReverse2 whitespace-nowrap py-4 group-hover:pause">
          {[...UGC_DATA, ...UGC_DATA].map((item, idx) => (
            <UGCItem key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="bg-[#822238] text-white px-10 py-4 rounded-full font-bold hover:bg-[#917333] transition-all transform hover:scale-105 shadow-xl">Post Punya Mu Sekarang!</button>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marqueeReverse2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        .animate-marqueeReverse {
          animation: marqueeReverse 50s linear infinite;
        }
        .animate-marqueeReverse2 {
          animation: marqueeReverse2 50s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `,
        }}
      />
    </div>
  );
}

const UGCItem = ({ item }: { item: any }) => (
  <div className="mx-4 w-64 md:w-80 flex-shrink-0 group/card cursor-pointer">
    <div className="relative bg-[#FCF8F3] rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Visual Placeholder (Simulasi Foto User) */}
      <div className="aspect-[4/5] w-full flex items-center justify-center text-8xl bg-white group-hover/card:scale-110 transition-transform duration-700">{item.icon}</div>

      {/* Overlay info saat hover */}
      <div className="absolute inset-0 bg-[#822238]/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex flex-col justify-center items-center text-white space-y-4">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="font-bold">1.2k</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            <span className="font-bold">48</span>
          </div>
        </div>
        <p className="text-xs font-black tracking-widest">LIHAT DI INSTAGRAM</p>
      </div>

      {/* User Info Footer */}
      <div className="p-6 bg-white border-t border-gray-50 whitespace-normal">
        <p className="text-[#822238] font-bold text-sm mb-1">{item.name}</p>
        <p className="text-gray-400 text-xs italic">"{item.text}"</p>
      </div>
    </div>
  </div>
);
