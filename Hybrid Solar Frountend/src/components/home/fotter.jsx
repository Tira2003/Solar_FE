import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import DarkVeil from './DarkVeil';
import logo from '@/pages/home/components/assests/logo.png';

const Footer = () => {
    return (
        <div className='w-full relative' style={{ minHeight: '400px' }}>
            {/* DarkVeil Background */}
            <div className='absolute inset-0 z-0'>
                <DarkVeil />
            </div>
            
            {/* Footer Content */}
            <div className='relative z-10 text-gray-300 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
                <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={logo} alt="logo" className='h-16 md:h-20' />
                        <span className='text-white font-semibold text-xl md:text-xl'><br /> Hybrid Energy</span>
                        
                    </div>
                    <p className='text-sm'>
                        Making clean energy accessible and affordable for every home.Join with us to make a difference.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-white'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-white'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg   text-white'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='rounded-2xl border-1 border-white h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center h-9 w-9 border-1 border-white aspect-square rounded-full'>
                            {/* Arrow icon */}
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="">Hybrid Energy</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Footer;
