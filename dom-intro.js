(function() {


    function clickHandler(message) {
        console.log('hi... ' + message);
    }

    // Get the reference to my button
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() { clickHandler('hi from IIFE') });

})();

