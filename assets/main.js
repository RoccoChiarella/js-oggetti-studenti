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

    var nuovo_nome = prompt('Inserisci il nome dello studente');

    var nuovo_cognome = prompt('Inserisci il cognome dello studente');

    var nuova_eta = prompt("Inserisci l'età dello studente");

    var nuovo_studente = {
        'Nome' : nuovo_nome,
        'Cognome' : nuovo_cognome,
        'Età' : nuova_eta
    };

    studenti.push(nuovo_studente);

    for (var i = 0; i < studenti.length; i++) {
        for (var chiave in studenti[i]) {
            $('.studenti').append('<p>'+chiave+': '+studenti[i][chiave]+'</p>');
        }
    }
});
