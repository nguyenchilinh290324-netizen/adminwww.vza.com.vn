import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black text-[#cc0000] mb-6">TẤT CẢ SẢN PHẨM</h1>
        <p className="text-gray-700">
          Nội dung trang giới thiệu về Công ty TNHH Công Nghệ Kim Minh Đài VN...
        </p>
        <Link href="/" className="text-[#cc0000] mt-4 inline-block hover:underline">
          « Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}