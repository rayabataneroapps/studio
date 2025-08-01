import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookHeart } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-auto">
          <BookHeart className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Storytime Landing</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
            Características
          </Link>
          <Link href="#visuals" className="text-muted-foreground transition-colors hover:text-foreground">
            Galería
          </Link>
          <Link href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
            Opiniones
          </Link>
        </nav>
        <Button asChild className="ml-6">
          <Link href="#cta">Descargar App</Link>
        </Button>
      </div>
    </header>
  );
}
