import '../styles/globals.css';

import { AppProps } from 'next/app';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Component className="antialiased" {...pageProps} />
      <Footer />
    </div>
  );
}
