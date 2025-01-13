import React from "react";

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-full shadow-lg">
            <div className="p-4 font-bold text-lg">Menu</div>
            <ul className="space-y-2 px-4">
                <li>
                    <a href="/" className="block p-2 hover:bg-gray-700 rounded">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/categories" className="block p-2 hover:bg-gray-700 rounded">
                        Категорії
                    </a>
                </li>
                <li>
                    <a href="/about" className="block p-2 hover:bg-gray-700 rounded">
                        About
                    </a>
                </li>
                <li>
                    <a href="/contact" className="block p-2 hover:bg-gray-700 rounded">
                        Contact
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
