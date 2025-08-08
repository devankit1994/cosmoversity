import React from "react";
import {
  FaBriefcase,
  FaBullhorn,
  FaUserTie,
  FaTasks,
  FaCog,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaDatabase,
  FaProjectDiagram,
  FaTruck,
  FaShoppingCart,
  FaPencilRuler,
  FaCogs,
  FaDollarSign,
  FaHospitalSymbol,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const programmes = [
  { title: "Business Management", icon: <FaBriefcase /> },
  { title: "Digital Marketing", icon: <FaBullhorn /> },
  { title: "Leadership", icon: <FaUserTie /> },
  { title: "Project Management", icon: <FaTasks /> },
  { title: "Digital Transformation", icon: <FaCog /> },
  { title: "Product Management", icon: <FaProjectDiagram /> },
  { title: "Artificial Intelligence and Machine Learning", icon: <FaBrain /> },
  { title: "Cybersecurity", icon: <FaShieldAlt /> },
  { title: "Human Resource Management", icon: <FaUsers /> },
  { title: "Business Analytics", icon: <FaChartLine /> },
  { title: "Data Science", icon: <FaDatabase /> },
  { title: "Data Analytics", icon: <FaDatabase /> },
  { title: "Supply Chain Management", icon: <FaTruck /> },
  { title: "Sales and Marketing", icon: <FaShoppingCart /> },
  { title: "Design Thinking", icon: <FaPencilRuler /> },
  { title: "Operations Management", icon: <FaCogs /> },
  { title: "Finance", icon: <FaDollarSign /> },
  { title: "Healthcare Management", icon: <FaHospitalSymbol /> },
  { title: "Information Technology", icon: <FaLaptopCode /> },
];

const ProgrammesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#0b2a35] text-white py-10 text-center">
        <h1 className="text-3xl font-bold">
          Explore Cutting-Edge Training Programmes
        </h1>
        <p className="max-w-3xl mx-auto mt-3 text-gray-300">
          Get an immersive learning experience with our range of programmes.
          Broaden your perspective, create innovative solutions, and drive
          strategic growth in your organisation. Transform knowledge into action
          and lead the impact.
        </p>
      </div>

      {/* Grid of Programmes */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programmes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="text-[#0b2a35] text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammesPage;
