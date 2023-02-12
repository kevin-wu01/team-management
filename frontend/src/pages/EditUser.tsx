import { HR, Wrapper } from '../components/styled/common';
import { H1, H3 } from '../components/styled/typography';
import UserInfo from '../components/UserInfo';
import UserRole from '../components/UserRole';
import { User } from '../types/UserTypes';

const styles = {
  title: {
    marginBottom: '32px'
  },
  hr: {
    marginBottom: '12px'
  }
};

const user: User = {
  firstName: 'Steve',
  lastName: 'Rogers',
  email: 'captain.america@avengers.com',
  phone: '778-123-1234',
  role: 'U',
  id: '3'
};

export default function EditUser() {
  return (
    <Wrapper>
      <div style={styles.title}>
        <H1>Edit team member</H1>
        <H3>Edit contact info, location, and role.</H3>
      </div>
      <HR style={styles.hr} />
      <UserInfo user={user} />
      <UserRole />
    </Wrapper>
  );
}
