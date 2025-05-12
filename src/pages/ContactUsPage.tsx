import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Building2, FileText, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, startOfWeek, addWeeks, isWeekend, addMonths, subMonths, getMonth, getYear } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { ContactSuccessModal } from '../components/ContactSuccessModal';
import { supabase } from '../lib/supabase';
import { Footer } from '../components/Footer';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    selectedDate: '',
    selectedTime: ''
  });

  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 7; hour < 18; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

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
      date.getDay() === 0 || // Sundays
      date.getDay() === 6 // Saturdays
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    setFormData(prev => ({ ...prev, selectedTime: time }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          selected_date: formData.selectedDate,
          selected_time: formData.selectedTime
        }]);

      if (error) {
        console.error('Error submitting message:', error);
        alert('There was an error sending your message. Please try again.');
        return;
      }

      setShowSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        selectedDate: '',
        selectedTime: ''
      });
      setSelectedDate(null);
      setSelectedTime(null);
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/');

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      selectedDate: '',
      selectedTime: ''
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: 'url("/images/contactus.avif")'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 typewriter">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Whether you're ready to start or just have a few questions, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 border border-primary-glow/20 rounded-xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
            <p className="text-lg text-gray-300 mb-6">
              We're a modern automation and AI solutions provider, helping businesses grow faster with cutting-edge technology and real-world strategies.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-primary-glow" />
                <span>Based in [Veszprém]</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-glow" />
                <span>Operating since [2025]</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary-glow" />
                <span>Serving from [Hungary]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How to Reach Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-6 bg-black/30 border border-primary-glow/20 rounded-xl backdrop-blur-sm">
                <Building2 className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Company Name</h3>
                  <p className="text-gray-400">[AutonomX]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-black/30 border border-primary-glow/20 rounded-xl backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-400">[8200 Veszprém]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-black/30 border border-primary-glow/20 rounded-xl backdrop-blur-sm">
                <Phone className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">[+36 20 589 1090 ]</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-6 bg-black/30 border border-primary-glow/20 rounded-xl backdrop-blur-sm">
                <Mail className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">[autonomx.pro@gmail.com]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-black/30 border border-primary-glow/20 rounded-xl backdrop-blur-sm">
                <FileText className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Tax ID / Registration</h3>
                  <p className="text-gray-400">[Insert Legal Info]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-black/30 border border-primary-glow/20 rounded-xl backdrop-blur-sm">
                <Clock className="w-6 h-6 text-primary-glow flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-400">[7:00-18:00 Monday-Saturday]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
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
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-primary-glow/20 focus:border-primary-glow text-white"
                placeholder="Your name"
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
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-primary-glow/20 focus:border-primary-glow text-white"
                placeholder="your@email.com"
              />
            </div>

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
            </div>

            {selectedDate && (
              <div className="space-y-4">
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

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-primary-glow/20 focus:border-primary-glow text-white"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="w-full py-4 mt-8"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="rounded-xl bg-black/30 border border-primary-glow/20 backdrop-blur-sm overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1524.5365788402532!2d17.92485735365728!3d47.090925822483975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1746114640332!5m2!1shu!2shu" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
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
            <h2 className="text-3xl font-bold mb-6">Need a Quick Answer?</h2>
            <p className="text-xl text-gray-300 mb-8">
              You can also book a free 15-minute strategy call with us to discuss your project in real time.
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4"
            >
              Book a Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        userName={formData.name}
      />
    </div>
  );
};

export default ContactUsPage;