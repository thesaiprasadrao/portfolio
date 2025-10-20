import { FaUserCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="background-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      {/* Profile Image & Header */}
      <div className="flex flex-col items-center mb-6">
      
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2 text-center relative">
          About
          <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60" />
        </h1>
      </div>
      <p className="text-white text-lg sm:text-xl font-semibold max-w-2xl text-center mb-8 leading-8">
        Learn more about me, my background, and my passion for web development.
      </p>
      <div className="mt-8 text-white text-base sm:text-lg max-w-2xl text-center" style={{lineHeight: '1.75'}}>
        <p>
          I'm a <span className="font-bold text-blue-400">full-stack developer</span> specializing in modern web applications with <span className="font-bold text-purple-400">React.js</span>, <span className="font-bold text-blue-400">Node.js</span>, and <span className="font-bold text-pink-400">TypeScript</span>. I build scalable, secure, and responsive solutions that prioritize <span className="font-bold text-blue-300">user experience</span> and <span className="font-bold text-purple-300">performance</span>.
        </p>
        <br />
        <p>
          My technical expertise spans <span className="font-bold text-purple-400">React.js</span>, <span className="font-bold text-blue-400">Node.js</span>, and modern <span className="font-bold text-pink-400">JavaScript/TypeScript</span>, with hands-on experience building scalable backends using <span className="font-bold text-green-400">Express</span> and <span className="font-bold text-green-300">MongoDB</span>. I have a proven track record of developing <span className="font-bold text-blue-300">real-time applications</span> that handle high concurrent loads while maintaining low latency and data integrity.
        </p>
        <br />
        <p>
          Beyond web development, I bring strong <span className="font-bold text-blue-400">problem-solving</span> and <span className="font-bold text-purple-400">algorithmic thinking</span> from competitive programming and <span className="font-bold text-pink-400">machine learning</span> experience. I've worked with <span className="font-bold text-green-400">Python</span> for data analysis and ML model development, and I'm proficient in <span className="font-bold text-blue-400">C++</span> for performance-critical applications.
        </p>
        <br />
        <br />
        <p className="text-gray-300">
          Let's  <a href="/contact">connect</a>  and build something amazing together!
        </p>
      </div>
    </div>
  );
}
