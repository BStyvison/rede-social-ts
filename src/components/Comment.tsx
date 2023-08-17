import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import style from "./Comment.module.css";


interface commentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: commentProps) => {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/BStyvison.png" alt=''/>

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Brayan Styvison</strong>
              <time
                title="23 de outubro ás 09:59"
                dateTime="2022-10-23 09:57:38"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
