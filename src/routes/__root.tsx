import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Atai Duisheev — Bewerbung Praktikum Werbung & Grafik | MACK Media";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Bewerbungsmappe von Atai Duisheev für ein 3-monatiges Praktikum im Bereich Werbung und Grafik bei MACK Media (Europa-Park Erlebnis-Resort, Rust) ab März 2027.",
      },
      {
        name: "keywords",
        content:
          "Atai Duisheev, Bewerbung, Praktikum Werbung Grafik, MACK Media, Europa-Park Rust, Grafikdesign, Branding, Content-Erstellung, Photoshop, Illustrator, Premiere Pro, Figma",
      },
      { name: "theme-color", content: "#00003d" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="de" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
