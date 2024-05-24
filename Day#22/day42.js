//Question 124
var StudentData = {
    name: "John",
    age: 20,
    course: "Angular",
    grade: 90,
    rollnumber: function (value) {
        if (value === 125118) {
            console.log("Congratulations " + this.name + "! You are successfully enrolled.");
            return "Your RollNumber : " + value;
        }
        else {
            console.log("Student data not found!");
            return "You may be trying to enter this RollNumber: 125118";
        }
    }
};
console.log(StudentData.rollnumber(125148));
console.log(" ");
console.log(StudentData.rollnumber(125118));
//Question 125
var rectangle = {
    length: 10,
    height: 15,
    area: function () {
        return this.length * this.height;
    }
};
console.log(rectangle.area());
//Question 126
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
myObject.outerMethod();
