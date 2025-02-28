import { format, formatDistanceToNow } from "date-fns"
import { Avatar } from "../avatar/Avatar"
import { Comment } from "../comment/Comment"
import { ptBR } from "date-fns/locale/pt-BR"
import styles from "./Post.module.css"
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react"

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: "paragraph" | "link"
  content: string
}

export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Muito bom!!!"])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'de' y 'às' HH':'mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText("")
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target?.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={post.author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            dateTime={post.publishedAt.toISOString()}
          >
            Publicado {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              )
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Escreva um comentário...</strong>
          <textarea
            required
            value={newCommentText}
            name="comment"
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
          />
          <footer>
            <button disabled={isNewCommentEmpty} type="submit">
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })}
        </div>
      </article>
    </>
  )
}
