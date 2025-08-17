import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Scale, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  RotateCcw,
  AlertCircle,
  CheckCircle,
  XCircle,
  Mail,
  Phone
} from "lucide-react";

const Terms = () => {
  const lastUpdated = "15 de enero de 2024";

  const sections = [
    {
      id: "acceptance",
      icon: CheckCircle,
      title: "Aceptación de Términos",
      content: `Al acceder y utilizar GuateOfertas.com, aceptas cumplir con estos términos y condiciones. 
      Si no estás de acuerdo con alguno de estos términos, no debes usar nuestros servicios. 
      Nos reservamos el derecho de modificar estos términos en cualquier momento, 
      y tu uso continuado del sitio constituye la aceptación de dichos cambios.`
    },
    {
      id: "services",
      icon: ShoppingCart,
      title: "Descripción de Servicios",
      content: `GuateOfertas es una plataforma de comercio electrónico que conecta a compradores con vendedores 
      de productos diversos. Facilitamos transacciones entre usuarios, proporcionamos servicios de pago seguro, 
      y coordinamos la entrega de productos. No somos fabricantes ni propietarios directos de los productos vendidos, 
      actuamos como intermediarios comerciales.`,
      details: [
        "Catálogo de productos de terceros verificados",
        "Procesamiento seguro de pagos",
        "Coordinación de envíos y logística",
        "Servicio de atención al cliente",
        "Garantías y devoluciones según políticas"
      ]
    },
    {
      id: "user-obligations",
      icon: FileText,
      title: "Obligaciones del Usuario",
      content: `Como usuario de GuateOfertas, te comprometes a usar nuestros servicios de manera responsable y legal.`,
      details: [
        "Proporcionar información veraz y actualizada en tu cuenta",
        "Mantener la confidencialidad de tus credenciales de acceso",
        "No usar el sitio para actividades fraudulentas o ilegales",
        "Respetar los derechos de propiedad intelectual",
        "No interferir con el funcionamiento normal del sitio",
        "Cumplir con todas las leyes aplicables en Guatemala"
      ]
    },
    {
      id: "purchases",
      icon: CreditCard,
      title: "Compras y Pagos",
      content: `Todas las transacciones realizadas a través de GuateOfertas están sujetas a nuestras políticas de compra y pago.`,
      details: [
        "Los precios incluyen impuestos aplicables según la ley guatemalteca",
        "Los métodos de pago aceptados incluyen tarjetas de crédito/débito y transferencias",
        "Las transacciones son procesadas de forma segura por proveedores certificados",
        "Los pedidos están sujetos a disponibilidad de inventario",
        "Nos reservamos el derecho de cancelar pedidos sospechosos",
        "Los errores de precio serán corregidos y notificados al cliente"
      ]
    },
    {
      id: "shipping",
      icon: Truck,
      title: "Envíos y Entregas",
      content: `Los tiempos de entrega y costos de envío varían según el producto y la ubicación de entrega.`,
      details: [
        "Envío gratuito en compras mayores a Q250 en Ciudad de Guatemala",
        "Entregas en 24-48 horas en Ciudad de Guatemala",
        "Entregas en 2-5 días hábiles en el interior del país",
        "El cliente es responsable de proporcionar una dirección correcta",
        "Los tiempos de entrega son estimados, no garantizados",
        "Requisitos de edad y identificación pueden aplicar para ciertos productos"
      ]
    },
    {
      id: "returns",
      icon: RotateCcw,
      title: "Devoluciones y Reembolsos",
      content: `Ofrecemos una política flexible de devoluciones para garantizar tu satisfacción.`,
      details: [
        "30 días para devolver productos en condiciones originales",
        "El producto debe incluir empaque, accesorios y documentación original",
        "Algunos productos (software, productos personalizados) no son retornables",
        "Los gastos de envío de devolución corren por cuenta del cliente",
        "Los reembolsos se procesan en 5-10 días hábiles",
        "Se requiere número de orden y motivo de devolución"
      ]
    },
    {
      id: "warranties",
      icon: Scale,
      title: "Garantías y Responsabilidades",
      content: `Las garantías de productos son proporcionadas por los fabricantes, no por GuateOfertas.`,
      details: [
        "GuateOfertas actúa como intermediario, no como fabricante",
        "Las garantías del fabricante aplican según términos específicos",
        "No garantizamos disponibilidad continua de productos",
        "Nuestra responsabilidad se limita al monto pagado por el producto",
        "No somos responsables por daños indirectos o consecuenciales",
        "Las reclamaciones de garantía deben dirigirse al fabricante correspondiente"
      ]
    },
    {
      id: "prohibited",
      icon: XCircle,
      title: "Actividades Prohibidas",
      content: `Las siguientes actividades están estrictamente prohibidas en nuestra plataforma:`,
      details: [
        "Uso de información falsa o fraudulenta",
        "Reventa no autorizada de productos comprados",
        "Intentos de hackeo o acceso no autorizado",
        "Publicación de contenido ofensivo o ilegal",
        "Uso de bots o scripts automatizados",
        "Violación de derechos de propiedad intelectual",
        "Manipulación de reseñas o calificaciones"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Scale className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary">
              Términos y Condiciones
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Términos legales que rigen el uso de GuateOfertas.com y nuestros servicios.
          </p>
          <Badge variant="outline" className="text-sm">
            Última actualización: {lastUpdated}
          </Badge>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-warning mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Información Importante</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estos términos y condiciones constituyen un acuerdo legal entre tú y GuateOfertas S.A. 
                    Al utilizar nuestros servicios, aceptas estar legalmente vinculado por estos términos. 
                    Te recomendamos leer cuidadosamente todo el documento y contactarnos si tienes alguna duda.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id} className="card-gradient animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                    {section.details && (
                      <ul className="space-y-2">
                        {section.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="card-gradient max-w-4xl mx-auto border-warning/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-warning">
                <AlertCircle className="h-6 w-6" />
                Aviso Legal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Jurisdicción</h4>
                  <p className="text-sm text-muted-foreground">
                    Estos términos se rigen por las leyes de Guatemala. 
                    Cualquier disputa será resuelta en los tribunales competentes 
                    de la Ciudad de Guatemala.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modificaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Nos reservamos el derecho de modificar estos términos. 
                    Los cambios serán notificados con 30 días de anticipación 
                    y publicados en nuestro sitio web.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Separabilidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Si alguna disposición de estos términos se considera 
                    inválida, las demás disposiciones seguirán siendo válidas 
                    y ejecutables.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contacto Legal</h4>
                  <p className="text-sm text-muted-foreground">
                    Para asuntos legales, contacta a nuestro departamento 
                    jurídico en legal@guateofertas.com o +502 2345-6789.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                ¿Preguntas sobre los Términos?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Si tienes dudas sobre nuestros términos y condiciones o necesitas 
                aclaraciones legales, no dudes en contactarnos:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>legal@guateofertas.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+502 2345-6789</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Nuestro equipo legal responderá en un plazo de 5 días hábiles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;