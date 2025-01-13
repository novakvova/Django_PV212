import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">My Website</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="/" className="text-gray-600 hover:text-blue-500">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/categories" className="text-gray-600 hover:text-blue-500">
                            Категорії
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-600 hover:text-blue-500">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-600 hover:text-blue-500">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
