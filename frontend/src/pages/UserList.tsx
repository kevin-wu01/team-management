import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { H1, H3 } from '../components/styled/typography';
import { SpinnerWrapper, Wrapper } from '../components/styled/common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import UserTile from '../components/UserTile';
import { User } from '../types/UserTypes';
import { getUsers } from '../services/TeamService';

// const userArray: User[] = [
//   {
//     firstName: 'Kevin',
//     lastName: 'Wu',
//     email: 'kevinwu.858@gmail.com',
//     phone: '778-512-1334',
//     role: 'A',
//     id: '3'
//   },
//   {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     email: 'captain.america@avengers.com',
//     phone: '778-123-1234',
//     role: 'U',
//     id: '3'
//   },
//   {
//     firstName: 'Kevin',
//     lastName: 'Wu',
//     email: 'kevinwu.858@gmail.com',
//     phone: '778-512-1334',
//     role: 'A',
//     id: '3'
//   },
//   {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     email: 'captain.america@avengers.com',
//     phone: '778-123-1234',
//     role: 'U',
//     id: '3'
//   },
//   {
//     firstName: 'Kevin',
//     lastName: 'Wu',
//     email: 'kevinwu.858@gmail.com',
//     phone: '778-512-1334',
//     role: 'A',
//     id: '3'
//   },
//   {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     email: 'captain.america@avengers.com',
//     phone: '778-123-1234',
//     role: 'U',
//     id: '3'
//   },
//   {
//     firstName: 'Kevin',
//     lastName: 'Wu',
//     email: 'kevinwu.858@gmail.com',
//     phone: '778-512-1334',
//     role: 'A',
//     id: '3'
//   },
//   {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     email: 'captain.america@avengers.com',
//     phone: '778-123-1234',
//     role: 'U',
//     id: '3'
//   }
// ];

const styles = {
  addUser: {
    color: '#7A9CF7',
    fontSize: '30px',
    cursor: 'pointer'
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
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  library.add(fas, faPlus, faSpinner);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserData(users.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <div style={styles.addUserDiv}>
        <FontAwesomeIcon
          onClick={() => navigate('/new', { replace: false })}
          icon={['fas', 'plus']}
          style={styles.addUser}
        />
      </div>
      <div style={styles.titleDiv}>
        <H1>Team members</H1>
        <H3>{`You have ${userData.length} team members.`}</H3>
      </div>
      <div style={styles.users}>
        {!loading ? (
          userData.map((user, idx) => {
            return (
              <div
                onClick={() =>
                  navigate(`/users/${user.id}`, {
                    replace: false,
                    state: { cachedData: userData[idx] }
                  })
                }
                key={`user-${idx.toString()}`}>
                <UserTile isFirst={idx == 0} user={user} />
              </div>
            );
          })
        ) : (
          <SpinnerWrapper>
            <FontAwesomeIcon icon={['fas', 'spinner']} size="3x" spin />
          </SpinnerWrapper>
        )}
      </div>
    </Wrapper>
  );
}
