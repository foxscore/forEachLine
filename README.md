# forEachLine
> This library exports a function, not an object

Reads a file and executes some code for each line in the file.

# Usage
```javascript
const forEachLine = require('@foxscore/forEachLine')

forEachLine(
    './example.txt',
    (line) => {
        // Do something
    },
    { encoding: 'UTF-8' }
)
```

# Arguments
## Path
Where the file being accessed is located.

## onLine
A function that gets executed for every line in the given file.

## Options

| encoding | |
|--|--|
| **Default** | UTF-8 |
| **Description** | Which encoding format should be used to read the file |