# **PassGen**

The `PassGen` class utility designed to facilitate the generation of secure passwords and unique identifiers. It offers various methods for generating cryptographic hashes, secret keys, and unique IDs with customizable complexity levels.



## Methods

1. `hash(key, length)`: Generates a hash value based on the provided key and length.

    - `key`: The input string to be hashed.
    - `length`: The length of the hash value. Default value is `8191`.

2. `generateSecret(length)`: Generates a secret key of the specified length.

    - `length`: The length of the secret key. Default value is `32`.

3. `validateCharacter(char)`: Validates whether a character meets certain criteria.

    - `char`: The character to be validated.

4. `generateID()`: Generates a unique identifier combining hash values, random numbers, and secret keys.

## Constants

-   `LEVEL`: An object containing predefined complexity levels for passwords and identifiers.

## Running the code

```bash
# Install node modules using your preferred package manager
# In this case, using pnpm:
pnpm i && pnpm dev
```

```bash
yarn install && yarn run dev
```

```bash
npm install && npm run dev
```
## Usage Example

```javascript
const LEVEL = {
    Enterprise: 35,
    Hobby: 8,
    Developer: 18,
};

const myPass = new PassGen(LEVEL["Hobby"]);
const genID = myPass.generateID();
const hashValue = myPass.hash("chris");
const secretKey = myPass.generateSecret();
console.log(hashValue); // 57
console.log(secretKey); // myQdNIQt7ipZfKXeMk94ZmKrfNsPacKf
console.log(genID); // 23882419zDltirAAx4VTvj8tw5ROsBTCJl4Mudk
```
