// GETTING THE HTML ELEMENT BY ID 
countEl = document.getElementById("hello")

//INITIALIZING COUNT VARIABLE TO 0 FIRST BEFORE ANY INCREMENT IS DONE
count = 0

// FUNTION TO INCREMENT THE COUNT AS PEOPLE INCREASE AND RENDER IT ON THE HTML ELEMENT
function increment() {
    // this increments the count variable by one when the increment button on HTML is clicked
    count += 1
        // this renders the increment on the HTML element
    countEl.innerText = count
}
saveEl = document.getElementById("save")

// FUNCTION TO SAVE THE COUNT AND RENDER IT ON THE HTML ELEMENT
function save() {
    let saving = count + " - "
    saveEl.innerText += saving
}