const getS = selector => document.querySelector(selector);
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
}

getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;

    // переробити
    // if(getS('#border-type').value != "none"){
    //     getS('#table').style.borderStyle = getS('#border-type').value;
    // }else if(getS('#width-border').value != ""){
    //     getS('#table').style.borderWidth = `${getS('#width-border').value}` + 'px';
    // }else if(getS('#color-border').value != ""){
    //     getS('#table').style.borderColor = getS('#color-border').value;
    //     console.log(getS('#table').style.borderColor = getS('#color-border').value);
    // }
    // переробити


}



getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})

let fS = document.forms[0].elements.size;
for(i = 0; i < fS.length; i++){
    fS[i].onclick = function () {
        getS('.top-block').style.fontSize = event.target.value;
    }    
}

getS('#fontFamily').onchange = function () {
    getS('#fontFamily').options[0].setAttribute("disabled", "disabled");
    getS('.top-block').style.fontFamily = this.value;
}


// start set backgroundColor abd color

getS('.btn-text-color').onclick = function(){
    getS('.btn-text-color').classList.add('pressed-button');
    getS('.btn-bg-color').classList.remove('pressed-button');
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            getS('.top-block').style.color = this.style.backgroundColor;
        }
    }
}
getS('.btn-bg-color').onclick = function(){
    getS('.btn-text-color').classList.remove('pressed-button');
    getS('.btn-bg-color').classList.add('pressed-button');
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        }
    }
}

// end set backgroundColor abd color


/* start function bold style */
getS('.fontWeight').onclick = function(){
    if(event.target.checked){
        getS('.top-block').classList.add('bold');
    }
    else{
        getS('.top-block').classList.remove('bold');
    }
}
/* end function bold style */
// start function for choose Li or Table
let tableList = document.forms[1].elements;
for(i = 0; i < tableList.length; i++){
    tableList[i].onclick = function () {
        if(event.target.value == "table"){
            getS('.create-list').classList.add('hide');
            getS('.create-table').classList.remove('hide');
            for(i = 0; i < colors.length; i++){
                getS('#color-border').innerHTML += `<option value=${colors[i]}>${colors[i]}</option>`
            }
        }else if(event.target.value == "list"){
            getS('.create-list').classList.remove('hide');
            getS('.create-table').classList.add('hide');
        }
    }    
}

// end function for choose Li or Table
getS('.btn-add').onclick = function(){
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}
const list = document.forms['form-list'];
getS('.btn-create-list').onclick = function(){
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for(let i=0; i<countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}

// start table functions

getS('.btn-create-table').onclick = function(){
    let table = '';
    let data = '';
    for(i = 1; i<= document.forms[2].elements.countTd.value; i++){
        data += `<td style = "border: ${getS('#width-border').value}px ${getS('#border-type').value} ${getS('#color-border').value}; height: ${getS('#height-td').value}px; width: ${getS('#width-td').value}px;">${i}</td>`;
    }
    for(i=1; i<=document.forms[2].elements.countTr.value; i++){
        table += `<tr>${data}</tr>`
    }

    document.querySelector('.edit-area').value += `<table id="table" style = "border: ${getS('#width-border').value}px ${getS('#border-type').value} ${getS('#color-border').value}">${table}</table>`;    

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');

}

getS('#border-type').onchange = function () {
    getS('#border-type').options[0].setAttribute("disabled", "disabled");
    // getS('#table').style.border = this.value;
}
getS('#color-border').onchange = function () {
    getS('#color-border').options[0].setAttribute("disabled", "disabled");

}


// end table functions
