import 'tailwindcss/tailwind.css'
import '../styles/global.css'

// import FirebaseAuthState from '../config/FirebaseAuthState'
// import store from '../store/store'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
