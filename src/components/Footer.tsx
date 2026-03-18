const Footer = () => {
    return (
        <footer className="bg-surface-container-low w-full py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 font-body text-sm tracking-tight mb-12">
                    <div className="flex items-center gap-3">
                        <div className="flex h-6 rounded-sm overflow-hidden">
                            <div className="w-1.5 bg-tuscan-green" />
                            <div className="w-1.5 bg-white" />
                            <div className="w-1.5 bg-tuscan-red" />
                        </div>
                        <span className="font-headline font-bold text-primary text-lg tracking-wide">TUSCANINI</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a className="text-on-surface/60 hover:text-tuscan-green transition-colors duration-200" href="#">Privacy Policy</a>
                        <a className="text-on-surface/60 hover:text-tuscan-green transition-colors duration-200" href="#">Terms of Service</a>
                        <a className="text-on-surface/60 hover:text-tuscan-green transition-colors duration-200" href="#">Store Locator</a>
                        <a className="text-on-surface/60 hover:text-tuscan-green transition-colors duration-200" href="#">Contact Us</a>
                    </div>
                </div>
                <div className="text-center text-on-surface/40 text-xs border-t border-black/5 pt-8">
                    &copy; 2026 Tuscanini Authentic Italian. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
