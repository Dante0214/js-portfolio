const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Contact
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-blue-600"></span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:place-items-center md:justify-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600">
              궁금한 점이 있으시다면 언제든 연락해 주세요.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-600">rn_chic@naver.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-600">Seongnam, South Korea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
