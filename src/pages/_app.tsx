import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  console.log("🚀 ~ file: _app.tsx ~ line 7 ~ MyApp ~ pageProps", pageProps)
  console.log("pageProps.session", pageProps.session);
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
