/* 
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception you\'ll never see this');
}

// beforeTryCatch();
//this is america
function afterTryCatch() {
    try {

        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exception you\'ll never see this.')
    } catch (error) {

        console.log('I caught an exception: ' + error.message);

    } finally {
        console.log('This will happen no matter what.');

    }

    console.log('My app is still running!');

}

afterTryCatch(); */

function performCalculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    // contineu withthe calculation
    return 6;
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value  = performCalculation(obj);
    } catch (error) {
        console.log(error.message);
    }

    if (value == 0) {
        //contingency
        //retry logic
        //etc, see if it works

    }
}

performHigherLevelOperation();