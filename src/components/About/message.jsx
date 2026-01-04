import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReactMarkdown from "react-markdown";

const Message = ({ title, content, details, image }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 mb-28"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <h1
          className="text-4xl sm:text-5xl font-bold text-center text-blue-600 py-10"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
          {/* TEXT */}
          <div ref={textRef} className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="leading-relaxed">{children}</p>
                ),
                em: ({ children }) => (
                  <em className="text-blue-600 font-medium">{children}</em>
                ),
              }}
            >
              {content}
            </ReactMarkdown>

            <div className="pt-6 border-t">
              <p className="whitespace-pre-line text-gray-900 font-semibold">
                {details}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={image}
              alt={`${title} image`}
              className="w-full h-175 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
