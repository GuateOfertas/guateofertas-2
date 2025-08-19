import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, ArrowLeft, CheckCircle, Home, Building, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    type: "home",
    alias: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "MX",
    phone: "",
    isDefault: false,
    deliveryInstructions: ""
  });

  const addressTypes = [
    { value: "home", label: "Casa", icon: Home },
    { value: "work", label: "Trabajo", icon: Briefcase },
    { value: "other", label: "Otro", icon: Building }
  ];

  const mexicanStates = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
    "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo",
    "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
    "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
    "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving address
    setSuccess(true);
    setTimeout(() => {
      navigate("/cuenta");
    }, 2000);
  };

  const getTypeIcon = (type: string) => {
    const typeData = addressTypes.find(t => t.value === type);
    const Icon = typeData?.icon || Home;
    return <Icon className="h-4 w-4" />;
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/cuenta")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a mi cuenta
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary">
              Añadir Nueva Dirección
            </h1>
            <p className="text-muted-foreground mt-2">
              Agrega una dirección de envío para tus pedidos
            </p>
          </div>

          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                ¡Dirección guardada exitosamente! Redirigiendo...
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Address Type */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Tipo de Dirección
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {addressTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleInputChange("type", type.value)}
                        className={`p-4 border rounded-lg text-center transition-all ${
                          formData.type === type.value
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Icon className="h-6 w-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
                
                <div>
                  <Label htmlFor="alias">Nombre de la dirección (opcional)</Label>
                  <Input
                    id="alias"
                    value={formData.alias}
                    onChange={(e) => handleInputChange("alias", e.target.value)}
                    placeholder={`Mi ${addressTypes.find(t => t.value === formData.type)?.label.toLowerCase()}`}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Juan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Pérez"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Empresa (opcional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Mi Empresa S.A."
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+52 55 1234 5678"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Dirección</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Calle y número *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Av. Insurgentes Sur 123"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="addressLine2">Departamento, suite, etc. (opcional)</Label>
                  <Input
                    id="addressLine2"
                    value={formData.addressLine2}
                    onChange={(e) => handleInputChange("addressLine2", e.target.value)}
                    placeholder="Depto. 4B, Col. Roma Norte"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ciudad *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Ciudad de México"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado *</Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {mexicanStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zipCode">Código Postal *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="03100"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">País</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MX">México</SelectItem>
                        <SelectItem value="US">Estados Unidos</SelectItem>
                        <SelectItem value="CA">Canadá</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Instructions */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Instrucciones de Entrega (opcional)</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={formData.deliveryInstructions}
                  onChange={(e) => handleInputChange("deliveryInstructions", e.target.value)}
                  placeholder="Ej: Tocar el timbre dos veces, dejar en portería, etc."
                  className="w-full p-3 border rounded-lg resize-none h-20 bg-background"
                />
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="card-gradient">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isDefault"
                    checked={formData.isDefault}
                    onCheckedChange={(checked) => handleInputChange("isDefault", !!checked)}
                  />
                  <Label htmlFor="isDefault" className="text-sm">
                    Establecer como dirección predeterminada
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/cuenta")}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={
                  !formData.firstName ||
                  !formData.lastName ||
                  !formData.address ||
                  !formData.city ||
                  !formData.state ||
                  !formData.zipCode ||
                  !formData.phone
                }
              >
                {getTypeIcon(formData.type)}
                <span className="ml-2">Guardar Dirección</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;