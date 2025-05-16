import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Bot, Mail, MessageSquare, BarChart, Zap, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';

const SocialMediaOutreach = () => {
  const navigate = useNavigate();

  const steps = [
    { 
      icon: Upload, 
      title: 'Upload Your Leads', 
      description: 'Connect your CRM, upload a CSV, or share a Google Sheet with your lead list.'
    },
    { 
      icon: Bot, 
      title: 'We Build Your Outreach', 
      description: 'Our AI creates personalized messages for each lead based on your target audience.'
    },
    { 
      icon: Zap, 
      title: 'Automation Takes Over', 
      description: 'The system sends messages across email and social media on autopilot.'
    }
  ];

  const benefits = [
    { icon: Mail, text: 'Automated email sequences that feel personal' },
    { icon: MessageSquare, text: 'AI-powered social media DMs across platforms' },
    { icon: Target, text: 'Smart lead targeting and segmentation' },
    { icon: BarChart, text: 'Real-time tracking of opens, clicks, and replies' }
  ];

  const businessTypes = [
    { 
      image: '/images/scm.1.avif', 
      type: 'B2B Startups',
      description: 'Automated lead generation and nurturing for B2B companies'
    },
    { 
      image: '/images/website&app.1.avif', 
      type: 'Course Creators',
      description: 'Engage potential students and increase course enrollments'
    },
    { 
      image: '/images/scm.3.avif', 
      type: 'Marketing Agencies',
      description: 'Scale client acquisition and campaign management'
    },
    { 
      image: '/images/scm.4.avif', 
      type: 'Sales Teams',
      description: 'Automate prospecting and follow-ups for sales teams'
    }
  ];

  const faqs = [
    {
      question: 'Do I need to write the messages myself?',
      answer: 'No! Our AI creates personalized messages for each lead based on your input and target audience. You just review and approve the templates.'
    },
    {
      question: 'Can it send both emails and social DMs?',
      answer: 'Yes – our system supports email outreach, Instagram DMs, LinkedIn messages, and more. You can run campaigns across multiple channels simultaneously.'
    },
    {
      question: 'How do I send my leads to you?',
      answer: 'You can upload a CSV file, Airtable, SupaBase or  share a Google Sheet. Our system will automatically process and validate the data.'
    },
    {
      question: 'How do I know if it\'s working?',
      answer: 'Our dashboard shows real-time metrics including open rates, reply rates, and conversion tracking. You\'ll get detailed reports and can adjust campaigns on the fly.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/resized_social_media_outreach.png")'
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
              <h1 className="text-4xl md:text-5l font-bold mb-6">
                AI Outreach Built for Conversions
              </h1>
            </AnimatedHeadline>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Upload your leads – we handle the rest. Automated emails and social media messages tailored for every contact.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Get Your Free Outreach Plan
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Three simple steps to automate your outreach and scale your business
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm relative"
              >
                <step.icon className="w-8 h-8 text-primary-glow mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary-glow w-8 h-8 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Automate Your Outreach?</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Save time and increase conversions with intelligent automation
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm flex items-start gap-4"
              >
                <benefit.icon className="w-8 h-8 text-primary-glow flex-shrink-0" />
                <p className="text-lg">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For Growing Teams</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="h-48 mx-auto rounded-xl bg-cover bg-center transition-all duration-300"
                  style={{ backgroundImage: `url(${business.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                  <div>
                    <p className="text-lg font-medium">{business.type}</p>
                    <p className="text-sm text-gray-300">{business.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section 
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm text-center"
          >
            <p className="text-2xl italic mb-6">
              "The automated outreach system saves us 20+ hours per week and has doubled our response rates. The personalization is incredible."
            </p>
            <p className="text-lg font-semibold">David Chen</p>
            <p className="text-gray-400">Head of Sales, TechGrowth</p>
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
          <h2 className="text-3xl font-bold mb-6">Let AI Take Over Your Outreach</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to automate your lead engagement and boost conversions?
          </p>
          <Button 
            variant="secondary"
            onClick={() => navigate('/contact')}
            className="text-lg px-8 py-4"
          >
            Request a Demo or Book a Strategy Call
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SocialMediaOutreach;