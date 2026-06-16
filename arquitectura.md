rental-platform/
├── package.json                          # Workspace raíz (monorepo)
│
├── backend/                              # API — NestJS + TypeScript
│   ├── nest-cli.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.build.json
│   ├── eslint.config.mjs
│   ├── src/
│   │   ├── main.ts                       # Punto de entrada
│   │   ├── app.module.ts                 # Módulo raíz
│   │   ├── app.controller.ts             # Controlador principal
│   │   ├── app.controller.spec.ts        # Tests unitarios
│   │   └── app.service.ts                # Servicio principal
│   └── test/
│       ├── app.e2e-spec.ts               # Tests end-to-end
│       └── jest-e2e.json
│
└── frontend/                             # UI — Next.js 15 + TypeScript + Tailwind
    ├── next.config.ts
    ├── package.json
    ├── tsconfig.json
    ├── postcss.config.mjs
    ├── eslint.config.mjs
    ├── public/
    │   └── images/                       # Assets estáticos (fotos de propiedades)
    │       ├── hero-chalet.jpeg/.png
    │       ├── aerial-property.png
    │       ├── bedroom-view.png
    │       ├── condo-interior.jpg/.png
    │       └── deck-sunset.png
    └── src/
        ├── app/                          # Next.js App Router
        │   ├── layout.tsx                # Layout global
        │   ├── page.tsx                  # Home (/)
        │   ├── globals.css
        │   ├── types/
        │   │   └── index.ts              # Tipos compartidos (Property, Booking, etc.)
        │   ├── booking/
        │   │   └── page.tsx              # Página /booking
        │   ├── experience/
        │   │   └── page.tsx              # Página /experience
        │   └── properties/
        │       ├── page.tsx              # Listado /properties
        │       └── [id]/
        │           └── page.tsx          # Detalle /properties/:id (ruta dinámica)
        ├── components/                   # Componentes reutilizables
        │   ├── Navbar.tsx
        │   ├── Footer.tsx
        │   ├── HeroSection.tsx
        │   ├── PropertyCard.tsx
        │   ├── BookingWidget.tsx
        │   ├── ImageGallery.tsx
        │   ├── CTASection.tsx
        │   ├── ExperienceSection.tsx
        │   ├── ReviewsSection.tsx
        │   └── WhatsAppButton.tsx
        ├── data/
        │   └── mockData.ts               # Datos de prueba (propiedades, reseñas)
        └── lib/
            └── api.ts                    # Cliente HTTP hacia el backend