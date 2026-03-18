const Footer = () => {
    return (
        <footer className="bg-on-surface text-white w-full pt-16 pb-8 px-8 relative">
            {/* Top tricolor stripe */}
            <div className="absolute top-0 left-0 right-0 flex h-1.5">
                <div className="w-1/3 bg-tuscan-green" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-tuscan-red" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 font-body text-sm tracking-tight mb-12">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 rounded-sm overflow-hidden">
                            <div className="w-2 bg-tuscan-green" />
                            <div className="w-2 bg-white" />
                            <div className="w-2 bg-tuscan-red" />
                        </div>
                        <span className="font-headline font-bold text-white text-xl tracking-wide">TUSCANINI</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a className="text-white/50 hover:text-tuscan-green transition-colors duration-200" href="#">Privacy Policy</a>
                        <a className="text-white/50 hover:text-tuscan-red transition-colors duration-200" href="#">Terms of Service</a>
                        <a className="text-white/50 hover:text-tuscan-green transition-colors duration-200" href="#">Store Locator</a>
                        <a className="text-white/50 hover:text-tuscan-red transition-colors duration-200" href="#">Contact Us</a>
                    </div>
                </div>

                {/* Tricolor divider */}
                <div className="flex h-0.5 w-full overflow-hidden mb-8">
                    <div className="w-1/3 bg-tuscan-green/30" />
                    <div className="w-1/3 bg-white/10" />
                    <div className="w-1/3 bg-tuscan-red/30" />
                </div>

                <div className="text-center text-white/30 text-xs">
                    &copy; 2026 Tuscanini Authentic Italian. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
