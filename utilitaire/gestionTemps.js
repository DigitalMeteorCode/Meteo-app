//permet d'avoir un tableau de la semaine à partir du jour actuel

const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let ajd = new Date();
let options = {weekday: 'long'};
let jourActuel = ajd.toLocaleDateString('fr-FR', options);

//console.log(jourActuel,ajd);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));
//ici, on manipule le tableau : on retire (slice) les jours avant le jours actuel, puis on ajoute (concat) les jours depuis le début (0) jusqu'au jour actuel (qui est devenu le début de tableau).

export default tabJoursEnOrdre;
