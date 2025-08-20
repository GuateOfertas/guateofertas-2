import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Truck, Shield, ArrowLeft, Plus, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [useExistingAddress, setUseExistingAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  
  // Mock direcciones guardadas
  const savedAddresses = [
    {
      id: "1",
      name: "Casa",
      fullName: "Juan Pérez",
      address: "Calle Principal 123",
      city: "Ciudad de Guatemala",
      state: "Guatemala",
      zipCode: "01001",
      phone: "+502 2345-6789"
    },
    {
      id: "2", 
      name: "Oficina",
      fullName: "Juan Pérez",
      address: "Zona 10, Edificio Empresarial 456",
      city: "Ciudad de Guatemala", 
      state: "Guatemala",
      zipCode: "01010",
      phone: "+502 2345-6789"
    }
  ];
  
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 8500,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
    },
    {
      id: 2, 
      name: "AirPods Pro 2da Gen",
      price: 1200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c2c7e5?w=100&h=100&fit=crop"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = shippingMethod === "express" ? 200 : 0;
  const tax = Math.round(subtotal * 0.16);
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/carrito")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al carrito
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary">
            Finalizar Compra
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Información de Envío
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {savedAddresses.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="useExisting"
                        checked={useExistingAddress}
                        onCheckedChange={(checked) => setUseExistingAddress(checked === true)}
                      />
                      <Label htmlFor="useExisting">Usar dirección guardada</Label>
                    </div>
                    
                    {useExistingAddress && (
                      <div className="space-y-3">
                        <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                          {savedAddresses.map((address) => (
                            <div key={address.id} className="flex items-start space-x-2 p-4 border rounded-lg">
                              <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                              <Label htmlFor={address.id} className="flex-1 cursor-pointer">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="font-medium">{address.name}</span>
                                  </div>
                                  <p className="text-sm">{address.fullName}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {address.address}, {address.city}, {address.state} {address.zipCode}
                                  </p>
                                  <p className="text-sm text-muted-foreground">{address.phone}</p>
                                </div>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <Link to="/anadir-direccion">
                          <Button variant="outline" className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Agregar Nueva Dirección
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                
                {(!useExistingAddress || savedAddresses.length === 0) && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Juan" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Pérez" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="juan@email.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+502 2345-6789" />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" placeholder="Calle Principal 123" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ciudad de Guatemala" />
                      </div>
                      <div>
                        <Label htmlFor="state">Departamento</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="guatemala">Guatemala</SelectItem>
                            <SelectItem value="sacatepequez">Sacatepéquez</SelectItem>
                            <SelectItem value="chimaltenango">Chimaltenango</SelectItem>
                            <SelectItem value="quetzaltenango">Quetzaltenango</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode">Código Postal</Label>
                      <Input id="zipCode" placeholder="01001" />
                    </div>
                    
                    {savedAddresses.length === 0 && (
                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="saveAddress" />
                        <Label htmlFor="saveAddress" className="text-sm">
                          Guardar esta dirección para futuras compras
                        </Label>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Método de Envío</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">Envío Estándar</p>
                          <p className="text-sm text-muted-foreground">5-7 días hábiles</p>
                        </div>
                        <span className="font-semibold">Gratis</span>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">Envío Express</p>
                          <p className="text-sm text-muted-foreground">1-2 días hábiles</p>
                        </div>
                        <span className="font-semibold">$200</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Información de Pago
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Tarjeta de Crédito/Débito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oxxo" id="oxxo" />
                    <Label htmlFor="oxxo">OXXO</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4">
                    <div>
                      <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Fecha de Vencimiento</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                      <Input id="cardName" placeholder="Juan Pérez" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Terms and Security */}
            <Card className="card-gradient">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los <span className="text-primary underline cursor-pointer">términos y condiciones</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Quiero recibir ofertas y promociones por email
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Tu información está protegida con cifrado SSL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="card-gradient sticky top-4">
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Cantidad: {item.quantity}
                        </p>
                      </div>
                      <span className="font-semibold">
                        ${item.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío</span>
                    <span>{shipping === 0 ? "Gratis" : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impuestos</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Confirmar Pedido
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Al confirmar tu pedido, aceptas nuestros términos y condiciones
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;