Do not use .push() at arrays in React. Use Array spread method [...].

Ex:
function addItem() {

        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
    }
