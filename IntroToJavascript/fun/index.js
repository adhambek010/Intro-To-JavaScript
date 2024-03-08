// let info = fetch('https://jsonplaceholder.typicode.com/todos/1');

const info = async() => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
   
    const data = await responce.json();
    return data;
};
 
console.log(info);
// info().then(data=> { console.log(`Name ${data["title"]}`)});
