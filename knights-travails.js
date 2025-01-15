function possibleKnightMoves([row, column]) {
    const moves = []
    for (let i = -2; i <= 2; i++) {
        if (i === 0) {
            continue;
        }

        for (let j = -2; j <= 2; j++) {
            if (
                j === 0 || 
                Math.abs(j) === Math.abs(i) || 
                (row + i) > 7 || 
                (row + i) < 0 || 
                (column + j) > 7 || 
                (column + j) < 0) {
                continue;
            }
                
            moves.push([row + i, column + j])
        }
    }

    return moves;
}

function knightMoves(i, j) {
    let shortestPath = [];
    let minLength = 8;
    function checkPaths(current, path = '') {
        if (path.length > 24) {
            return;
        }

        path += current.toString() + '|';
        const adjacencyList = possibleKnightMoves(current);
        for (let index = 0; index < adjacencyList.length; index++) {
            if (path.includes(adjacencyList[index].toString())) {
                continue;
            }

            if (adjacencyList[index].toString() === j.toString()) {
                path += j.toString();
                const pathArray = path.split('|').map((value) => value = [+value[0], +value[2]])
                if (pathArray.length < minLength) {
                    minLength = pathArray.length;
                    console.log(pathArray);
                    shortestPath = pathArray.slice();
                }
            }

            checkPaths(adjacencyList[index], path)
        }
    }

    checkPaths(i);
    return `You made it in ${minLength - 1} moves! Here's your path: \n${shortestPath.join('\n')}`
}

console.log(knightMoves([3, 3], [4, 3]));