import Message from "../components/About/message";
import { aboutData } from "../data/About/data";

const About = () => {
  return (
    <main className="bg-linear-to-b from-gray-50 to-white min-h-screen py-20">
      {aboutData.map((item) => (
        <Message
          key={item.id}
          title={item.title}
          content={item.content}
          details={item.details}
          image={item.image}
        />
      ))}
    </main>
  );
};

export default About;
