import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MemoryGame from '@components/MemoryGame';

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
        <title>FM's Awesome Memory Game</title>
        <meta name="description" content="Memory Game using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Memory Game</h1>
        <MemoryGame />
      </main>

      <footer>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
};

export default Home;






