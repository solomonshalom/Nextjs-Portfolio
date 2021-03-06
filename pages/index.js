import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solomon Shalom Lijo</title>
        <meta name="description" content="Solomon Shalom Lijo's Portfolio" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Solomon Shalom<a href="https://github.com/solomonshalom"> Lijo</a>
        </h1>

        <p className={styles.description}>
          God is Good,{' '}
          Life is Good 
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/solomonshalom?tab=repositories" className={styles.card}>
            <h2>My Projects &rarr;</h2>
            <p>All my projects, from the beginning to the lastest. Find them all.</p>
          </a>

          <a href="https://portfolio-solomonshalom.vercel.app" className={styles.card}>
            <h2>My Social Media &rarr;</h2>
            <p>All my socials on one place, also on a side note - follow and subscribe to me.</p>
          </a>

          <a
            href="https://gowatch.tk"
            className={styles.card}
          >
            <h2>Yuki &rarr;</h2>
            <p>An anime streaming website built in wordpress</p>
          </a>

          <a
            href="https://portfolio-solomonshalom.vercel.app"
            className={styles.card}
          >
            <h2>About Me &rarr;</h2>
            <p>
              I am Solomon - Middle School student and Web/ Game Developer.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
