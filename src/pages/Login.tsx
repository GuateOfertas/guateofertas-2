import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, Chrome, Facebook } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sin funcionalidad por ahora
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-md mx-auto">
          <Card className="card-gradient shadow-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-gradient-primary">
                Iniciar Sesión
              </CardTitle>
              <p className="text-muted-foreground">
                Accede a tu cuenta para continuar
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Social Login */}
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  type="button"
                >
                  <Chrome className="h-4 w-4 mr-2" />
                  Continuar con Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  type="button"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Continuar con Facebook
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-background px-2 text-muted-foreground text-sm">
                    o continúa con email
                  </span>
                </div>
              </div>

              {/* Email Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Recordarme
                  </label>
                  <Link 
                    to="/recuperar-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="default"
                >
                  Iniciar Sesión
                </Button>
              </form>

              <div className="text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <Link 
                  to="/registro" 
                  className="text-primary hover:underline font-medium"
                >
                  Regístrate aquí
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;