document.addEventListener("scroll", expandNavBar)


function expandNavBar() {
    
    let offset = ( window.scrollY / ( document.body.scrollHeight - window.innerHeight ) ) * 100
    
    if (offset < 50) {

        document.getElementById(contact).style.visibility = "visible"

    }
}
