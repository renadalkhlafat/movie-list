'use strict';

const Movie =function(movieName,movieCategory,movieYear){
    this.movieName=movieName;
    this.movieCategory=movieCategory;
    this.movieYear=movieYear;

    Movie.allMovies.push(this);
}
Movie.allMovies=[];

Movie.prototype.saveTOLocal=function(){
    localStorage.setItem('Movies',JSON.stringify(Movie.allMovies));
}
Movie.prototype.getFromLocal=function(){
    return JSON.parse(localStorage.getItem('Movies'));
}
Movie.prototype.remove=function(id){
    Movie.allMovies.splice(id,1);
}

let movieForm =document.getElementById('movieForm')
movieForm.addEventListener('submit',saveHandler);

function saveHandler(e){
    e.preventDefault();

    let movieName,movieCategory,movieYear
    movieName= e.target.movieName.value;
    movieCategory = e.target.movieCategory.value;
    movieYear =e.target.movieYear.value;

    new Movie(movieName,movieCategory,movieYear)
    Movie.prototype.saveTOLocal()
    e.target.reset();

    loadData();
}

function loadData(){
    
    let data =Movie.prototype.getFromLocal();
    if(data){
        Movie.allMovies=[];
        for(let i in data){
            new Movie(data[i].movieName,data[i].movieCategory,data[i].movieYear)
        }
    }
    createTable();
    append();
}
let table = document.querySelector('table');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let tfoot = document.querySelector('tfoot');
function createTable(){
    clearTable();
    createTableHeader();
    append();
    createTableFooter();
}
function clearTable(){
    thead.innerHTML='';
    tbody.innerHTML='';
    tfoot.innerHTML='';
}

function createTableHeader(){
    let tableHeadEle = ['#', 'Image','Name','Release'];
    for (let index = 0; index < tableHeadEle.length; index++) {
       let th = document.createElement('th');
       thead.appendChild(th);
       th.textContent =tableHeadEle[index];
        
    }
}
function append(){
    while(table.rows,length >0)
    table.deleteRow(0);

if(localStorage.Movies){
    Movie.allMovies=Movie.prototype.getFromLocal()
}
tbody.innerHTML='';
for (let index = 0; index <Movie.allMovies.length; index++) {
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
  let removeTr = document.createElement('td');
  tr.appendChild(removeTr);
  removeTr.innerHTML=`<a onclick = "remove(${index})">X</a>`

  let imageTr = document.createElement('td');
  tr.appendChild(imageTr);
  imageTr.innerHTML=`<img src = './img/${Movie.allMovies[index].movieCategory.toLowerCase()}.png'>`

  let nameTr = document.createElement('td');
  tr.appendChild(nameTr);
  nameTr.textContent= Movie.allMovies[index].movieName;

  let releaseTr = document.createElement('td');
  tr.appendChild(releaseTr);
  releaseTr.textContent =Movie.allMovies[index].movieYear;

}
}
function  createTableFooter(){
    let qtyTd = document.createElement('td');
    tfoot.appendChild(qtyTd);
    qtyTd.textContent= 'Qunintity';

    let totalTd= document.createElement('td')
    tfoot.appendChild(totalTd);
    totalTd.textContent=Movie.allMovies.length;
}
let btnClear =document.getElementById('btnClear')
btnClear.addEventListener('click',clear)

function remove(id){
    Movie.prototype.remove(id);
    Movie.prototype.saveTOLocal();
    loadData();
}
function clear(){
    localStorage.removeItem('Movies');
    clearTable();
}
loadData();
