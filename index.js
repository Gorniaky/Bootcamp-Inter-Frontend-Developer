import { CurrentAccount, SavingsAccount } from "./classes.js";

const agency_number = document.getElementById('agency_number'),
  account_number = document.getElementById('account_number'),
  account_type = document.getElementById('account_type'),
  login = document.getElementById('login'),
  account_display = document.getElementById('account'),
  balance = document.getElementById('balance'),
  card_type = document.getElementById('card_type'),
  card_number = document.getElementById('card_number'),
  withdraw = document.getElementById('withdraw'),
  deposit = document.getElementById('deposit'),
  bank_value = document.getElementById('bank_value'),
  operation_result = document.getElementById('operation_result');

let account;

function displayUpdate(result) {
  account_display.innerText = `${account.type} ${account.agency} ${account.number}`;
  balance.innerHTML = account.balance;
  if (account.type == 'cc') {
    card_type.innerHTML = 'Cartão de crédito: ';
    card_number.innerHTML = account.creditCard;
  } else {
    card_type.innerHTML = 'Conta universitária: ';
    card_number.innerHTML = account.universityAccount;
  }
  if (result !== undefined)
    if (result) {
      operation_result.innerHTML = 'Operação concluída com sucesso!'
    } else {
      operation_result.innerHTML = 'Operação negada!'
    }
}

function login_account(event) {
  const account_types = {
    current_type: (...args) => { account = new CurrentAccount(...args, 1234567890123456) },
    savings_type: (...args) => { account = new SavingsAccount(...args, 123445678) },
  }
  account_types[account_type.value]?.(agency_number.value, account_number.value);
  if (!event) return displayUpdate();
  displayUpdate(true);
}

login.addEventListener('click', login_account);

login_account();

function bank_w() {
  displayUpdate(account.withdraw(bank_value.value))
}

function bank_d() {
  displayUpdate(account.deposit(bank_value.value))
}

withdraw.addEventListener('click', bank_w);
deposit.addEventListener('click', bank_d);