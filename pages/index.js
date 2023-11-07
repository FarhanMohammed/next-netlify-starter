import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Snake from '../components/Snake';

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Next.js Starter!</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Header title="Welcome to my app!!" />
//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>
//       </main>

//       <Footer />
//     </div>
//   )
// }

const Home = () => {
  return (
    <div>
      <Head>
        <title>Snake Game</title>
        <meta name="description" content="Snake Game using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Snake Game</h1>
        <Snake />
      </main>

      <footer>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
};

export default Home;





