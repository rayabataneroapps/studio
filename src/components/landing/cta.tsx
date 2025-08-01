import { AppStoreButtons } from "./app-store-buttons";

export function CTA() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 bg-card"
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6 text-card-foreground">
          ¿Listo para empezar la aventura?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted-foreground">
          Únete a miles de familias y descarga Storytime Landing hoy mismo. La próxima historia favorita de tus hijos está a solo un clic de distancia.
        </p>
        <AppStoreButtons />
      </div>
    </section>
  );
}
