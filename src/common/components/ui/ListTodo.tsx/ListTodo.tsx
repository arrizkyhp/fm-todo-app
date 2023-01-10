import { useState } from 'react';

import styles from '~/styles/ui/ListTodo.module.scss';
import { CrossIcon } from '~/svg/CrossIcon';
import { ListTodoProps } from '~/types/ListTodoProps';

const ListTodo = (props: ListTodoProps) => {
  const { labelFor, text } = props;
  const [showDelete, setShowDelete] = useState<boolean>(false);

  return (
    <div
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
        />
        <span className={styles.text}>{text}</span>
        <span className={styles.checkbox} />
      </label>
      {showDelete && (
        <button className={styles.deleteIcon} type="button">
          <CrossIcon />
        </button>
      )}
    </div>
  );
};

export default ListTodo;
