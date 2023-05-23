import About from '@/components/About';
import Foods from '@/components/PopularFoods';
import MainSection from '@/components/MainSection';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import PopularFoods from '@/components/PopularFoods';
import TrendingFood from '@/components/TrendingFood';


export default function Home() {
  
  return (
    <div className=''>
      <Navbar />
      <MainSection />
      <About />
      <Foods />
      <PopularFoods />
      <TrendingFood />
    </div>
  );
}
