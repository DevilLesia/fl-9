function userCard(key) {
	let balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];
	let taxes = 0.005;

	return {
		getCardOptions: () => {
			return {
				key,
				balance,
				transactionLimit,
				historyLogs
			};
		},
		putCredits: amount => {
			balance += amount;
			historyLogs.push({
				operationType: 'Received credits ',
				credtis: amount,
				operationTime: new Date().toLocaleString()
			});
		},
		takeCredits: amount => {
			if (amount <= balance && amount <= transactionLimit) {
				balance -= amount;
				historyLogs.push({
					operationType: 'Withdrawal of credit ',
					credtis: amount,
					operationTime: new Date().toLocaleString('en-GB ')
				});
			} else {
				console.log('Error! The amount exceeds balance or transaction limit');
			}
		},
		setTransactionLimit: lim => {
			transactionLimit = lim;
			historyLogs.push({
				operationType: 'Tansaction limit change',
				credtis: lim,
				operationTime: new Date().toLocaleString('en-GB')
			});
		},
		transferCredits: (amount, card) => {
			let sum = amount - amount * taxes;
			let user = userCard(card);

			if (amount <= balance && amount <= transactionLimit) {
				user.putCredits(sum);
				balance -= amount;
			} else {
				console.log(
					'Error! The amount exceeds balance or transaction limit');
			}
		}
	};
}


class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.numbOfCards = 3;
	}

	addCard() {
		if (this.cards.length < this.numbOfCards) {
			this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.log('Error! but you can`t have more than 3 cards');
		}
	}
	getCardByKey(key) {
		return this.cards[key - 1];
	}
}
