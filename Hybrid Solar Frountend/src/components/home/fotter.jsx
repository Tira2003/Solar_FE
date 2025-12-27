import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import DarkVeil from './DarkVeil';
import logo from '@/pages/home/components/assests/logo.png';

const Footer = () => {
    return (
        <div className='w-full relative' style={{ minHeight: '350px' }}>
            <div className='absolute inset-0 z-0'>
                <DarkVeil />
            </div>
            
            <div className='relative z-10 text-gray-300 pt-6 md:pt-8 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                <div className='col-span-2 sm:col-span-2 md:col-span-1 max-w-80'>
                    <div className='flex items-center gap-2 mb-3 md:mb-4'>
                        <img src={logo} alt="logo" className='h-12 md:h-16 lg:h-20' />
                        <span className='text-white font-semibold text-lg md:text-xl'><br /> Hybrid Energy</span>
                    </div>
                    <p className='text-xs md:text-sm'>
                        Making clean energy accessible and affordable for every home.Join with us to make a difference.
                    </p>
                    <div className='flex items-center gap-3 mt-3 md:mt-4'>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>

                <div>
                    <p className='text-base md:text-lg text-white'>COMPANY</p>
                    <ul className='mt-2 md:mt-3 flex flex-col gap-1 md:gap-2 text-xs md:text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-base md:text-lg text-white'>SUPPORT</p>
                    <ul className='mt-2 md:mt-3 flex flex-col gap-1 md:gap-2 text-xs md:text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='col-span-2 sm:col-span-1 max-w-80'>
                    <p className='text-base md:text-lg text-white'>STAY UPDATED</p>
                    <p className='mt-2 md:mt-3 text-xs md:text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-3 md:mt-4 gap-2'>
                        <input type="text" className='flex-1 rounded-xl md:rounded-2xl border border-white h-8 md:h-9 px-3 text-xs md:text-sm outline-none bg-transparent' placeholder='Your email' />
                        <button className='flex items-center justify-center h-8 w-8 md:h-9 md:w-9 border border-white aspect-square rounded-full flex-shrink-0'>
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-6 md:mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-4 md:py-5 text-xs md:text-sm'>
                <p>© {new Date().getFullYear()} <a href="">Hybrid Energy</a>. All rights reserved.</p>
                <ul className='flex items-center gap-3 md:gap-4'>
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
