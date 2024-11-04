"use client";

import { Card } from "@/components/ui/card";

export default function GlobalStatus() {
  return (
    <section id="status" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">The Global Status of Solid Waste</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80"
            alt="Global Waste Crisis"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Current Generation</h3>
            <p className="text-muted-foreground">
              Global waste generation is expected to increase by 70% by 2050 unless urgent action is taken.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Regional Differences</h3>
            <p className="text-muted-foreground">
              High-income countries generate over 34% of the worlds waste despite having only 16% of the population.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Economic Impact</h3>
            <p className="text-muted-foreground">
              Annual global waste management costs are projected to rise from $205 billion to $375 billion by 2025.
            </p>
          </Card>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Recycling Process"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80"
            alt="Waste Collection"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80"
            alt="Sustainable Solutions"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}