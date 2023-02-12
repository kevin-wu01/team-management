import { H1, H3 } from '../components/styled/typography';
import { Wrapper } from '../components/styled/common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faPlus } from '@fortawesome/free-solid-svg-icons';
import UserTile from '../components/UserTile/UserTile';
import { User } from '../types/UserTypes';

const userArray: User[] = [
  {
    firstName: 'Kevin',
    lastName: 'Wu',
    email: 'kevinwu.858@gmail.com',
    phone: '778-512-1334',
    role: 'A',
    id: '3'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'captain.america@avengers.com',
    phone: '778-123-1234',
    role: 'U',
    id: '3'
  },
  {
    firstName: 'Kevin',
    lastName: 'Wu',
    email: 'kevinwu.858@gmail.com',
    phone: '778-512-1334',
    role: 'A',
    id: '3'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'captain.america@avengers.com',
    phone: '778-123-1234',
    role: 'U',
    id: '3'
  },
  {
    firstName: 'Kevin',
    lastName: 'Wu',
    email: 'kevinwu.858@gmail.com',
    phone: '778-512-1334',
    role: 'A',
    id: '3'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'captain.america@avengers.com',
    phone: '778-123-1234',
    role: 'U',
    id: '3'
  },
  {
    firstName: 'Kevin',
    lastName: 'Wu',
    email: 'kevinwu.858@gmail.com',
    phone: '778-512-1334',
    role: 'A',
    id: '3'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'captain.america@avengers.com',
    phone: '778-123-1234',
    role: 'U',
    id: '3'
  }
];

const styles = {
  addUser: {
    color: '#7A9CF7',
    fontSize: '30px'
  },
  addUserDiv: {
    marginLeft: 'auto',
    marginRight: 0,
    width: 'fit-content'
  },
  titleDiv: {
    margin: '28px 0px 36px'
  },
  users: {
    overflow: 'auto',
    flex: '1 1 auto'
  }
};

export default function UserList() {
  library.add(fas, faPlus);

  return (
    <Wrapper>
      <div style={styles.addUserDiv}>
        <FontAwesomeIcon icon={['fas', 'plus']} style={styles.addUser} />
      </div>
      <div style={styles.titleDiv}>
        <H1>Team members</H1>
        <H3>You have 3 team members.</H3>
      </div>
      <div style={styles.users}>
        {userArray.map((user, idx) => {
          return <UserTile isFirst={idx == 0} user={user} key={`user-${idx.toString()}`} />;
        })}
      </div>
    </Wrapper>
  );
}
