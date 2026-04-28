import Image from 'next/image'

export const metadata = {
  title: 'Hi - Welcome to Our Project',
  description: 'A warm welcome and introduction to what we\'re building together.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-sky-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">👋</span>
              </div>
              <span className="text-2xl font-bold text-slate-800">Hi</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6">
              Hi there! 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Welcome to our project. We're excited to share something special with you — 
              a simple, clean, and thoughtful approach to building great experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="bg-white/80 hover:bg-white text-slate-700 font-semibold px-8 py-4 rounded-lg transition-colors border border-slate-300 hover:border-slate-400">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white/60 backdrop-blur-sm py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  About This Project
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  This is a simple landing page built with modern web technologies. 
                  It demonstrates clean design principles, responsive layouts, and 
                  thoughtful user experience.
                </p>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  We believe in keeping things simple while maintaining high quality. 
                  Every element is carefully considered to create a welcoming and 
                  professional impression.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-sky-100 text-sky-800 px-4 py-2 rounded-lg font-medium">Next.js</div>
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg font-medium">TypeScript</div>
                  <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-medium">Tailwind CSS</div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop&crop=center"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">👋</span>
                </div>
                <span className="text-2xl font-bold">Hi</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Thanks for visiting our landing page. We hope you enjoyed 
                the clean design and friendly approach.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-sky-400">📧</div>
                  <a href="mailto:hello@example.com" className="text-slate-300 hover:text-white transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-sky-400">📱</div>
                  <a href="tel:+1234567890" className="text-slate-300 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-sky-400">📍</div>
                  <span className="text-slate-300">
                    123 Main Street, City, State 12345
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sky-400">tw</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sky-400">gh</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sky-400">in</span>
                </a>
              </div>
              <p className="text-slate-400 text-sm mt-6">
                © 2024 Hi Project. Built with care and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}