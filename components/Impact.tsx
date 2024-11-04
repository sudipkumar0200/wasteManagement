"use client";

import { Card } from "@/components/ui/card";
import { Trash2, Globe, Recycle } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="mb-16"  >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">The Environmental Toll of Mismanaged Waste</h2>
          <p className="text-muted-foreground mb-6">
           The mismanagement of solid waste poses severe threats to the environment. Landfills, which serve as the primary method for waste disposal, occupy extensive land areas and produce *methane*—a potent greenhouse gas that contributes significantly to climate change.
          Furthermore, plastic waste is a major concern, with an estimated <span className="font-bold">8 million tons</span> entering oceans each year, resulting in widespread marine pollution. This not only harms marine species but also disrupts entire ecosystems. The biodiversity crisis exacerbated by solid waste mismanagement highlights the urgent need for sustainable practices.</p>
          {/* <div className="grid grid-cols-3 gap-4">
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
          </div> */}
        </div>
        <div className="grid gap-4">
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1537084642907-629340c7e59c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Waste Management"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606901302392-ca613ab6abb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1pc21hbmFnZWQlMjB3YXN0ZXxlbnwwfHwwfHx8Mg%3D%3D"
              alt="Recycling Process"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}