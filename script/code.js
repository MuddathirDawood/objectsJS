// const people = {
//     firstName: 'Peter',
//     lastName: 'Henk',
//     age: 30,
//     calculateSalary: (hours, rate)=>{
//                             return hours * rate
//                          } 
// }

// console.log(`
// Name: ${people.firstName} 
// Surname: ${people.lastName} 
// Age: ${people.age} 
// Salary: R${people.calculateSalary(50,650)} 
//            `);

// if (people.hasOwnProperty('age')) {
//         console.log(people['age'])    
// }else{
//     console.warn('Key not found')
// }

/* FACTORY FUNCTION */
// function Employee(name, surname, company) {
//     return{
//         display: ()=>{
//                         document.write(`
//                         Name: ${name} <br>
//                         Surname: ${surname} <br>
//                         Company: ${company} <br><br>
//                                       `)
//                      }
//     }
// }

// let emp1 = Employee('Muddathir','Dawood','MDeez');
// let emp2 = Employee('Jared','Issacs','Akuto');
// let emp3 = Employee('Daniel','Fredericks','DF')

// Display
// emp1.display();
// emp2.display();
// emp3.display();

// Employee(prompt('Name',''),prompt('Surname',''),prompt('Company',''));

/* EXERCISE */
function People(name,hour,rate){
    return{
         fName: name,
         Salary: hour*rate,
         display: ()=>{
                        document.write(`
                        Name: ${this.fName} <br>
                        Salary: ${this.Salary} <br><br>
                        `)
                      }
    }
} 

let employee1 = People('Peter',40,500);
let employee2 = People('Samuel',80,300);

employee1.display();
employee2.display();