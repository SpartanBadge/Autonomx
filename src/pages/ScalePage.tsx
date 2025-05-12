import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, MessageSquare, Phone, Calendar, Brain, Zap, 
  Building, Briefcase, Stethoscope, ShoppingBag, 
  Users, Clock, TrendingUp, Shield, Database,
  Globe, Image, Building2, GraduationCap, Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

const ScalePage = () => {
  const navigate = useNavigate();

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: 'AI chatbots and voice agents answer FAQs and handle inquiries 24/7.',
      icon: MessageSquare
    },
    {
      title: 'Lead Qualification',
      description: 'AI agents engage leads via phone, qualify them, and schedule appointments.',
      icon: Phone
    },
    {
      title: 'Client Follow-ups',
      description: 'Automated reminders, messages, and DMs sent by AI to nurture your pipeline.',
      icon: Calendar
    },
    {
      title: 'Sales Assistance',
      description: 'AI analyzes customer behavior and suggests next steps or upsells.',
      icon: Brain
    }
  ];

  const industries = [
    { icon: Building, name: 'Real Estate', benefit: 'Automated property matching & scheduling' },
    { icon: Stethoscope, name: 'Healthcare', benefit: 'Patient scheduling & follow-ups' },
    { icon: ShoppingBag, name: 'E-commerce', benefit: '24/7 customer support & sales' },
    { icon: Briefcase, name: 'Professional Services', benefit: 'Client onboarding & management' }
  ];

  const benefits = [
    { icon: Clock, text: 'Works 24/7 without burnout' },
    { icon: Brain, text: 'Learns and improves over time' },
    { icon: Users, text: 'Increases productivity with less manual effort' },
    { icon: TrendingUp, text: 'Saves costs by reducing workload' },
    { icon: Shield, text: 'Consistent quality and compliance' },
    { icon: Database, text: 'Scalable as your business grows' }
  ];

  const comparisons = [
    {
      before: 'Hours spent on manual follow-ups',
      after: 'Automated follow-ups 24/7'
    },
    {
      before: 'Missed calls and opportunities',
      after: 'Every call answered instantly'
    },
    {
      before: 'Inconsistent customer experience',
      after: 'Standardized, high-quality responses'
    },
    {
      before: 'Limited by staff availability',
      after: 'Unlimited scaling potential'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/scalefast.avif")'
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
              Scale Smarter with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how AI can automate your workflow, boost sales, and save you time – without hiring extra staff.
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

      {/* Problem → Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">What's Slowing You Down?</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Let's turn your business challenges into automated solutions</p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 relative"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border-l-2 border-white/20 backdrop-blur-sm hover:border-l-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">Manual Tasks Eating Your Time?</h3>
                <p className="text-gray-300">Hours spent on repetitive work like data entry, follow-ups, and customer support.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border-l-2 border-white/20 backdrop-blur-sm hover:border-l-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">Losing Leads to Slow Response?</h3>
                <p className="text-gray-300">Potential customers slipping away because you can't follow up fast enough.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border-l-2 border-white/20 backdrop-blur-sm hover:border-l-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">Development Taking Too Long?</h3>
                <p className="text-gray-300">Waiting months for websites and apps while competitors move ahead.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 relative"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border-r-2 border-primary-glow/20 backdrop-blur-sm hover:border-r-primary-glow/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">AI Automation Takes Over</h3>
                <p className="text-gray-300">Our AI agents handle customer support, data entry, and follow-ups 24/7.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border-r-2 border-primary-glow/20 backdrop-blur-sm hover:border-r-primary-glow/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">Instant Lead Response</h3>
                <p className="text-gray-300">AI phone callers and chat agents engage leads immediately, any time.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border-r-2 border-primary-glow/20 backdrop-blur-sm hover:border-r-primary-glow/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">Rapid Development</h3>
                <p className="text-gray-300">Launch new websites and apps lighting fast with our AI-assisted development.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/5 to-black/50" />
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">See the Difference</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Transform your business operations with AI automation</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-6">Before AI</h3>
              {[
                'Manually chasing leads',
                'Waiting 3-6 months for a website',
                'Inconsistent outreach',
                'Limited by staff availability'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-gradient-to-br from-black/40 to-black/20 border-l-2 border-white/20 backdrop-blur-sm hover:border-l-white/40 transition-all duration-300"
                >
                  {text}
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-6">After AI</h3>
              {[
                'AI qualifies and schedules them for you',
                'We deliver faster than traditional teams ever could.',
                'Automated, daily outreach to your best leads',
                'AI works 24/7 without breaks'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-gradient-to-br from-black/40 to-black/20 border-r-2 border-primary-glow/20 backdrop-blur-sm hover:border-r-primary-glow/40 transition-all duration-300"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Fit Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Designed for Every Industry</h2>
          <p className="text-xl text-center text-gray-300 mb-12">AI solutions that adapt to your specific needs</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/images/aiphonec.2.avif',
                industry: 'Real Estate',
                benefit: 'Automated property matching & scheduling'
              },
              {
                image: '/images/website&app.2.avif',
                industry: 'Healthcare',
                benefit: 'Patient scheduling & follow-ups'
              },
              {
                image: '/images/scalefast.3.avif',
                industry: 'E-commerce',
                benefit: '24/7 customer support & sales'
              },
              {
                image: '/images/aiagents.3.avif',
                industry: 'Professional Services',
                benefit: 'Client onboarding & management'
              },
              {
                image: '/images/aiagents.4.avif',
                industry: 'B2B Services',
                benefit: 'Lead qualification & nurturing'
              },
              {
                image: '/images/scalefast.6.avif',
                industry: 'Education',
                benefit: 'Student support & enrollment'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="h-64 bg-cover bg-center transition-all duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.industry}</h3>
                    <p className="text-gray-300">{item.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 via-black to-primary-glow/5 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-center mb-6">Why Growing Companies Choose Us</h2>
              <p className="text-xl text-center text-gray-300 mb-16">Proven benefits that drive real business growth</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              { icon: Clock, text: '24/7 automation' },
              { icon: TrendingUp, text: 'Cost savings' },
              { icon: Zap, text: 'Faster execution' },
              { icon: Target, text: 'Higher lead conversion' },
              { icon: Database, text: 'Scalable infrastructure' },
              { icon: Users, text: 'Personalized experiences' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-glow/10 blur-xl rounded-full transform group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative w-16 h-16 rounded-full border border-primary-glow/30 bg-black flex items-center justify-center group-hover:border-primary-glow transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-primary-glow" />
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <div className="h-px w-full bg-gradient-to-r from-primary-glow/30 to-transparent absolute top-1/2 -translate-y-1/2 -left-4 -z-10" />
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border-l-2 border-primary-glow/30 group-hover:border-primary-glow transition-colors duration-300">
                    <p className="text-xl font-medium">{benefit.text}</p>
                    <p className="text-gray-400 mt-2">
                      {index === 0 && "Our AI systems work around the clock, ensuring your business never sleeps"}
                      {index === 1 && "Reduce operational expenses while increasing efficiency"}
                      {index === 2 && "Get more done in less time with automated workflows"}
                      {index === 3 && "Convert more leads with intelligent follow-up systems"}
                      {index === 4 && "Grow without limits using our scalable infrastructure"}
                      {index === 5 && "Deliver tailored experiences to every customer"}
                    </p>
                  </div>
                </div>
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
            className="p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border border-primary-glow/20 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-glow/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Smarter?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how AI can save you time and drive more growth.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
            >
              Book Your Free Strategy Call
            </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScalePage;