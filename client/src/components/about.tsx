import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="/images/profile.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          />
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                {t('about.description1')}
              </p>
              <p className="text-lg">
                {t('about.description2')}
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}