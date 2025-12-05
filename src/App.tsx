import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Sparkles, Zap, Brain, Cpu } from 'lucide-react';

const sentenceTemplates = [
  { template: "The _____ is _____ in the park.", emoji: "🌳" },
  { template: "Yesterday, my _____ started _____ on the table.", emoji: "🤣" },
  { template: "I saw a tiny _____ _____ at the supermarket.", emoji: "🛒" },
  { template: "The _____ is _____ while eating pizza.", emoji: "🍕" },
  { template: "My friend's _____ loves _____ in the shower.", emoji: "🚿" },
  { template: "A wild _____ appeared and started _____.", emoji: "😱" },
  { template: "The sleepy _____ can't stop _____.", emoji: "😴" },
  { template: "Nobody believes that my _____ is _____ right now.", emoji: "🤔" },
  { template: "The _____ is secretly _____ when nobody watches.", emoji: "🤫" },
  { template: "Watch out! The _____ is _____ very loudly!", emoji: "🔊" },
  { template: "This morning, a _____ was _____ on my car.", emoji: "🚗" },
  { template: "The teacher's _____ keeps _____ during class.", emoji: "📚" },
  { template: "I can't believe the _____ is _____ again!", emoji: "😲" },
  { template: "My neighbor's _____ won't stop _____ at night.", emoji: "🌙" },
  { template: "The famous _____ got caught _____ on TV.", emoji: "📺" },
];

export default function App() {
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [currentSentence, setCurrentSentence] = useState(sentenceTemplates[0]);
  const [showSentence, setShowSentence] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewSentence = () => {
    if (!noun.trim() || !verb.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sentenceTemplates.length);
      setCurrentSentence(sentenceTemplates[randomIndex]);
      setShowSentence(true);
      setIsGenerating(false);
    }, 1200);
  };

  const displaySentence = () => {
    if (!showSentence || !noun.trim() || !verb.trim()) {
      return "Enter your words and let AI create magic...";
    }
    
    return currentSentence.template.replace('_____', noun).replace('_____', verb);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 dark:from-black dark:via-purple-950 dark:to-black">
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Radial gradient orbs - optimized static */}
        <div
          className="absolute w-[800px] h-[800px] -top-1/2 -left-1/4"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 253, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] -bottom-1/2 -right-1/4"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Static grid pattern - optimized */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating particles with Framer Motion */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 4) * 20}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.3))'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.9), rgba(236, 72, 153, 0.3))',
              boxShadow: i % 2 === 0 
                ? '0 0 15px rgba(168, 85, 247, 0.6)'
                : '0 0 15px rgba(236, 72, 153, 0.6)',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}

      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-6">
        {/* Theme Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-6 right-6 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 z-50"
        >
          <motion.div
            animate={{ rotate: isDarkMode ? 0 : 180 }}
            transition={{ duration: 0.4, type: 'spring' }}
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-purple-400" />
            )}
          </motion.div>
        </motion.button>

        {/* AI Status Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed top-6 left-6 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 z-50"
        >
          <motion.div
            animate={{ rotate: isGenerating ? 360 : 0 }}
            transition={{ duration: 2, repeat: isGenerating ? Infinity : 0, ease: 'linear' }}
          >
            <Brain className="w-5 h-5 text-purple-400" />
          </motion.div>
          <span className="text-purple-300 text-sm">
            {isGenerating ? 'AI Generating...' : 'AI Ready'}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-yellow-400' : 'bg-green-400'}`}
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: isGenerating 
                ? ['0 0 5px rgba(250, 204, 21, 0.4)', '0 0 15px rgba(250, 204, 21, 0.8)', '0 0 5px rgba(250, 204, 21, 0.4)']
                : ['0 0 5px rgba(74, 222, 128, 0.4)', '0 0 12px rgba(74, 222, 128, 0.8)', '0 0 5px rgba(74, 222, 128, 0.4)'],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
          className="w-full max-w-3xl relative"
        >
          {/* Card Container */}
          <motion.div 
            className="relative group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer glow with animation */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl"
              animate={{
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Card body */}
            <div
              className="relative bg-gradient-to-br from-slate-900/90 to-purple-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden animate-border-glow transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Animated shine sweep */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                style={{
                  animation: 'shimmer 4s ease-in-out infinite',
                }}
              />

              {/* Corner accents with pulse */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-purple-500/50 rounded-tl-2xl animate-pulse-soft" style={{ animationDelay: '0s' }} />
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-pink-500/50 rounded-tr-2xl animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-blue-500/50 rounded-bl-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-500/50 rounded-br-2xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
              
              <div className="relative p-8 md:p-12">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center mb-12"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Cpu className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <motion.h1 
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                      style={{ backgroundSize: '200% 200%' }}
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      AI Sentence Generator
                    </motion.h1>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap className="w-8 h-8 text-yellow-400" />
                    </motion.div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-purple-300"
                  >
                    Powered by neural language synthesis
                  </motion.p>
                </motion.div>

                {/* AI Output Display */}
                <div className="relative mb-10">
                  <div
                    className="relative bg-gradient-to-br from-purple-950/50 to-blue-950/50 backdrop-blur-xl rounded-2xl p-10 min-h-[200px] flex items-center justify-center border border-purple-500/30 overflow-hidden"
                  >
                    {/* Loading bar */}
                    {isGenerating && (
                      <div
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                        style={{
                          animation: 'shimmer 1.5s infinite',
                        }}
                      />
                    )}

                    {/* Holographic grid overlay */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    <div className="text-center w-full relative z-10">
                      <AnimatePresence mode="wait">
                        {isGenerating ? (
                          <motion.div
                            key="generating"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex flex-col items-center gap-4"
                          >
                            <div className="flex gap-3">
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                  style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
                                  animate={{
                                    y: [-8, 8, -8],
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                  }}
                                />
                              ))}
                            </div>
                            <motion.span
                              className="text-purple-300"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              AI Processing...
                            </motion.span>
                          </motion.div>
                        ) : showSentence ? (
                          <motion.div
                            key="sentence"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.div
                              className="text-6xl mb-6"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                            >
                              {currentSentence.emoji}
                            </motion.div>
                            
                            <div className="text-gray-100">
                              {displaySentence().split(' ').map((word, index) => {
                                const isNoun = word === noun;
                                const isVerb = word === verb;
                                const isHighlighted = isNoun || isVerb;
                                
                                return (
                                  <motion.span
                                    key={`${word}-${index}`}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                      duration: 0.4,
                                      delay: index * 0.08,
                                      type: 'spring',
                                      bounce: 0.4,
                                    }}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className={`inline-block mx-1 cursor-default ${
                                      isNoun
                                        ? 'px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-lg shadow-pink-500/30'
                                        : isVerb
                                        ? 'px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg shadow-blue-500/30'
                                        : ''
                                    }`}
                                  >
                                    {word}
                                  </motion.span>
                                );
                              })}
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            className="text-purple-400"
                          >
                            {displaySentence()}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-6 mb-8">
                  {/* Noun Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                  >
                    <label className="block text-purple-300 mb-3 ml-1 flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-pink-500"
                        animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 5px rgba(236, 72, 153, 0.5)', '0 0 15px rgba(236, 72, 153, 0.8)', '0 0 5px rgba(236, 72, 153, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Noun Input
                    </label>
                    <motion.input
                      type="text"
                      value={noun}
                      onChange={(e) => setNoun(e.target.value)}
                      placeholder="cat, robot, banana..."
                      className="w-full px-6 py-4 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 focus:border-pink-500/60 outline-none transition-all duration-300 text-gray-100 placeholder-purple-400/40"
                      whileFocus={{ scale: 1.02, boxShadow: '0 0 25px rgba(236, 72, 153, 0.3)' }}
                    />
                  </motion.div>

                  {/* Verb Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative"
                  >
                    <label className="block text-purple-300 mb-3 ml-1 flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-blue-500"
                        animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 5px rgba(59, 130, 246, 0.5)', '0 0 15px rgba(59, 130, 246, 0.8)', '0 0 5px rgba(59, 130, 246, 0.5)'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      Verb Input
                    </label>
                    <motion.input
                      type="text"
                      value={verb}
                      onChange={(e) => setVerb(e.target.value)}
                      placeholder="dancing, singing, flying..."
                      className="w-full px-6 py-4 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 focus:border-blue-500/60 outline-none transition-all duration-300 text-gray-100 placeholder-purple-400/40"
                      whileFocus={{ scale: 1.02, boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)' }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && noun.trim() && verb.trim() && !isGenerating) {
                          generateNewSentence();
                        }
                      }}
                    />
                  </motion.div>
                </div>

                {/* Generate Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.button
                    onClick={generateNewSentence}
                    disabled={!noun.trim() || !verb.trim() || isGenerating}
                    className="relative w-full px-8 py-5 rounded-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
                      backgroundSize: '200% 200%',
                    }}
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
                    }}
                  >
                    {/* Button shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative flex items-center justify-center gap-3 text-white font-medium">
                      <motion.div
                        animate={{ rotate: isGenerating ? 360 : 0 }}
                        transition={{ duration: 1, repeat: isGenerating ? Infinity : 0, ease: 'linear' }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                      {isGenerating ? 'Generating...' : showSentence ? 'Generate Another' : 'Generate Sentence'}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Zap className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Status bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 flex items-center justify-center gap-4 text-purple-400/60 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.6)' }}
                    />
                    <span>Neural Network Active</span>
                  </div>
                  <motion.div
                    className="w-1 h-1 rounded-full bg-purple-500"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span>Real-time Processing</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
