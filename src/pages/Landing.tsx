import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp, Award, Menu } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">COBER</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Iniciar sesión</Button>
          </Link>
          <Link to="/registro">
            <Button>Registrarme</Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 lg:pb-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="mx-auto md:mx-0 flex h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 items-center justify-center rounded-full bg-primary/10 order-1 md:order-2">
              <Users className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-primary" />
            </div>
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Conectá y <span className="text-primary">Ganá</span>
              </h1>
              <p className="mb-8 text-muted-foreground text-base sm:text-lg lg:text-xl">
                Sumate al programa de referidos de Cober y generá ingresos recomendando planes de medicina prepaga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start">
                <Link to="/registro" className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full sm:w-auto rounded-xl text-base font-semibold h-14 px-8">
                    Quiero ser Conector
                  </Button>
                </Link>
                <Link to="/login" className="md:hidden">
                  <Button variant="outline" size="lg" className="w-full rounded-xl h-14">
                    Iniciar sesión
                  </Button>
                </Link>
              </div>
              <Link to="/login" className="mt-4 hidden md:inline-block text-sm text-muted-foreground hover:text-primary transition-colors">
                Ya tengo cuenta · Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 bg-muted/30">
        <div className="max-w-6xl mx-auto pt-16 lg:pt-20">
          <h2 className="mb-8 lg:mb-12 text-center text-xl sm:text-2xl lg:text-3xl font-bold">Beneficios Exclusivos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Award, title: "Sin experiencia previa", desc: "No necesitás ser vendedor, solo conectar personas." },
              { icon: TrendingUp, title: "Comisiones atractivas", desc: "Ganá créditos por cada referido que se convierta en alta." },
              { icon: Users, title: "Capacitación gratuita", desc: "Accedé a cursos para mejorar tus resultados." },
              { icon: Shield, title: "Respaldo de Cober", desc: "Trabajá con una empresa líder en medicina prepaga." },
            ].map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
