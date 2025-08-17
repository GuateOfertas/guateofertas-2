import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Zona 10, Ciudad de Guatemala\nGuatemala, C.A.",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+502 2345-6789\n+502 5555-1234",
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hola@guateofertas.com\nsoporte@guateofertas.com",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 8:00 AM - 8:00 PM\nSáb - Dom: 9:00 AM - 6:00 PM",
      color: "text-warning"
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "En Ciudad de Guatemala: 24-48 horas. En el interior del país: 2-5 días hábiles."
    },
    {
      question: "¿Cuál es la política de devoluciones?",
      answer: "Tienes 30 días para devolver cualquier producto en su estado original. El proceso es completamente gratuito."
    },
    {
      question: "¿Aceptan todos los métodos de pago?",
      answer: "Sí, aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo contra entrega."
    },
    {
      question: "¿Los productos tienen garantía?",
      answer: "Todos nuestros productos son originales y cuentan con garantía oficial del fabricante."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de soporte
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gradient-secondary mb-4">
                Envíanos un Mensaje
              </h2>
              <p className="text-muted-foreground">
                Completa el formulario y te responderemos en menos de 24 horas
              </p>
            </div>

            <Card className="card-gradient">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Tu apellido" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Teléfono (Opcional)</Label>
                    <Input id="phone" placeholder="+502 0000-0000" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe tu consulta..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="default" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  ¿Necesitas ayuda inmediata?
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar Ahora: +502 2345-6789
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat en Vivo (9 AM - 6 PM)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-4">
                Información de Contacto
              </h2>
              <p className="text-muted-foreground">
                Múltiples formas de ponerte en contacto con nosotros
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="card-gradient hover:shadow-card transition-smooth hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-background/50 flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* FAQ Section */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Preguntas Frecuentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-foreground">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    {index < faqs.length - 1 && <hr className="border-border/30" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nuestra Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p>Mapa interactivo de nuestra ubicación</p>
                    <p className="text-sm">Zona 10, Ciudad de Guatemala</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;