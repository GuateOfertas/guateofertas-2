import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  Truck, 
  CreditCard,
  Shield,
  ArrowRight
} from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop",
      price: 8500,
      originalPrice: 9500,
      quantity: 1,
      inStock: true
    },
    {
      id: "2",
      name: "AirPods Pro (2da generación)",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop",
      price: 1800,
      originalPrice: 2200,
      quantity: 2,
      inStock: true
    },
    {
      id: "3",
      name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=200&h=200&fit=crop",
      price: 2800,
      originalPrice: 3200,
      quantity: 1,
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const discount = originalTotal - subtotal;
  const shipping = subtotal > 250 ? 0 : 50;
  const total = subtotal + shipping;

  const availableItems = cartItems.filter(item => item.inStock);
  const unavailableItems = cartItems.filter(item => !item.inStock);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gradient-primary mb-2">
            Carrito de Compras
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-8">
              Agrega algunos productos para comenzar a comprar
            </p>
            <Button variant="default" size="lg">
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Available Items */}
              {availableItems.length > 0 && (
                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-success" />
                      Productos Disponibles ({availableItems.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {availableItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center gap-4">
                          {/* Product Image */}
                          <div className="w-20 h-20 bg-accent/20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground truncate">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-lg font-bold text-primary">
                                {formatPrice(item.price)}
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-sm text-muted-foreground line-through">
                                  {formatPrice(item.originalPrice)}
                                </span>
                              )}
                            </div>
                            <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/20">
                              En Stock
                            </Badge>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        {index < availableItems.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Unavailable Items */}
              {unavailableItems.length > 0 && (
                <Card className="card-gradient border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <Tag className="h-5 w-5" />
                      Productos No Disponibles ({unavailableItems.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {unavailableItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center gap-4 opacity-60">
                          <div className="w-20 h-20 bg-accent/20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground truncate">
                              {item.name}
                            </h3>
                            <span className="text-lg font-bold text-primary">
                              {formatPrice(item.price)}
                            </span>
                            <Badge variant="outline" className="mt-2 bg-destructive/10 text-destructive border-destructive/20">
                              Agotado
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        {index < unavailableItems.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Promo Code */}
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    Código Promocional
                  </h3>
                  <div className="flex gap-4">
                    <Input
                      placeholder="Ingresa tu código"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline">
                      Aplicar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="card-gradient sticky top-4">
                <CardHeader>
                  <CardTitle>Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-success">
                        <span>Descuentos:</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span>Envío:</span>
                      <span className={shipping === 0 ? "text-success" : ""}>
                        {shipping === 0 ? "Gratis" : formatPrice(shipping)}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Savings Info */}
                  {discount > 0 && (
                    <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                      <p className="text-sm text-success font-medium">
                        ¡Estás ahorrando {formatPrice(discount)}!
                      </p>
                    </div>
                  )}

                  {/* Free Shipping Info */}
                  {shipping > 0 && (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm text-primary">
                        Agrega {formatPrice(251 - subtotal)} más para envío gratis
                      </p>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full"
                    disabled={availableItems.length === 0}
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceder al Pago
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>

                  {/* Continue Shopping */}
                  <Button variant="outline" size="lg" className="w-full">
                    Continuar Comprando
                  </Button>

                  {/* Security Info */}
                  <div className="space-y-3 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-success" />
                      <span>Pago 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Envío rápido y confiable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;