//Napraviti niz koji u sebi ima 5 objekata. Svaki objekt predstavlja osobu koji ima "ime" i "godine". 
//Napisati funkciju "dodajGodine" koja će proći kroz zadani niz i svim osobama dodati jednu godinu života. 
//Napisati drugu funkciju "prosjekGodina" koja će nad zadanim nizom osoba proći i izračunati i vratiti prosjek godina. 
//Obje funkcije trebaju imati po jedan parametar za niz kojeg primaju.

var listaOsoba = [
    {
        ime: 'Janko',
        godine: 15
    },
    {
        ime: 'Marko',
        godine: 25
    },
    {
        ime: 'Štef',
        godine: 45
    },
    {
        ime: 'Jura',
        godine: 55
    },
    {
        ime: 'Draž',
        godine: 37
    }
];

function dodajGodine(osobe) {
    for (var i = 0; i < osobe.length; i++) {
        osobe[i].godine = osobe[i].godine + 1;
    }
    return osobe;
}

function prosjekGodina(osobe) {
    var ukupnoGodina = 0;
    for (var i = 0; i < osobe.length; i++) {
        ukupnoGodina += osobe[i].godine;
    }
    return ukupnoGodina / osobe.length;
}

