//Function of Squaring of numbers

function square(num){
    let sq = num * num;
    console.log(`Square root of ${num} is ${sq}`);
}
square(6);   

// Callback Function

function hello(name,func,a){
    console.log(`Hello ${name}`);
    func(a);
}

function bye(a){
    console.log("See you next time!");
    a();
}

function welcome(){
    console.log("Welcome to the JavaScript world!");
}

hello("Sukant",bye,welcome)

//  9|6|2025

function delay(){
    return new Promise(resolve => setTimeout(() => {
        resolve("Delay completed!");
    }, 3500));
}

async function run(){
    console.log("Waiting for delay...");
    const result = await delay();
    console.log(result);
}

run();