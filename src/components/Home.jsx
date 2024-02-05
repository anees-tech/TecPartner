import Header from "./Header";
import Card from "./Card";
import Footer from './Footer'
import RenderBar from "./RenderBar";
import Testimonial from "./Testimonial";

function Home() { 
  const svgString1 = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-4"><path d="M3 3v18h18"/><path d="M13 17V9"/><path d="M18 17V5"/><path d="M8 17v-3"/></svg>';
  const svgString2 = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-search"><path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.5-1.5"/></svg>';
  const svgString3 = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>';



  return (
    <>
      <Header/>
      <div className='flex items-center bg-gray-100 justify-center gap-4 2xl:p-24 xl:p-24 md:p-24 lg:p-24 sm:p-24 p-4 flex-wrap'>
        <Card svg={svgString1} heading={"Employers"} para={"Experts in providing tailored recruitment and staffing solutions for both technical and non-technical positions. Our main focus is to help your organization find top talent that aligns with your goals."}/>
        <Card svg={svgString2} heading={"Job Seekers"} para={"As a Global Recruitment & Staffing agency, our mission is to connect you with your ideal job."}/>
        <Card svg={svgString3} heading={"Consultation"} para={"Easetalent bring the spark back into your career by offering top-notch consultation services to guide you through interview preparation, craft compelling resumes, identify the best career moves, and optimize your professional profile. Get ready to shine and land your dream job with our expert assistance!"}/>
      </div>
      <Testimonial/>
      <RenderBar/>
      <Footer/>
    </>
  );
}

export default Home;
