import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import Postfeed from '@/components/Postfeed'
import Trending from '@/components/Trending'
import Banner from '@/components/Banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#E7E9EA]
    max-w-[1400px] mx-auto flex"
      >
        <Sidebar />
        <Postfeed />
        <Trending />
      </div>
      <Banner/>
    </div>
  );
}
