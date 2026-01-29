

const Footer = () => {
    return (
        <footer className="bg-tuscan-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-serif font-bold text-tuscan-gold mb-2">TUSCANINI</h2>
                        <p className="text-gray-400 text-sm">© 2024 Tuscanini. All rights reserved.</p>
                    </div>

                    <div className="flex gap-8 text-sm tracking-widest text-gray-300">
                        <a href="#" className="hover:text-tuscan-gold transition-colors">SHOP</a>
                        <a href="#" className="hover:text-tuscan-gold transition-colors">RECIPES</a>
                        <a href="#" className="hover:text-tuscan-gold transition-colors">STORY</a>
                        <a href="#" className="hover:text-tuscan-gold transition-colors">CONTACT</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
