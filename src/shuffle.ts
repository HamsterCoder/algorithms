// Implementation of Knuth Shuffle Algorithm
export function shuffle<T>(array: T[]) {
    let currentIndex = array.length,
        randomIndex;

    let shuffledArray = array.slice();

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
            shuffledArray[randomIndex],
            shuffledArray[currentIndex],
        ];
    }

    return shuffledArray;
}
