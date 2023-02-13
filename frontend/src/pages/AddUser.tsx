import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/TeamService';

import UserInfo from '../components/UserInfo';
import UserRole from '../components/UserRole';
import UserUpdateButtons from '../components/UserUpdateButtons';

import { HR, Wrapper } from '../components/styled/common';
import { H1, H3 } from '../components/styled/typography';
import { User } from '../types/UserTypes';

const styles = {
  title: {
    marginBottom: '32px'
  },
  hr: {
    marginBottom: '12px'
  },
  dataDiv: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
};

export default function AddUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const onSaveUser = () => {
    createUser(userData as User)
      .then((res) => {
        console.log(res);
        navigate(`/`, {
          replace: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <div style={styles.title}>
        <H1>Add a team member</H1>
        <H3>Set email, location, and role.</H3>
      </div>
      <HR style={styles.hr} />
      <div style={styles.dataDiv as React.CSSProperties}>
        <UserInfo userData={userData as User} setUserData={setUserData} />
        <UserRole userData={userData as User} setUserData={setUserData} />
        <UserUpdateButtons canDelete={true} onSave={onSaveUser} />
      </div>
    </Wrapper>
  );
}
