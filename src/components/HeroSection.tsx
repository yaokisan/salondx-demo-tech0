'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            異次元の生産性を持つ
            <span className="block text-blue-400">経営エンジン</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            3つの革新的DXアプリケーションと、未来へつながる失敗の物語
          </p>
          
          <div className="text-lg text-gray-400">
            Tech0 成果発表会 ポスターセッション
          </div>
          
          <div className="mt-12">
            <div className="animate-bounce">
              <svg className="mx-auto w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}