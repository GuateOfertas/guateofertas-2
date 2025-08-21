import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, ArrowLeft, CheckCircle, Home, Building, Briefcase } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const EditAddress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
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
    country: "GT",
    phone: "",
    isDefault: false,
    deliveryInstructions: ""
  });

  const addressTypes = [
    { value: "home", label: "Casa", icon: Home },
    { value: "work", label: "Trabajo", icon: Briefcase },
    { value: "other", label: "Otro", icon: Building }
  ];

  const guatemalanDepartments = [
    "Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula",
    "El Progreso", "Escuintla", "Guatemala", "Huehuetenango",
    "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango",
    "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos",
    "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"
  ];

  // Mock addresses data - in real app this would come from API
  const mockAddresses = [
    {
      id: "1",
      type: "home",
      alias: "Mi Casa",
      firstName: "María",
      lastName: "González",
      company: "",
      address: "5ta Avenida 12-34, Zona 10",
      addressLine2: "",
      city: "Ciudad de Guatemala",
      state: "Guatemala",
      zipCode: "01010",
      country: "GT",
      phone: "+502 5555-1234",
      isDefault: true,
      deliveryInstructions: "Tocar el timbre dos veces"
    },
    {
      id: "2",
      type: "work",
      alias: "Oficina",
      firstName: "María",
      lastName: "González",
      company: "Tech Solutions GT",
      address: "Edificio Torre del Sol, 15to Piso",
      addressLine2: "Oficina 1502",
      city: "Ciudad de Guatemala",
      state: "Guatemala",
      zipCode: "01009",
      country: "GT",
      phone: "+502 2222-5678",
      isDefault: false,
      deliveryInstructions: "Dejar en recepción"
    }
  ];

  useEffect(() => {
    // Simulate loading address data
    setTimeout(() => {
      const address = mockAddresses.find(addr => addr.id === id);
      if (address) {
        setFormData(address);
      }
      setLoading(false);
    }, 500);
  }, [id]);

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

  if (loading) {
    return (
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mb-4"></div>
              <div className="h-12 bg-muted rounded w-full mb-6"></div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              Editar Dirección
            </h1>
            <p className="text-muted-foreground mt-2">
              Actualiza los datos de tu dirección de envío
            </p>
          </div>

          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                ¡Dirección actualizada exitosamente! Redirigiendo...
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
                    placeholder="+502 5555-1234"
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
                    placeholder="5ta Avenida 12-34, Zona 10"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="addressLine2">Apartamento, suite, etc. (opcional)</Label>
                  <Input
                    id="addressLine2"
                    value={formData.addressLine2}
                    onChange={(e) => handleInputChange("addressLine2", e.target.value)}
                    placeholder="Apto. 4B, Torre Norte"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ciudad *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Ciudad de Guatemala"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">Departamento *</Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {guatemalanDepartments.map((department) => (
                          <SelectItem key={department} value={department}>
                            {department}
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
                      placeholder="01010"
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
                        <SelectItem value="GT">Guatemala</SelectItem>
                        <SelectItem value="MX">México</SelectItem>
                        <SelectItem value="US">Estados Unidos</SelectItem>
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
                <span className="ml-2">Actualizar Dirección</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;