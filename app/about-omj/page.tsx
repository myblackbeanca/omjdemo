import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Star, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const initiatives = [
  {
    title: "Patient Advocacy Resources",
    description: "Know your rights and get the tools to fight for the care you deserve.",
    icon: Users
  },
  {
    title: "Support Groups",
    description: "Find your people. We offer spaces to connect, vent, and heal with others who get it.",
    icon: Heart
  },
  {
    title: "Educational Toolkits",
    description: "Learn more about TMJ, debunk the myths, and stay ahead of the latest treatment options.",
    icon: Lightbulb
  },
  {
    title: "Jawfluencer Program",
    description: "Join forces with culture-creators and influencers to spread awareness and break stigmas.",
    icon: Star
  }
]

export default function AboutOMJ() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80"
          alt="Community"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <div
              className="opacity-0 translate-y-4 animate-in"
              style={{
                animationDelay: "200ms",
                animationDuration: "500ms",
                animationFillMode: "forwards"
              }}
            >
              <h1 className="text-4xl md:text-6xl font-sigmar mb-6">About Oh My Jaw</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Empowering the TMJ community through advocacy, education, and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </div>
  )
}