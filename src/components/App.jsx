// Profile
import { Profile } from './Profile/Profile';
import user from '../user.json';
// Transactions
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TransactionHistory items={transactions} />
    </>
  );
}
