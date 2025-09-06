import Link from "next/link";
import styles from "./allPosts.module.css";
export default function AllPosts({ data }) {
  return (
    <Link href={`/posts/${data.slug}`}>
      <main className="container">
        <section className={styles.posts}>
          <article className={styles.post}>
            <a href="post.html">
              <h2>{data.title}</h2>
              <p>{data.excerpt}</p>
              <span className={styles.date}>{data.date}</span>
            </a>
          </article>
        </section>
      </main>
    </Link>
  );
}
