const myInfo = {
    isMale : true,
    Bio:function(){
        console.log(`My name is ${this.name}. Am I male? ${this.isMale}`);
        
    }
}

const myself = Object.create(myInfo);
myself.name = 'Avishek';
myself.Bio();