import { Link } from "react-router-dom"


const Footer = () => {
  return (
      <section id="no-print" className="bg-primary py-12 w-full flex flex-col items-center">
          <Link to="/" className="flex items-center space-x-2 mt-4">
              <div className="bg-white rounded-full h-[70px] w-[70px] p-2 flex items-center justify-center">
                  <img src="/logo.svg" alt="logo" width={50} height={50} />
              </div>
              <div className="flex items-start flex-col">
                  <h1 className="text-xl font-bold text-white ">ResumeAI</h1>
                  <p className="text-white text-sm">Elevate your job search with our advanced AI-powered resume builder.</p>
              </div>
              
          </Link>

          <div className="mt-8 w-full mx-auto flex items-center justify-center space-x-4">
              <Link to="/legal/privacy-policy" className="legal-link">Privacy Policy</Link>
              <Link to="/legal/terms-of-service" className="legal-link">Terms of Service</Link>
              <Link to="/legal/contact-us" className="legal-link">Contact Us</Link>
              <Link to="/legal/about-us" className="legal-link">About Us</Link>
          </div>
          <p className="mt-4 text-white text-xs">All rights reserved. @AI Resume 2024</p>
    </section>
  )
}

export default Footer