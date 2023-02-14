import { Button } from './styled/common';

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
    backgroundColor: '#4E7CF6',
    width: '80px',
    minWidth: '10%'
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
  return (
    <div style={styles.buttonsDiv}>
      {canDelete && onDelete ? (
        <Button onClick={() => onDelete()} style={styles.delete}>
          Delete
        </Button>
      ) : (
        <div />
      )}
      <Button onClick={() => onSave()} style={styles.save}>
        Save
      </Button>
    </div>
  );
}
