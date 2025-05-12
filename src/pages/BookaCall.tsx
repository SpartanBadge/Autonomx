import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { format, addDays, startOfWeek, addWeeks, isWeekend, addMonths, subMonths, getMonth, getYear } from 'date-fns';
import { Button } from '../components/Button';
import { CustomCursor } from '../components/CustomCursor';
import { SuccessModal } from '../components/SuccessModal';
import { supabase } from '../lib/supabase';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const services = [
  'AI Phone Callers',
  'AI Agents',
  'Website & Mobile App Creation',
  'Social Media & Client Outreach',
  'Visual Content Pack'
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 7; hour < 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[],
    companyName: '',
    companyWebsite: '',
    selectedDate: '',
    selectedTime: '',
    description: '', 
    wantCall: true
  });
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const getDaysInMonth = () => {
    const start = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const days = [];
    for (let i = 0; i < 42; i++) {
      days.push(addDays(start, i));
    }
    return days;
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
      date < today || // Past dates
      date.getDay() === 0 // Sundays
    );
  };

  const handleDateSelect = (date: Date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
      setFormData(prev => ({
        ...prev,
        selectedDate: format(date, 'yyyy-MM-dd')
      }));
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({
      ...prev,
      selectedTime: time
    }));
  };

  const handleServiceSelect = (service: string) => {
    setSelectedServices(prev => {
      const newServices = prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service];
      setFormData(current => ({ ...current, services: newServices }));
      return newServices;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.companyName || !formData.companyWebsite || selectedServices.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    // Add https:// if not present
    const websiteUrl = formData.companyWebsite.startsWith('http://') || formData.companyWebsite.startsWith('https://')
      ? formData.companyWebsite
      : `https://${formData.companyWebsite}`;
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([{
          name: formData.name,
          email: formData.email,
          services: selectedServices,
          company_name: formData.companyName,
          company_website: websiteUrl,
          selected_date: formData.selectedDate,
          selected_time: formData.selectedTime,
          description: formData.description,
          want_call: formData.wantCall
        }]);

      if (error) {
        console.error('Supabase error:', error);
        alert(`Error submitting form: ${error.message}`);
        return;
      }

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white font-space p-4">
      <div className="container mx-auto max-w-2xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="secondary" 
            className="mb-8 mt-4"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </Button>

          <h1 className="text-4xl font-bold mb-8 typewriter">Get Your Free AI Plan</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary-glow text-white"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary-glow text-white"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-2">
                Selected Service
              </label>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceSelect(service)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedServices.includes(service)
                        ? 'bg-white text-black'
                        : 'bg-black border border-white/20 text-white hover:border-white'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary-glow text-white"
                placeholder="Your company name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companyWebsite" className="block text-sm font-medium">
                Company Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                required
                value={formData.companyWebsite}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary-glow text-white"
                placeholder="your-company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Would you like to book a call?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="wantCall"
                    checked={formData.wantCall}
                    onChange={() => setFormData(prev => ({ ...prev, wantCall: true }))}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="wantCall"
                    checked={!formData.wantCall}
                    onChange={() => setFormData(prev => ({ ...prev, wantCall: false }))}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {formData.wantCall ? (
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-4">
                  Select Your Preferred Date
                  <span className="text-gray-400 text-sm ml-2">(Monday-Saturday)</span>
                </label>
                <div className="bg-black/30 rounded-xl border border-white/20 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="text-lg font-medium">
                      {format(currentMonth, 'MMMM yyyy')}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="date-grid mb-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="text-center text-sm text-gray-400">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="date-grid">
                    {getDaysInMonth().map((date, i) => {
                      const isDisabled = isDateDisabled(date);
                      const isSelected = selectedDate && 
                        format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                      const isCurrentMonth = getMonth(date) === getMonth(currentMonth) &&
                        getYear(date) === getYear(currentMonth);
                      
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => !isDisabled && handleDateSelect(date)}
                          className={`date-cell ${isDisabled ? 'date-cell-disabled' : ''} 
                            ${isSelected ? 'date-cell-selected' : ''}
                            ${!isCurrentMonth ? 'opacity-30' : ''}`}
                        >
                          {format(date, 'd')}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {selectedDate && (
                  <div className="mt-6 space-y-4">
                    <label className="block text-sm font-medium">
                      Select Available Time
                      <span className="text-gray-400 text-sm ml-2">(7:00 - 18:00)</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`time-slot text-center ${
                            selectedTime === time ? 'time-slot-selected' : ''
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium">
                  Describe the problem we can help you with:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary-glow text-white"
                  placeholder="Please describe your needs in detail..."
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              variant="secondary"
              className="w-full py-4 text-lg font-semibold mt-8"
            >
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        userName={formData.name}
      />
    </div>
  );
}

export default ContactForm;