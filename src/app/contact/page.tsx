"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { COMPANY, WHATSAPP_URL } from "@/lib/utils";
import PaymentSection from "@/components/PaymentSection";
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello FAB INTERIORS,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/254752653759?text=${whatsappMessage}`, "_blank");
    setSubmitted(true);
  };
  return (
    <>
      {" "}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-charcoal via-[#2B2B2B] to-charcoal overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-grid-white opacity-10" />{" "}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-copper/20 to-transparent rounded-full blur-[40px]" />{" "}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sand/15 rounded-full blur-[40px]" />{" "}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {" "}
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>{" "}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {" "}
              Let&apos;s Start Your{" "}
              <span className="text-gradient">Project</span>{" "}
            </h1>{" "}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {" "}
              Ready to build? Get in touch with us today for a free consultation
              and project estimate.{" "}
            </p>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-cream via-[#E5DDD3] to-cream overflow-hidden">
        {" "}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-copper/5 rounded-full blur-[40px]" />{" "}
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-sand/10 rounded-full blur-[40px]" />{" "}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {" "}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {" "}
              <div>
                {" "}
                <h2 className="text-2xl font-heading font-bold text-copper mb-6">
                  {" "}
                  Get In Touch{" "}
                </h2>{" "}
                <p className="text-gray-600 mb-8">
                  {" "}
                  We&apos;d love to hear about your project. Whether it&apos;s a
                  new build, renovation, or interior design, our team is ready
                  to help.{" "}
                </p>{" "}
              </div>{" "}
              <div className="space-y-6">
                {" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center shrink-0">
                    {" "}
                    <Phone className="w-5 h-5 text-charcoal" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold text-charcoal mb-1">
                      Phone
                    </h3>{" "}
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-gray-600 hover:text-charcoal transition-colors"
                    >
                      {" "}
                      {COMPANY.phone}{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center shrink-0">
                    {" "}
                    <Mail className="w-5 h-5 text-charcoal" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold text-charcoal mb-1">
                      Email
                    </h3>{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-gray-600 hover:text-charcoal transition-colors"
                    >
                      {" "}
                      {COMPANY.email}{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center shrink-0">
                    {" "}
                    <MapPin className="w-5 h-5 text-charcoal" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold text-charcoal mb-1">
                      Location
                    </h3>{" "}
                    <span className="text-gray-600">
                      {COMPANY.location}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    {" "}
                    <MessageCircle className="w-5 h-5 text-green-600" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold text-charcoal mb-1">
                      WhatsApp
                    </h3>{" "}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      {" "}
                      Chat with us{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 rounded-xl bg-warm-white border border-gray-100">
                {" "}
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                  {" "}
                  Office Hours{" "}
                </h3>{" "}
                <div className="space-y-2 text-sm text-gray-600">
                  {" "}
                  <div className="flex justify-between">
                    {" "}
                    <span>Monday - Friday</span>{" "}
                    <span className="font-medium">8:00 AM - 5:00 PM</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between">
                    {" "}
                    <span>Saturday</span>{" "}
                    <span className="font-medium">8:00 AM - 1:00 PM</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between">
                    {" "}
                    <span>Sunday</span>{" "}
                    <span className="font-medium">Closed</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {" "}
              <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white to-warm-white border border-copper/10 shadow-lg shadow-copper/5">
                {" "}
                {submitted ? (
                  <div className="text-center py-12">
                    {" "}
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      {" "}
                      <CheckCircle className="w-8 h-8 text-green-600" />{" "}
                    </div>{" "}
                    <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
                      {" "}
                      Message Sent!{" "}
                    </h3>{" "}
                    <p className="text-gray-600 mb-6">
                      {" "}
                      Thank you for reaching out. We&apos;ll get back to you
                      shortly via WhatsApp.{" "}
                    </p>{" "}
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      {" "}
                      Send Another Message{" "}
                    </Button>{" "}
                  </div>
                ) : (
                  <>
                    {" "}
                    <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                      {" "}
                      Send Us a Message{" "}
                    </h3>{" "}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {" "}
                      <div className="grid sm:grid-cols-2 gap-5">
                        {" "}
                        <div className="space-y-2">
                          {" "}
                          <label className="text-sm font-medium text-charcoal">
                            {" "}
                            Full Name *{" "}
                          </label>{" "}
                          <Input
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />{" "}
                        </div>{" "}
                        <div className="space-y-2">
                          {" "}
                          <label className="text-sm font-medium text-charcoal">
                            {" "}
                            Email Address *{" "}
                          </label>{" "}
                          <Input
                            required
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="grid sm:grid-cols-2 gap-5">
                        {" "}
                        <div className="space-y-2">
                          {" "}
                          <label className="text-sm font-medium text-charcoal">
                            {" "}
                            Phone Number *{" "}
                          </label>{" "}
                          <Input
                            required
                            placeholder="0752 653759"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />{" "}
                        </div>{" "}
                        <div className="space-y-2">
                          {" "}
                          <label className="text-sm font-medium text-charcoal">
                            {" "}
                            Service Interested In{" "}
                          </label>{" "}
                          <select
                            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                service: e.target.value,
                              })
                            }
                          >
                            {" "}
                            <option value="">Select a service</option>{" "}
                            {COMPANY.services.map((s) => (
                              <option key={s} value={s}>
                                {" "}
                                {s}{" "}
                              </option>
                            ))}{" "}
                          </select>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="space-y-2">
                        {" "}
                        <label className="text-sm font-medium text-charcoal">
                          {" "}
                          Your Message *{" "}
                        </label>{" "}
                        <Textarea
                          required
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                        />{" "}
                      </div>{" "}
                      <Button type="submit" size="lg" className="w-full group">
                        {" "}
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />{" "}
                        Send via WhatsApp{" "}
                      </Button>{" "}
                      <p className="text-xs text-gray-500 text-center">
                        {" "}
                        By submitting, you agree to be contacted regarding your
                        inquiry. Your information is kept confidential.{" "}
                      </p>{" "}
                    </form>{" "}
                  </>
                )}{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <PaymentSection />
    </>
  );
}
