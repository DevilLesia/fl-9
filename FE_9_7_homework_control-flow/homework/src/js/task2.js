let min, tries, answer, totalPrize, message, guess;
const max;
const prize;
const privousPrize; 

if (confirm('Do you want to play a game?')) {

    start: while (true) {
        min = 0;
      	max = 5;
        tries = 3;
        privousPrize = prize = 10;
        totalPrize = 0;
        answer = Math.floor(Math.random() * (max - min + 1)) + min;

        continue_game:
            while (tries > 0) {
                message = ' Enter a number from ' + min + ' to ' + max + ' \n Attempts left:' 
                + tries + '\n Total Prize: ' + totalPrize + '\n Possible prize on current attempt: ' + prize;
                let guess = Number(prompt(message));

                if (guess === answer) {
                    console.log('YOU WIN! prize = ' + prize + '$');
                    if (confirm('Do you want to continue game?')) {
                        while (true) {
                            totalPrize += prize;
                            tries = 3;
                            max = max * 2;
                            prize = privousPrize = privousPrize * 3;
                            continue continue_game;
                        }

                    } else {
                        console.log('Thank your for a game. Your total prize is: ' + totalPrize);
                        if (confirm('Do you want to play again?')) {
                            continue start;
                        } else {
 break start; 
}
                    }
                    tries = 0;

                } else {
                    tries = tries - 1;
                    prize = Math.floor(prize / 2);
                }
            }

        if (guess !== answer) {
            console.log('Thank you for a game. Your total prize is:' + totalPrize + '$');
            if (confirm('Do you want to play again?')) {
                continue;
            } else {
 break; 
}
        }

    }

    console.log('game over');

	} else {
    console.log('You did not become a millionaire');
}