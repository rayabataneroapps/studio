import Image from "next/image";
import { AppStoreButtons } from "./app-store-buttons";

export function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Donde cada cuento es una aventura
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 text-muted-foreground">
              Descubre un universo de historias interactivas para niños que fomentan la lectura y despiertan la imaginación. Disponible ahora para tu móvil.
            </p>
            <AppStoreButtons />
          </div>
          <div className="relative h-80 md:h-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Ilustración de niños leyendo un libro mágico"
              fill
              priority
              className="object-contain rounded-2xl"
              data-ai-hint="children reading magical book"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
