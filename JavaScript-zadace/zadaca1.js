//Napisati petlju koja će u konzolu ispisivati sve brojeve od 6 do 178 (uključivo) koji su djeljivi sa 7, ali ne i sa 3. Npr. 21 ne, 28 da.

for (i = 6; i <= 178; i++) {
    if (i % 7 === 0 && i % 3 !== 0) {
        console.log(i);
    }
}