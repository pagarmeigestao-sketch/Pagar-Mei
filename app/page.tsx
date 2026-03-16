import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import HowItWorks from '@/components/HowItWorks'
import FeatureDAS from '@/components/FeatureDAS'
import FeatureInvoice from '@/components/FeatureInvoice'
import MonitoringSection from '@/components/MonitoringSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import TargetAudience from '@/components/TargetAudience'
import SecuritySection from '@/components/SecuritySection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <FeatureDAS />
        <FeatureInvoice />
        <MonitoringSection />
        <FeaturesGrid />
        <TargetAudience />
        <SecuritySection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
