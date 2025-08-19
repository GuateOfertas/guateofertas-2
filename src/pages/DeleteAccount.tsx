import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, ArrowLeft, Trash2, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const [confirmChecks, setConfirmChecks] = useState({
    understand: false,
    dataLoss: false,
    noRecovery: false
  });

  const reasons = [
    "No uso más la plataforma",
    "Encontré una alternativa mejor",
    "Preocupaciones de privacidad",
    "Demasiadas notificaciones",
    "Problemas técnicos",
    "Costo del servicio",
    "Otro"
  ];

  const canProceed = Object.values(confirmChecks).every(Boolean) && 
                   confirmationText.toLowerCase() === "eliminar mi cuenta" &&
                   reason;

  const handleDelete = () => {
    // Simulate account deletion
    alert("Cuenta eliminada exitosamente (simulación)");
    navigate("/");
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
              Eliminar Cuenta
            </h1>
            <p className="text-muted-foreground mt-2">
              Entendemos que quieras eliminar tu cuenta. Te ayudaremos con el proceso.
            </p>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              {/* Warning */}
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>¡Atención!</strong> Eliminar tu cuenta es una acción permanente e irreversible.
                  Todos tus datos serán eliminados y no podrán ser recuperados.
                </AlertDescription>
              </Alert>

              {/* What will be deleted */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trash2 className="h-5 w-5" />
                    ¿Qué se eliminará?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Tu perfil y información personal
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Historial de pedidos y compras
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Direcciones guardadas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Lista de deseos y productos favoritos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Configuraciones y preferencias
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Historial de soporte y comunicaciones
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Alternatives */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>¿Consideraste estas alternativas?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Desactivar temporalmente</h4>
                      <p className="text-sm text-muted-foreground">
                        Puedes desactivar tu cuenta temporalmente y reactivarla cuando quieras
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Desactivar temporalmente
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Ajustar configuración de privacidad</h4>
                      <p className="text-sm text-muted-foreground">
                        Modifica tus configuraciones de privacidad y notificaciones
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Configurar privacidad
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate("/cuenta")}
                  className="flex-1"
                >
                  Mantener mi cuenta
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  Continuar con eliminación
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {/* Reason for deletion */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>¿Por qué quieres eliminar tu cuenta?</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Tu respuesta nos ayuda a mejorar nuestro servicio
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={reason} onValueChange={setReason}>
                    {reasons.map((reasonOption) => (
                      <div key={reasonOption} className="flex items-center space-x-2">
                        <RadioGroupItem value={reasonOption} id={reasonOption} />
                        <Label htmlFor={reasonOption}>{reasonOption}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  {reason === "Otro" && (
                    <div className="space-y-2">
                      <Label htmlFor="customReason">Especifica el motivo</Label>
                      <Textarea
                        id="customReason"
                        placeholder="Cuéntanos más sobre tu motivo..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional feedback */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Comentarios adicionales (opcional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="¿Hay algo que podríamos haber hecho mejor? Tus comentarios son valiosos para nosotros..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Volver
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!reason}
                  className="flex-1"
                >
                  Continuar
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              {/* Final confirmation */}
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Última confirmación:</strong> Esta acción no se puede deshacer.
                  Una vez eliminada, tu cuenta y todos los datos asociados serán permanentemente borrados.
                </AlertDescription>
              </Alert>

              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Confirmación Final</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="understand"
                        checked={confirmChecks.understand}
                        onCheckedChange={(checked) => 
                          setConfirmChecks(prev => ({ ...prev, understand: !!checked }))
                        }
                      />
                      <Label htmlFor="understand" className="text-sm">
                        Entiendo que esta acción es permanente e irreversible
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="dataLoss"
                        checked={confirmChecks.dataLoss}
                        onCheckedChange={(checked) => 
                          setConfirmChecks(prev => ({ ...prev, dataLoss: !!checked }))
                        }
                      />
                      <Label htmlFor="dataLoss" className="text-sm">
                        Acepto que perderé todos mis datos, pedidos e historial
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="noRecovery"
                        checked={confirmChecks.noRecovery}
                        onCheckedChange={(checked) => 
                          setConfirmChecks(prev => ({ ...prev, noRecovery: !!checked }))
                        }
                      />
                      <Label htmlFor="noRecovery" className="text-sm">
                        Entiendo que no podré recuperar mi cuenta después de eliminarla
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmation">
                      Para confirmar, escribe <strong>"eliminar mi cuenta"</strong> en el campo de abajo:
                    </Label>
                    <Input
                      id="confirmation"
                      value={confirmationText}
                      onChange={(e) => setConfirmationText(e.target.value)}
                      placeholder="eliminar mi cuenta"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1"
                    >
                      Volver
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      disabled={!canProceed}
                      className="flex-1"
                    >
                      Eliminar mi cuenta permanentemente
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;