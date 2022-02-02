function findPalindrome(phrase) {
    const newPhrase = phrase.split('').filter((char) => char !== ' ').join('');
    for (let i = 0; i < newPhrase.length / 2; i++) {
        if (newPhrase[i] !== newPhrase[newPhrase.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
