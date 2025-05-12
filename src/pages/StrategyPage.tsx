import React from 'react';
import { motion } from 'framer-motion';
import { Video, Target, CheckCircle2, Calendar, Clock, Users, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { Footer } from '../components/Footer';

const StrategyPage = () => {
  const navigate = useNavigate();

  const expectations = [
    { icon: Users, text: 'We learn about your business and goals' },
    { icon: Target, text: 'We identify where automation can help' },
    { icon: Video, text: 'We show you live demos – like an AI phone call or chatbot in action' },
    { icon: CheckCircle2, text: 'You ask questions. We give honest answers' }
  ];

  const benefits = [
    { icon: Clock, text: "It's 100% free" },
    { icon: Brain, text: 'No hard selling – just real insights' },
    { icon: Target, text: "You'll walk away with a plan you can use" },
    { icon: Users, text: 'You get expert advice from automation pros' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/strategycall.avif")'
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
                Your Strategy Call
              </h1>
            </AnimatedHeadline>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              In just 10–15 minutes, we'll help you uncover the smartest ways to grow your business with automation.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Book a Free Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Happens During the Call?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm flex items-start gap-4"
              >
                <item.icon className="w-8 h-8 text-primary-glow flex-shrink-0" />
                <p className="text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">After the Call – What You Get</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-glow/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-glow" />
                </div>
                <p className="text-lg">Within 24 hours after our call</p>
              </div>
              <div className="pl-16 space-y-4">
                <p className="text-xl">You'll receive:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>A personalized automation strategy plan</li>
                  <li>Clear pricing proposal based on your needs</li>
                  <li>Implementation timeline</li>
                </ul>
              </div>
              <p className="pl-16 text-gray-400">No pressure. No obligations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Book This Call?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm flex items-start gap-4"
              >
                <benefit.icon className="w-8 h-8 text-primary-glow flex-shrink-0" />
                <p className="text-lg">{benefit.text}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Discover What's Possible?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free strategy call now and let's explore how automation can transform your business.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Book a Free Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StrategyPage;