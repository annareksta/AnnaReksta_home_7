//Задание 1

let balance = Number(prompt("Введите ваш баланс"));
if (balance > 0) {
    console.log("Баланс положительный");
}
    else if (balance === 0) {
    console.log("Баланс равен нулю");
}
    else {
    console.log("Баланс отрицательный");
}

//Задание 2

let spendScore = Number(prompt("Enter your spend score (0-100)"));
   if (spendScore >= 90) {
    console.log("Вы — мастер экономии");
   }
   else if (spendScore >= 70) {
    console.log("Хороший уровень контроля расходов");
   }
   else if (spendScore >= 50) {
    console.log("Средний уровень");
   }
   else {
    console.log("Стоит улучшить навыки управления финансами");
   }

//Задание 3

let viewMode = "detailed";
let viewDescription = viewMode === "detailed" ? "Подробный" : "Краткий";
console.log(viewDescription);

//Задание 5

const transactions = [
    { description: "Зарплата", amount: 50000 },
    { description: "Продукты", amount: -3000 },
    { description: "Кафе", amount: -500 }
  ];
 for (let i = 0; i < transactions.length; i++) {
    console.log("Транзакция № " + (i + 1), ":", transactions[i].description, ". Cумма:", transactions[i].amount);
 }

 //Задание 6

 const categories = ["Еда", "Транспорт", "Развлечения"];
 for (const category of categories) {
    console.log(category);
 }

//Задание 7

const transaction = [
    { description: "Зарплата", amount: 50000 },
    { description: "Аренда жилья", amount: -15000 },
    { description: "Продукты", amount: -3000 },
    { description: "Продажа старой мебели", amount: 2000 }
  ];
transaction.forEach(transaction => {
    if (transaction.amount > 0) {
        console.log("Доход:", transaction.description, ", сумма:", transaction.amount);
    }
    else {
        console.log("Расход:", transaction.description, ", сумма:", transaction.amount);
    }
 });

 //Задание 8

 let name = prompt("Введите ваше имя");
 function greetUser(name) {
    console.log(`Здравствуйте, ${name}! Добро пожаловать в ваш финансовый кабинет!`);
 }
greetUser(name);

 //Задание 9

 const calculateFee = function(amount) {return amount * 0.02;};
 const calculateFee2 = (amount) => amount *0.02;

 //Задание 10

let expenses = [-500, -2000, -100];
let getMinMaxExpense = (expenses) => ({min: Math.max(...expenses), max: Math.min(...expenses) });
console.log(getMinMaxExpense(expenses));

//Задание 11

let currentCurrency = "EUR";
function changeCurrency() {
    let currentCurrency = "USD";
}
console.log(currentCurrency);

//Задание 12

function outer() {
    let exchangeRate = 73.5;
    function inner() {
        console.log(exchangeRate);
    }
    inner();
}
outer();

//Задание 13

function calculatePrice(price, hasPVN) {
    if (hasPVN === true) {
        let priceWithPVN = price;
        return priceWithoutPVN = priceWithPVN / (1 + 0.21);
    }
    else if (hasPVN === false) {
        let priceWithoutPVN = price;
        return priceWithPVN = priceWithoutPVN * (1 + 0.21);
    }
}