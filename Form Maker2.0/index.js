let form = document.getElementById("inputForm");
let Index = 0;

function createInput() {
    let count = document.getElementById("count").value;
    // console.log(count);
    let pos = document.getElementById("position").value;
    // console.log(pos);
    let inputField = document.getElementById("inputField");
    // console.log(inputField.selectedIndex);
    if (inputField.selectedIndex != 0) {
        let div = document.createElement("div");

        for (let i = 0; i < count; i++) {
            let div1 = document.createElement("div");
            if (inputField.selectedIndex == 1) { //text

                let label = document.createElement("label");
                label.innerHTML = " Untitled Field :";
                label.contentEditable = true;
                div1.appendChild(label);
                let input = document.createElement("input");
                input.type = "text";
                div1.appendChild(input);
                let button = document.createElement("button");
                let del = document.createTextNode("delete");
                button.appendChild(del);
                button.setAttribute('onclick', 'delete1(this);');
                div1.appendChild(button);
                let br = document.createElement("br");
                div1.appendChild(br);

            } else if (inputField.selectedIndex == 2) { //radio button

                let label = document.createElement("label");
                label.innerHTML = " Untitled Field :";
                label.contentEditable = true;
                div1.appendChild(label);

                Index = Index + 1;

                let button1 = document.createElement("button");
                let add = document.createTextNode("Add Radio");
                button1.appendChild(add);
                button1.setAttribute('onclick', 'addRadio(this);');
                div1.appendChild(button1);
                let button = document.createElement("button");
                let del = document.createTextNode("delete");
                button.appendChild(del);
                button.setAttribute('onclick', 'delete1(this);');
                div1.appendChild(button);

                let br = document.createElement("br");
                div1.appendChild(br);
                let input = document.createElement("input");
                input.type = "radio";
                input.name = "name" + Index;
                div1.appendChild(input);
                let label1 = document.createElement("label");
                label1.innerHTML = "label ";
                label1.contentEditable = true;
                div1.appendChild(label1);
                let button3 = document.createElement("button");
                let del1 = document.createTextNode("delete");
                button3.appendChild(del1);
                button3.setAttribute('onclick', 'delete2(this);');
                div1.appendChild(button3);
                let br1 = document.createElement("br");
                div1.appendChild(br1);


                // div1.innerHTML += `
                // <br/>
                // <input type="radio" name="name${Index}" value="value" > 
                // <label contentEditable = "true" >label</label>
                // <button type="button" onclick="delete2(this)">Delete</button><br>
                // `

            } else if (inputField.selectedIndex == 3) { //check box

                let label = document.createElement("label");
                label.innerHTML = " Untitled Field :";
                label.contentEditable = true;
                div1.appendChild(label);

                Index = Index + 1;

                let button1 = document.createElement("button");
                let add = document.createTextNode("Add CheckBox");
                button1.appendChild(add);
                button1.setAttribute('onclick', 'addCheckbox(this);');
                div1.appendChild(button1);
                let button = document.createElement("button");
                let del = document.createTextNode("delete");
                button.appendChild(del);
                button.setAttribute('onclick', 'delete1(this);');
                div1.appendChild(button);


                let br = document.createElement("br");
                div1.appendChild(br);
                let input = document.createElement("input");
                input.type = "checkbox";
                div1.appendChild(input);
                let label1 = document.createElement("label");
                label1.innerHTML = "label ";
                label1.contentEditable = true;
                div1.appendChild(label1);
                let button3 = document.createElement("button");
                let del1 = document.createTextNode("delete");
                button3.appendChild(del1);
                button3.setAttribute('onclick', 'delete2(this);');
                div1.appendChild(button3);
                let br1 = document.createElement("br");
                div1.appendChild(br1);


                // div1.innerHTML += `
                // <br/>
                // <input type="checkbox"  value=""> 
                // <label contentEditable = "true" >label</label>
                // <button type="button" onclick="delete2(this)">Delete</button><br>
                // `


            } else if (inputField.selectedIndex == 4) { //date

                let label = document.createElement("label");
                label.innerHTML = " Date :";
                label.contentEditable = true;
                div1.appendChild(label);
                let input = document.createElement("input");
                input.type = "date";
                div1.appendChild(input);
                let button = document.createElement("button");
                let del = document.createTextNode("delete");
                button.appendChild(del);
                button.setAttribute('onclick', 'delete1(this);');
                div1.appendChild(button);


            } else if (inputField.selectedIndex == 5) { //E-mail

                let label = document.createElement("label");
                label.innerHTML = " E-mail :";
                label.contentEditable = true;
                div1.appendChild(label);
                let input = document.createElement("input");
                input.type = "email";
                div1.appendChild(input);
                let button = document.createElement("button");
                let del = document.createTextNode("delete");
                button.appendChild(del);
                button.setAttribute('onclick', 'delete1(this);');
                div1.appendChild(button);


            } else if (inputField.selectedIndex == 6) { //DropDown

                let label = document.createElement("label");
                label.innerHTML = " Untitled Field :";
                label.contentEditable = true;
                div1.appendChild(label);

                Index = Index + 1;

                let input = document.createElement("input");
                input.id = "select";
                div1.append(input);



                let button1 = document.createElement("button");
                let add = document.createTextNode("Add Select Option");
                button1.appendChild(add);
                button1.setAttribute('onclick', 'addSelectOption(this);');
                div1.appendChild(button1);

                let button = document.createElement("button");
                let del = document.createTextNode("delete");
                button.appendChild(del);
                button.setAttribute('onclick', 'delete1(this);');
                div1.appendChild(button);


                let br = document.createElement("br");
                div1.appendChild(br);
                let select = document.createElement("select");
                let option = document.createElement("option");
                option.innerHTML = "select option";
                select.appendChild(option);
                div1.appendChild(select);




                // div1.innerHTML += `
                // <br/>
                // <select> 
                // <option value="value">Select Option</option>
                // </select>
                // `


            }
            //  else if (inputField.selectedIndex == 7) { //submit

            //     let input = document.createElement("input");
            //     input.type = "submit";
            //     div1.appendChild(input);
            //     let button = document.createElement("button");
            //     let del = document.createTextNode("delete");
            //     button.appendChild(del);
            //     button.setAttribute('onclick', 'delete1(this);');
            //     div1.appendChild(button);
            // }
            div.appendChild(div1);

        }
        let button1 = document.createElement("button");
        let del1 = document.createTextNode("delete");
        button1.appendChild(del1);
        button1.setAttribute('onclick', 'delete1(this);');
        div.appendChild(button1);


        form.insertBefore(div, form.children[pos]);
    }

}

function delete1(d) {
    d.parentElement.remove();
}

function delete2(d) {
    d.previousElementSibling.remove();
    d.previousElementSibling.remove();
    d.previousElementSibling.remove();
    d.remove();
}

function delete3(d) {
    // d.previousElementSibling.remove();
    // d.previousElementSibling.remove();
    d.previousElementSibling.remove();
    d.remove();
}

function addRadio(t) {

    let check = t.parentElement.getElementsByTagName("input")[0].name;

    let input = document.createElement("input");
    input.type = "radio";
    input.name = check;
    t.parentElement.appendChild(input);
    let label = document.createElement("label");
    label.innerHTML = "label ";
    label.contentEditable = true;
    t.parentElement.appendChild(label);

    let button = document.createElement("button");
    let del1 = document.createTextNode("delete");
    button.appendChild(del1);
    button.setAttribute('onclick', 'delete2(this);');
    t.parentElement.appendChild(button);
    let br1 = document.createElement("br");
    t.parentElement.appendChild(br1);


    // t.parentElement.innerHTML += `
    // <input type="radio" name="${check}" value="value" > 
    // <label contentEditable = "true" >label</label>
    // <button type="button" onclick="delete2(this)">Delete</button><br>
    // `

}

function addCheckbox(t) {

    // let check = t.parentElement.getElementsByTagName("input")[0].name;

    let input = document.createElement("input");
    input.type = "checkbox";
    // input.name = check;
    t.parentElement.appendChild(input);
    let label = document.createElement("label");
    label.innerHTML = "label ";
    label.contentEditable = true;
    t.parentElement.appendChild(label);

    let button = document.createElement("button");
    let del1 = document.createTextNode("delete");
    button.appendChild(del1);
    button.setAttribute('onclick', 'delete2(this);');
    t.parentElement.appendChild(button);
    let br1 = document.createElement("br");
    t.parentElement.appendChild(br1);


    // t.parentElement.innerHTML += `
    // <input type="checkbox" value="value" > 
    // <label contentEditable = "true" >label</label>
    // <button type="button" onclick="delete2(this)">Delete</button>
    // <br>
    // `


}


function addSelectOption(t) {

    let s = t.parentElement.children;
    let input = s[1];
    let select = s[5];

    let option = document.createElement("option");
    option.innerHTML = input.value;
    option.value = input.value;
    select.appendChild(option);




    // select.innerHTML += `
    // <option value="value">${input.value}</option><br/>
    // `


}

function createForm() {
    // let arrEle = form.innerHTML;
    // localStorage.setItem("arrEle", JSON.stringify(arrEle));

    let arrEle = [];

    let formChild = form.children;
    arrEle.push(formChild[0].innerHTML); //formName

    for (let i = 0; i < formChild.length; i++) {
        let div = formChild[i].getElementsByTagName("div");
        for (let j = 0; j < div.length; j++) {
            let obj = {};


            if (formChild[i].children[0].children[5] == "select") {
                console.log("select");
                let label = div[j].getElementsByTagName("label");
                let lName = [];
                let option = form.children[6].children[0].children[5].children;
                for (let l = 1; l < option.length; l++) {
                    lName.push(option[l].innerHTML);
                }
                
                obj = {
                    labelName: label[0].innerHTML,
                    label: lName
                }
                

            } else {
                let label = div[j].getElementsByTagName("label");
                let input = div[j].getElementsByTagName("input");
                let lName = [];
                for (let l = 1; l < label.length; l++) {
                    console.log(label[l].innerHTML);
                    lName.push(label[l].innerHTML);
                }

                obj = {
                    labelName: label[0].innerHTML,
                    type: input[0].type,
                    label: lName
                }
            }
            arrEle.push(obj);

        }


    }

    console.log(arrEle);

    localStorage.setItem("arrEle", JSON.stringify(arrEle));
    window.open("form.html");

}