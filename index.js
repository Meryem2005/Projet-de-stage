
const statistique = [
    {value : "820", libel :"Etudiants Inscrits"},
    {value : "98%", libel :"Taux de satisfactions"},
    {value : "4+", libel :"Ans d'Experience"},
    {value : "12", libel :"Formations Professionnelles"},
];
let text1 = "";
for (i=0; i < statistique.length; i++) {
  text1 += '<div class="box"><div class="number">'+statistique[i].value+'</div><p>'+statistique[i].libel+'</p></div>'
}
document.getElementById("box").innerHTML = text1;


const formations =[
    {
        urlImage : "./assests/images/france.jpg",
        title :"La langue Française",
        desc :"Apprenez la langue de l'amour et de la culture raffinée",
        nbrHour: "24",
        price:"1200"
    },
    {
        urlImage : "./assests/images/english.jpg",
        title :"La langue Anglaise",
        desc :"Explorez la langue internationale des affaires et de la communication mondiale",
        nbrHour: "24",
        price:"1200"
    },
    {
        urlImage : "./assests/images/germany.jpg",
        title :"La langue Allemande",
        desc :"Maîtrisez une langue riche en histoire et en innovation technologique",
        nbrHour: "24",
        price:"4000"
    },
    {
        urlImage : "./assests/images/info_1.jpg",
        title :"Bureautique",
        desc :"Apprenez les fameux logiciels du Microsoft Office.",
        nbrHour: "30",
        price:"1000"
    },
    {
        urlImage : "./assests/images/info_2.jpg",
        title :"Infograpie",
        desc :"Découvrir le monde du design avec les logiciel d'Adobe.",
        nbrHour: "30",
        price:"2000"
    },
    {
        urlImage : "./assests/images/info_3.jpg",
        title :"Web Design",
        desc :"Prendre la main avec le développement web avec HTML & CSS.",
        nbrHour: "30",
        price:"1500"
    },
    {
        urlImage : "./assests/images/info_4.jpg",
        title :"JavaScript",
        desc :"Commencer la programation avec JS, la langue la plut populaire du domaine.",
        nbrHour: "30",
        price:"1800"
    },
    {
        urlImage : "./assests/images/info_5.jpg",
        title :"WordPress",
        desc :"Créer vos cette site sans programtion avec le CMS le plus repondu.",
        nbrHour: "30",
        price:"1800"
    }
]

let text2 = "";
for (i=0; i < formations.length; i++) {
  text2 += `
    <div class="card">
        <img src="`+formations[i].urlImage+`" alt="Drapeau France">
        <h3>`+formations[i].title+`</h3>
        <p class="description">`+formations[i].desc+`</p>
        <div class="infos">
            <p class="nombreHeures">`+formations[i].nbrHour+` heures</p>
            <p class="price">`+formations[i].price+` Dhs</p>
        </div> 
    </div>
  `
}
document.getElementById("formation").innerHTML = text2;


function send(){
    // e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let telNumber = document.getElementById("telNumber").value;
    let adrEmail = document.getElementById("adrEmail").value;
    let message = document.getElementById("message").value;
    console.log(fullName, "  ", telNumber, "  ",adrEmail, "  ", message);

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("telNumber", telNumber);
    localStorage.setItem("adrEmail", adrEmail);
    localStorage.setItem("message", message);

    alert("Vos données sont bien enregistrées, merci pour votre intérêt.")
}