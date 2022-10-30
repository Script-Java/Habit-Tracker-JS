const input = document.getElementById("todo_name");
const add = document.getElementById("add");
const todo = document.getElementsByClassName("todo");

// ERROR FIX FUNCTION

async function get_quote(){
    const req = await fetch("https://zenquotes.io/api/quotes/");
    if (req.ok) {
        const json = await req.json()
        return json
    }
    else {
        alert("ERROR " + req.status)
    }
}


get_quote()