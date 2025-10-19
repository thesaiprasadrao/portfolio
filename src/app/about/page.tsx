import DownloadCVButton from "@/components/DownloadCVButton";

export default function AboutPage() {
  return (
    <div className="background-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-6">About</h1>
      <p className="text-white text-lg max-w-xl text-center">Learn more about me, my background, and my passion for web development.</p>
        <DownloadCVButton />
    </div>
  );
}
