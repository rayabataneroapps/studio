import { BookOpenText, Sparkles, Wand2, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: <Wand2 className="w-8 h-8 text-primary" />,
    title: "Biblioteca Mágica",
    description: "Cientos de cuentos clasificados por edad y valores, con nuevas historias añadidas cada semana.",
  },
  {
    icon: <BookOpenText className="w-8 h-8 text-primary" />,
    title: "Narración Profesional",
    description: "Voces cálidas y amigables que dan vida a cada personaje y hacen la experiencia más inmersiva.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Interactividad y Juegos",
    description: "Actividades divertidas y preguntas después de cada cuento para reforzar el aprendizaje y la comprensión.",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Valores y Enseñanzas",
    description: "Cada historia está cuidadosamente seleccionada para transmitir mensajes positivos y valores importantes.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Un mundo de fantasía en sus manos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
                Nuestra aplicación está diseñada para ser la compañera perfecta en el crecimiento y la diversión de los más pequeños.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col sm:flex-row items-center p-6 text-center sm:text-left shadow-lg border-2 border-transparent hover:border-primary transition-colors duration-300">
              <div className="p-4 bg-primary/10 rounded-full mb-4 sm:mb-0 sm:mr-6">
                {feature.icon}
              </div>
              <div>
                <CardTitle className="font-headline text-2xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{feature.description}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
