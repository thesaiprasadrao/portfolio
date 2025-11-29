
const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Hey there! 👋 I'm <span className="font-bold text-coral">Saiprasad</span>
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I'm a full-stack developer who loves turning ideas into reality with{" "}
              <span className="font-bold text-teal">JavaScript/TypeScript</span>,{" "}
              <span className="font-bold text-teal">React.js</span>, and{" "}
              <span className="font-bold text-teal">Node.js</span>
              . Whether it's building real-time tracking systems or crafting AI-powered applications, 
              I'm all about creating experiences that are both functional and delightful.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              I've built some pretty cool stuff—like{" "}
              <span className="font-bold text-coral">Safar Saathi</span>, a real-time bus 
              tracking platform that rquires 0 infra setup;{" "}
              <span className="font-bold text-coral">ScamShield</span>, an AI-powered scam 
              analyzer with OCR capabilities; and{" "}
              <span className="font-bold text-coral">BruteForce</span>, a hackathon landing 
              page with mind-bending 3D visuals. I also care deeply about privacy, 
              which is why I created{" "}
              <span className="font-bold text-coral">Mood Diary</span>, a journal app where 
              your data never leaves your device.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              When I'm not shipping projects, you'll find me grinding algorithms on{" "}
              <a href="https://leetcode.com/u/thesaiprasad/">
              <span className="font-bold text-coral underline">LeetCode</span> and{" "} </a>
              <a href="https://www.codechef.com/users/thesaiprasad">
              <span className="font-bold text-coral underline">CodeChef</span></a>, sharpening my 
              problem-solving skills one challenge at a time. I'm always excited to learn, build, 
              and collaborate on something new!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;