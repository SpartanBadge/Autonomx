import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Check, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

const PricingPage = () => {
  const navigate = useNavigate();

  const serviceTable = [
    { service: 'AI Agents', from: '1500€', to: '4000€' },
    { service: 'Website', from: '1000€', to: '3500€' },
    { service: 'Mobile App', from: '1500€', to: '5000€' },
    { service: 'AI Phone Callers', from: '1400€', to: '2800€' },
        { service: 'Social Media & Client Outreach', from: '750€', to: '3000€' },
    { service: 'Visual Content Packs', from: '99€', to: '500€' },
    { service: 'VCP Monthly Subscription', from: '149€/month', to: null },
    { service: 'General Maintenance', from: '200€/month', to: null },
    { service: 'Maintenance + Upgrade', from: '325€/month', to: null }
  ];

  const monthlyTools = [
    { service: 'Voiceflow', fee: '0-100€/month', applies: 'AI Agents' },
    { service: 'Make.com', fee: '0-63€/month', applies: 'AI Agents' },
    { service: 'Voiceglow', fee: '0-59€/month', applies: 'AI Agents' },
    { service: 'Calendly', fee: '0-16€/month', applies: 'AI Agents' },
    { service: 'Supabase', fee: '25€/month', applies: 'AI Agents' },
    { service: 'Bland (AI Phone Callers extra)', fee: '20€/month', applies: 'AI Phone Callers' },
    { service: 'Mobile Phone Number', fee: '25€/month', applies: 'AI Phone Callers' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("images/pricingpage.avif")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        <div className="container mx-auto relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-5">Simple Pricing. Powerful Solutions.</h1>
            <p className="text-xl text-gray-300">
              We believe in clear, upfront pricing. No hidden fees. Just scaleable automation tailored to your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pricing Table */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Service Price List</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left">Service</th>
                  <th className="py-4 px-6 text-right">Price From</th>
                  <th className="py-4 px-6 text-right">Price To</th>
                </tr>
              </thead>
              <tbody>
                {serviceTable.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">{item.service}</td>
                    <td className="py-4 px-6 text-right">{item.from}</td>
                    <td className="py-4 px-6 text-right">{item.to || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
{/*
   montly tools table
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Motnhly subscription prices: </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left">Service/Tool</th>
                  <th className="py-4 px-6 text-right">Fee</th>
                  <th className="py-4 px-6 text-right">Applies To</th>
                </tr>
              </thead>
              <tbody>
                {monthlyTools.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">{item.service}</td>
                    <td className="py-4 px-6 text-right">{item.fee}</td>
                    <td className="py-4 px-6 text-right">{item.applies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Need a Custom Quote?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Every business is different. Book a free strategy call, and we'll tailor a pricing plan just for you.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Book a Free Call
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;