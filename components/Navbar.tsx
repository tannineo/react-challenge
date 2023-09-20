const Navbar = () => {
    return (
        <body>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="/" className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold ">
                                    Card
                                </a>
                                <a href="/form" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                                    Form
                                </a>
                                <a href="/pdf_upload" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                                    PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </body>
    );
};

export default Navbar;
