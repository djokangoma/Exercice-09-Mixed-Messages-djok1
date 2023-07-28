// hello word
const sujet = ['lol', 'bonjour', 'pfff', 'silence'];
const verbe = ['courrir', 'danser', 'partir', 'rentrer'];
const complement = ['un rat', 'un chien', 'une souris'];
function generateTheRandomMessage(){
    const sujetsRandom = sujet[Math.floor(Math.random() * sujet.length)];
    const verbesRandom = verbe[Math.floor(Math.random() * verbe.length)];
    const complementsRandom = complement[Math.floor(Math.random() * complement.length)];
    const messageAleatoire = `${sujetsRandom}${verbesRandom} ${complementsRandom}`;
    return messageAleatoire;
}
console.log(generateTheRandomMessage());