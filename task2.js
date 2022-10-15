class automobile {
    constructor( name, model, color, type) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
        function start() {
            console.log("The car is ready to start")
        }
        function opendoor() {
            console.log("door is open")
        }
    }
}

class car extends automobile {
    constructor( name, model, color, type) {
        super( name, model, color, type);
    }
}
class truck extends automobile {
    constructor( name, model, color, type) {
        super( name, model, color, type);
    }
}
class bus extends automobile {
    constructor( name, model, color, type) {
        super( name, model, color, type);
    }
}

mycar = new car("honda", "civic","red", "4 sitter");
mytruck = new truck("mazda", "z-18" ,"white", "2 sitter");
mybus = new bus("divo", "longp","black", "34 sitter");
console.log(mycar);
console.log(mytruck);
console.log(mybus);