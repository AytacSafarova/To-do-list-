let ul = document.querySelector("ul")
let input = document.querySelector("input")
let addbtn = document.querySelector("button")
let value = input.value
// addbtn.disabled="true"
let edits
let arr = []
let obj = {
    id: new Date(),
    text: input.value
}
let edit 
addbtn.disabled=true
input.addEventListener('keyup', ()=>{
addbtn.disabled=false
// console.log('salam')
})

addbtn.addEventListener('click', add)
function add() {
    ul.innerHTML = ''

    let obj = {
        id: new Date(),
        text: input.value
    }


    obj.text = input.value
    arr.push(obj)

    for (var i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        li.setAttribute('id',arr[i].id )
        var h2 = document.createElement('h2');
        h2.innerHTML = arr[i].text
        li.appendChild(h2)
        // console.log(arr[i].text)


        let div = document.createElement("span")
        div.classList.add("div-collaj")


        edit = document.createElement("span")
        edit.innerHTML = "Edit"
        edit.classList.add("edit-button")
        edit.setAttribute('onclick', func)
    //   edits= document.querySelectorAll(".edit-button")
// edit.addEventListener('click', ()=>{
//     console.log("item")
// })
        div.appendChild(edit)



        let removebtn = document.createElement("button")
        removebtn.innerHTML = "X"
        removebtn.classList.add("delete-button")
        div.appendChild(removebtn)
        li.appendChild(div)
        removebtn.addEventListener('click', () => {
            removebtn.parentElement.parentElement.remove()
            // console.log(removebtn.parentElement.parentElement.firstChild.textContent)
            arr.forEach(element => {
                if (element.id == removebtn.parentElement.parentElement.id) {
                    arr.splice(element, 1);
           
                }
                // console.log(arr)
            });

        })
        ul.appendChild(li)
        input.value = ''
        addbtn.disabled=true





    }

}
// edits.forEach(element=>{
//     console.log(element)
// })
// console.log(edit)


// edit.addEventListener('click', () => {
         
//     addbtn.innerHTML = "Save"
//     addbtn.disabled = false
//     arr.forEach(element => {
//         if (element.id == removebtn.parentElement.parentElement.id) {
//             input.value = element.text         
//         }
//         console.log(arr)
//     });        })



const func= ()=>{
    console.log("hi")
}