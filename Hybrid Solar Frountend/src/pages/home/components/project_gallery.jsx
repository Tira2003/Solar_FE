import Masonry from '@/components/home/Masonry';
import CountUp from '@/components/home/CountUp';
import gallery1 from './assests/gallery1.jpg';
import gallery2 from './assests/gallery2.jpg';
import gallery3 from './assests/gallery3.jpg';
import gallery4 from './assests/gallery4.jpg';
import gallery5 from './assests/gallery5.jpg';
import gallery6 from './assests/gallery6.jpg';
import gallery7 from './assests/gallery7.jpg';
import gallery8 from './assests/gallery8.jpg';
import gallery9 from './assests/gallery9.jpg';
import gallery10 from './assests/gallery10.jpg';

const galleryItems = [
  {
    id: "1",
    img: gallery1,
    
    height: 400,
  },
  {
    id: "2",
    img: gallery2,
   
    height: 300,
  },
  {
    id: "3",
    img: gallery3,
    
    height: 200,
  },
  {
    id: "4",
    img: gallery4,
   
    height: 300,
  },
  {
    id: "5",
    img: gallery5,
    
    height: 400,
  },
  {
    id: "6",
    img: gallery6,
    
    height: 300,
  },
    {
    id: "7",
    img: gallery7,
   
    height: 400,
  },
    {
    id: "8",
    img: gallery8,

    height: 400,
  },
    {
    id: "9",
    img: gallery9,

    height: 600,
  },
    {
    id: "10",
    img: gallery10,
    
    height: 600,
  },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-8 md:mb-12">Our Projects</h2>
      
      <div className="flex items-center justify-center mb-6 md:hidden">
        <div className="flex items-center">
          <CountUp
            from={400}
            to={10000}
            separator=","
            direction="up"
            duration={1}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
          />
          <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">+</p>
        </div>
      </div>

      <div className="relative" style={{ minHeight: '600px' }}>
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-10 pointer-events-none mt-84">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-transparent"></div>
          <div className="relative flex items-center">
            <CountUp
              from={400}
              to={10000}
              separator=","
              direction="up"
              duration={1}
              className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg"
            />
            <p className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">+</p>
          </div>
        </div>
        
        <Masonry
          items={galleryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}