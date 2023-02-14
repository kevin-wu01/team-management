import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import UserInfo from '../components/UserInfo';
import UserRole from '../components/UserRole';
import UserUpdateButtons from '../components/UserUpdateButtons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { HR, SpinnerWrapper, Wrapper } from '../components/styled/common';
import { H1, H3 } from '../components/styled/typography';
import { User } from '../types/UserTypes';
import { deleteUser, getUserById, updateUser } from '../services/TeamService';

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

export default function EditUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const location = useLocation();
  let cachedData: User;
  library.add(fas, faSpinner);

  const url = window.location.pathname.split('/');
  const userId = url[url.length - 1];

  if (location.state) {
    cachedData = location.state.cachedData;
  }

  useEffect(() => {
    if (typeof cachedData != 'undefined') {
      setUserData(cachedData);
    } else {
      getUserById(userId).then((users) => {
        setUserData(users.data);
      });
    }
  }, []);

  const onSaveUser = () => {
    updateUser(userId, userData as User)
      .then(() => {
        navigate(`/`, {
          replace: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteUser = () => {
    deleteUser(userId)
      .then(() => {
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
        <H1>Edit team member</H1>
        <H3>Edit contact info, location, and role.</H3>
      </div>
      <HR style={styles.hr} />
      {Object.keys(userData).length !== 0 ? (
        <div style={styles.dataDiv as React.CSSProperties}>
          <UserInfo userData={userData as User} setUserData={setUserData} />
          <UserRole userData={userData as User} setUserData={setUserData} />
          <UserUpdateButtons canDelete={true} onSave={onSaveUser} onDelete={onDeleteUser} />
        </div>
      ) : (
        <SpinnerWrapper>
          <FontAwesomeIcon icon={['fas', 'spinner']} size="3x" spin />
        </SpinnerWrapper>
      )}
    </Wrapper>
  );
}
