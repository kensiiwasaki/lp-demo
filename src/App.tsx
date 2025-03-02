import React, { useEffect, useState } from 'react';
import { Star, Moon, Sun, ChevronRight, Phone, MapPin, Clock, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 text-white overflow-hidden">
      {/* Stars background */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating planets */}
      <div className="fixed top-1/4 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-70 z-0 animate-float-slow" />
      <div className="fixed bottom-1/4 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-60 z-0 animate-float-medium" />
      <div className="fixed top-3/4 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-60 z-0 animate-float-fast" />

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-indigo-950/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Moon className="text-blue-300" size={24} />
            <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              コスモス矯正歯科
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-300 transition-colors">当院について</a>
            <a href="#services" className="hover:text-blue-300 transition-colors">診療内容</a>
            <a href="#doctors" className="hover:text-blue-300 transition-colors">医師紹介</a>
            <a href="#access" className="hover:text-blue-300 transition-colors">アクセス</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-full transition-all transform hover:scale-105">
              予約する
            </a>
          </nav>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden absolute w-full bg-indigo-950/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>当院について</a>
            <a href="#services" className="hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>診療内容</a>
            <a href="#doctors" className="hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>医師紹介</a>
            <a href="#access" className="hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>アクセス</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-center" onClick={() => setIsMenuOpen(false)}>
              予約する
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center z-10 overflow-hidden">
        <div className="container mx-auto px-4 pt-20 md:pt-0">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                  宇宙のように美しい笑顔を
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                最新の矯正技術で、あなたの理想の笑顔を実現します。
                星のように輝く自信に満ちた笑顔で、新しい人生を始めましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-full text-center font-medium transition-all transform hover:scale-105 flex items-center justify-center">
                  無料相談を予約する
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a href="#services" className="border border-blue-300 hover:bg-blue-300/10 px-6 py-3 rounded-full text-center font-medium transition-all">
                  診療内容を見る
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-float-slow">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-90 animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="美しい笑顔" 
                  className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-300/30"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float-medium"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float-fast"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-blue-300">
            <span className="text-sm mb-2">詳しく見る</span>
            <ChevronRight size={24} className="transform rotate-90" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                当院について
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl transform scale-95"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="最新の歯科医院" 
                className="relative z-10 rounded-2xl w-full h-auto object-cover"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full animate-float-medium opacity-70"></div>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                宇宙のように無限の可能性を持つ笑顔のために
              </h3>
              <p className="text-blue-100 mb-6">
                コスモス矯正歯科は、最新の技術と経験豊富な専門医による高品質な矯正治療を提供しています。私たちは単に歯並びを整えるだけでなく、患者様一人ひとりの個性や生活スタイルに合わせた治療計画を立て、理想の笑顔を実現します。
              </p>
              <p className="text-blue-100 mb-8">
                宇宙のように広がる可能性を秘めた笑顔で、あなたの人生がより輝かしいものになるよう、私たちはサポートします。最新の設備と快適な空間で、リラックスして治療を受けていただけます。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-blue-300/30 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-300 mr-2" size={20} />
                    <h4 className="font-semibold">最新技術</h4>
                  </div>
                  <p className="text-sm text-blue-100">最先端の矯正技術で効果的な治療を提供</p>
                </div>
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-blue-300/30 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-300 mr-2" size={20} />
                    <h4 className="font-semibold">専門医による診療</h4>
                  </div>
                  <p className="text-sm text-blue-100">経験豊富な矯正専門医が担当</p>
                </div>
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-blue-300/30 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-300 mr-2" size={20} />
                    <h4 className="font-semibold">快適な空間</h4>
                  </div>
                  <p className="text-sm text-blue-100">リラックスできる宇宙をイメージした院内</p>
                </div>
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-blue-300/30 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-300 mr-2" size={20} />
                    <h4 className="font-semibold">丁寧なカウンセリング</h4>
                  </div>
                  <p className="text-sm text-blue-100">一人ひとりに合わせた治療計画</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                診療内容
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
              最新の矯正技術を用いて、あらゆる年齢層の方に最適な治療を提供します
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-indigo-900/50 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Moon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">マウスピース矯正</h3>
              <p className="text-blue-100 mb-4">
                透明なマウスピースを使用した目立ちにくい矯正治療。取り外し可能で日常生活への影響が少なく、清潔に保ちやすいのが特徴です。
              </p>
              <a href="#contact" className="text-blue-300 flex items-center hover:text-blue-200 transition-colors">
                詳しく見る
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-indigo-900/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Sun size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">表側矯正装置</h3>
              <p className="text-blue-100 mb-4">
                従来の表側からのブラケット矯正。最新の小型ブラケットを使用し、治療効果と審美性を両立。複雑な症例にも対応可能です。
              </p>
              <a href="#contact" className="text-blue-300 flex items-center hover:text-blue-200 transition-colors">
                詳しく見る
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-indigo-900/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">裏側矯正装置</h3>
              <p className="text-blue-100 mb-4">
                歯の裏側に装置を付ける目立たない矯正治療。外からは装置が見えないため、人目を気にする方に最適な治療法です。
              </p>
              <a href="#contact" className="text-blue-300 flex items-center hover:text-blue-200 transition-colors">
                詳しく見る
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-indigo-900/50 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Moon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">小児矯正</h3>
              <p className="text-blue-100 mb-4">
                お子様の成長に合わせた早期矯正治療。将来的な問題を予防し、健全な歯の発育をサポートします。
              </p>
              <a href="#contact" className="text-blue-300 flex items-center hover:text-blue-200 transition-colors">
                詳しく見る
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-indigo-900/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Sun size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">部分矯正</h3>
              <p className="text-blue-100 mb-4">
                特定の部分のみを矯正する治療法。短期間で効果的に問題を解決し、費用も抑えられます。
              </p>
              <a href="#contact" className="text-blue-300 flex items-center hover:text-blue-200 transition-colors">
                詳しく見る
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-indigo-900/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">矯正歯科相談</h3>
              <p className="text-blue-100 mb-4">
                無料カウンセリングで、あなたに最適な矯正方法をご提案。費用や治療期間など、疑問にお答えします。
              </p>
              <a href="#contact" className="text-blue-300 flex items-center hover:text-blue-200 transition-colors">
                詳しく見る
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                医師紹介
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
              経験豊富な矯正専門医が、あなたの理想の笑顔をサポートします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-900/30 rounded-xl overflow-hidden border border-blue-300/20 backdrop-blur-sm animate-fade-in-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="星野 太郎 院長" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">星野 太郎 院長</h3>
                <p className="text-sm text-blue-300 mb-4">矯正歯科専門医 / 医学博士</p>
                <p className="text-blue-100 mb-4">
                  国内外での20年以上の矯正治療経験を持つ専門医。最新の矯正技術を常に研究し、患者様一人ひとりに最適な治療を提供することをモットーとしています。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-3 py-1 rounded-full">マウスピース矯正</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-3 py-1 rounded-full">裏側矯正</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-3 py-1 rounded-full">小児矯正</span>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl overflow-hidden border border-blue-300/20 backdrop-blur-sm animate-fade-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="月岡 美咲 副院長" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">月岡 美咲 副院長</h3>
                <p className="text-sm text-blue-300 mb-4">矯正歯科専門医 / 歯学博士</p>
                <p className="text-blue-100 mb-4">
                  審美性と機能性を両立した矯正治療を得意とする専門医。特に目立たない矯正装置を用いた治療に精通しており、患者様の生活スタイルに合わせた治療計画を提案します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-3 py-1 rounded-full">表側矯正</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-3 py-1 rounded-full">部分矯正</span>
                  <span className="bg-blue-900/50 text-blue-200 text-xs px-3 py-1 rounded-full">審美矯正</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                アクセス
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-blue-300/20 backdrop-blur-sm animate-fade-in-left">
              <h3 className="text-xl font-bold mb-6 text-blue-200">診療時間・アクセス</h3>
              
              <div className="mb-8">
                <h4 className="font-semibold text-blue-200 mb-2 flex items-center">
                  <Clock className="mr-2" size={18} />
                  診療時間
                </h4>
                <table className="w-full text-blue-100">
                  <tbody>
                    <tr className="border-b border-blue-800/50">
                      <td className="py-2">平日</td>
                      <td className="py-2">10:00 - 19:00</td>
                    </tr>
                    <tr className="border-b border-blue-800/50">
                      <td className="py-2">土曜</td>
                      <td className="py-2">10:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td className="py-2">休診日</td>
                      <td className="py-2">日曜・祝日</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-blue-300 mt-2">※ 祝日は休診となります</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-blue-200 mb-2 flex items-center">
                  <MapPin className="mr-2" size={18} />
                  所在地
                </h4>
                <p className="text-blue-100 mb-1">〒100-0001</p>
                <p className="text-blue-100 mb-1">東京都千代田区星空町1-2-3</p>
                <p className="text-blue-100 mb-1">コスモスビル 5F</p>
                <p className="text-blue-100 mb-4">星空駅 北口から徒歩3分</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-200 mb-2 flex items-center">
                  <Phone className="mr-2" size={18} />
                  お問い合わせ
                </h4>
                <p className="text-blue-100 text-xl font-bold mb-2">03-1234-5678</p>
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-full text-center inline-block transition-all transform hover:scale-105">
                  Web予約はこちら
                </a>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-96 animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transform scale-95"></div>
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-blue-300/30">
                {/* Map placeholder - in a real implementation, you would use Google Maps or another map service */}
                <div className="w-full h-full bg-indigo-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-blue-300 mx-auto mb-4" />
                    <p className="text-blue-200 font-semibold">地図は実際の実装時に表示されます</p>
                    <p className="text-blue-300 text-sm">星空駅 北口から徒歩3分</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float-medium opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                ご予約・お問い合わせ
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
              無料カウンセリングのご予約やお問い合わせはこちらから
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-900/30 rounded-xl p-8 border border-blue-300/20 backdrop-blur-sm animate-fade-in-up">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-200 mb-2">お名前 <span className="text-pink-400">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-indigo-950/50 border border-blue-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-blue-200 mb-2">電話番号 <span className="text-pink-400">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-indigo-950/50 border border-blue-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-blue-200 mb-2">メールアドレス <span className="text-pink-400">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-indigo-950/50 border border-blue-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">ご希望の内容 <span className="text-pink-400">*</span></label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="service" className="text-blue-500" />
                      <span className="text-blue-100">無料相談</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="service" className="text-blue-500" />
                      <span className="text-blue-100">初診予約</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="service" className="text-blue-500" />
                      <span className="text-blue-100">お問い合わせ</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-blue-200 mb-2">お問い合わせ内容</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-indigo-950/50 border border-blue-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-blue-900/50 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Moon className="text-blue-300" size={24} />
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                  コスモス矯正歯科
                </h3>
              </div>
              <p className="text-blue-200 mb-4">
                宇宙のように美しい笑顔を実現する矯正歯科クリニック
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-4">診療メニュー</h3>
              <ul className="space-y-2 text-blue-300">
                <li><a href="#services" className="hover:text-blue-100 transition-colors">マウスピース矯正</a></li>
                <li><a href="#services" className="hover:text-blue-100 transition-colors">表側矯正装置</a></li>
                <li><a href="#services" className="hover:text-blue-100 transition-colors">裏側矯正装置</a></li>
                <li><a href="#services" className="hover:text-blue-100 transition-colors">小児矯正</a></li>
                <li><a href="#services" className="hover:text-blue-100 transition-colors">部分矯正</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-4">クリニック情報</h3>
              <ul className="space-y-2 text-blue-300">
                <li><a href="#about" className="hover:text-blue-100 transition-colors">当院について</a></li>
                <li><a href="#doctors" className="hover:text-blue-100 transition-colors">医師紹介</a></li>
                <li><a href="#access" className="hover:text-blue-100 transition-colors">アクセス</a></li>
                <li><a href="#contact" className="hover:text-blue-100 transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-900/50 text-center text-blue-400 text-sm">
            <p>&copy; 2025 コスモス矯正歯科. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;