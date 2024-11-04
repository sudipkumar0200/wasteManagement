"use client";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Global Solid Waste Management</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Building a sustainable future through responsible waste management practices
        </p>
      </div>
    </section>
  );
}