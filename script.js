document.querySelectorAll("section").forEach(function(div){ 

    div.addEventListener("mouseenter", function(event){
        const el = event.target
        const id = el.id
        let zoom = document.getElementById(`${id}`)
        zoom.style.height = '400px'
        zoom.style.width = '400px'
        zoom.style.backgroundSize = '400px'
    })
    div.addEventListener("mouseout", function(event){
        const el = event.target
        const id = el.id
        let zoom = document.getElementById(`${id}`)
        zoom.style.height = ''
        zoom.style.width = ''
        zoom.style.backgroundSize = ''
    })
})
    