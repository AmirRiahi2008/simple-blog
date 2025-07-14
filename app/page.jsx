import styles from './style.module.css';

export default function Page() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <h2>Welcome to Our Blog!</h2>
        <p>
          This is a place for learning, sharing experiences, and exploring the world of programming and technology.  
          We offer diverse and informative articles in various fields to help pave your path to growth.
        </p>
        <p>
          Our goal is to create a friendly and inspiring space for developers and technology enthusiasts to grow together.
        </p>
        <p>Created By Amir Riahi 👨🏼‍💻</p>
      </div>
    </section>
  );
}
