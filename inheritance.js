class Admin{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    getInfo(){
        return {name : this.name, email : this.email}
    }

    courseList = []

    getter(){
        return this.courseList;
    }
    setter(course){
        this.courseList.push(course)
    }

        // static keyword wont let this function to extend in child class
    static login(){
        console.log("You have logged in successfully")
    }
}

class subAdmin extends Admin{
    constructor(name,email){
        super(name,email)
    }

    login(){
        console.log("logged into subAdmin") 
    }


}

var abced = new subAdmin("abced", "@outlook.com")
abced.setter("java");
console.log(abced.courseList)










