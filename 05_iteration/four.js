//for in loop

const obj= {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in obj){
    //console.log(`${key} shortcut is for ${obj[key]}`);   
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const program in programming){
    //console.log(programming[program]);  
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// for (const key in map) {
//     console.log(map[key]);
// }