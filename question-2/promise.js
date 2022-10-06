/*
                                                                     Question 2: 

                                    Given the script file callbacks.js, write a script that does the following:

            o Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
            o Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
            o Call both promises separately and handle the resolved and reject results and then output to the console


*/

// resolved promise
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});
        }, 500);
    });
}

// rejected promise

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'rejected promise!'});
        }, 500);
    });
}


// printing: then for resolved promise
resolvedPromise().then(res => console.log(res))

// printing: catch for rejected promise
rejectedPromise().catch(err => console.log(err))