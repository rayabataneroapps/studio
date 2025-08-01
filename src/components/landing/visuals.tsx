import Image from "next/image";
import { PlayCircle } from "lucide-react";

export function Visuals() {
  return (
    <section id="visuals" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Explora un mundo de color y magia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Echa un vistazo a cómo nuestra aplicación da vida a las historias con ilustraciones vibrantes y un diseño amigable para los niños.
          </p>
        </div>

        <div className="relative mb-12 aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image
                src="https://placehold.co/1280x720.png"
                alt="Video promocional de la aplicación"
                layout="fill"
                objectFit="cover"
                data-ai-hint="storybook app promo"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Captura de pantalla de la biblioteca de cuentos"
              layout="fill"
              objectFit="cover"
              data-ai-hint="storybook app screenshot"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Captura de pantalla de una página de cuento"
              layout="fill"
              objectFit="cover"
              data-ai-hint="reading app interface"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Captura de pantalla de una actividad interactiva"
              layout="fill"
              objectFit="cover"
              data-ai-hint="kids learning game"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Captura de pantalla del perfil de niño"
              layout="fill"
              objectFit="cover"
              data-ai-hint="children app profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
