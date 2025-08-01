import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana García",
    avatar: "AG",
    image: "https://placehold.co/40x40.png",
    aiHint: "woman portrait",
    title: "¡La mejor app de cuentos!",
    description:
      "A mi hija le encanta. No puede esperar a la hora del cuento cada noche. Las historias son preciosas y las narraciones, excelentes.",
  },
  {
    name: "Carlos Rodríguez",
    avatar: "CR",
    image: "https://placehold.co/40x40.png",
    aiHint: "man portrait",
    title: "Educativa y divertida",
    description:
      "Es increíble cómo mi hijo ha mejorado su vocabulario. Aprende valores importantes mientras se divierte. ¡Totalmente recomendada!",
  },
  {
    name: "Laura Martínez",
    avatar: "LM",
    image: "https://placehold.co/40x40.png",
    aiHint: "woman smiling",
    title: "Un salvavidas para los viajes",
    description:
      "Mantiene a mis hijos entretenidos durante los viajes largos en coche. El modo sin conexión es una característica fantástica. ¡Gracias!",
  },
];

const renderStars = (count: number) => {
  return Array(count).fill(0).map((_, i) => (
    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
  ));
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Lo que dicen las familias
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Nos encanta saber que estamos ayudando a crear momentos mágicos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="flex mb-4">{renderStars(5)}</div>
                <p className="font-headline text-xl mb-4">{testimonial.title}</p>
                <blockquote className="text-muted-foreground border-l-2 border-primary pl-4 italic mb-6">
                  {testimonial.description}
                </blockquote>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
