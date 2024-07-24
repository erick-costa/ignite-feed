import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <>
      <div className={styles.comment}>
        <img src="https://github.com/erick-costa.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Erick Costa</strong>
                <time
                  title="24 de Julho de 2024 às 15:07h"
                  dateTime="2024-07-24 15:07:30"
                >
                  Cerca de 1h atrás
                </time>
              </div>
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
