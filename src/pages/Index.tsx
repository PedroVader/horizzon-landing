
import Header from '../components/Header';
import Hero from '../components/Hero';
import Leads from '../components/Leads';
import Services from '../components/WhatWeDo';
import ServiceIncludes from '../components/Service';
import IsThisForYou from '@/components/ThisIsForYou';
import SuccessCases from '../components/SuccessStories';
import AboutUs from '../components/AboutUs';  
import Brands from '../components/Brands';


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <Leads />
      <ServiceIncludes />
      <IsThisForYou />
      <SuccessCases />
      <AboutUs />
    </div>
  );
};

export default Index;
