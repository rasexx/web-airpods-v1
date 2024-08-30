import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl">Apple</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  AirPods Pro Gen 2
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the next level of audio with active noise cancellation and adaptive transparency.
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
                    Add to Cart
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Wishlist
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="AirPods Pro Gen 2"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Check className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Active Noise Cancellation</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Blocks out external noise for immersive sound.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Check className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Adaptive Transparency</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Lets you hear the world around you when needed.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Check className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Personalized Spatial Audio</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Creates an immersive, theater-like experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Pricing</h2>
            <div className="flex flex-col items-center space-y-4 border-2 border-gray-200 p-6 rounded-lg max-w-sm mx-auto">
              <h3 className="text-2xl font-bold">AirPods Pro Gen 2</h3>
              <div className="text-4xl font-bold">$249</div>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Free engraving</li>
                <li>Free delivery</li>
                <li>6 months of Apple Music free</li>
              </ul>
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Apple Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}