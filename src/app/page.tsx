export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        {/* 헤더 섹션 */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-rose-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
            아름다운 색상 팔레트
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            세 가지 조화로운 색상으로 만든 현대적인 디자인
          </p>
        </header>

        {/* 색상 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 로즈 색상 카드 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-rose-700 mb-2">로즈</h2>
              <p className="text-sm text-muted-foreground mb-4">R: 186, G: 97, B: 97</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-rose-200"></div>
                <div className="w-8 h-8 rounded-full bg-rose-300"></div>
                <div className="w-8 h-8 rounded-full bg-rose-400"></div>
                <div className="w-8 h-8 rounded-full bg-rose-500"></div>
                <div className="w-8 h-8 rounded-full bg-rose-600"></div>
                <div className="w-8 h-8 rounded-full bg-rose-700"></div>
              </div>
            </div>
          </div>

          {/* 틸 색상 카드 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-teal-700 mb-2">틸</h2>
              <p className="text-sm text-muted-foreground mb-4">R: 61, G: 136, B: 137</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-200"></div>
                <div className="w-8 h-8 rounded-full bg-teal-300"></div>
                <div className="w-8 h-8 rounded-full bg-teal-400"></div>
                <div className="w-8 h-8 rounded-full bg-teal-500"></div>
                <div className="w-8 h-8 rounded-full bg-teal-600"></div>
                <div className="w-8 h-8 rounded-full bg-teal-700"></div>
              </div>
            </div>
          </div>

          {/* 오렌지 색상 카드 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-orange-700 mb-2">오렌지</h2>
              <p className="text-sm text-muted-foreground mb-4">R: 223, G: 157, B: 88</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                <div className="w-8 h-8 rounded-full bg-orange-300"></div>
                <div className="w-8 h-8 rounded-full bg-orange-400"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-600"></div>
                <div className="w-8 h-8 rounded-full bg-orange-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 기능 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200">
            <div className="w-12 h-12 rounded-lg bg-rose-500 mb-4 flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">우아한 디자인</h3>
            <p className="text-rose-600">로즈 톤의 부드러운 색감으로 세련된 느낌을 전달합니다.</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200">
            <div className="w-12 h-12 rounded-lg bg-teal-500 mb-4 flex items-center justify-center">
              <span className="text-2xl">🌊</span>
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">차분한 분위기</h3>
            <p className="text-teal-600">틸 색상의 시원하고 안정적인 톤으로 편안함을 제공합니다.</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200">
            <div className="w-12 h-12 rounded-lg bg-orange-500 mb-4 flex items-center justify-center">
              <span className="text-2xl">☀️</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">활기찬 에너지</h3>
            <p className="text-orange-600">오렌지 색상의 따뜻하고 생동감 있는 느낌을 전달합니다.</p>
          </div>
        </div>

        {/* 버튼 예제 */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors shadow-md hover:shadow-lg">
            로즈 버튼
          </button>
          <button className="px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg">
            틸 버튼
          </button>
          <button className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
            오렌지 버튼
          </button>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 via-teal-500 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">
            그라데이션 버튼
          </button>
        </div>
      </div>
    </div>
  );
}
