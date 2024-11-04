"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Method() {
  return (
    <section id="disposal" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Common Waste Disposal Methods</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[600px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1717667745836-145a38948ebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhc3RlJTIwZGlzcG9zYWx8ZW58MHx8MHx8fDI%3D"
            alt="Global Waste Crisis"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Landfilling</h3>
            <p className="text-muted-foreground">
               Landfills are the most prevalent method for waste disposal. While they are relatively low-cost and straightforward to manage, they pose long-term environmental challenges, including contamination of soil and groundwater and the release of greenhouse gases.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Incineration</h3>
            <p className="text-muted-foreground">
               Incineration reduces waste volume and can generate energy, but it also carries the risk of emitting harmful pollutants if not carefully regulated. Advanced incineration technologies can help mitigate these environmental concerns, though public resistance is often a challenge.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Recycling</h3>
            <p className="text-muted-foreground">
              Recycling involves converting waste materials into new products, conserving resources and reducing environmental impact. However, the recycling process can be energy-intensive, and not all materials are suitable for recycling. A successful recycling program requires community engagement and awareness.
            </p>
          </Card>
          
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
            <h3 className="font-semibold mb-2">Composting</h3>
            <p className="text-muted-foreground">
               Composting is an effective method for recycling organic waste. It minimizes landfill contributions while producing nutrient-rich compost that enhances soil health. Establishing community composting initiatives can greatly support local sustainability efforts.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Innovative Technologies</h3>
            <p className="text-muted-foreground">
              Emerging technologies such as waste-to-energy facilities and advanced sorting systems present promising solutions for waste management. These methods can efficiently convert waste into energy or recyclable materials, thus reducing environmental harm.
            </p>
          </Card>
      </div>
    </section>
  );
}