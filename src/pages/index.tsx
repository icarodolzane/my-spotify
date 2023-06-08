import Header from '@/components/Header';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <main
      className={`${inter.className}`}
    >
      <Header/>
    </main>
  )
}

export default Home;
