'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Strengths from '@/components/Strengths'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Testimonials from '@/components/Testimonials'
import ServiceInfo from '@/components/ServiceInfo'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      <section id="about">
        <Introduction />
        <Skills />
      </section>
      
      <Strengths />
      <Works />
      <Testimonials />
      
      <section id="service">
        <ServiceInfo />
      </section>
      
      <Contact />
    </main>
  )
}