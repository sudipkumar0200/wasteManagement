"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <div className="relative mb-8 h-[100px] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md border"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 rounded-md border"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>
        <div className="space-y-6">
          <h3 className="font-semibold">Contact Information</h3>
          <div className="grid gap-4">
            <Card className="p-4 flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">satish@wastemanagement.org</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">Lpu jalandhar,Punjab-India </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}