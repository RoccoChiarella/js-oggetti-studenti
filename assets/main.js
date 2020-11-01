$(document).ready(function() {
    var studente = {
        'Nome' : 'Rocco',
        'Cognome' : 'Chiarella',
        'Età' : 20
    };

    for (var chiave in studente) {
        $('.studenti').append('<p>'+chiave+': '+studente[chiave]+'</p>');
    }
});
