let leftarrow = document.querySelector('.leftarr');
let rightarrow = document.querySelector('.rightarr');
let  course1 = document.querySelector('.c1');
let course2 = document.querySelector('.c2');
let  course3 = document.querySelector('.c3');

leftarrow.onclick = () => {
    if(course1.classList.contains('center'))
    {
        course1.classList.add('center');
        course2.classList.add('right');
        course3.classList.add('right');
        course1.classList.remove('left');
        course1.classList.remove('right');
        course2.classList.remove('center');
        course2.classList.remove('left');
        course3.classList.remove('left');
        course3.classList.remove('center');
        return;
    }
    if(course2.classList.contains('center'))
    {
        course1.classList.add('center');
        course2.classList.add('right');
        course3.classList.add('right');
        course1.classList.remove('left');
        course1.classList.remove('right');
        course2.classList.remove('center');
        course2.classList.remove('left');
        course3.classList.remove('left');
        course3.classList.remove('center');
        return;
    }
    if(course3.classList.contains('center'))
    {
        course1.classList.add('left');
        course2.classList.add('center');
        course3.classList.add('right');
        course1.classList.remove('center');
        course1.classList.remove('right');
        course2.classList.remove('left');
        course2.classList.remove('right');
        course3.classList.remove('left');
        course3.classList.remove('center');
        return;
    }
}
rightarrow.onclick = () => {
    if(course1.classList.contains('center'))
    {
        course1.classList.add('left');
        course2.classList.add('center');
        course3.classList.add('right');
        course1.classList.remove('center');
        course1.classList.remove('right');
        course2.classList.remove('left');
        course2.classList.remove('right');
        course3.classList.remove('left');
        course3.classList.remove('center');
        return;
    }
    if(course2.classList.contains('center'))
    {
        course1.classList.add('left');
        course2.classList.add('left');
        course3.classList.add('center');
        course1.classList.remove('center');
        course1.classList.remove('right');
        course2.classList.remove('center');
        course2.classList.remove('right');
        course3.classList.remove('left');
        course3.classList.remove('right');
        return;
    }
    if(course3.classList.contains('center'))
    {
        course1.classList.add('left');
        course2.classList.add('left');
        course3.classList.add('center');
        course1.classList.remove('center');
        course1.classList.remove('right');
        course2.classList.remove('center');
        course2.classList.remove('right');
        course3.classList.remove('left');
        course3.classList.remove('right');
        return;
    }
}


let socbtn = document.querySelector('.SOC');
let vkjbtn = document.querySelector('.VKJ');
let vvbtn = document.querySelector('.VV');
let nmvbtn = document.querySelector('.NMV');
let jvcbtn = document.querySelector('.JVC');
let soc = document.querySelector('.SocP');
let vkj = document.querySelector('.VkjP');
let vv = document.querySelector('.VVP');
let nmv = document.querySelector('.NMVP');
let jvc = document.querySelector('.JvcP');

socbtn.onclick = () => {
    soc.classList.add('active');
    vkj.classList.remove('active');
    nmv.classList.remove('active');
    vv.classList.remove('active');
    jvc.classList.remove('active');
    socbtn.classList.add('active');
    vkjbtn.classList.remove('active');
    vvbtn.classList.remove('active');
    nmvbtn.classList.remove('active');
    jvcbtn.classList.remove('active');
}
vkjbtn.onclick = () => {
    soc.classList.remove('active');
    vkj.classList.add('active');
    nmv.classList.remove('active');
    vv.classList.remove('active');
    jvc.classList.remove('active');
    socbtn.classList.remove('active');
    vkjbtn.classList.add('active');
    vvbtn.classList.remove('active');
    nmvbtn.classList.remove('active');
    jvcbtn.classList.remove('active');
}
vvbtn.onclick = () => {
    soc.classList.remove('active');
    vkj.classList.remove('active');
    nmv.classList.remove('active');
    vv.classList.add('active');
    jvc.classList.remove('active');
    socbtn.classList.remove('active');
    vkjbtn.classList.remove('active');
    vvbtn.classList.add('active');
    nmvbtn.classList.remove('active');
    jvcbtn.classList.remove('active');
}
nmvbtn.onclick = () => {
    soc.classList.remove('active');
    vkj.classList.remove('active');
    nmv.classList.add('active');
    vv.classList.remove('active');
    jvc.classList.remove('active');
    socbtn.classList.remove('active');
    vkjbtn.classList.remove('active');
    vvbtn.classList.remove('active');
    nmvbtn.classList.add('active');
    jvcbtn.classList.remove('active');
}
jvcbtn.onclick = () => {
    soc.classList.remove('active');
    vkj.classList.remove('active');
    nmv.classList.remove('active');
    vv.classList.remove('active');
    jvc.classList.add('active');
    socbtn.classList.remove('active');
    vkjbtn.classList.remove('active');
    vvbtn.classList.remove('active');
    nmvbtn.classList.remove('active');
    jvcbtn.classList.add('active');
}
