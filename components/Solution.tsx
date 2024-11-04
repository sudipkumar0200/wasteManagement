"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Solution() {
  return (
    <section id="solutions" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">
        Moving Towards Sustainable Waste Management
      </h2>
      <div className="pb-6"><p>To effectively address the global waste crisis, embracing sustainable practices is vital. The *Reduce, Reuse, Recycle (3Rs)* framework is fundamental to these efforts. By focusing on reducing consumption and reusing items, we can significantly decrease waste generation. Here are actionable steps for individuals and organizations: </p> 
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Policy Initiatives</h3>
          <p className="text-muted-foreground">
            Governments are crucial in promoting sustainable waste management through legislation. Policies such as banning single-use plastics, implementing pay-as-you-throw programs, and incentivizing recycling can lead to meaningful change.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Community Programs</h3>
          <p className="text-muted-foreground">
              Local initiatives can mobilize community members to engage in waste reduction. Organizing clean-up events, recycling campaigns, and educational workshops can effectively raise awareness and foster participation.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Circular Economy</h3>
          <p className="text-muted-foreground">
            Transitioning to a circular economy, where resources are continuously reused and recycled, can dramatically lower waste levels. This approach not only conserves natural resources but also stimulates economic growth and creates jobs in green sectors.
          </p>
        </Card>
      </div>
    </section>
  );
}
