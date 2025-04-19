import React, { useState, useEffect } from 'react';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const WhitepaperSection: React.FC = () => {
  const [whitepaperContent, setWhitepaperContent] = useState<string>('');

  useEffect(() => {
    // Fetch the whitepaper content
    fetch('/whitepaper.md')
      .then(response => response.text())
      .then(text => setWhitepaperContent(text))
      .catch(error => console.error('Error loading whitepaper:', error));
  }, []);

  return (
    <section id="whitepaper" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-4 whitespace-nowrap">
            Whitepaper
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto px-4">
            <span className="inline-block">Explore the technical details and vision</span> <span className="inline-block">behind XAWAK in our comprehensive whitepaper</span>
          </p>
        </div>

        {/* Whitepaper Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Whitepaper Preview */}
          <div className="relative group">
            <div className="bg-gradient-to-b from-[#1E3A8A]/10 to-[#6A0DAD]/10 rounded-lg overflow-hidden border border-[#FFD700]/20 shadow-lg shadow-[#FFD700]/10 transition-all duration-500 group-hover:shadow-[#FFD700]/30 group-hover:border-[#FFD700]/40 p-8">
              {/* Document Header */}
              <div className="mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src="/logooo2.jpg"
                    alt="XAWAK Logo"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">XAWAK Whitepaper</h3>
                <p className="text-[#FFD700] text-sm">v1.0.0 | 2024</p>
              </div>

              {/* Document Content Preview */}
              <div className="prose prose-invert max-w-none font-['Orbitron']">
                <div className="whitepaper-content">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-6 font-['Orbitron']">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-[#FFD700] mb-4 font-['Orbitron']">
                          {children}
                        </h2>
                      ),
                      p: ({ children }) => (
                        <p className="text-gray-300 mb-4 leading-relaxed font-['Orbitron'] text-sm">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 font-['Orbitron'] text-sm">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-gray-300 font-['Orbitron'] text-sm">{children}</li>
                      ),
                    }}
                  >
                    {whitepaperContent}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <FileText className="w-48 h-48 text-[#FFD700]" />
              </div>
            </div>

            {/* Glowing effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/20 to-[#FFD700]/0 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Right Side - Whitepaper Details & Download */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-white">Technical Documentation</h3>
              <p className="text-gray-300">
                Our whitepaper provides a comprehensive overview of the XAWAK ecosystem, tokenomics, technology stack, and future roadmap. Dive deep into the technical aspects that make XAWAK revolutionary.
              </p>
            </div>

            <div className="space-y-6">
              {/* Whitepaper Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#6A0DAD]/20 p-4 rounded-lg border border-[#FFD700]/10">
                  <h4 className="font-orbitron font-bold text-[#FFD700] mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Technology
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Built on the XRPL (XRP Ledger) blockchain
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#6A0DAD]/20 p-4 rounded-lg border border-[#FFD700]/10">
                  <h4 className="font-orbitron font-bold text-[#FFD700] mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Community
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Powered by humor, relatability, and grassroots engagement
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#6A0DAD]/20 p-4 rounded-lg border border-[#FFD700]/10">
                  <h4 className="font-orbitron font-bold text-[#FFD700] mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Philosophy
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Gamifies profound concepts like consciousness and universal exploration
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#6A0DAD]/20 p-4 rounded-lg border border-[#FFD700]/10">
                  <h4 className="font-orbitron font-bold text-[#FFD700] mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Ecosystem
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Features NFTs, games, and social tokens for an engaging experience
                  </p>
                </div>
              </div>

              {/* Read Online Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/whitepaper.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg text-black font-bold transition-transform duration-300 hover:scale-105 shadow-lg shadow-[#FFD700]/20"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
