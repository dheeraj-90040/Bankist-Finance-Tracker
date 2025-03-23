'use strict';

//////////////////////////////////////////////////////
// 🏦 BANKIST APPLICATION - MAIN MODULE

// 🔷 DATA STRUCTURES & INITIALIZATION ///////////////

// 🧑💼 ACCOUNT DATA
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Michael Johnson',
  movements: [300, -200, 2500, -150, 400, -300],
  interestRate: 1.3,
  pin: 1234,
};

const account6 = {
  owner: 'Emily Brown',
  movements: [1500, -500, 2200, -300, 700, -200],
  interestRate: 1.4,
  pin: 5555,
};

const account7 = {
  owner: 'David Wilson',
  movements: [100, -50, 600, -200],
  interestRate: 0.8,
  pin: 1984,
};

const account8 = {
  owner: 'Maria Garcia',
  movements: [2000, -1000, 300, -150, 800, -400, 100],
  interestRate: 1.0,
  pin: 7777,
};

const account9 = {
  owner: 'James Miller',
  movements: [500, -250, 1200, -600, 300],
  interestRate: 0.9,
  pin: 2020,
};

const account10 = {
  owner: 'Laura Davis',
  movements: [10000, -2000, 500, -100, 1500],
  interestRate: 1.5,
  pin: 4321,
};

const account11 = {
  owner: 'Robert Martinez',
  movements: [150, -75, 200, -50, 100],
  interestRate: 0.6,
  pin: 6666,
};

const account12 = {
  owner: 'Linda Anderson',
  movements: [800, -300, 450, -200, 600, -150],
  interestRate: 1.1,
  pin: 1122,
};

const account13 = {
  owner: 'William Taylor',
  movements: [3000, -1500, 2500, -500, 1000],
  interestRate: 1.2,
  pin: 8888,
};

const account14 = {
  owner: 'Karen Moore',
  movements: [700, -250, 900, -300, 400],
  interestRate: 0.7,
  pin: 1357,
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
  account11,
  account12,
  account13,
  account14,
];

// 🖥️ DOM ELEMENTS ///////////////////////////////////
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// 🔘 BUTTONS & CONTROLS
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// 📥 INPUT FIELDS
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////////////
// 💻 APPLICATION LOGIC //////////////////////////////

// 🌐 GLOBAL STATE
let currentAccount; // 👤 Currently logged-in user

// 📊 UI UPDATE FUNCTIONS ////////////////////////////

/**
 * 🎯 UPDATE ALL UI COMPONENTS
 * @param {Object} acc - Current user account object
 */
const updateUI = function (acc) {
  // 1️⃣ Display transaction history
  displayMovements(acc.movements);

  // 2️⃣ Update balance display
  calDisplayBalance(acc);

  // 3️⃣ Refresh summary statistics
  calDisplaySummary(acc);
};

/**
 * 📜 DISPLAY TRANSACTION HISTORY
 * @param {Array} movements - Array of transaction amounts
 */
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // 🧹 Clear previous entries

  //* Used to Sort the Movements Based on Request On Copy Data !
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach(function (mov, i) {
    const transactionType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${transactionType}">
          ${i + 1} ${transactionType}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/**
 * 💰 CALCULATE & DISPLAY BALANCE
 * @param {Object} acc - User account object
 */
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, mov) => accumulator + mov,
    0
  );
  labelBalance.textContent = `👉🏻 ${acc.balance}€`;
};

/**
 * 📈 CALCULATE & DISPLAY SUMMARY
 * @param {Object} acc - User account object
 */
const calDisplaySummary = function (acc) {
  // 💵 Income calculations
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((total, mov) => total + mov, 0);
  labelSumIn.textContent = `${income}💶`;

  // 💸 Expense calculations
  const expenses = Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((total, mov) => total + mov, 0)
  );
  labelSumOut.textContent = `${expenses}💶`;

  // 🏦 Interest calculations
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((total, int) => total + int, 0);
  labelSumInterest.textContent = `${interest}💶`;
};

// 🔐 AUTHENTICATION & SECURITY //////////////////////

/**
 * 🔑 GENERATE USERNAMES FROM FULL NAMES
 * @param {Array} accs - Array of account objects
 */
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts); // 🚀 Initialize usernames

//////////////////////////////////////////////////////
// 🖱️ EVENT HANDLERS /////////////////////////////////

// 🚪 LOGIN HANDLER
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // ⚠️ Prevent form submission

  // 🔍 Find user account
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  // 🔒 Validate PIN
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 🎉 Successful login
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // 🧹 Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // 🖱️ Remove focus

    // 🔄 Update interface
    updateUI(currentAccount);
  }
});

// 🔄 TRANSFER HANDLER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // 📥 Get transfer details
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  // 🧹 Clear inputs
  inputTransferAmount.value = inputTransferTo.value = '';

  // ✅ Validate transfer
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount.userName !== currentAccount.userName
  ) {
    // 💸 Execute transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // 🔄 Update interface
    updateUI(currentAccount);
  }
});

//////////////////////////////////////////////////////
// 🚫 ACCOUNT CLOSURE HANDLER ////////////////////////

btnClose.addEventListener('click', function (e) {
  e.preventDefault(); // ⚠️ Prevent form submission

  // 🔐 Verify account credentials
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // 🧹 Clear input fields
    inputCloseUsername.value = inputClosePin.value = '';

    // 🕶️ Hide banking interface
    containerApp.style.opacity = 0;

    //* Delete the Account using Splice & findIndex
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(accounts, index);

    accounts.splice(index, 1);

    console.log(accounts);
    // 📛 Reset welcome message
    labelWelcome.textContent = 'Log in to get started';

    // console.log('🔒 Account successfully closed');

    // 🧹 Clear input field
    inputClosePin.value = inputClosePin.value = '';
  }
});

//////////////////////////////////////////////////////
// 🏦 LOAN PROCESSING HANDLER ////////////////////////

btnLoan.addEventListener('click', function (e) {
  e.preventDefault(); // ⚠️ Prevent form submission

  // 💰 Get requested loan amount
  const loanAmount = Number(inputLoanAmount.value);

  // 📊 Check loan eligibility (10% deposit requirement)
  const hasSufficientDeposit = currentAccount.movements.some(
    mov => mov >= loanAmount * 0.1
  );

  // ✅ Validate loan conditions
  if (loanAmount > 0 && hasSufficientDeposit) {
    // 💳 Add loan to account movements
    currentAccount.movements.push(loanAmount);

    // 🔄 Update interface
    updateUI(currentAccount);

    // 🧹 Clear input field
    inputLoanAmount.value = '';
  }
});

//////////////////////////////////////////////////////
// 🔀 SORTING MOVEMENTS HANDLER //////////////////////
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// 💡 TOGGLE LOGIC EXPLAINED //////////////////////////
// 1. Prevents page reload on button click
// 2. Passes inverse state to displayMovements()
// 3. Maintains toggle state between interactions
//////////////////////////////////////////////////////

// 📌 State Variable to Track Sorting Status
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault(); // ⚠️ Block default form behavior
  // 🔍 Toggle movements display using inverse state
  displayMovements(currentAccount.movements, !sorted);
  // 🔄 Reverse sorting status for next interaction
  sorted = !sorted;
});
