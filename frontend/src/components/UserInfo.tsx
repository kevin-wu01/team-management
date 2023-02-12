import { User } from '../types/UserTypes';
import { Input } from './styled/common';
import { H2 } from './styled/typography';

export default function UserInfo({ user }: { user: User }) {
  return (
    <div>
      <H2>Info</H2>
      <Input placeholder={user.firstName} />
      <Input placeholder={user.lastName} />
      <Input placeholder={user.email} />
      <Input placeholder={user.phone} />
    </div>
  );
}
