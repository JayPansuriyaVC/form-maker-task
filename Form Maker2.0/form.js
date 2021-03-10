let arrEle = JSON.parse(localStorage.getItem("arrEle"));

let form = document.getElementById("formMaker");


let h1 = document.createElement("h1");
let t1 = document.createTextNode(arrEle[0]);
h1.appendChild(t1);
form.appendChild(h1);


for (let i = 1; i < arrEle.length; i++) {

    let label = document.createElement("label");
    let t = document.createTextNode(arrEle[i].labelName);
    label.appendChild(t);
    form.appendChild(label);


    // let input = document.createElement("input");
    // input.type = arrEle[i].type;
    // form.appendChild(input);
    // let label1 = document.createElement("label");
    // let t = document.createTextNode(arrEle[i].lable[j]);
    // label1.appendChild(t);
    // form.appendChild(label1);

    if (arrEle[i].type == "radio") {

        for (let j = 0; j < arrEle[i].label.length; j++) {

            let input = document.createElement("input");
            input.type = arrEle[i].type;
            input.name = 'name' + i;
            form.appendChild(input);

            let label1 = document.createElement("label");
            let t = document.createTextNode(arrEle[i].label[j]);
            label1.appendChild(t);
            form.appendChild(label1);
        }

        let br = document.createElement("br");
        form.appendChild(br);

    } else if (arrEle[i].type == "checkbox") {

        for (let j = 0; j < arrEle[i].label.length; j++) {
            let input = document.createElement("input");
            input.type = arrEle[i].type;
            form.appendChild(input);

            let label1 = document.createElement("label");
            let t = document.createTextNode(arrEle[i].label[j]);
            label1.appendChild(t);
            form.appendChild(label1);


        }
        let br = document.createElement("br");
        form.appendChild(br);

    }else if (arrEle[i].type == "dropdown") {

        for (let j = 0; j < arrEle[i].label.length; j++) {
            let input = document.createElement("input");
            input.type = arrEle[i].type;
            form.appendChild(input);

            let label1 = document.createElement("label");
            let t = document.createTextNode(arrEle[i].label[j]);
            label1.appendChild(t);
            form.appendChild(label1);


        }
        let br = document.createElement("br");
        form.appendChild(br);

    }else{

        let input = document.createElement("input");
        input.type = arrEle[i].type;
        form.appendChild(input);

        let br = document.createElement("br");
        form.appendChild(br);
    }

}

let input = document.createElement("input");
input.type = "submit";
input.addEventListener("click",createTable);
form.appendChild(input);







let arrInput = [];

function createTable(event) {
    event.preventDefault();
    console.log("hello jd");
    // localStorage.setItem("arrInput",JSON.stringify(arrInput));
}