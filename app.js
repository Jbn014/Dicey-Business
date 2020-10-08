class Die {
    constructor(){
        this.roll();
    }

    roll() {
        this.value = Math.ceil(Math.random()*6);
    }
    

}

D = new Die();
console.log(D.value);