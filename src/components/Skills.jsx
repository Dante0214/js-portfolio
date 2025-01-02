const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5/CSS3", level: 70 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 70 },
        { name: "MUI", level: 55 },
        { name: "Tailwind", level: 55 },
        { name: "Python", level: 60 },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", level: 65 },
        { name: "VS Code", level: 70 },
        { name: "Jupyter Notebook", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-blue-600"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
