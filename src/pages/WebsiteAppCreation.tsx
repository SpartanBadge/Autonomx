import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Smartphone, Zap, Layout, Search, Database, Code, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';

const WebsiteAppCreation = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Zap, text: 'Lightning-fast performance' },
    { icon: Smartphone, text: 'Fully responsive & mobile-ready' },
    { icon: Search, text: 'SEO-optimized for visibility' },
    { icon: Database, text: 'Integrated with analytics & CRM' },
    { icon: Code, text: 'Built with the latest tech stacks' }
  ];

  const portfolioItems = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with AI-powered product recommendations and personalized user journeys',
      image: '/images/website&app.1.avif'
    },
    {
      title: 'Healthcare App',
      description: 'Comprehensive patient management system with real-time health monitoring and secure data handling',
      image: '/images/website&app.2.avif'
    },
    {
      title: 'Real Estate Website',
      description: 'Interactive virtual property tours and AI-powered property matching for potential buyers',
      image: '/images/aiphonec.2.avif'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website or app?',
      answer: '-Typical projects take anywhere from a few days to a couple of weeks from concept to launch, depending on complexity. We follow an agile methodology to deliver value incrementally.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive maintenance plans, regular updates, and 24/7 technical support to keep your digital presence running smoothly.'
    },
    {
      question: 'Can you redesign my existing website/app?',
      answer: 'Absolutely. We specialize in modernizing existing platforms while preserving your data and improving user experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/website&app.png")'
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Website and Mobile App – Built to Win
              </h1>
            </AnimatedHeadline>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Modern, fast, and beautifully designed websites and apps that convert visitors into customers.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Get a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Everything You Need to Launch</h2>
              <p className="text-lg text-gray-300">
                From idea to launch, we create powerful websites and mobile apps that look stunning and perform flawlessly across all devices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm">
                <Layout className="w-8 h-8 text-primary-glow mb-2" />
                <p className="font-medium">UI/UX Design</p>
              </div>
              <div className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm">
                <Code className="w-8 h-8 text-primary-glow mb-2" />
                <p className="font-medium">Development</p>
              </div>
              <div className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm">
                <Search className="w-8 h-8 text-primary-glow mb-2" />
                <p className="font-medium">SEO</p>
              </div>
              <div className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm">
                <Database className="w-8 h-8 text-primary-glow mb-2" />
                <p className="font-medium">Testing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Results</h2>
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

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Could Build For You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden group relative"
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="h-48 bg-cover bg-center transition-all duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm text-center"
          >
            <p className="text-2xl italic mb-6">
              "The team delivered beyond our expectations. Our new website has increased conversions by 150%, and the mobile app has stellar reviews."
            </p>
            <p className="text-lg font-semibold">Alex Thompson</p>
            <p className="text-gray-400">CEO, TechStart Inc.</p>
          </motion.div>
        </div>
      </section>

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
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your digital presence? Let's discuss your project.
          </p>
          <Button 
            variant="secondary"
            onClick={() => navigate('/contact')}
            className="text-lg px-8 py-4"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WebsiteAppCreation;