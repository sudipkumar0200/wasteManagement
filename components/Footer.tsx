"use client";

import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "Satish Kumar Singh", rolNumber: "RollNo 31", regNumber:"RegNo 12404689"},
  { name: "Yuvansh Batra",  rolNumber: "RollNo 32",regNumber:"RegNo 12411108"},
  { name: "Manthan Sidhu",  rolNumber: "RollNo 33",regNumber:"RegNo 12417410"},
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Our Team</h3>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm opacity-80">{member.rolNumber}</p>
                    <p className="text-sm opacity-80">{member.regNumber}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <p className="mb-4">Stay updated with our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-md text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>&copy; 2024 Global Waste Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}