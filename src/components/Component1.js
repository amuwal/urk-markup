import "../styles/component1.css";

const Component1 = () => {
  return (
    <div className="component-1">
      <UserInfo />
      <AccountInfo />
      <RecentTransactions />
    </div>
  );
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
        <p id="hi-user1" className="heading-extra-large">
          Hi Mike,
        </p>
        <p className="text-secondary text-small">welcome back.</p>
      </div>
    </div>
  );
};

const AccountInfo = () => {
  const w = window.innerWidth;
  return (
    <div className="account-info">
      <p className="heading-small">Today</p>
      <div className="account-balance">
        <h3>$19,892</h3>
        <p className="text-secondary text-small">Account Balance</p>
      </div>
      <div className="contribution">
        <h4>$4,000</h4>
        <p className="text-secondary text-small">Year-to-Date{w >= 800 ? " Contribution" : ""}</p>
      </div>
      <div className="total-interest">
        <h4>$1,892</h4>
        <p className="text-secondary text-small">Total Interest</p>
      </div>
      <button className="btn-primary text-medium">
        I want to <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
};

const RecentTransactions = () => {
  return window.innerWidth <= 800 ? (
    <div className="recent-transactions">
      <p className="heading-small">Recent Transactions</p>
      <div className="transaction">
        <p className="text-secondary text-small">2020-08-07</p>
        <p className="text-medium bolder">Withdrawal Transfer to Bank-XXX11</p>
      </div>
    </div>
  ) : (
    <div className="recent-transactions">
      <p className="heading-small">Recent Transactions</p>
      <div className="transaction">
        <p className="text-secondary text-small">2020-08-07</p>
        <p className="text-medium bolder">Withdrawal Transfer to Bank-XXX11</p>
      </div>
      <div className="transaction">
        <p className="text-secondary text-small">2020-07-21</p>
        <p className="text-medium bolder">Withdrawal Transfer to Bank-XXX11</p>
      </div>
      <div className="transaction">
        <p className="text-secondary text-small">2020-07-16</p>
        <p className="text-medium bolder">Withdrawal Transfer to Bank-XXX11</p>
      </div>
    </div>
  );
};

export default Component1;
