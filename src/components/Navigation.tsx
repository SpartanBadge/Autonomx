import { motion } from 'framer-motion';
import { Menu, Bot, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { Button } from './Button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);
  const [isScaleOpen, setIsScaleOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = [
    { name: 'AI Phone Callers', path: '/ai-phone-callers' },
    { name: 'AI Agents', path: '/ai-agents' },
    { name: 'Website & Mobile App Creation', path: '/website-app-creation' },
    { name: 'Social Media & Client Outreach', path: '/social-media-outreach' },
    { name: 'Visual Content Pack', path: '/visual-content-pack' }
  ];

  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <motion.button
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5 }}
className="
cursor-none
text-3xl          
font-extrabold   
tracking-tight    
mr-auto           
flex items-center gap-2
 hover:opacity-80  
hover:scale-105   
transition       
duration-200
         "
onClick={() => navigate('/')}
      >
        <Bot size={32} className="text-primary-glow" />
        AutonomX
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex items-center gap-8"
      >
        <div className="relative group" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
          <button className="nav-link glitch-hover flex items-center gap-2">
            PRODUCTS
            <ChevronDown size={16} />
          </button>
          
          <div className={`absolute left-0 mt-2 w-64 bg-black/90 border border-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 ${
            isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsProductsOpen(false);
                  navigate(product.path);
                }}
                className="block w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200"
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group" onMouseEnter={() => setIsStrategyOpen(true)} onMouseLeave={() => setIsStrategyOpen(false)}>
          <button className="nav-link glitch-hover flex items-center gap-2">
            STRATEGY CALLS
            <ChevronDown size={16} />
          </button>
          
          <div className={`absolute left-0 mt-2 w-64 bg-black/90 border border-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 ${
            isStrategyOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <button 
              onClick={() => {
                setIsStrategyOpen(false);
                navigate('/strategy');
              }}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200"
            >
              How it works?
            </button>
          </div>
        </div>

        <div className="relative group" onMouseEnter={() => setIsScaleOpen(true)} onMouseLeave={() => setIsScaleOpen(false)}>
          <button className="nav-link glitch-hover flex items-center gap-2">
            SCALE FAST
            <ChevronDown size={16} />
          </button>
          
          <div className={`absolute left-0 mt-2 w-64 bg-black/90 border border-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 ${
            isScaleOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <button 
              onClick={() => {
                setIsScaleOpen(false);
                navigate('/scale');
              }}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200"
            >
              How we can help your business?
            </button>
          </div>
        </div>

        <Link to="/pricing" className="nav-link glitch-hover">PRICES</Link>
        <Link to="/contact-us" className="nav-link glitch-hover">CONTACT US </Link>
        <Button 
          variant="secondary"
          onClick={() => navigate('/contact')}
          className="ml-4"
        >
          BOOK A CALL
        </Button>
        <LanguageSelector />
      </motion.div>

      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 p-4 flex flex-col gap-4 md:hidden backdrop-blur-sm border-b border-white/5">
          <div className="space-y-2">
            <button 
              className="w-full text-left nav-link glitch-hover"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              PRODUCTS
            </button>
            {isProductsOpen && (
              <div className="pl-4 space-y-2">
                {products.map((product) => (
                  <button
                    key={product.name}
                    onClick={() => {
                      setIsProductsOpen(false);
                      setIsMenuOpen(false);
                      navigate(product.path);
                    }}
                    className="block w-full text-left py-2 text-sm text-gray-300 hover:text-white"
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/strategy');
            }}
            className="nav-link glitch-hover text-left w-full"
          >
            STRATEGY CALLS
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/contact-us');
            }}
            className="nav-link glitch-hover text-left w-full"
          >
            SCALE FAST
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/pricing');
            }}
            className="nav-link glitch-hover text-left w-full"
          >
            PRICES
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/contact-us');
            }}
            className="nav-link glitch-hover text-left w-full"
          >
            CONTACT US
          </button>
          <Button 
            variant="secondary"
            onClick={() => navigate('/contact-us')}
            className="w-full"
          >
            BOOK A CALL
          </Button>
          <LanguageSelector />
        </div>
      )}
    </nav>
  );
};