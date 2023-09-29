export function shuffle<T>(array: T[]) {
    let shuffledArray = array.slice();

    return shuffleInplace(shuffledArray, 0, shuffledArray.length - 1);
}

// Implementation of Knuth Shuffle Algorithm
export function shuffleInplace<T>(array: T[], i: number, j: number) {
    let currentIndex = j,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== i) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * (currentIndex - i) + i);
        currentIndex -= 1;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
