/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

void async function () {
    // Write your code here
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const isGoodMatrix = (subMatrix) => {
        const chars = new Set();
        let flag;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                chars.add(subMatrix[i][j]);
            }
        }

        if(chars.size !== 3) {
            return false
        }

        for ( let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                if(subMatrix[i][j] === subMatrix[i][j + 1] || subMatrix[i][j] === subMatrix[i + 1][j]) {
                    return false;
                }
            }
        }
        if(subMatrix[2][2] === subMatrix[2][1] || subMatrix[2][2] === subMatrix[1][2]) {
            return false
        }

        for ( let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(subMatrix[i][j] === 'A') {
                    flag++;
                    break
                }
            }
        }

        for ( let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(subMatrix[i][j] === 'B') {
                    flag++;
                    break
                }
            }
        }

        for ( let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(subMatrix[i][j] === 'C') {
                    flag++;
                    break
                }
            }
        }

        if(flag !== 3){
            return false
        }

        return true;
    };
    let n, m;
    const matrix = [];

    rl.question('', (line) => {
    [n, m] = line.split(' ').map(Number);
    rl.on('line', (line) => {
        matrix.push(line);
        if(matrix.length === n) {
            let count = 0;
            for(let i = 0; i < n-2; i++) {
                for(let j = 0; j < m-2; j++) {
                    const subMatrix = [
                        matrix[i].substr(j, 3),
                        matrix[i + 1].substr(j, 3),
                        matrix[i + 2].substr(j, 3)
                    ];
                    if (isGoodMatrix(subMatrix)) {
                        count++;
                    }
                }
            }
            console.log(count);
            rl.close();
        }
    })
    })
}()
