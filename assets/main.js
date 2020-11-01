$(document).ready(function() {
    var studente = {
        'Nome' : 'Rocco',
        'Cognome' : 'Chiarella',
        'Età' : 20
    };

    var studenti = [
        studente,
        {
            'Nome' : 'Mario',
            'Cognome' : 'Rossi',
            'Età' : 25
        },
        {
            'Nome' : 'Giuseppe',
            'Cognome' : 'Verdi',
            'Età' : 18
        }
    ];

    for (var i = 0; i < studenti.length; i++) {
        for (var chiave in studenti[i]) {
            $('.studenti').append('<p>'+chiave+': '+studenti[i][chiave]+'</p>');
        }
    }
});
