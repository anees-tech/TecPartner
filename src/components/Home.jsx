import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import RenderBar from "./RenderBar";
import Testimonial from "./Testimonial";
import ScrollToTop from "./ScrollToTop";

// Define SVG icons in an array for better management
const svgIcons = [
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-search"><circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/></svg>',
    heading: "Recruitment Process Outsourcing",
    para: "We provide RPO services to various corporate clients, particularly in the SAAS domain.",
    animation: "fade-right",
    serviceType: "rpo",
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>',
    heading: "Business Process Outsourcing",
    para: "We provide cost-effective and efficient back-office support.",
    animation: "fade-up",
    serviceType: "bpo",
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    heading: "Information Technology Outsourcing",
    para: "We provide IT-based solutions for businesses ranging from startups to enterprise-level.",
    animation: "fade-left",
    serviceType: "ito",
  },
];

function Home() {
  return (
    <div>
      <Header />
      <section className="services-grid flex items-center justify-center w-full bg-gray-100">
        <div
          data-aos="fade-up"
          className="grid items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-24"
        >
          {svgIcons.map((icon, index) => (
            <div key={index} data-aos={icon.animation}>
              <Card
                svg={icon.svg}
                heading={icon.heading}
                para={icon.para}
                serviceType={icon.serviceType}
              />
            </div>
          ))}
        </div>
      </section>
      <Testimonial />
      <RenderBar />
      <Footer />
      <div className="flex items-center w-full justify-center">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default Home;
