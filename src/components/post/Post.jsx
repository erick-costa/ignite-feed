import { Avatar } from "../avatar/Avatar"
import { Comment } from "../comment/Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/erick-costa.png" />
            <div className={styles.authorInfo}>
              <strong>Erick Costa</strong>
              <span>Frontend Developer</span>
            </div>
          </div>

          <time
            title="24 de Julho de 2024 às 15:07h"
            dateTime="2024-07-24 15:07:30"
          >
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
            <a href="">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Escreva um comentário...</strong>
          <textarea placeholder="Deixe um comentário" />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  )
}
