class BankAccount {
  constructor(agency, number, type, balance = 0) {
    this.agency = agency;
    this.number = number;
    this.type = type;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  withdraw(value) {
    if (!(value > 0) || this._balance < value) return false;
    this._balance = this._balance - (+value);
    return true;
  }

  deposit(value) {
    if (!(value > 0)) return false;
    this._balance = this._balance + (+value);
    return true;
  }
}

export class CurrentAccount extends BankAccount {
  constructor(agency, number, creditCard) {
    super(agency, number, 'cc');
    this._creditCard = creditCard;
  }

  get creditCard() {
    return this._creditCard;
  }

  set creditCard(value) {
    this._creditCard = value;
  }
}

export class SavingsAccount extends BankAccount {
  constructor(agency, number, universityAccount) {
    super(agency, number, 'cp');
    this.universityAccount = universityAccount;
  }

  withdraw(value) {
    if (value > 500) return false;
    super.withdraw(value);
  }
}