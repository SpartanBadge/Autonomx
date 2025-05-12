import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Calendar, MessageSquare, Share2, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { ProcessStep } from '../components/ProcessStep';
import { TestimonialCard } from '../components/TestimonialCard';
import { GlowingCircle } from '../components/GlowingCircle';
import { CustomCursor } from '../components/CustomCursor';

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI Phone Callers',
      description: 'Automated calling solutions for lead generation and customer support.',
      image: '/images/AIPHONECALLERS.png',
      icon: Calendar
    },
    {
      title: 'Website & Mobile App Creation',
      description: 'Custom digital solutions tailored to your business needs.',
      image: '/images/resized_ai_web_app_creation.png',
      icon: Brain
    },
    {
      title: 'AI Agents',
      description: 'Intelligent virtual assistants for 24/7 customer support.',
      image: '/images/AIAGENTSjo.png',
      icon: MessageSquare
    },
    {
      title: 'Social Media & Client Outreach',
      description: 'Automated client outreach via social media and email. ',
      image: '/images/resized_social_media_outreach.png',
      icon: Share2
    },
    {
      title: 'Visual Content Pack',
      description: 'Professional visual content creation for your brand.',
      image: '/images/visualcontentpack.png',
      icon: ImageIcon
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-space">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-black flex items-center justify-center px-4">
  <img
  src="/images/219HPPNEW.png"
  alt="Hero Background"
  className="absolute inset-0 w+80  h-full object-cover object-center z-0"
/>
        <GlowingCircle />
        
        <div className="container mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative px-8 py-6 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-filter"></div>
              <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
              <AnimatedHeadline>
                <h1 className="text-3xl md:text-5xl font-bold relative z-10">
                  {t('hero.title')}
                </h1>
              </AnimatedHeadline>
            </div>
            <div className="relative px-8 py-4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-filter"></div>
              <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
              <AnimatedHeadline delay={0.2}>
                <p className="text-xl md:text-2xl text-primary-glow font-medium relative z-10">
                  {t('hero.subtitle')}
                </p>
              </AnimatedHeadline>
            </div>
            <div className="relative px-8 py-4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-filter"></div>
              <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
              <AnimatedHeadline delay={0.4}>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl relative z-10">
                  {t('hero.description')}
                </p>
              </AnimatedHeadline>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4 mt-12"
            >
              <Button 
                variant="secondary"
                onClick={() => navigate('/scale')}
              >
                Learn How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 fade-in">
        <div className="container mx-auto text-center">
          <AnimatedHeadline>
            <h2 className="text-3xl font-bold mb-12">{t('trust.title')}</h2>
          </AnimatedHeadline>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 fade-in">
        <div className="container mx-auto">
          <AnimatedHeadline>
            <h2 className="text-3xl font-bold text-center mb-12">Make Your Business Better With</h2>
          </AnimatedHeadline>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group h-80 md:h-80"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="p-8 space-y-4 relative z-10">
                  <feature.icon className="w-8 h-8 text-primary-glow" />
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                  <Button 
                    variant="secondary"
                   onClick={() => {
                     if (feature.title === 'AI Phone Callers') {
                       navigate('/ai-phone-callers');
                     } else if (feature.title === 'AI Agents') {
                       navigate('/ai-agents');
                        } else if (feature.title === 'Visual Content Pack') {
                       navigate('/visual-content-pack');
                    } else if (feature.title === 'Website & Mobile App Creation') {
                      navigate('/website-app-creation');
                    } else if (feature.title === 'Social Media & Client Outreach') {
                      navigate('/social-media-outreach');
                     }
                   }}
                  >
                    Learn How It Works
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-black/50 fade-in">
        <div className="container mx-auto">
          <AnimatedHeadline>
            <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
          </AnimatedHeadline>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We went from chaos to calm. AutonomX's automation now books 15+ demos a week — without hiring."
              author="Samir"
              role="SaaS Founder"
            />
            <TestimonialCard
              quote="The AI support system has reduced our response time by 90%. Our customers love it."
              author="Sarah"
              role="Customer Success Manager"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 fade-in">
        <div className="container mx-auto">
          <AnimatedHeadline>
            <h2 className="text-3xl font-bold text-center mb-12">{t('process.title')}</h2>
          </AnimatedHeadline>
          <div className="max-w-2xl mx-auto space-y-8">
            <ProcessStep
              number={1}
              title={t('process.steps.1.title')}
              description={t('process.steps.1.description')}
            />
            <ProcessStep
              number={2}
              title={t('process.steps.2.title')}
              description={t('process.steps.2.description')}
            />
            <ProcessStep
              number={3}
              title={t('process.steps.3.title')}
              description={t('process.steps.3.description')}
            />
            <ProcessStep
              number={4}
              title={t('process.steps.4.title')}
              description={t('process.steps.4.description')}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 fade-in">
        <div className="container mx-auto max-w-3xl">
          <div className="p-8 rounded-2xl bg-black border-2 border-white/30 backdrop-blur-sm text-center">
            <AnimatedHeadline>
              <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            </AnimatedHeadline>
            <p className="text-xl text-gray-400 mb-8">
              {t('cta.subtitle')}<br />
              {t('cta.description')}
            </p>
            <Button 
              variant="secondary" 
              className="w-full md:w-auto px-12 py-4 text-lg font-semibold"
              onClick={() => navigate('/contact')}
            >
              GET MY FREE AI PLAN
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 fade-in">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-start gap-8">
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-bold mb-2">AutonomX</h3>
              <p className="text-sm text-gray-400">Intelligent Systems for Exponential Teams</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Products</h4>
              <ul className="text-sm space-y-1 text-gray-400">
                <li><Link to="/ai-phone-callers" className="hover-glow">AI Phone Callers</Link></li>
                <li><Link to="/ai-agents" className="hover-glow">AI Agents</Link></li>
                <li><Link to="/website-app-creation" className="hover-glow">Website & Mobile App Creation</Link></li>
                <li><Link to="/social-media-outreach" className="hover-glow">Social Media & Client Outreach</Link></li>
                <li><Link to="/visual-content-pack" className="hover-glow">Visual Content Pack</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Strategy Calls</h4>
              <ul className="text-sm space-y-1 text-gray-400">
                <li><Link to="/strategy" className="hover-glow">How it works?</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Scale Fast</h4>
              <ul className="text-sm space-y-1 text-gray-400">
                <li><Link to="/scale" className="hover-glow">How we can help your business?</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Prices</h4>
              <ul className="text-sm space-y-1 text-gray-400">
                <li><Link to="/pricing" className="hover-glow">View Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <ul className="text-sm space-y-1 text-gray-400">
                <li><Link to="/contact-us" className="hover-glow">Hungary</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;