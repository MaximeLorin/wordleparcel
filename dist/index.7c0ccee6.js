function createGame(nbOfAttemps, wordLength) {
    let gameTab = new Array(nbOfAttemps);
    for(let i = 0; i < nbOfAttemps; i++)gameTab[i] = new Array(wordLength);
    return gameTab;
}
console.log(createGame(3, 3));

//# sourceMappingURL=index.7c0ccee6.js.map
