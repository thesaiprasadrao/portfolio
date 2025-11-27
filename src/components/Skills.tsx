import { skillsData } from "./SkillsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools of The Trade
          </p>
        </div>

        <div className="space-y-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <skill.icon 
                        className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
