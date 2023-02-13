import React from 'react';

import { User } from '../types/UserTypes';
import { Input } from './styled/common';
import { H2 } from './styled/typography';

const styles = {
  nameDiv: {
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    gap: '0 20px'
  },
  name: {
    width: '400px',
    flex: 'auto'
  }
};

export default function UserInfo({
  userData,
  setUserData
}: {
  userData: User;
  setUserData: (user: User) => void;
}) {
  const onChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'user-firstName':
        setUserData({
          ...userData,
          firstName: e.target.value
        });
        break;
      case 'user-lastName':
        setUserData({
          ...userData,
          lastName: e.target.value
        });
        break;
      case 'user-email':
        setUserData({
          ...userData,
          email: e.target.value
        });
        break;
      case 'user-phone':
        setUserData({
          ...userData,
          phone: e.target.value
        });
        break;
    }
  };

  return (
    <div>
      <H2>Info</H2>
      <div style={styles.nameDiv as React.CSSProperties}>
        <Input
          id="user-firstName"
          onChange={(e) => onChangeUser(e)}
          defaultValue={userData?.firstName}
          placeholder="First Name"
          style={styles.name}
        />
        <Input
          id="user-lastName"
          onChange={(e) => onChangeUser(e)}
          defaultValue={userData?.lastName}
          placeholder="Last Name"
          style={styles.name}
        />
      </div>
      <Input
        id="user-email"
        onChange={(e) => onChangeUser(e)}
        defaultValue={userData?.email}
        placeholder="Email"
      />
      <Input
        id="user-phone"
        onChange={(e) => onChangeUser(e)}
        defaultValue={userData.phone}
        placeholder="Phone"
      />
    </div>
  );
}
