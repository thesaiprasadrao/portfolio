import SocialSection from "./socials";
export default function ContactPage() {
  return (
    <div className="background-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-6">Contact</h1>
      <p className="text-white text-lg max-w-xl text-center">Feel free to reach out for collaborations, project inquiries, or just to say hello!</p>
      <SocialSection />
    </div>
  );
}
