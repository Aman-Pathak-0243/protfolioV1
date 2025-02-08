import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { t } from 'i18next'; // Assuming 'i18next' is used for translations


export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertMessage) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: t('contact.success'),
        description: t('contact.successMessage'),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t('contact.error'),
        description: error instanceof Error ? error.message : t('contact.errorMessage'),
        variant: "destructive"
      });
    }
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium">{t('contact.emailTitle')}</h3>
                    <a href="mailto:amanpathakiitj@gmail.com" className="text-muted-foreground hover:text-primary">
                      amanpathakiitj@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium">{t('contact.phoneTitle')}</h3>
                    <a href="tel:+917017396687" className="text-muted-foreground hover:text-primary">
                      +91 7017396687
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium">{t('contact.locationTitle')}</h3>
                    <p className="text-muted-foreground">Nagrota, Jammu</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium">{t('contact.linkedInTitle')}</h3>
                    <a
                      href="https://linkedin.com/in/Aman-Pathak-0243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @Aman-Pathak-0243
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium">{t('contact.gitHubTitle')}</h3>
                    <a
                      href="https://github.com/amanpathak015"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      /amanpathak015
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('John Doe')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('abc.gmail.com')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('write a message')}
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('contact.sending') : t('contact.send')}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
