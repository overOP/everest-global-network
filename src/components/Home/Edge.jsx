const Edge = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      
      <div className="flex justify-center items-center text-blue-600 text-4xl">
        {icon}
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mt-4">
        {title}
      </h2>

      <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Edge;
