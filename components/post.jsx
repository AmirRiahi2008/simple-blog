import styles from "./post.module.css";
export default function Post({ data }) {
  return (
    <main className="container">
      <article className={styles.postDetail}>
        <h2>{data.title}</h2>
        <span className={styles.date}>{data.date}</span>
        <p>{data.content}</p>
        <p>{data.excerpt}</p>

      </article>
    </main>
  );
}
