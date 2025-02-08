import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="fixed top-4 right-16 z-50"
      title={i18n.language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
}
