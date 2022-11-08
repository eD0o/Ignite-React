import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/eD0o.png"
        hasBorder={false}
        alt="" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo <span>(Você)</span></strong>
              <time title="04 de Junho de 2022 às 22:00" dateTime="2022-06-04T22:00:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}