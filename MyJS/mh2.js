const materialNav = document.querySelector('.materialsNav');
const semestersNav = document.querySelector('.semestersNav');
const textbooksNav = document.querySelector('.textbooksNav');
const codesNav = document.querySelector('.codesNav');
let material = document.querySelector('#mat');
let sem = document.querySelector('#sem');
let textbook = document.querySelector('#textbook');
let course = document.querySelector('#course');
let closeIcon = document.querySelector('.close');
let menubtn = document.querySelector('#mbtn');
let icon = document.querySelector('#icon');
material.onclick = () => {
    materialNav.classList.toggle('active');
    semestersNav.classList.remove('active');
    textbooksNav.classList.remove('active');
    codesNav.classList.remove('active');
    closeIcon.classList.remove('inactive');
}
sem.onclick = () => {
    semestersNav.classList.toggle('active');
    materialNav.classList.remove('active');
    textbooksNav.classList.remove('active');
    codesNav.classList.remove('active');
    closeIcon.classList.remove('inactive');
}
textbook.onclick = () => {
    textbooksNav.classList.toggle('active');
    materialNav.classList.remove('active');
    semestersNav.classList.remove('active');
    codesNav.classList.remove('active');
    closeIcon.classList.remove('inactive');
}
course.onclick = () => {
    codesNav.classList.toggle('active');
    materialNav.classList.remove('active');
    semestersNav.classList.remove('active');
    textbooksNav.classList.remove('active');
    closeIcon.classList.remove('inactive');
}
closeIcon.onclick = () => {
    codesNav.classList.remove('active');
    materialNav.classList.remove('active');
    semestersNav.classList.remove('active');
    textbooksNav.classList.remove('active');
    closeIcon.classList.toggle('inactive');
}

menubtn.onclick = () => {
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
    document.querySelector('.menuCd').classList.toggle('active');
}

