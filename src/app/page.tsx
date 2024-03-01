import Layout from '@/components/Layout/Layout';

import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <Layout className={styles.homePage}>
      <header className={styles.hero}>
        <video autoPlay muted loop playsInline controls={false}>
          <source src='/hero.mp4' type='video/mp4' />
        </video>
        <div className={styles.backdrop} />
        <div className={styles.content}>
          <h1>Discover Urban: Your Style, Your Way!</h1>
          <div className={styles.divider} />
          <h2>
            Shop the latest trends effortlessly at Urban. From fashion to home
            decor, find everything you need in one place. Explore now!
          </h2>
        </div>
      </header>
      <section className='layouted'></section>
    </Layout>
  );
};

export default HomePage;
