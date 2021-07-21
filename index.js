// overzicht gegevens
const age = 37;
const isFemale = true;
const driverStatus = 'Kees';
const firstName = 'Pietje';
const totalAmount = 104;

// deel 1: leeftijdscheck
if (age >= 18) {
    console.log('Welkom & veel plezier!');
} else {
    console.log('Sorry, minderjarigen mogen niet naar binnen.');
}

// deel 2: Ladies Night
if (isFemale == true) {
    console.log('Tijdens Ladies Night krijg je een gratis cocktail!');
} else {
    console.log('Veel plezier op het feest!');
}

// deel 3: Wie is de bob?
if (driverStatus == 'bob') {
    console.log('Goede reis!');
} else {
    console.log('Zal ik een taxi voor u bellen?');
}

// deel 1: 50% korting
if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting.');
} else {
    console.log('U krijgt geen korting.');
}

// deel 2: Ludieke actie!
if (firstName === 'Sarah' || firstName === 'Bram') {
    console.log('U krijgt een gratis biertje op deze feestelijke dag!');
} else {
    console.log('U moet uw biertje gewoon betalen.');
}

// deel 3: Jubileum korting
if (totalAmount >= 25 && totalAmount < 50) {
    console.log('Bij besteding van 25 euro of meer krijgt u gratis vegabitterballen.');
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log('Bij besteding van 50 euro of meer krijgt u een gratis portie nachos.');
} else if (totalAmount >= 100) {
    console.log('Bij besteding van 100 euro of meer krijgt u een gratis flesje champagne.');
} else {
    console.log('U krijgt helaas geen gratis artikel.');
}