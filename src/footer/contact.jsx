import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';

// Pinterest SVG Icon Component
const Pinterest = ({ className, style }) => (
  <svg 
    className={className}
    style={style}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="pin.it/4FXJV4IfA"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      title: 'Email',
      value: 'syedali1820010@gmail.com',
      link: 'mailto:syedali1820010@gmail.com',
      bgColor: '#eff6ff',
      iconColor: '#2563eb',
    },
    {
      id: 2,
      icon: Phone,
      title: 'Phone',
      value: '+91 9884981113',
      link: 'tel:+919884981113',
      bgColor: '#f0fdf4',
      iconColor: '#16a34a',
    },
    {
      id: 3,
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/syed-a-41a55a326',
      bgColor: '#ecfeff',
      iconColor: '#0891b2',
    },
    {
      id: 4,
      icon: Pinterest,
      title: 'Pinterest',
      value: 'Follow my work',
      link: 'https://pin.it/19ZrqHdxR',
      bgColor: '#fef2f2',
      iconColor: '#dc2626',
    }
  ];

  return (
    <section 
      id="contact" 
      style={{
        padding: '80px 16px',
        background: 'linear-gradient(to bottom right, #f8fafc, #ffffff, #f1f5f9)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '384px',
          height: '384px',
          background: '#bfdbfe',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translate(50%, -50%)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '384px',
          height: '384px',
          background: '#e9d5ff',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translate(-50%, 50%)'
        }}></div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'linear-gradient(to right, #3b82f6, #a855f7)',
            color: 'white',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <MapPin style={{ width: '16px', height: '16px' }} />
            <span>Let's Connect</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '16px'
          }}>
            Get In <span style={{
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Touch</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4b5563',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Ready to bring your design vision to life? Reach out for UI/UX, graphic design, and creative collaborations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}>
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isHovered = hoveredCard === method.id;
            
            return (
              <a
                key={method.id}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative',
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s ease',
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  textDecoration: 'none',
                  display: 'block',
                  animation: `fadeInScale 0.6s ease-out forwards ${index * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Icon Container */}
                <div style={{
                  position: 'relative',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  backgroundColor: method.bgColor,
                  transition: 'all 0.5s ease',
                  transform: isHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)'
                }}>
                  <Icon 
                    style={{
                      width: '32px',
                      height: '32px',
                      color: method.iconColor,
                      transition: 'all 0.5s ease'
                    }}
                  />
                </div>

                {/* Content */}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  {method.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  wordBreak: 'break-all'
                }}>
                  {method.value}
                </p>

                {/* Hover Arrow */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateX(0)' : 'translateX(8px)',
                  transition: 'all 0.3s ease'
                }}>
                  <Send style={{ width: '20px', height: '20px', color: '#2563eb' }} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Direct Message Links */}
        <div style={{ maxWidth: '896px', margin: '48px auto 0' }}>
          <div style={{
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px 32px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px'
            }}>
              Ready to Start Your Project?
            </h3>
            <p style={{
              color: '#dbeafe',
              fontSize: '18px',
              marginBottom: '32px',
              maxWidth: '672px',
              margin: '0 auto 32px'
            }}>
              Let's discuss how I can help bring your creative vision to life
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth < 640 ? 'column' : 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="mailto:syedali1820010@gmail.com"
                onMouseEnter={() => setHoveredBtn('email')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  background: hoveredBtn === 'email' ? '#eff6ff' : 'white',
                  color: '#2563eb',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  boxShadow: hoveredBtn === 'email' ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                  transform: hoveredBtn === 'email' ? 'scale(1.05)' : 'scale(1)',
                  width: window.innerWidth < 640 ? '100%' : 'auto',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Mail style={{
                  width: '20px',
                  height: '20px',
                  transition: 'transform 0.3s ease',
                  transform: hoveredBtn === 'email' ? 'rotate(12deg)' : 'rotate(0deg)'
                }} />
                <span>Send Email</span>
              </a>
              
              <a
              href="https://wa.me/919884981113?text=Hi!%20Thanks%20for%20visiting%20my%20portfolio.%20I’d%20be%20happy%20to%20discuss%20your%20project."

                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredBtn('whatsapp')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  background: hoveredBtn === 'whatsapp' ? '#16a34a' : '#22c55e',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  boxShadow: hoveredBtn === 'whatsapp' ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                  transform: hoveredBtn === 'whatsapp' ? 'scale(1.05)' : 'scale(1)',
                  width: window.innerWidth < 640 ? '100%' : 'auto',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <svg 
                  style={{
                    width: '20px',
                    height: '20px',
                    transition: 'transform 0.3s ease',
                    transform: hoveredBtn === 'whatsapp' ? 'rotate(12deg)' : 'rotate(0deg)'
                  }}
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;