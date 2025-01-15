function knightMoves(i, j) {

}

function possibleKnightMoves(row, column) {
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

console.log(possibleKnightMoves(0, 0));