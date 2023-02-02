//Task 1
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
    let factory = {
        facName : 'Volkswagen Wolfsburg Plant',
        calculateWorkload : function (){
            const employeeWorkData = this.employeeWeeklyWorkload;
            const worksResData = [];
            if(employeeWorkData && employeeWorkData.length > 0) {
                for (let emp of employeeWorkData) {
                    worksResData.push(emp.workload || emp.timeSpent)
                }
                return worksResData
            } else 'Invalid Data';
        },
        formatArray : function (name) {
            const employeeData = this.employees;
            if (employeeData && employeeData.length > 0) {
                employeeData.find((el) => el.name === name );
                return{ name : emp.name , timeLeft , 5 - emp.timeSpent};
            } else return 'Invalid Data';
        }
        
    }

    let factoryEmployees = {
        employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
        employeeNum : this.employees.length,
    }

    let workloadData = {
        employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", timeSpent : 25 },{name : "Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
    }

    let workArr = factory.calculateWorkload.bind(worksResData)
    console.log(workArr)

//Task 2

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 

*/
    function sumOfNumbers() {
        let sum = 0;
        for (let i=0; i < arguments.length;i++) {
            sum += arguments[i];
        } return sum;
    }
    const randomNumbers =[11,22,33]
    const result = sumOfNumbers.apply(null,randomNumbers);
    console.log(result)

//Task 3
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია
    
*/
    function checkIfEven(num) {
        if (num === 0) {
            return true;
        } else if (num === 1) {
            return false;
        } else {
            console.log(num);
            return checkIfEven(num % 2);
        }
    }

    
    console.log(checkIfEven(12));



//Task 4 
//გვაქვს ორი მასივი
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
//დაწერეთ ფუნქცია რომელიც გადაცემული მასივის ელემენტების მიხედვით დააბრუნებს შემდეგ ტექსტს : 
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// უნდა გამოვიყენოთ რიგითი რიცხვები წინადადების შესადგენად 1 - first - 1st , 2 - second - 2nd ...
    function choices(colors, ordinals) {
        var result = [];
        for (var i = 0; i < colors.length; i++) {
          var choiceNum = i + 1;
          var ordinal = "";
          if (choiceNum > 3) {
            ordinal = "th";
          } else {
            ordinal = ordinals[choiceNum - 1];
          }
          result.push(choiceNum + ordinal  + "Choice " + "is " + colors[i]);
        }
        return result;
      }
      
      console.log(choices(["blue", "green", "red", "orange", "purple", "indigo", "yellow"], ["st", "nd", "rd"]));
    
//Task 5
/**
 * დაწერეთ ფუნქცია რომელიც მასივიდან წაშლის falsy values მქონდე ელემენტებს 'null', '0', '""', 'false', 'undefined' and 'NaN' .
 * arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * ფუნქციამ უნდა დააბრუნოს [15,-22,57]
 */
    arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
    let myFilterArray = arr.filter(Boolean);
    console.log(myFilterArray)

//Task 6 
/**
 * დაწერეთ ფუნქცია რომელიც ორ მასივს აერთიანებს და დუბლირებულ მნიშვნელობებს შლის 
 * function mergeArr(arr1,arr2) 
 * arr1 = [1,2,3]
 * arr2 = [2,1,30]
 * დაბრუნებული მნიშვენლობა უნდა იყოს [1,2,3,30]
 */

    let arr1 = [1,2,3];
    let arr2 = [2,1,30];
    let arr3 = arr1.concat(arr2);
    let unique = [...new Set(arr3)];
    console.log(unique)
    

//Task 7
/**
 * გვავქს ორი ინდივიდუალური ელემენტების/სიგრძის მასივი , დაწერეთ ფუნქცია რომელიც დააბრუნებს ახალ მასივის
 * რომლის თითოეული ელემენტი იქნება შესაბამის ინდექსებზე მდგომი ელემენტების ჯამი
 * მაგ : 
 * [1,10,12,13] [4,5] -> [5,15,12,13]
 *                       [1+4,10+5,12,13]
 * 
 */
    

    const arr = [
        [1, 10, 12, 13],[4, 5]
    ];
    const sumArray = (array) => {
        const newArray = [];
        array.forEach(sub => {
        sub.forEach((num, index) => {
            if(newArray[index]){
                newArray[index] += num;
            }else{
                newArray[index] = num;
            }
        });
        });
        return newArray;
    }
    console.log(sumArray(arr));