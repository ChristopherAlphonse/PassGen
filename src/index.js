class PassGen {
    constructor(level) {
        this.value = 8191;
        this.LEVEL = level;
    }

    hash(key, length = this.value) {
        let total = 0;
        for (let char of key) {
            let value = char.charCodeAt(0) - 96;
            total = (total + value) % length;
        }
        return total;
    }

    generateSecret(length = 32) {
        let secret = "";
        let randomSeed;

        while (secret.length < length) {
            randomSeed = crypto.getRandomValues(new Uint8Array(length));
            for (const element of randomSeed) {
                const char = String.fromCharCode(element);

                if (this.validateCharacter(char)) {
                    secret += char;
                }

                if (secret.length === length) {
                    break;
                }
            }
        }

        return secret;
    }

    validateCharacter(char) {
        return /[a-zA-Z0-9]/.test(char);
    }

    generateID() {
        const u8 = crypto.getRandomValues(new Uint8Array(this.LEVEL));
        const randomNumber = Math.floor(Math.random() * this.value);
        const randomBase36 = randomNumber.toString(36);
        const hashValue = this.hash(this.value.toString());
        const genSecret = this.generateSecret();
        const passwords = [hashValue, ...randomBase36, ...u8, ...genSecret]
            .slice(8)
            .join("");
        return passwords;
    }
}

const LEVEL = {
    Enterprise: 35,
    Hobby: 8,
    Developer: 18,
};

const myPass = new PassGen(LEVEL["Enterprise"]);
const genID = myPass.generateID();
const hashValue = myPass.hash("chris");
const secretKey = myPass.generateSecret();

console.log(hashValue);
console.log(secretKey);
console.log(genID);

/*
 * implementation is base of:
 *  1.https://github.com/ChristopherAlphonse/Java-Foundation/blob/main/src/datastructure/HashTable/HashTable.java
 * 2. https://medium.com/swlh/why-should-the-length-of-your-hash-table-be-a-prime-number-760ec65a75d1
 * 3. https://deepsource.com/blog/dont-use-math-random
 */
