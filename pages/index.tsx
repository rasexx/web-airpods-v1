import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Star, Check, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const BuyPage = () => {
  const [imageError, setImageError] = useState({
    all: false,
    airpodsOnly: false,
    frontSide: false,
    leftSide: false,
  })

  const [scrollY, setScrollY] = useState(0)

  const handleImageError = (imageName: keyof typeof imageError) => {
    setImageError(prev => ({ ...prev, [imageName]: true }))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300" style={{ boxShadow: scrollY > 0 ? '0 2px 4px rgba(0,0,0,.1)' : 'none' }}>
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl">Airpods Cartagena</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Siguenos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contactanos">
            Contáctanos
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div 
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  AirPods Pro de Segunda Generación
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre nuestras réplicas de AirPods de alta calidad, diseñadas para ofrecer una experiencia auditiva excepcional de alta tecnologia con un diseño elegante y moderno.
                  <br /><br />
                  Te brindamos la mejor experiencia al menor precio con entrega inmediata, no dejes pasar esta oportunidad.<br />
                  <br />
                  ¡Eleva tu experiencia auditiva hoy mismo!
                </p>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`} />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400">(4.5/5)</span>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                    Comprar
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="hover:bg-gray-100 transition-colors duration-300">
                    Compartir
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'all', src: '/all.png', alt: 'AirPods Pro Gen 2 - All Components' },
                  { name: 'airpodsOnly', src: '/whit_usb.png', alt: 'AirPods Pro Gen 2 - With USB' },
                  { name: 'frontSide', src: '/airpods_only.png', alt: 'AirPods Pro Gen 2 - AirPods Only' },
                  { name: 'leftSide', src: '/lower_side.png', alt: 'AirPods Pro Gen 2 - Lower Side View' },
                ].map((image, index) => (
                  <motion.div 
                    key={image.name}
                    className="rounded-xl overflow-hidden shadow-lg bg-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {!imageError[image.name as keyof typeof imageError] ? (
                      <Image
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                        height={225}
                        src={image.src}
                        width={400}
                        onError={() => handleImageError(image.name as keyof typeof imageError)}
                      />
                    ) : (
                      <div className="w-full h-[225px] flex items-center justify-center text-gray-400">
                        Image not available
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Características</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "Cancelación Activa de Ruido",
                  description: "Desconéctate del mundo y sumérgete en tus sonidos favoritos con un audio envolvente y sin distracciones."
                },
                {
                  title: "Transparencia adaptativa",
                  description: "Mantente atento a tu entorno mientras disfrutas de tu música, ideal para cuando necesitas estar conectado."
                },
                {
                  title: "Audio espacial personalizado",
                  description: "Transforma tu experiencia auditiva con un sonido similar al del cine que se siente como si estuviera a tu alrededor."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Precio</h2>
            <motion.div 
              className="flex flex-col items-center space-y-4 border-2 border-gray-200 p-6 rounded-lg max-w-sm mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold">AirPods Pro de Segunda Generación</h3>
              <div className="text-4xl font-bold">$79.900 COP</div>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Disponible para entrega inmediata</li>
                <li>Escoje cuando los quieres recibir</li>
                <li>Domicilio gratis</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300" size="lg">
                Comprar
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">2024 Airpods Cartagena</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Pagina Web Desarrollada por Servicios TIC Cartagena.<br />Todos los derechos Reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Enviar un correo
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Nuestro whatsapp
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/contactanos">
            Contáctanos
          </Link>

        </nav>
      </footer>
    </div>
  )
}

export default BuyPage