import { Header, Hero, About, Terminal, Experience, Credentials, Projects, Contact, Footer } from './components/Index';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';

const PortfolioContent = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300 antialiased selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Experience />
        <Credentials />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default App;
