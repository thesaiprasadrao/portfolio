"use client"
import * as React from "react"
import { InstagramButton } from "@/components/insta-button"
import { LinkedInButton } from "@/components/linkedin-button"
import { EmailButton } from "@/components/email-button"
import { PhoneButton } from "@/components/phone-button"
export const SocialSection: React.FC = () => {
  return (
    <section
      className="py-4 min-h-[40vh] w-full flex flex-col items-center gap-0 sm:gap-8 rounded-xl max-w-5xl mx-auto "
    >
      <h2 className="mb-1 sm:mb-2 text-center text-1xl sm:text-4xl md:text-4xl font-semibold text-white">
                We can connect here
        </h2>
      <div className="flex gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-2">
            <EmailButton onClick={() => window.location.href = "mailto:saiprasadrao@gmail.com"} />  
        </div>
        <div className="flex flex-col items-center gap-2">
          <LinkedInButton onClick={() => window.open("https://www.linkedin.com/company/saiprasadrao", "_blank")} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <PhoneButton onClick={() => window.open("tel:+919902450514", "_blank")} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <InstagramButton onClick={() => window.open("https://www.instagram.com/thesaiprasadrao/", "_blank")} />
        
        </div>
    
      </div>
    </section>
  )
}

export default SocialSection