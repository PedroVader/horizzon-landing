
import Header from '../components/Header';
import Hero from '../components/Hero';
import Leads from '../components/Leads';
import Services from '../components/WhatWeDo';
import ServiceIncludes from '../components/Service';
import SuccessCases from '../components/SuccessStories';
import AboutUs from '../components/AboutUs';  


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Leads />
      <ServiceIncludes />
      <SuccessCases />
      <AboutUs />
    </div>
  );
};

export default Index;
