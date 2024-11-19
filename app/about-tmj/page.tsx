"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Heart, Stethoscope, Plus, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutTMJ() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2400&q=80"
          alt="Medical professional examining jaw"
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
              <h1 className="text-4xl md:text-6xl font-sigmar mb-6">Understanding TMJ Disorders</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Comprehensive information about Temporomandibular Joint disorders and their impact on daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Up with TMDs Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <h2 className="text-3xl font-sigmar gradient-text mb-6">What's Up with TMDs?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#4A555D]">
                  TMDs don't come alone—they love to bring friends like:
                </p>
                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-center text-[#4A555D]">
                    <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                    Headaches & migraines
                  </li>
                  <li className="flex items-center text-[#4A555D]">
                    <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                    Fibromyalgia (aka full-body pain and fatigue)
                  </li>
                  <li className="flex items-center text-[#4A555D]">
                    <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                    Back pain (because why not?)
                  </li>
                  <li className="flex items-center text-[#4A555D]">
                    <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                    Irritable Bowel Syndrome (IBS) (your body's unwanted party guest)
                  </li>
                </ul>
                <p className="text-[#4A555D] mb-4">
                  Some people deal with temporary jaw issues, while others are stuck in it for the long haul. It can start with an innocent little jaw click—but sometimes it spirals into severe, life-altering pain across the face, jaw, and neck. Everyday things most people don't even think about—like eating, talking, smiling, laughing, or kissing—can become totally unbearable.
                </p>
                <p className="text-[#4A555D]">
                  And it's not just about the physical pain. TMDs can wreck your social life, relationships, and mental health, leaving you feeling isolated and misunderstood. The worst part? Many people with TMDs are met with eye rolls and invalidation—whether from family, friends, or healthcare providers. It's like being stuck in a loop of "But You Don't Look Sick" vibes, which just makes the whole thing worse.
                </p>
              </div>
            </Card>

            {/* When It Rains Section */}
            <Card className="p-8 mb-12 bg-[#FDE48C]/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1515161318750-781d6122e367?auto=format&fit=crop&w=800&q=80"
                      alt="Rain illustration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-[#4A555D]">
                    Illustration by Jenn Hoffman
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-sigmar gradient-text mb-6">When It Rains, It Pours: TMJ & 30+ Comorbidities</h2>
                  <p className="text-[#4A555D] mb-4">
                    TMJ isn't just jaw pain—it's an umbrella term covering 30+ related conditions that can hit you all at once. Think migraines, neck pain, ear issues, brain fog, and more. It's like when one thing goes wrong, everything else piles on.
                  </p>
                  <ul className="list-none space-y-2 mb-6">
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Migraines & Chronic Headaches
                    </li>
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Neck, Shoulder & Back Pain
                    </li>
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Earaches, Tinnitus, and Vertigo
                    </li>
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Fibromyalgia & Chronic Fatigue Syndrome
                    </li>
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Sleep Disorders & Insomnia
                    </li>
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Sinus Issues & Facial Pain
                    </li>
                    <li className="flex items-center text-[#4A555D]">
                      <Plus className="h-5 w-5 text-[#FD75B4] mr-2" />
                      Anxiety & Depression
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* TMJ 101 Glossary */}
            <Card className="p-8">
              <h2 className="text-3xl font-sigmar gradient-text mb-6">TMJ 101: Glossary of Terms</h2>
              <p className="text-[#4A555D] mb-6">
                We get it—TMJ terminology can sound like it's straight out of a medical textbook. Here's a plain language breakdown so you can actually understand the moving parts of your jaw.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#4A555D]">Condyle</h3>
                    <p className="text-[#4A555D]">
                      The condyle is the rounded end of your lower jawbone (mandible) that fits into the socket at the base of your skull. Think of it as the "ball" in a ball-and-socket joint. It moves every time you talk, chew, or yawn.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#4A555D]">Fossa</h3>
                    <p className="text-[#4A555D]">
                      The fossa is the little socket in your skull where the condyle sits. It's like the "home base" for your jaw when it's at rest or in motion. If things aren't lined up properly, your jaw might pop, crack, or cause pain.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#4A555D]">Crepitus</h3>
                    <p className="text-[#4A555D]">
                      Crepitus is a fancy word for the clicking, popping, or crackling noises your jaw makes when you move it. Sometimes it's harmless—other times, it's your joint telling you, "Hey, something's off!"
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#4A555D]">Mandible</h3>
                    <p className="text-[#4A555D]">
                      Your mandible is just a fancy word for your lower jaw. It's the bone that moves when you talk or chew—and it's one of the main players in TMJ disorders.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#4A555D]">Maxilla</h3>
                    <p className="text-[#4A555D]">
                      The maxilla is the upper jaw that stays put while the mandible moves. It also helps shape your face, support your teeth, and forms part of your nose and eye sockets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#4A555D]">Synovial</h3>
                    <p className="text-[#4A555D]">
                      The synovial fluid inside your jaw joint works like lubricating oil for your joint, helping it move smoothly. If this fluid is off-balance, it can lead to inflammation, pain, and stiffness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button 
                  className="bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white rounded-full px-8"
                  asChild
                >
                  <Link href="/about-tmj/anatomy">
                    Explore 3D Anatomy <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}