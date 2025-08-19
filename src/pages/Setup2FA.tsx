import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Smartphone, Key, ArrowLeft, CheckCircle, Copy, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Setup2FA = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [backupCodes] = useState([
    "ABC123", "DEF456", "GHI789", "JKL012", "MNO345",
    "PQR678", "STU901", "VWX234", "YZA567", "BCD890"
  ]);
  const [qrCodeSecret] = useState("JBSWY3DPEHPK3PXP");

  const handleVerifyCode = () => {
    if (verificationCode === "123456") { // Mock verification
      setIs2FAEnabled(true);
      setStep(3);
    }
  };

  const handleDisable2FA = () => {
    setIs2FAEnabled(false);
    setStep(1);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary">
                Autenticación de Dos Factores
              </h1>
              {is2FAEnabled && (
                <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Activado
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">
              Añade una capa extra de seguridad a tu cuenta
            </p>
          </div>

          {!is2FAEnabled ? (
            <div className="space-y-6">
              {/* Benefits */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>¿Por qué usar 2FA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Mayor Seguridad</h4>
                        <p className="text-sm text-muted-foreground">
                          Protege tu cuenta incluso si tu contraseña es comprometida
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Key className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Acceso Verificado</h4>
                        <p className="text-sm text-muted-foreground">
                          Solo tú puedes acceder con tu dispositivo móvil
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Setup Process */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Configurar 2FA</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={step.toString()} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="1">1. App</TabsTrigger>
                      <TabsTrigger value="2" disabled={step < 2}>2. Código QR</TabsTrigger>
                      <TabsTrigger value="3" disabled={step < 3}>3. Verificar</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="1" className="space-y-4">
                      <div className="text-center space-y-4">
                        <Smartphone className="h-16 w-16 mx-auto text-primary" />
                        <div>
                          <h3 className="text-lg font-semibold">Instala una App de Autenticación</h3>
                          <p className="text-muted-foreground">
                            Necesitarás una aplicación como Google Authenticator o Authy
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          <Badge variant="outline">Google Authenticator</Badge>
                          <Badge variant="outline">Authy</Badge>
                          <Badge variant="outline">Microsoft Authenticator</Badge>
                          <Badge variant="outline">1Password</Badge>
                        </div>
                        <Button onClick={() => setStep(2)} className="w-full">
                          Ya tengo una app instalada
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="2" className="space-y-4">
                      <div className="text-center space-y-4">
                        <div className="bg-white p-6 rounded-lg border mx-auto w-fit">
                          {/* Mock QR Code */}
                          <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <p className="text-sm text-gray-500">Código QR</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Escanea el código QR</h3>
                          <p className="text-muted-foreground mb-4">
                            Abre tu app de autenticación y escanea este código
                          </p>
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm font-medium mb-2">¿No puedes escanear? Ingresa este código manualmente:</p>
                            <div className="flex items-center gap-2 font-mono text-sm bg-background p-2 rounded">
                              <span className="flex-1">{qrCodeSecret}</span>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => copyToClipboard(qrCodeSecret)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button onClick={() => setStep(3)} className="w-full">
                          He escaneado el código
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="3" className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-center">Verifica tu configuración</h3>
                          <p className="text-muted-foreground text-center mb-4">
                            Ingresa el código de 6 dígitos de tu app de autenticación
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="verificationCode">Código de Verificación</Label>
                            <Input
                              id="verificationCode"
                              value={verificationCode}
                              onChange={(e) => setVerificationCode(e.target.value)}
                              placeholder="123456"
                              maxLength={6}
                              className="text-center text-lg tracking-widest"
                            />
                          </div>
                          
                          <Alert>
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              Ingresa "123456" para simular la verificación exitosa
                            </AlertDescription>
                          </Alert>
                          
                          <div className="flex gap-4">
                            <Button
                              variant="outline"
                              onClick={() => setStep(2)}
                              className="flex-1"
                            >
                              Volver
                            </Button>
                            <Button
                              onClick={handleVerifyCode}
                              disabled={verificationCode.length !== 6}
                              className="flex-1"
                            >
                              Verificar y Activar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Success Message */}
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  ¡2FA activado exitosamente! Tu cuenta ahora está más segura.
                </AlertDescription>
              </Alert>

              {/* Backup Codes */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Códigos de Respaldo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-200 bg-amber-50">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                      <strong>¡Importante!</strong> Guarda estos códigos en un lugar seguro. 
                      Cada código solo se puede usar una vez.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {backupCodes.map((code, index) => (
                      <div
                        key={index}
                        className="bg-muted p-2 rounded font-mono text-sm flex items-center justify-between"
                      >
                        <span>{code}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => copyToClipboard(code)}
                          className="h-6 w-6"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(backupCodes.join(", "))}
                    className="w-full"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar todos los códigos
                  </Button>
                </CardContent>
              </Card>

              {/* Management */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Gestionar 2FA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Estado de 2FA</h4>
                      <p className="text-sm text-muted-foreground">
                        La autenticación de dos factores está activa
                      </p>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                      Activo
                    </Badge>
                  </div>
                  
                  <Button
                    variant="destructive"
                    onClick={handleDisable2FA}
                    className="w-full"
                  >
                    Desactivar 2FA
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Al desactivar 2FA, tu cuenta será menos segura
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Setup2FA;