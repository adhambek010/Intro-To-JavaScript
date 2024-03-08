const displayData = (callback) => {
    let request = new  XMLHttpRequest();
    // Open a connection to the API server
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            // console.log(request.responseText);
            callback(undefined, request.responseText);
        }else if(request.readyState === 4){
            callback("Error while calling the API", undefined);
        }

    });

}

displayData((err, data) => {
    if(err){
        console.log(`An error  occurred: ${err}`);
    } else{
        console.log(data)
    }
});

