import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          hero: {
            title: 'Aman Pathak',
            roles: [
              'Full Stack Developer',
              'Web Developer',
              'Problem Solver'
            ],
            cta: 'Get in Touch'
          },
          about: {
            title: 'About Me',
            description1: 'A passionate and highly motivated second-year B.Tech student at IIT Jammu with a strong foundation in Full-Stack Web Development and Data Structures & Algorithms. Currently maintaining a CGPA of 8.76.',
            description2: 'I am determined to leverage my technical expertise and innovative thinking to build transformative projects that propel business growth and drive cutting-edge technological advancements. As a Web Developer for KRITASH and MESH Clubs at IIT Jammu, I\'ve led the development of multiple successful web projects.'
          },
          skills: {
            title: 'Technical Skills',
            categories: {
              frontend: 'Frontend Development',
              backend: 'Backend Development',
              databases: 'Databases & Stack',
              languages: 'Programming Languages',
              tools: 'Tools & Technologies'
            }
          },
          projects: {
            title: 'Projects',
            viewDemo: 'Demo',
            viewCode: 'Code'
          },
          testimonials: {
            title: 'Testimonials'
          },
          contact: {
            title: 'Get in Touch',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...'
          }
        }
      },
      hi: {
        translation: {
          hero: {
            title: 'अमन पाठक',
            roles: [
              'फुल स्टैक डेवलपर',
              'वेब डेवलपर',
              'प्रॉब्लम सॉल्वर'
            ],
            cta: 'संपर्क करें'
          },
          about: {
            title: 'मेरे बारे में',
            description1: 'आईआईटी जम्मू में एक उत्साही और अत्यधिक प्रेरित द्वितीय वर्ष के बी.टेक छात्र, जिनकी फुल-स्टैक वेब डेवलपमेंट और डेटा स्ट्रक्चर्स और एल्गोरिथ्म में मजबूत नींव है। वर्तमान में 8.76 CGPA बनाए हुए हैं।',
            description2: 'मैं व्यवसाय विकास को आगे बढ़ाने और कटिंग-एज तकनीकी प्रगति को चलाने वाली परिवर्तनकारी परियोजनाओं के निर्माण के लिए अपनी तकनीकी विशेषज्ञता और नवीन सोच का लाभ उठाने के लिए दृढ़ संकल्पित हूं। आईआईटी जम्मू में KRITASH और MESH क्लब्स के वेब डेवलपर के रूप में, मैंने कई सफल वेब प्रोजेक्ट्स का नेतृत्व किया है।'
          },
          skills: {
            title: 'तकनीकी कौशल',
            categories: {
              frontend: 'फ्रंटएंड डेवलपमेंट',
              backend: 'बैकएंड डेवलपमेंट',
              databases: 'डेटाबेस और स्टैक',
              languages: 'प्रोग्रामिंग भाषाएं',
              tools: 'टूल्स और टेक्नोलॉजीज'
            }
          },
          projects: {
            title: 'प्रोजेक्ट्स',
            viewDemo: 'डेमो',
            viewCode: 'कोड'
          },
          testimonials: {
            title: 'प्रशंसापत्र'
          },
          contact: {
            title: 'संपर्क करें',
            name: 'नाम',
            email: 'ईमेल',
            message: 'संदेश',
            send: 'संदेश भेजें',
            sending: 'भेज रहा है...'
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
