import profileImage from "../assets/images/profile2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              안녕하세요, <br />
              <span className="text-blue-600">
                프론트엔드 개발자
                <br /> 안치호
              </span>
              <br />
              입니다
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              사용자 경험을 중요시하며, 깔끔하고 효율적인 코드를 작성하는 것을
              좋아합니다.
            </p>
            <div className="space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                연락하기
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 bg-blue-600/10 absolute -top-4 -right-2"></div>
              <div className="w-64 h-70 overflow-hidden relative shadow-lg ">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
