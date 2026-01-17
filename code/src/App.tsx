import { useState, useEffect } from 'react'
import { BugAntIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineSplitscreen } from "react-icons/md";

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('devToolsTheme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('devToolsTheme', theme);
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const tools = [
    {
      icon: '🔐',
      title: 'Encoder/Decoder',
      description: 'Encode and decode text using various formats including URL, Base64, HTML entities, and more.',
      url: 'https://hanoj-budime.github.io/react-encoder-decoder-editor/'
    },
    {
      icon: '📋',
      title: 'JSON Viewer & Editor',
      description: 'View, format, validate, and edit JSON data with syntax highlighting and collapsible tree view.',
      url: 'https://hanoj-budime.github.io/react-json-viewer-editor/'
    },
    {
      icon: '🪪',
      title: 'Cognito Hosted UI Editor ( Preview )',
      description: 'Visually edit and generate AWS Cognito Hosted UI OAuth/OIDC URLs with support for response types, scopes, redirect URIs, and identity providers.',
      url: 'https://hanoj-budime.github.io/react-cognito-hosted-ui-editor/',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/*  Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-2">
          {/* Left: Brand */}
          <div className="flex items-center">
            <img
              src={`${(import.meta as any).env.BASE_URL}favicon.svg`}
              alt="Dev Tools"
              className="h-7 w-7 sm:h-8 sm:w-9 md:h-9 md:w-14 lg:h-10 lg:w-14 object-contain"
            />
            <span className="ml-2 text-lg sm:text-xl md:text-2xl font-semibold">Dev Tools</span>
          </div>

          {/* Right: Theme & Panel Toggle */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex-grow w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 mb-15 mt-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_self"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 p-4 rounded-lg transition-all duration-200 cursor-pointer no-underline hover:-translate-y-0.5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:shadow-lg"
              style={{
                background: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                if (theme === 'light') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                } else {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (theme === 'light') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                } else {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="text-4xl sm:text-4xl lg:text-5xl">{tool.icon}</div>
                </div>
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">{tool.title}</h2>
                  <p className="text-sm sm:text-base opacity-80 leading-relaxed mb-2">{tool.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-2 transition-all">
                    Open →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 z-50 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {/* Left: Developer Info */}
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <CodeBracketIcon className="h-4 w-4" />
            <span>
              Developed by <span className="font-medium text-gray-900 dark:text-gray-100">Hanoj Budime</span> · 2025-
              {new Date().getFullYear()}
            </span>
          </div>

          {/* Right: Action Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hanoj-budime/react-dev-tools/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Report Issue on GitHub"
            >
              <BugAntIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/hanoj-budime"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Connect on LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://github.com/hanoj-budime"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="View GitHub Profile"
            >
              <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

