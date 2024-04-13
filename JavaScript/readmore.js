const readmorebutton=document.getElementById("readmorebutton");
const readmorediv=document.getElementById("readmorediv");
const readmorep=document.getElementById("readmorep");

readmorebutton.addEventListener("click", function(){
    var request=new XMLHttpRequest();
    request.open('GET', 'https://szaszhannarebeka.github.io/PracticeProjects---WebTechnologiesPractice/books.json');
    request.onload=function() {
        var data=JSON.parse(request.responseText);
        renderHTML(data);
    };
    request.send();
    readmorebutton.style.display="none";
    readmorep.style.display="block";
});

function renderHTML(data){
    var htmlString="";

    for (i=0;i<data.length; i++){
        htmlString += "<p>" + data[i].title + " by " + data[i].author + "</p>";
    }

    readmorediv.insertAdjacentHTML('beforeend', htmlString);
}

