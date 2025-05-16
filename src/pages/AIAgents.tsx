import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, MessageSquare, Zap, Users, Database, Globe, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';
import { usePageTranslation } from '../hooks/usePageTranslation';

const AIAgents = () => {
  const navigate = useNavigate();
  const { t } = usePageTranslation('aiAgents');

  const features = [
    { icon: Brain, text: t('Thinks like a human') },
    { icon: Database, text: t('Boosts efficiency') },
    { icon: Globe, text: t('Available 24/7') },
    { icon: Zap, text: t('Responds instantly') },
    { icon: CheckCircle2, text: t('Easy to integrate') }
  ];

  const applications = [
    { 
      name: 'Customer Support', 
      image: '/images/aiphonec.4.avif',
      description: 'AI-powered support agents available 24/7'
    },
    { 
      name: 'Sales', 
      image: '/images/aiagents.2.avif',
      description: 'Automated lead qualification and nurturing'
    },
    { 
      name: 'HR', 
      image: '/images/aiagents.3.avif',
      description: 'Streamlined recruitment and onboarding processes'
    },
    { 
      name: 'Admin', 
      image: '/images/aiagents.4.avif',
      description: 'Automated administrative tasks and workflows'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can AI Agents learn my business?',
      answer: 'Our AI Agents can be trained on your business processes within days, learning from your documentation,website, and specific requirements.'
    },
    {
      question: 'Can AI Agents handle complex customer inquiries?',
      answer: 'Yes! Our AI Agents use advanced natural language processing to understand context, handle multi-step conversations, and make intelligent decisions.'
    },
    {
      question: 'How do AI Agents integrate with existing systems?',
      answer: 'We provide seamless integration with popular CRM systems, existing websites, and communication platforms. Custom integrations are also available.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/AIAGENTSjo.png")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <AnimatedHeadline>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
            </AnimatedHeadline>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t('hero.description')}
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Get YOUR OWN AI AGENT
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What They Are Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('Meet Your Next Digital Team Member')}</h2>
              <p className="text-lg text-gray-300">
                {t('AI Agents are smart, scalable assistants that engage customers, automate repetitive tasks, and deliver instant responses across all channels. No fatigue, no delays — just results.')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Bot className="w-32 h-32 text-primary-glow absolute -top-4 -left-4 opacity-20" />
              <div className="rounded-xl border border-primary-glow/20 p-8 backdrop-blur-sm">
                <MessageSquare className="w-16 h-16 text-primary-glow mb-4" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Interactive Demo</p>
                    <p className="text-gray-400">Experience our AI Agent in action</p>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      const vgConfig = window.VG_CONFIG;
                      if (vgConfig) {
                        const container = document.getElementById('VG_OVERLAY_CONTAINER');
                        if (container) {
                          const chatButton = container.querySelector('button');
                          if (chatButton) {
                            chatButton.click();
                          }
                        }
                      }
                    }}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-primary-glow/20 to-primary-glow/10 hover:from-primary-glow/30 hover:to-primary-glow/20 transition-all duration-300 border-primary-glow hover:border-primary-glow/80"
                  >
                    <div className="absolute inset-0 bg-primary-glow/5 transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative flex items-center justify-center gap-3">
                      <MessageSquare className="w-5 h-5 text-primary-glow group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold tracking-wide">Try AI Agent Now</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-glow/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
              >
                <feature.icon className="w-8 h-8 text-primary-glow mb-4" />
                <p className="text-lg">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built For Every Business Function</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            From automating your customer support to boosting sales, our AI Agents are versatile and highly adaptable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative group">
                  <div
                    className="h-48 mx-auto mb-4 rounded-xl bg-cover bg-center transition-all duration-300"
                    style={{ backgroundImage: `url(${app.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div>
                      <p className="text-lg font-medium">{app.name}</p>
                      <p className="text-sm text-gray-300">{app.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  
      { /* Testimonial Section 
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm text-center"
          >
            <p className="text-2xl italic mb-6">
              "The AI Agents have revolutionized our customer service. They handle 80% of inquiries automatically, and our team can focus on complex cases. The ROI has been incredible."
            </p>
            <p className="text-lg font-semibold">Michael Chen</p>
            <p className="text-gray-400">Director of Customer Experience</p>
          </motion.div>
        </div>
      </section>
 */}
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let an AI Agent Join Your Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using intelligent agents that actually get the job done.
          </p>
          <Button 
            variant="secondary"
            onClick={() => navigate('/contact')}
            className="text-lg px-8 py-4"
          >
            Get Your Free AI Plan
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AIAgents;