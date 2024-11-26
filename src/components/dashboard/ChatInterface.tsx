import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'I understand your question. Let me help you with that...',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="cyber-card h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : ''}`}
          >
            {message.type === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Bot size={20} className="text-teal-400" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                message.type === 'user'
                  ? 'bg-teal-500/20 text-teal-400'
                  : 'bg-gray-800/50 text-teal-400/90'
              }`}
            >
              {message.content}
            </div>
            {message.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                <User size={20} className="text-teal-400" />
              </div>
            )}
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-teal-500/20">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="cyber-input flex-1"
          />
          <button type="submit" className="cyber-button px-6">
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};