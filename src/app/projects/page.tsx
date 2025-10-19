import ExpandableCardDemo from "@/components/expandable-card-demo-grid";

export default function ProjectsPage() {
  return (
    <div className="background-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-6 pt-30">Projects</h1>
        <p className="text-white text-lg max-w-xl text-center pb-30">Lets see what have i built.</p>
        <ExpandableCardDemo />
    </div>
  );
}
