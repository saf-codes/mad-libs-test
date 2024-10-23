function generateMadLib() {
    const adj1 = document.getElementById('adj1').value;
    const noun1 = document.getElementById('noun1').value;
    const verb1 = document.getElementById('verb1').value;
    const noun2 = document.getElementById('noun2').value;
    const noun3 = document.getElementById('noun3').value;
    const verb2 = document.getElementById('verb2').value;

    const story = `Once upon a time, there was a ${adj1} ${noun1} who likes to ${verb1}. One day, the ${adj1} ${noun1} found a ${noun2} and was intrigued by it. What could it be used for? Well, they would have to see for themselves. They brought the ${noun2} home and showed it to their ${noun3}. They went unconscious immediately. "Erm, what the sigma?" said the ${adj1} ${noun1}.'  ;

    document.getElementById('story').innerText = story;
}
