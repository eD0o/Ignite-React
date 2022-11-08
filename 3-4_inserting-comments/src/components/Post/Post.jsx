import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post Top"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  //using the lib date-fns to better manage the date
  const publishedDateFormatted2 = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm",
    {
      locale: ptBR,
    }
  );

  //addSuffix is to settle the "há" term together in the sentence date (shows up for days ago examples)
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    event.preventDefault();

    //.comment is just avaliable because the given prop name="comment" in the textarea as seen below
    const newCommentText = e.target.comment.value;

    console.log(e.target.comment);

    //spread operator to use the current data
    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handlenNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted2}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário aqui..."
          onChange={handlenNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentLint}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
