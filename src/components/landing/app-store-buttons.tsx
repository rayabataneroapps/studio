"use client";

import { Button } from "@/components/ui/button";
import { AppleLogo } from "@/components/icons/apple-logo";
import { GooglePlayLogo } from "@/components/icons/google-play-logo";

export function AppStoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        size="lg"
        className="w-48 bg-foreground text-background hover:bg-foreground/80 dark:bg-background dark:text-foreground dark:hover:bg-background/80"
        onClick={() => window.open("#", "_blank")}
        aria-label="Download on the App Store"
      >
        <AppleLogo className="h-6 w-6 mr-2" />
        <div>
          <div className="text-xs">Descargar en</div>
          <div className="text-lg font-semibold -mt-1">App Store</div>
        </div>
      </Button>
      <Button
        size="lg"
        className="w-48 bg-foreground text-background hover:bg-foreground/80 dark:bg-background dark:text-foreground dark:hover:bg-background/80"
        onClick={() => window.open("#", "_blank")}
        aria-label="Get it on Google Play"
      >
        <GooglePlayLogo className="h-6 w-6 mr-2" />
        <div>
          <div className="text-xs">DISPONIBLE EN</div>
          <div className="text-lg font-semibold -mt-1">Google Play</div>
        </div>
      </Button>
    </div>
  );
}
