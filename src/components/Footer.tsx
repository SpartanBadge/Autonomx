import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
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
              <li><a href="/ai-phone-callers" className="hover-glow">AI Phone Callers</a></li>
              <li><a href="/ai-agents" className="hover-glow">AI Agents</a></li>
              <li><a href="/website-app-creation" className="hover-glow">Website & Mobile App Creation</a></li>
              <li><a href="/social-media-outreach" className="hover-glow">Social Media & Client Outreach</a></li>
              <li><a href="/visual-content-pack" className="hover-glow">Visual Content Pack</a></li>
              <li><a href="/visual-content-pack" className="hover-glow">Visual Content Pack</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Strategy Calls</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li><button onClick={() => navigate('/strategy')} className="hover-glow">How it works?</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Scale Fast</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li><button onClick={() => navigate('/scale')} className="hover-glow">How we can help your business?</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Prices</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li><button onClick={() => navigate('/pricing')} className="hover-glow">View Pricing</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li><button onClick={() => navigate('/contact-us')} className="hover-glow">Hungary</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};