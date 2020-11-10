function change(index) {
    const p = document.getElementById('show');
    console.log('show',p);
    switch(index){
        case 1:
            p.innerHTML=
            '<iframe width=100% height=100% src="./1091-1N-demo-209410314/nav-week.html" />';
        break;
        case 2:
            p.innerHTML=
             '<iframe width=100% height=100% src="../myclass/myclass.html" />';
        break;
        case 3:
            p.innerHTML=
            '<iframe width=100% height=100% src="../resume/resume.html" />';
        break;
        case 4:
            p.innerHTML=
            '<iframe width=100% height=100% src="" />';
        break;
}

}
    