import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Users, Globe, Building, CheckCircle2, PlayCircle, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';
import { DemoCallModal } from '../components/DemoCallModal';
import { useState } from 'react';
import { usePageTranslation } from '../hooks/usePageTranslation';

const AIPhoneCallers = () => {
  const navigate = useNavigate();
  const { t } = usePageTranslation('aiPhoneCaller');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(number);
  };

  const handleDemoCall = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/6w4kimh83gbvftj7mj381wg84iltk77v', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Failed to schedule demo call');
      }

      setShowModal(true);
      setPhoneNumber('');
    } catch (err) {
      setError('Failed to schedule demo call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Clock, text: '24/7 availability – never miss a call again' },
    { icon: Users, text: 'Scalable – handle 10 or 10,000 calls' },
    { icon: CheckCircle2, text: 'Cost-effective – no need to hire large call teams' },
    { icon: Globe, text: 'Multilingual support' },
    { icon: Building, text: 'Personalized conversation scripts' }
  ];

  const industries = [
    { 
      name: 'Healthcare', 
      image: '/images/aiphonec.1.avif',
      description: 'Automated appointment scheduling and patient follow-ups'
    },
    { 
      name: 'Real Estate', 
      image: '/images/aiphonec.2.avif',
      description: 'Property inquiries and viewing scheduling automation'
    },
    { 
      name: 'Marketing', 
      image: '/images/aiphonec.3.avif',
      description: 'Lead qualification and campaign management'
    },
    { 
      name: 'Customer Support', 
      image: '/images/aiphonec.4.avif',
      description: '24/7 automated customer service and support'
    }
  ];

  const faqs = [
    {
      question: 'Can the AI handle complex conversations?',
      answer: 'Yes! Our AI is trained to understand context, handle multiple topics, and navigate complex dialogues naturally.'
    },
    {
      question: 'Is it GDPR-compliant?',
      answer: 'Absolutely. We maintain strict data protection standards and full GDPR compliance for all our services.'
    },
    {
      question: 'How fast can I get started?',
      answer: 'You can get started RIGHT NOW.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/AIPHONECALLERS.png")'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t('hero.description')}
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              GET YOUR OWN PHONE ASSISTANT
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">What Are AI Phone Callers?</h2>
              <p className="text-lg text-gray-300">
                Our AI Phone Callers are advanced virtual agents that make and receive phone calls on behalf of your business. They speak naturally, understand conversations, and take actions – whether it's confirming appointments, answering questions, or collecting information.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[100vw-2rem] md:w-auto px-2 md:px-0"
            >
              <Phone className="w-32 h-32 text-primary-glow absolute -top-4 -left-4 opacity-20" />
              <div className="rounded-xl border border-primary-glow/20 p-3 md:p-8 backdrop-blur-sm">
                <PlayCircle className="w-16 h-16 text-primary-glow mb-4" />
                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg font-semibold">Request a Demo Call</p>
                    <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-4">Experience our AI in action</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-xs md:text-sm font-medium">
                      Enter your phone number for a demo call from our Dental Assistant
                    </label>
                    <div className="flex flex-col md:flex-row gap-2">
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1234567890"
                        className="w-full md:flex-1 px-3 py-2 text-sm md:text-base rounded-lg bg-white/10 border border-white/20 focus:border-primary-glow text-white"
                      />
                      <Button
                        variant="secondary"
                        onClick={handleDemoCall}
                        className="w-full md:w-auto whitespace-nowrap text-sm md:text-base py-2 md:py-3"
                        disabled={isSubmitting}
                      >
                        <PhoneCall className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Scheduling...' : 'Get Demo Call'}
                      </Button>
                    </div>
                    {error && (
                      <p className="text-red-500 text-xs md:text-sm">{error}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Businesses Love Our AI Callers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
              >
                <benefit.icon className="w-8 h-8 text-primary-glow mb-4" />
                <p className="text-lg">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect for Any Industry</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Whether you run a dental clinic, real estate agency, marketing firm, or customer support center – our AI callers adapt to your workflow.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
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
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div>
                      <p className="text-lg font-medium">{industry.name}</p>
                      <p className="text-sm text-gray-300">{industry.description}</p>
                    </div>
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
              "The AI Phone Callers have transformed our appointment scheduling. We've seen a 40% increase in confirmed appointments and our staff can focus on providing better care."
            </p>
            <p className="text-lg font-semibold">Dr. Sarah Mitchell</p>
            <p className="text-gray-400">Dental Clinic Owner</p>
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
          <h2 className="text-3xl font-bold mb-6">See It in Action</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us show you how our AI can transform your client communication.
          </p>
          <Button 
            variant="secondary"
            onClick={() => navigate('/contact')}
            className="text-lg px-8 py-4"
          >
            Schedule Your Free Call Now
          </Button>
        </div>
      </section>
      <Footer />
      <DemoCallModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default AIPhoneCallers;