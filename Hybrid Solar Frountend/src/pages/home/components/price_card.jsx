export default function PriceCard() {
    return (
        <div className="p-8 relative">
            {/* Blurred background card 2 (furthest back) */}
            <div 
                className="absolute w-80 h-full bg-blue-400/40 backdrop-blur-xl rounded-2xl border border-white/10"
                style={{
                    right: '-60px',
                    top: '30px',
                    transform: 'rotate(8deg)',
                    filter: 'blur(4px)',
                    zIndex: 0
                }}
            ></div>
            
            {/* Blurred background card 1 (middle) */}
            <div 
                className="absolute w-80 h-full bg-blue-500/50 backdrop-blur-lg rounded-2xl border border-white/15"
                style={{
                    right: '-35px',
                    top: '15px',
                    transform: 'rotate(4deg)',
                    filter: 'blur(2px)',
                    zIndex: 1
                }}
            ></div>

            {/* Main card */}
            <div className="relative p-6 bg-blue-500 backdrop-blur-lg rounded-2xl text-white w-80 shadow-2xl border border-white/20" style={{ zIndex: 2 }}>
                {/* Gradient overlay for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl pointer-events-none"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-1">Pay As You Generate</h3>
                    <div className="my-3">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">$0</span>
                        <span className="text-blue-100/80">/month upfrount</span>
                    </div>
                    <p className="text-blue-100/70 mb-6">Pay 0.5$ per kWh generated.</p>
                
                    <ul className="space-y-2.5 mb-8 text-sm">
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-cyan-300 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-blue-50">Free installation & equipment</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-cyan-300 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-blue-50">Real-time monitoring dashboard</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-cyan-300 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-blue-50">AI-powered anomaly detection</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-cyan-300 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-blue-50">24/7 customer support</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-cyan-300 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-blue-50">Free maintenance for life</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-cyan-300 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-blue-50">25-year performance guarantee</span>
                        </li>
                    </ul>
                
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl ">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}