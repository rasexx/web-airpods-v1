import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const BuyPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  AirPods Pro de Segunda Generación
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Descubre nuestras réplicas de AirPods de alta calidad, diseñadas para ofrecer una experiencia auditiva excepcional de alta tecnologia con un diseño elegante y moderno.
                <br></br><br></br>
                Te brindamos la mejor experiencia al menor precio con entrega inmediata, no dejes pasar esta oportunidad.<br></br>
                <br></br>
                ¡Eleva tu experiencia auditiva hoy mismo!
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">(4.5/5)</span>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Comprar
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Compartir
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="relative" ref={emblaRef}>
                    <div className="flex">
                      <div className="flex-[0_0_100%] min-w-0">
                        <Image
                          alt="AirPods Pro Gen 2 - All Components"
                          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                          height={400}
                          src="/styles/product_images/all.png"
                          width={400}
                        />
                      </div>
                      <div className="flex-[0_0_100%] min-w-0">
                        <Image
                          alt="AirPods Pro Gen 2 - AirPods Only"
                          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                          height={400}
                          src="/styles/product_images/airpods_only.webp"
                          width={400}
                        />
                      </div>
                      <div className="flex-[0_0_100%] min-w-0">
                        <Image
                          alt="AirPods Pro Gen 2 - Front and Side View"
                          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                          height={400}
                          src="/styles/product_images/front_side.webp"
                          width={400}
                        />
                      </div>
                      <div className="flex-[0_0_100%] min-w-0">
                        <Image
                          alt="AirPods Pro Gen 2 - Left Side View"
                          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                          height={400}
                          src="/styles/product_images/left_side.webp"
                          width={400}
                        />
                      </div>
                      <div className="flex-[0_0_100%] min-w-0">
                        <Image
                          alt="AirPods Pro Gen 2 - Lower Side View"
                          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                          height={400}
                          src="/styles/product_images/lower_side.webp"
                          width={400}
                        />
                      </div>
                      <div className="flex-[0_0_100%] min-w-0">
                        <Image
                          alt="AirPods Pro Gen 2 - With USB"
                          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                          height={400}
                          src="/styles/product_images/whit_usb.webp"
                          width={400}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button onClick={scrollPrev} variant="outline" size="icon" className="mr-2">
                      ←
                    </Button>
                    <Button onClick={scrollNext} variant="outline" size="icon">
                      →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Características</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Check className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Cancelación Activa de Ruido</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Desconéctate del mundo y sumérgete en tus sonidos favoritos con un audio envolvente y sin distracciones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Check className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Transparencia adaptativa</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Mantente atento a tu entorno mientras disfrutas de tu música, ideal para cuando necesitas estar conectado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Check className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Audio espacial personalizado</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Transforma tu experiencia auditiva con un sonido similar al del cine que se siente como si estuviera a tu alrededor.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Pricing</h2>
            <div className="flex flex-col items-center space-y-4 border-2 border-gray-200 p-6 rounded-lg max-w-sm mx-auto">
              <h3 className="text-2xl font-bold">AirPods Pro de Segunda Generación</h3>
              <div className="text-4xl font-bold">$79.900 COP</div>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Disponible para entrega inmediata</li>
                <li>Escoje cuando los quieres recibir</li>
                <li>Domicilio gratis</li>
              </ul>
              <Button className="w-full" size="lg">
                Comprar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">2024 Airpods Cartagena</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Pagina Web Desarrollada por Servicios TIC Cartagena.<br></br>Todos los derechos Reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Enviar un correo
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Nuestro whatsapp
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default BuyPage