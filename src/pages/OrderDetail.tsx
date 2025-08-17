import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Package, 
  Calendar, 
  MapPin, 
  User, 
  CreditCard, 
  Download, 
  Printer,
  ArrowLeft,
  Truck,
  Phone,
  Mail,
  FileText,
  Star
} from "lucide-react";

const OrderDetail = () => {
  const { orderId } = useParams();

  // Mock order data
  const orderData = {
    id: "GT-2024-001234",
    date: "2024-01-15",
    status: "entregado",
    total: 10550,
    subtotal: 10300,
    shipping: 0,
    tax: 250,
    paymentMethod: "Tarjeta de Crédito",
    paymentStatus: "pagado",
    trackingNumber: "TRK123456789",
    estimatedDelivery: "2024-01-20",
    actualDelivery: "2024-01-19",
    customer: {
      name: "Juan Pérez",
      email: "juan.perez@email.com",
      phone: "+502 1234-5678"
    },
    shippingAddress: {
      name: "Juan Pérez",
      address: "Avenida Reforma 12-34, Zona 10",
      city: "Ciudad de Guatemala",
      country: "Guatemala",
      zipCode: "01010"
    },
    billingAddress: {
      name: "Juan Pérez",
      address: "Avenida Reforma 12-34, Zona 10",
      city: "Ciudad de Guatemala",
      country: "Guatemala",
      zipCode: "01010"
    },
    items: [
      {
        id: "1",
        name: "iPhone 15 Pro Max 256GB Space Black",
        brand: "Apple",
        sku: "APL-IP15PM-256-BK",
        quantity: 1,
        price: 8500,
        originalPrice: 9500,
        discount: 1000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop"
      },
      {
        id: "2",
        name: "AirPods Pro (2da generación)",
        brand: "Apple",
        sku: "APL-APP2-WHT",
        quantity: 1,
        price: 1800,
        originalPrice: 2200,
        discount: 400,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop"
      }
    ],
    orderHistory: [
      {
        date: "2024-01-19 14:30",
        status: "Entregado",
        description: "Pedido entregado exitosamente"
      },
      {
        date: "2024-01-19 08:15",
        status: "En reparto",
        description: "El repartidor está en camino"
      },
      {
        date: "2024-01-17 09:00",
        status: "En tránsito",
        description: "Tu pedido está en camino"
      },
      {
        date: "2024-01-16 14:15",
        status: "Preparando envío",
        description: "Empacando productos"
      },
      {
        date: "2024-01-15 10:30",
        status: "Confirmado",
        description: "Pedido confirmado y pago procesado"
      }
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "entregado": return "bg-success/10 text-success border-success/20";
      case "en_transito": return "bg-primary/10 text-primary border-primary/20";
      case "procesando": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "cancelado": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status.toLowerCase()) {
      case "entregado": return "Entregado";
      case "en_transito": return "En Tránsito";
      case "procesando": return "Procesando";
      case "cancelado": return "Cancelado";
      default: return status;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadInvoice = () => {
    // Simulate download
    console.log("Downloading invoice...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/cuenta">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gradient-primary">
                Pedido {orderData.id}
              </h1>
              <p className="text-muted-foreground">
                Realizado el {new Date(orderData.date).toLocaleDateString('es-GT')}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </Button>
            <Button variant="outline" onClick={handleDownloadInvoice}>
              <Download className="h-4 w-4 mr-2" />
              Factura
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Card className="card-gradient">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Estado del Pedido
                  </CardTitle>
                  <Badge variant="outline" className={getStatusColor(orderData.status)}>
                    {getStatusText(orderData.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Fecha de Entrega</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(orderData.actualDelivery).toLocaleDateString('es-GT')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                    <Truck className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Número de Rastreo</div>
                      <div className="text-xs text-muted-foreground">{orderData.trackingNumber}</div>
                    </div>
                  </div>
                  <Link to={`/rastrear-pedido?order=${orderData.id}`}>
                    <Button variant="outline" className="w-full">
                      Rastrear Pedido
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Productos Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-20 h-20 bg-accent/20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {item.brand} • SKU: {item.sku}
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-primary">
                                {formatPrice(item.price)}
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-sm text-muted-foreground line-through">
                                  {formatPrice(item.originalPrice)}
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Cantidad: {item.quantity}
                            </div>
                          </div>
                          {item.discount > 0 && (
                            <Badge variant="outline" className="bg-success/10 text-success border-success/20 w-fit">
                              Ahorro: {formatPrice(item.discount)}
                            </Badge>
                          )}
                        </div>
                        <div className="flex sm:flex-col gap-2">
                          <Link to={`/producto/${item.id}`}>
                            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                              Ver Producto
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                            <Star className="h-3 w-3 mr-1" />
                            Reseñar
                          </Button>
                        </div>
                      </div>
                      {index < orderData.items.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order History */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Historial del Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.orderHistory.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        {index < orderData.orderHistory.length - 1 && (
                          <div className="w-0.5 h-8 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4 className="font-medium">{event.status}</h4>
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{formatPrice(orderData.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Envío:</span>
                    <span className="text-success">
                      {orderData.shipping === 0 ? "Gratis" : formatPrice(orderData.shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>IVA:</span>
                    <span>{formatPrice(orderData.tax)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">{formatPrice(orderData.total)}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/30">
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>{orderData.paymentMethod}</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20 ml-auto">
                      Pagado
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Info */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Información del Cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">{orderData.customer.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Mail className="h-3 w-3" />
                    <span>{orderData.customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Phone className="h-3 w-3" />
                    <span>{orderData.customer.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Addresses */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Dirección de Envío
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-1">
                  <div className="font-medium">{orderData.shippingAddress.name}</div>
                  <div className="text-muted-foreground">{orderData.shippingAddress.address}</div>
                  <div className="text-muted-foreground">
                    {orderData.shippingAddress.city}, {orderData.shippingAddress.country}
                  </div>
                  <div className="text-muted-foreground">{orderData.shippingAddress.zipCode}</div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>¿Necesitas Ayuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar Soporte
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Reportar Problema
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderDetail;