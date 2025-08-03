import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { VscCode } from "react-icons/vsc"; // Optional alternative to FaCode

// Better LeetCode logo (SVG with color)
const LeetCodeIcon = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={size}
        height={size}
    >
        <path
            fill="#FFA116"
            d="M35.25,4.52c-2.52,0-5.04,0.96-6.99,2.91L13.76,21.93c-0.72,0.72-0.72,1.9,0,2.62l14.55,14.55
            c0.72,0.72,1.9,0.72,2.62,0c0.72-0.72,0.72-1.9,0-2.62L18.69,23.24L33.19,8.74c2.58-2.58,6.76-2.58,9.34,0
            c2.58,2.58,2.58,6.76,0,9.34L31.11,29.5c-0.72,0.72-0.72,1.9,0,2.62c0.36,0.36,0.83,0.54,1.31,0.54s0.95-0.18,1.31-0.54
            l11.41-11.41c3.32-3.32,3.32-8.73,0-12.05C40.28,5.48,37.76,4.52,35.25,4.52z"
        />
        <path
            fill="#292C33"
            d="M22.44,45.47c-0.49,0-0.97-0.19-1.34-0.56L7.11,30.92c-0.72-0.72-0.72-1.9,0-2.62
            c0.72-0.72,1.9-0.72,2.62,0l13.99,13.99l24.06-24.06c0.72-0.72,1.9-0.72,2.62,0c0.72,0.72,0.72,1.9,0,2.62L23.78,44.91
            C23.41,45.28,22.93,45.47,22.44,45.47z"
        />
    </svg>
);

export const Footer = () => {
    return (
        <div className="main-color">
            <footer className="container d-flex justify-content-center py-4">
                <ul className="d-flex gap-4 list-unstyled m-0 align-items-center">
                    <li>
                        <a
                            href="https://github.com/M-u-k-u-n-d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <FaGithub size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/mukund-tiwari-06b433219/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://x.com/itsMukundTiwari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://leetcode.com/u/Mukund_Tiwari/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <FaCode size={24} />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
