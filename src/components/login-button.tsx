import { ReactElement } from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

interface LoginButtonProps {
  label: string;
  iconName: string;
}

export const LoginButton = ({ label, iconName }: LoginButtonProps) => {
  const icon = (iconName: string): ReactElement => {
    switch (iconName) {
      case "Apple":
        return <FaApple size={32} />;
      case "Facebook":
        return <FaFacebook size={32} />;
      case "Google":
        return <FaGoogle size={32} />;
      default:
        return <FaGoogle size={32} />;
    }
  };

  return (
    <button
      className="
       flex items-center px-8 py-3 border 
       border-gray-700 m-3 space-x-4 
       hover:text-white hover:bg-gray-700
       "
    >
      {icon(iconName)}
      <h1>{label}</h1>
    </button>
  );
};
