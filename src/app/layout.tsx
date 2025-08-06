import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Alegreya, Belleza } from 'next/font/google'; // <-- Importa las fuentes aquí

// Define las fuentes usando next/font/google
const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya', // Define una variable CSS para Alegreya
  weight: ['400', '500', '700', '400'], // Especifica los pesos que necesitas
  style: ['normal', 'italic'] // Especifica los estilos (normal, italic)
});

const belleza = Belleza({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-belleza', // Define una variable CSS para Belleza
  weight: '400', // Belleza suele tener solo un peso
});

export const metadata: Metadata = {
  title: 'Storytime Landing | Cuentos Infantiles Mágicos',
  description: 'Descubre un mundo de historias interactivas para niños que fomentan la lectura y la imaginación. Disponible ahora para tu móvil.',
  keywords: ['cuentacuentos', 'historias infantiles', 'app para niños', 'lectura infantil', 'cuentos para dormir'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplica las clases de las variables CSS a la etiqueta <html>
    <html lang="es" className={`${alegreya.variable} ${belleza.variable}`}> 
      {/* Elimina las etiquetas <link> de Google Fonts aquí, ya no son necesarias */}
      <body className="font-body antialiased"> {/* Asegúrate de que font-body use --font-alegreya o --font-belleza */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
