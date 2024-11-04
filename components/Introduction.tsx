"use client";

import { Card } from "@/components/ui/card";
import { Trash2, Globe, Recycle } from "lucide-react";

export default function Introduction() {
  return (
    <section id="intro" className="mb-10 min-h-screen flex items-center justify-center"  >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-6">
           Effective solid waste management is crucial in addressing one of the most pressing environmental issues of our time. With rapid urbanization and increasing consumerism, managing waste sustainably is more important than ever. This website delves into the global landscape of solid waste, examining its environmental effects, various disposal methods, and innovative sustainable solutions. Join us as we explore ways to confront the global waste challenge. 
          </p>
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4">
              <Trash2 className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold">2.01B</h3>
              <p className="text-sm text-muted-foreground">Tonnes annually</p>
            </Card>
            <Card className="p-4">
              <Globe className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold">33%</h3>
              <p className="text-sm text-muted-foreground">Unsafe disposal</p>
            </Card>
            <Card className="p-4">
              <Recycle className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold">13.5%</h3>
              <p className="text-sm text-muted-foreground">Recycling rate</p>
            </Card>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80"
              alt="Waste Management"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&q=80"
              alt="Recycling Process"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}