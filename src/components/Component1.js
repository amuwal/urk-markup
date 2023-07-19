const Component1 = () => {
  return  (
    <div className="component-1">
        <UserInfo />
        <AccountInfo />
        <RecentTransactions />
    </div>
  )
  
};

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-image">
        <img
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt="Profile pic"
        />
      </div>
      <div className="greeting">
        <h3>Hi Mike,</h3>
        <p>welcome back</p>
      </div>
    </div>
  );
};

const AccountInfo = () => {
    return (
        <div className="account-info">
            <strong>Today</strong>
            <div className="account-balance">
                <h3>$19,892</h3>
                <p className="text-secondary">Account Balance</p>
            </div>
            <div className="contribution">
                <h4>$4,000</h4>
                <p className="text-secondary">Year-to-Date Contribution</p>
            </div>
            <div className="total-interest">
                <h4>$1,892</h4>
                <p className="text-secondary">Total Interest</p>
            </div>
            <button className="btn-primary"> I want to \/</button>
        </div>
    )
}

const RecentTransactions = () => {
    return (
        <div className="recent-transactions">
            <strong>Recent Transactions</strong>
            <div className="transaction">
                <p className="text-secondary">2020-08-07</p>
                <p>Withdrawal Transfer to Bank-XXX11</p>
            </div>
            <div className="transaction">
                <p className="text-secondary">2020-07-21</p>
                <p>Withdrawal Transfer to Bank-XXX11</p>
            </div>
            <div className="transaction">
                <p className="text-secondary">2020-07-16</p>
                <p>Withdrawal Transfer to Bank-XXX11</p>
            </div>
        </div>
    )
}

export default Component1;
