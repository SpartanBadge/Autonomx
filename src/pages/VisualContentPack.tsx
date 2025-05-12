import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Image as ImageIcon, Play, Instagram, Youtube, Linkedin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { Footer } from '../components/Footer';

const VisualContentPack = () => {
  const navigate = useNavigate();

  const coreServices = [
    {
      icon: Camera,
      title: 'Premium Product Images',
      description: 'Studio-level images that elevate your brand with professional lighting, composition, and retouching.'
    },
    {
      icon: Play,
      title: 'Ad Creation for Social Media',
      description: 'Tailored ad creatives designed for clicks and conversions across every major platform.'
    },
    {
      icon: Video,
      title: 'Short Promo Videos',
      description: 'Dynamic, mobile-first videos that showcase your product in action and stop the scroll.'
    },
    {
      icon: Palette,
      title: 'Visual Brand Design',
      description: 'Ensure visual consistency with comprehensive brand kits and design support.'
    }
  ];

  const deliverables = [
    'Retouched Product Images',
    'Platform-Specific Ad Creatives (e.g., Facebook, IG, TikTok, YouTube)',
    'Short Product Promo Videos',
    'Brand Kit & Style Guide'
  ];

  const platforms = [
    { image: '/images/instagramm.png', name: 'Instagram Reels', description: 'Engaging short video contents, optimized for Instagram' },
    { image: '/images/youtube.png', name: 'YouTube Ads', description: 'Professional video ads that capture attention' },
    { image: '/images/tiktok.png', name: 'TikTok Ads', description: 'Trending, viral-ready content for Gen Z' },
    { image: '/images/facebook.png', name: 'Facebook Ads', description: 'High-converting social ads that drive results' }
  ];

  const process = [
    {
      number: 1,
      title: 'Strategy Call',
      description: 'We learn about your brand, goals, and visual needs to create a tailored plan.'
    },
    {
      number: 2,
      title: 'Content Creation',
      description: 'Our team produces premium assets tailored to your campaign goals.'
    },
    {
      number: 3,
      title: 'Delivery & Optimization',
      description: 'You get fully edited visuals ready to publish, plus monthly creative insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/visualcontentpack.png")'
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
              <h1 className="text-4xl md:text-4.5xl font-bold mb-6">
                Premium Visuals That Capture Attention
              </h1>
            </AnimatedHeadline>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From stunning product shots to scroll-stopping video ads, we help you stand out on every platform.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Get Your Custom Content Pack
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Visual Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
              >
                <service.icon className="w-8 h-8 text-primary-glow mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Premium visual content tailored for your brand</p>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-black/30 border border-primary-glow/20 rounded-lg backdrop-blur-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Optimized for Paid Ads and Organic Content</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div
                    className="h-48 mx-auto mb-4 rounded-xl bg-cover bg-center transition-all duration-300 group-hover:shadow-lg"
                    style={{ backgroundImage: `url(${platform.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div>
                      <p className="text-lg font-medium">{platform.name}</p>
                      <p className="text-sm text-gray-300">{platform.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Production Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary-glow/20 flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary-glow w-8 h-8 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Make Your Brand Visually Unstoppable</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to stand out with premium visuals that convert?
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Schedule Your Free Visual Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisualContentPack;