import project1Img from "../assets/images/projects/image.png";
import project2Img from "../assets/images/projects/pro2img.png";
import project3Img from "../assets/images/projects/pro3.png";
import project4Img from "../assets/images/projects/pro4.png";
const Projects = () => {
  const projects = [
    {
      title: "냉털한끼",
      description: "React와 공공API를 활용한 레시피 검색 웹 애플리케이션",
      tech: ["React", "React-Query", "Redux", "React-router"],
      image: project1Img,
      github: "https://github.com/Dante0214/react-2nd-team5",
      demo: "https://bejewelled-cuchufli-22921c.netlify.app/",
    },

    {
      title: "뉴진스(뉴스를 진짜 스마트하게)",
      description: "Bert를 활용하여 기사 내용을 추출, 관련 기사를 추천하는 앱",
      tech: ["ReactNative", "kpfsBERT"],
      image: project2Img,
      github: "https://github.com/SK-flyai/NateNews",
    },
    {
      title: "사용자 링크 공유 플랫폼",
      description:
        "React와 Flask를 활용한 사용자 인증 (로그인/회원가입), 웹 링크 CRUD (생성, 조회, 수정, 삭제),링크 검색 및 카테고리 필터링,링크 공유 및 권한 관리 (읽기/쓰기)",
      tech: ["React", "Flask", "MUI", "React-router", "Axios", "SQLite"],
      image: project4Img,
      github: "https://github.com/Dante0214/aurora",
    },

    {
      title: "영화 검색 웹사이트",
      description: "React와 MUI, TMDB를 활용한 반응형 웹 애플리케이션",
      tech: ["React", "MUI", "React-Query", "React-router"],
      image: project3Img,
      github: "https://github.com/Dante0214/react-js-netflix",
      demo: "https://react-js-netflix.vercel.app/",
    },

    // 더 많은 프로젝트 추가
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-blue-600"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* 프로젝트 이미지 */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="\_blank"
                    className="flex-1 text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Github
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="\_blank"
                      className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
