const About = () => {
  const highlights = [
    {
      title: "팀 프로젝트",
      count: "3+",
      desc: "프론트엔드 개발",
      desc2: "머신러닝 프로젝트",
    },
    {
      title: "개인 프로젝트",
      count: "1+",
      desc: "프론트엔드 개발",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-12 relative">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-blue-600"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            <div className="space-y-6">
              <p className="text-gray-600">
                안녕하세요! 웹 프론트엔드 개발과 AI 기술에 관심이 많은 신입
                개발자입니다. 사용자 중심의 웹 서비스를 개발하는 것을 좋아하며,
                AI 기술을 활용하여 더 나은 사용자 경험을 만들어내는 것에 흥미를
                가지고 있습니다.
              </p>
              <p className="text-gray-600">
                React를 활용한 웹 개발 경험이 있으며, AI 프로젝트도 진행한
                경험이 있습니다. 특히 AI 기술을 웹 서비스에 접목하는 것에 큰
                관심이 있습니다.
              </p>

              <div className="flex flex-col space-y-4">
                <h3 className="font-semibold text-lg text-gray-700">
                  주요 관심 분야:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>반응형 웹 애플리케이션 개발</li>
                  <li>AI 모델을 활용한 웹 서비스 구현</li>
                  <li>사용자 경험 최적화</li>
                  <li>새로운 기술 학습 및 적용</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <p className="text-4xl font-bold text-blue-600">
                      {item.count}
                    </p>
                    <p className="text-gray-600 font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                    {item.desc2 && (
                      <p className="text-sm text-gray-500">{item.desc2}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-gray-700">
                  교육 및 자격
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      선문대학교 전자공학과 졸업
                    </span>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">SKT FLYAI 수료</span>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ADsP</span>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-blue-700">
                  현재 진행 중인 학습
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "tailwind css", "typescript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
