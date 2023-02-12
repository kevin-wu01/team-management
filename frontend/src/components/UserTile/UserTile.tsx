import { HR } from '../styled/common';
import { H4, P } from '../styled/typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../types/UserTypes';

const styles = {
  userIcon: {
    color: '#cccccc',
    fontSize: '40px'
  },
  content: {
    padding: '24px 0',
    display: 'flex',
    cursor: 'pointer'
  },
  userInfo: {
    marginLeft: '16px'
  },
  textSpacing: {
    margin: '6px 0'
  }
};

export default function UserTile({ isFirst = false, user }: { isFirst: boolean; user: User }) {
  library.add(fas, faCircleUser);

  return (
    <div>
      {isFirst ? <HR /> : ''}
      <div style={styles.content}>
        <FontAwesomeIcon icon={['fas', 'circle-user']} style={styles.userIcon} />
        <div style={styles.userInfo}>
          <H4>
            {user.firstName}&nbsp;{user.lastName}&nbsp;{user.role === 'A' ? '(admin)' : ''}
          </H4>
          <P style={styles.textSpacing}>{user.phone}</P>
          <P>{user.email}</P>
        </div>
      </div>
      <HR />
    </div>
  );
}
