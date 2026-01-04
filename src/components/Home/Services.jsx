const Services = ({ text, description }) => {
  return (
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">{text}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Services;
