function findPrimeNumbers(numbers) {
    // Function to generate prime numbers up to a given limit using Sieve of Eratosthenes algorithm
    function sieveOfEratosthenes(limit) {
        const primes = [];
        const sieve = new Array(limit + 1).fill(true);

        for (let p = 2; p * p <= limit; p++) {
            if (sieve[p] === true) {
                for (let i = p * p; i <= limit; i += p) {
                    sieve[i] = false;
                }
            }
        }

        for (let i = 2; i <= limit; i++) {
            if (sieve[i] === true) {
                primes.push(i);
            }
        }

        return primes;
    }

    // Get the maximum number in the input array
    const maxNumber = Math.max(...numbers);

    // Generate prime numbers up to the maximum number in the input array
    const primes = sieveOfEratosthenes(maxNumber);

    // Filter out prime numbers from the input array
    return numbers.filter(number => primes.includes(number));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimeNumbers(numbers)); // Output: [2, 3, 5, 7]
