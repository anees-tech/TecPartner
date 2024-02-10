import Header from "./Header";
import Card from "./Card";
import Footer from './Footer'
import RenderBar from "./RenderBar";
import Testimonial from "./Testimonial";

function Home() { 
  const svgString1 =
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-search"><circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/></svg>';
  const svgString2 =
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>';
  const svgString3 =
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';



  return (
    <div>
      <Header />
      <div className="flex items-center bg-gray-100 justify-center xl:flex-nowrap  gap-4 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-wrap">
        <Card
          svg={svgString1}
          heading={"RPO"}
          para={
            "Experts in providing tailored recruitment and staffing solutions for both technical and non-technical positions. Our main focus is to help your organization find top talent that aligns with your goals."
          }
        />
        <Card
          svg={svgString2}
          heading={"BPO"}
          para={
            "As a Global Recruitment & Staffing agency, our mission is to connect you with your ideal job."
          }
        />
        <Card
          svg={svgString3}
          heading={"ITO"}
          para={
            "Easetalent bring the spark back into your career by offering top-notch consultation services to guide you through interview preparation, craft compelling resumes, identify the best career moves, and optimize your professional profile. Get ready to shine and land your dream job with our expert assistance!"
          }
        />
      </div>
      <Testimonial />
      <RenderBar />
      <Footer />
    </div>
  );
}

export default Home;
