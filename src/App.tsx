
import { Header, Hero, About, Experience, Projects, Contact, Footer } from './components/Index'
import { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-gray-900 text-light font-sans overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App