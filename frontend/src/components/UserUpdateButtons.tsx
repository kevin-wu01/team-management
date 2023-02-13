import { User } from '../types/UserTypes';
import { Button } from './styled/common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const styles = {
  buttonsDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto'
  },
  delete: {
    color: '#D88A87',
    backgroundColor: 'white',
    border: '1px solid #9da2a2'
  },
  save: {
    color: 'white',
    backgroundColor: '#4E7CF6'
  }
};

export default function UserUpdateButtons({
  canDelete,
  onDelete,
  onSave
}: {
  canDelete: boolean;
  onDelete?: () => void;
  onSave: () => void;
}) {
  library.add(fas, faCircleCheck);
  return (
    <div style={styles.buttonsDiv}>
      {canDelete && onDelete ? (
        <Button onClick={() => onDelete()} style={styles.delete}>
          Delete
        </Button>
      ) : (
        <div />
      )}
      <div>
        <Button onClick={() => onSave()} style={styles.save}>
          Save
        </Button>
      </div>
    </div>
  );
}
