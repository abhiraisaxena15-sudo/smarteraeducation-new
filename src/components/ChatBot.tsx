import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../data/site';
import { getBotReply, quickQuestions } from '../lib/chatbot';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! 👋 Ask me anything about admissions — fees, universities, scholarships, online degrees or documents. Counselling is 100% free!' },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  // Sirf chat box ke andar scroll karo (poora page nahi hilna chahiye)
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');

    setTimeout(() => {
      const response = getBotReply(text);
      setMessages((prev) => [...prev, { role: 'bot', text: response }]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close admission help chat' : 'Open admission help chat'}
        aria-expanded={isOpen}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center shadow-lg shadow-navy-500/30 hover:shadow-xl transition-shadow"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-800 to-navy-700 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-navy-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Admission Help</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/60">Quick answers · Counsellors on WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={listRef} className="h-80 max-h-[45vh] overflow-y-auto p-4 space-y-3 bg-slate-50" aria-live="polite">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-navy-600' : 'bg-navy-100'
                  }`}>
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-navy-600" />
                    )}
                  </div>
                  <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-navy-600 text-white rounded-tr-sm'
                      : 'bg-white text-slate-700 shadow-sm rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 bg-white border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-navy-50 text-navy-600 font-medium hover:bg-navy-100 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  maxLength={200}
                  placeholder="Type your question..."
                  aria-label="Type your question"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-navy-300 transition-colors"
                />
                <button
                  onClick={() => handleSend(input)}
                  aria-label="Send message"
                  className="w-10 h-10 rounded-xl bg-navy-600 flex items-center justify-center hover:bg-navy-700 transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-green-700 hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                Talk to a counsellor on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
