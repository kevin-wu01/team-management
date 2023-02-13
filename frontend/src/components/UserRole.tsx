import { User } from '../types/UserTypes';
import { HR, Radio } from './styled/common';
import { H2, P } from './styled/typography';

const styles = {
  optionLabel: {
    margin: '16px 0'
  },
  optionDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  optionSelected: {
    color: '#4e4d4d',
    fontWeight: '600'
  },
  optionDeselected: {
    color: '#9da2a2',
    fontWeight: '400'
  }
};

export default function UserRole({
  userData,
  setUserData
}: {
  userData: User;
  setUserData: (user: User) => void;
}) {
  const onSelectRole = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = e.target as HTMLElement;
    let role;

    if (element.tagName === 'INPUT' || element.tagName === 'P') {
      role = element.parentElement?.id;
    } else {
      role = element.id;
    }

    switch (role) {
      case 'Regular':
        setUserData({
          ...userData,
          role: 'U'
        });
        break;
      case 'Admin':
        setUserData({
          ...userData,
          role: 'A'
        });
        break;
    }
  };

  return (
    <div>
      <H2>Role</H2>
      <div id="Regular" style={styles.optionDiv} onClick={(e) => onSelectRole(e)}>
        <P
          style={
            userData.role === 'U'
              ? { ...styles.optionLabel, ...styles.optionSelected }
              : { ...styles.optionLabel, ...styles.optionDeselected }
          }>
          Regular - Can't delete members
        </P>
        <Radio type="radio" checked={userData.role === 'U'} />
      </div>
      <HR />
      <div id="Admin" style={styles.optionDiv} onClick={(e) => onSelectRole(e)}>
        <P
          style={
            userData.role === 'A'
              ? { ...styles.optionLabel, ...styles.optionSelected }
              : { ...styles.optionLabel, ...styles.optionDeselected }
          }>
          Admin - Can delete members
        </P>
        <Radio type="radio" checked={userData.role === 'A'} />
      </div>
      <HR />
    </div>
  );
}
