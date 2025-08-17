import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard,
  Smartphone
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Contacto", path: "/contacto" },
    { name: "Términos y Condiciones", path: "/terminos" },
    { name: "Política de Privacidad", path: "/privacidad" },
    { name: "Preguntas Frecuentes", path: "/contacto" },
    { name: "Guía de Compras", path: "/contacto" }
  ];

  const categories = [
    "Electrónicos",
    "Computadoras",
    "Smartphones",
    "Audio y Video",
    "Gaming",
    "Accesorios"
  ];

  const paymentMethods = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: CreditCard },
    { name: "Transferencia", icon: Smartphone },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              ¡No te pierdas nuestras ofertas!
            </h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete a nuestro newsletter y recibe descuentos exclusivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Tu email aquí..."
                className="flex-1 bg-background/80"
              />
              <Button variant="default" className="px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gradient-primary">
              GuateOfertas.com
            </h2>
            <p className="text-muted-foreground">
              Tu tienda online de confianza en Guatemala. Ofertas increíbles, 
              calidad garantizada y envío a todo el país.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Ciudad de Guatemala, Guatemala</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+502 2345-6789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hola@guateofertas.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-smooth"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorías</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/categoria/${category.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Atención al Cliente</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Horarios de Atención:</p>
                <p className="text-sm text-muted-foreground">
                  Lun - Vie: 8:00 AM - 8:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Sáb - Dom: 9:00 AM - 6:00 PM
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Métodos de Pago:</p>
                <div className="flex space-x-2">
                  {paymentMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={index}
                        className="w-8 h-8 bg-background rounded border border-border/50 flex items-center justify-center"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 GuateOfertas.com. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desarrollado con ❤️ para Guatemala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;