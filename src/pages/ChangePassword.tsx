import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const validatePassword = (password: string) => {
    const checks = [];
    if (password.length < 8) checks.push("Mínimo 8 caracteres");
    if (!/[A-Z]/.test(password)) checks.push("Al menos una mayúscula");
    if (!/[a-z]/.test(password)) checks.push("Al menos una minúscula");
    if (!/\d/.test(password)) checks.push("Al menos un número");
    if (!/[!@#$%^&*]/.test(password)) checks.push("Al menos un carácter especial");
    return checks;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors([]);
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = [];

    if (!formData.currentPassword) {
      newErrors.push("La contraseña actual es requerida");
    }

    const passwordValidation = validatePassword(formData.newPassword);
    newErrors.push(...passwordValidation);

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.push("Las contraseñas no coinciden");
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.push("La nueva contraseña debe ser diferente a la actual");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Simulate password change
      setSuccess(true);
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    }
  };

  const passwordStrength = (password: string) => {
    const checks = validatePassword(password);
    if (password.length === 0) return { strength: 0, label: "" };
    if (checks.length === 0) return { strength: 100, label: "Muy fuerte" };
    if (checks.length <= 2) return { strength: 75, label: "Fuerte" };
    if (checks.length <= 3) return { strength: 50, label: "Moderada" };
    return { strength: 25, label: "Débil" };
  };

  const { strength, label } = passwordStrength(formData.newPassword);

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
              Cambiar Contraseña
            </h1>
            <p className="text-muted-foreground mt-2">
              Actualiza tu contraseña para mantener tu cuenta segura
            </p>
          </div>

          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                ¡Contraseña actualizada exitosamente!
              </AlertDescription>
            </Alert>
          )}

          {errors.length > 0 && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertDescription className="text-red-800">
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Cambiar Contraseña
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Current Password */}
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Contraseña Actual</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={formData.currentPassword}
                      onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                      placeholder="Ingresa tu contraseña actual"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange("newPassword", e.target.value)}
                      placeholder="Ingresa tu nueva contraseña"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.newPassword && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Fortaleza de la contraseña</span>
                        <span className={`font-medium ${
                          strength >= 75 ? "text-green-600" :
                          strength >= 50 ? "text-yellow-600" :
                          "text-red-600"
                        }`}>
                          {label}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            strength >= 75 ? "bg-green-500" :
                            strength >= 50 ? "bg-yellow-500" :
                            "bg-red-500"
                          }`}
                          style={{ width: `${strength}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder="Confirma tu nueva contraseña"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Requisitos de la contraseña:</h4>
                  <ul className="text-sm space-y-1">
                    <li className={`flex items-center gap-2 ${
                      formData.newPassword.length >= 8 ? "text-green-600" : "text-muted-foreground"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        formData.newPassword.length >= 8 ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      Mínimo 8 caracteres
                    </li>
                    <li className={`flex items-center gap-2 ${
                      /[A-Z]/.test(formData.newPassword) ? "text-green-600" : "text-muted-foreground"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        /[A-Z]/.test(formData.newPassword) ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      Al menos una letra mayúscula
                    </li>
                    <li className={`flex items-center gap-2 ${
                      /[a-z]/.test(formData.newPassword) ? "text-green-600" : "text-muted-foreground"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        /[a-z]/.test(formData.newPassword) ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      Al menos una letra minúscula
                    </li>
                    <li className={`flex items-center gap-2 ${
                      /\d/.test(formData.newPassword) ? "text-green-600" : "text-muted-foreground"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        /\d/.test(formData.newPassword) ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      Al menos un número
                    </li>
                    <li className={`flex items-center gap-2 ${
                      /[!@#$%^&*]/.test(formData.newPassword) ? "text-green-600" : "text-muted-foreground"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        /[!@#$%^&*]/.test(formData.newPassword) ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      Al menos un carácter especial (!@#$%^&*)
                    </li>
                  </ul>
                </div>

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
                      !formData.currentPassword ||
                      !formData.newPassword ||
                      !formData.confirmPassword ||
                      validatePassword(formData.newPassword).length > 0 ||
                      formData.newPassword !== formData.confirmPassword
                    }
                  >
                    Actualizar Contraseña
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;