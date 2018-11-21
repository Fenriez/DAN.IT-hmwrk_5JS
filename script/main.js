let student = {
    name: 'John',
    lName: 'Malckovich',
    age: 64,
    filmography: {
        firstFilm: {
            filmName: 'Word of Honor',
            year: 1981
        },
        currentFilm: {
            filmName: 'Mile 22',
            year: 2018
        },
    }
}

let studentClone = {};

let clone = (obj) => {
    for (key in obj) {
        if (typeof(key) == Object) {
            clone(key);
        } else {            
            studentClone[key] = obj[key];
        }
    }
}

clone(student);