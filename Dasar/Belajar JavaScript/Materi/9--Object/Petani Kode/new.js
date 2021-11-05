function person(fristName, lastName){
   this.fristName=fristName;
   this.lastName=lastName;
   
   this.fullName=function(){return ${this.fristName};${this.lastName};};
   this.showName=function(){return console.log(this.fullName())};
}
var person1=new person('Yusril','arzaqi');
person1.showName();