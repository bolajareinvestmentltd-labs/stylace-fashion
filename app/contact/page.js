import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: "Contact | Stylace Fashions",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 mb-4 text-accent" />,
      title: "WhatsApp / Call",
      details: "+234 800 000 0000",
      action: "Chat with Lola",
      link: "https://wa.me/2348000000000"
    },
    {
      icon: <Instagram className="w-6 h-6 mb-4 text-accent" />,
      title: "Instagram",
      details: "@stylacefashions",
      action: "Follow Us",
      link: "https://instagram.com/stylacefashions"
    },
    {
      icon: <Mail className="w-6 h-6 mb-4 text-accent" />,
      title: "Email",
      details: "hello@stylacefashions.com",
      action: "Send an Email",
      link: "mailto:hello@stylacefashions.com"
    },
    {
      icon: <MapPin className="w-6 h-6 mb-4 text-accent" />,
      title: "Location",
      details: "Lagos, Nigeria",
      action: "Online Boutique",
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Get in Touch</h1>
        <p className="font-sans text-sm text-secondary">We are here to assist you with styling advice, orders, and inquiries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactCards.map((card, index) => (
          <a 
            key={index} 
            href={card.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-300 group"
          >
            {card.icon}
            <h3 className="font-serif text-lg text-primary mb-2">{card.title}</h3>
            <p className="font-sans text-xs text-secondary mb-6">{card.details}</p>
            <span className="font-sans text-[10px] tracking-widest uppercase text-primary group-hover:text-accent transition-colors">
              {card.action} →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}