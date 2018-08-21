const user_login = prompt('Enter your login');

if (user_login === 'user') {
    let password = prompt('enter your password');
    if (password === 'superUser') {
        let currentHours = new Date().getHours();
        if (currentHours < 20) {
            alert('Good day!');
        } else {
            alert('Good evening!');
        }
    } else if (!password) {
        alert('Canceled');
    } else {
        alert('Wrong password')
    }
} else if (!user_login) {
    alert('Canceled');
} else if (user_login.length < 4) {
    alert('I don’t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}