"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Twitter, Linkedin, Send, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'chikaegus024@gmail.com',
      href: 'mailto:chikaegus024@gmail.com',
      color: 'hover:text-red-400'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '08053592740',
      href: 'https://wa.me/2348053592740',
      color: 'hover:text-green-400'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      value: '@egulemu1922',
      href: 'https://twitter.com/egulemu1922',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Chika Egulemu',
      href: 'https://linkedin.com/in/chika-egulemu',
      color: 'hover:text-blue-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted/70 transition-all duration-300 group border border-transparent hover:border-primary/20 ${method.color}`}
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{method.label}</p>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 to-blue-400/10 border border-primary/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Available For</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Frontend Development Opportunities</li>
                <li>• Remote & On-site Collaborations</li>
                <li>• Open Source Contributions</li>
                <li>• Technical Discussions & Mentorship</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors min-h-[120px] resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;