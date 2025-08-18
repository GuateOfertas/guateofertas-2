import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import productsShowcase from "@/assets/products-showcase.jpg";
import heroImage from "@/assets/hero-image.jpg";

const offers = [
  {
    id: 1,
    src: productsShowcase,
    alt: "Ofertas de la semana en electrónica - GuateOfertas",
    title: "Ofertas de Electrónica",
    subtitle: "Hasta 40% OFF en smartphones y audífonos",
  },
  {
    id: 2,
    src: heroImage,
    alt: "Descuentos en hogar y muebles - GuateOfertas",
    title: "Hogar y Muebles",
    subtitle: "Renueva tu espacio con promociones exclusivas",
  },
  {
    id: 3,
    src: productsShowcase,
    alt: "Moda con envío gratis - GuateOfertas",
    title: "Moda y Tendencias",
    subtitle: "Looks nuevos con envío gratis",
  },
];

const OffersCarousel = () => {
  return (
    <section aria-label="Ofertas destacadas" className="container px-4 py-6 md:py-10 animate-fade-in">
      <div className="relative rounded-xl overflow-hidden bg-card shadow-sm">
        <Carousel className="w-full">
          <CarouselContent>
            {offers.map((item) => (
              <CarouselItem key={item.id} className="">
                <div className="relative h-48 md:h-72 lg:h-80">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent"/>
                  <div className="absolute left-4 right-4 bottom-4 md:left-8 md:right-8 md:bottom-8">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground drop-shadow-sm">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default OffersCarousel;
