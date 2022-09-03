let ul = document.querySelector("ul")
let input = document.querySelector("input")
let addbtn = document.querySelector("button")
let wrapper = document.getElementById("wrapper")
let value = input.value
let arr = []

addbtn.disabled = true
input.addEventListener('keyup', () => {
    addbtn.disabled = false
})

addbtn.addEventListener('click', add)
function add(editfunc) {
    if (addbtn.innerHTML = 'Add')
        ul.innerHTML = ''

    let obj = {
        id: new Date(),
        text: input.value
    }


    obj.text = input.value
    arr.push(obj)

    for (var i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        li.setAttribute('id', arr[i].id)
        var h2 = document.createElement('h2');
        h2.innerHTML = arr[i].text
        li.appendChild(h2)


        let div = document.createElement("span")
        div.classList.add("div-collaj")
        let edit = document.createElement("span")
        edit.innerHTML = "Edit"
        edit.classList.add("edit-button")
        div.appendChild(edit)

        let removebtn = document.createElement("button")
        removebtn.innerHTML = "X"
        removebtn.classList.add("delete-button")
        div.appendChild(removebtn)
        li.appendChild(div)
        if (addbtn.innerHTML = 'Add') {
            ul.appendChild(li)
            input.value = ''
            addbtn.disabled = true
        }

        //edit element
        edit.addEventListener('click', () => {

            addbtn.disabled = false
            addbtn.innerText = 'Save'
            arr.forEach(element => {
                if (element.id == edit.parentElement.parentElement.id) {
                    input.value = element.text


                }
            })


            if (addbtn.innerText = 'Save') {
                addbtn.addEventListener('click', () => {
                    console.log('yesy')
                    edit.parentElement.parentElement.firstChild.textContent = input.value

                })
            }

        })


        //remove element
        removebtn.addEventListener('click', () => {
            removebtn.parentElement.parentElement.remove()
            arr.forEach(element => {
                if (element.id == removebtn.parentElement.parentElement.id) {
                    arr.splice(element, 1);

                }
                console.log(arr)
            });


        })

    }

}



