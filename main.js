let btn_show = document.querySelector('.btn-show')
let menu = document.querySelector('.menu')
let close_menu = document.querySelector('.switch')
let form = document.forms.menu
let show_form = document.forms.form
let inps = form.querySelectorAll('input')
let todos = []
let main = document.querySelector('.main')


close_menu.onclick = () => {

    menu.classList.toggle('active')

}

btn_show.onclick = () => {

    menu.classList.toggle('active')

}

function onsubmit() {

    form.onsubmit = (e) => {
        e.preventDefault()
    
        let fm = new FormData(form)
    
        const data = {}
    
    
        fm.forEach((val, key) => data[key] = val)
    
    
        todos.push(data)
    
        reload(todos, main)
    
    }
}



function reload(arr, place) {
    place.textContent = ""

    for (let item of arr) {
        let block = document.createElement('div')

        let h1 = document.createElement('h1')
        let h3 = document.createElement('h3')


        h3.textContent = item.price + "$"
        h1.textContent = item.goods
        block.classList.add("block")
        h3.classList.add('h3')
        h1.classList.add(
         'h1'
        )
        place.append(block)
        block.append(h1, h3)

    }
}

inps.forEach(inp => {
    inp.onkeyup = () => {
        let reg = patterns[inp.name]
        
        if(isNaN(inp.value)) {
            inp.classList.add('error-field')
        } else {
            inp.classList.remove('error-field')
        }
    
        if (reg.test(inp.value)) {
            inp.classList.remove('error-field')
            onsubmit()
        } else  {
            inp.classList.add('error-field')
        }
    }
        
})


const patterns = {
    goods: /^[a-z ,.'-]+$/i,
}