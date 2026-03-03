import { SiFlask, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Simple ChatGPT icon
export const ChatGPTIcon = ({ size = 40, color = "#10b981" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" fill="white" />
  </svg>
);

// Simple DeepSeek icon
export const DeepSeekIcon = ({ size = 40, color = "#3b82f6" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" fill="white" />
  </svg>
);

// React-icons exports
export { SiFlask, SiNextdotjs, SiTailwindcss };
