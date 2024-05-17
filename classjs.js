class User{
    constructor(name,email){
        this.name = name;
        this.email = email
    }


    // if we want to make this private just use #courselist = [] (we can get same result in getcourseList) -- in class no need to use let , const, var
    courseList = []

    getinfo(){
        return {name : this.name, email : this.email }
    }


    // setters
    enrollCourse(name){
        this.courseList.push(name)
    }


    // getters
    getCourseList(){
        return this.courseList;
    }
    
}

var akshatha = new User("akshatha","akshatha8@gmail.com")
console.log(akshatha)

akshatha.enrollCourse("Angular")
akshatha.enrollCourse("React")

console.log(akshatha.getCourseList())



let course = akshatha.courseList()

course.forEach(c => {
    console.log(c)
});






