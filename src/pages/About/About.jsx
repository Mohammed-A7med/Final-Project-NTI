import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import AchievementsSection from '@/components/about/AchievementsSection'
import HistoryDevelopmentSection from '@/components/about/HistoryDevelopmentSection'
import ActivitiesTestimonials from '@/components/about/ActivitiesTestimonials'
import PartnersSection from '@/components/about/PartnersSection'

export default function About() {
  return (
    <section className="py-12 bg-white min-h-screen overflow-hidden font-inter relative">
      <AboutHero />
      <AchievementsSection />
      <HistoryDevelopmentSection />
      <ActivitiesTestimonials />
      <PartnersSection />
    </section>
  )
}
