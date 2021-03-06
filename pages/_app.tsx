import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="mx-7 my-6">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
