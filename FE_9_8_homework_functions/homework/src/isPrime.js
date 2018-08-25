function isPrime(prime_number) {
	for (let i = 2; i < prime_number; i++) {
		if (prime_number % i === 0) {
		return false;
		}
	}
	return prime_number > 1;
}
