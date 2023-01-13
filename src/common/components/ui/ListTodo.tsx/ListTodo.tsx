import { useState } from 'react';

import styles from '~/styles/ui/ListTodo.module.scss';
import { CrossIcon } from '~/svg/CrossIcon';
import { ListTodoProps } from '~/types/ListTodoProps';

const ListTodo = (props: ListTodoProps) => {
  const {
    handleCompleteTodo, handleDeleteTodo, labelFor, text
  } = props;
  const [showDelete, setShowDelete] = useState<boolean>(false);

  return (
    <div
      key={labelFor}
      className={styles.container}
      onMouseEnter={() => {
        setShowDelete(true);
      }}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
    >
      <label htmlFor={labelFor} className={styles.label}>
        <input
          className={styles.radio}
          type="checkbox"
          name={labelFor}
          id={labelFor}
          onClick={() => handleCompleteTodo(labelFor)}
        />
        <span className={styles.text}>{text}</span>
        <span className={styles.checkbox} />
      </label>
      {showDelete && (
        <button
          className={styles.deleteIcon}
          type="button"
          onClick={() => handleDeleteTodo(labelFor)}
        >
          <CrossIcon />
        </button>
      )}
    </div>
  );
};

export default ListTodo;
