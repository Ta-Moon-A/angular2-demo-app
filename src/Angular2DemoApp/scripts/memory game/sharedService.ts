export class SharedService {

    shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    getCardSymbols(size: number) {

        var arr = Array.apply(null, Array(size));

        var orderedArray = arr.map(function (x, i) { return ((i) % (arr.length / 2)) + 1 });
        var shuffledArray = this.shuffle(orderedArray);

        return shuffledArray;
    }
}