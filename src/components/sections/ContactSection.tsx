import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); 


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vk738393@gmail.com",
      href: "mailto:vk738393@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7079548096",
      href: "tel:+917079548096",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vinay-kumar29",
      href: "https://www.linkedin.com/in/vinay-kumar29/",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vinayk7079",
      href: "https://github.com/vinayk7079",
      color: "text-purple-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      "service_kpf854t",       // ← Replace
      "template_a6kfil8",      // ← Replace
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "Ni985c3oXz8t5O80J"        // ← Replace
    );

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="tab-enter">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or just want to say hello? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-gradient border-border hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Let's Connect
                </CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.label}
                    className="group cursor-pointer"
                    onClick={() => window.open(contact.href, "_blank")}
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <contact.icon className={`h-5 w-5 ${contact.color} group-hover:text-current`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{contact.label}</div>
                        <div className={`text-sm ${contact.color} group-hover:text-foreground transition-colors duration-300`}>
                          {contact.value}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="card-gradient border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-medium">Location & Availability</span>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available for remote, onsite, and hybrid opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Based in India (IST timezone)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Open to freelance & full-time roles</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-border hover-scale transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Send className="h-6 w-6 text-accent" />
                Send Message
              </CardTitle>
              <p className="text-muted-foreground">
                Drop me a message and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full hero-gradient hover:scale-105 transition-transform duration-300 shadow-lg glow-primary font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                    Your message will be delivered directly to my inbox.
                </p>

              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-8 rounded-2xl card-gradient border border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-sm font-bold text-background">VK</span>
            </div>
            <span className="text-lg font-semibold text-gradient">Vinay Kumar</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Thank you for visiting my portfolio. Looking forward to connecting with you!
          </p>
          <div className="flex justify-center gap-4">
            {contactInfo.map((contact) => (
              <Button
                key={contact.label}
                variant="ghost"
                size="sm"
                onClick={() => window.open(contact.href, "_blank")}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale"
              >
                <contact.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;