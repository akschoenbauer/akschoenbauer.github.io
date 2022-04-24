/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/

 let employeeList = {
   'employees': [
     {
       'firstName': 'Sam',
       'department': 'Tech',
       'designation': 'Manager',
       'salary': 40000,
       'raiseEligible': true
     },
     {
       'firstName': 'Mary',
       'department': 'Finance',
       'designation': 'Trainee',
       'salary': 18500,
       'raiseEligible': true
     },
     {
       'firstName': 'Bill',
       'department': 'HR',
       'designation': 'Executive',
       'salary': 21200,
       'raiseEligible': false
     },
   ]
 }

console.log('/// Problem 1 ///');
console.log(employeeList['employees']);


/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/

 let company = {
   'companyName': 'Tech Stars',
   'website': 'www.techstars.site',
   'employees': [
     {
       'firstName': 'Sam',
       'department': 'Tech',
       'designation': 'Manager',
       'salary': 40000,
       'raiseEligible': true
     },
     {
       'firstName': 'Mary',
       'department': 'Finance',
       'designation': 'Trainee',
       'salary': 18500,
       'raiseEligible': true
     },
     {
       'firstName': 'Bill',
       'department': 'HR',
       'designation': 'Executive',
       'salary': 21200,
       'raiseEligible': false
     },
   ]
 }

console.log('/// Problem 2 ///');
console.log(company);



/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/

function addEmployee(obj, employeeName, department, designation, salary, raiseEligible) {
  let newEmployee = {
    'firstName': employeeName,
    'department': department,
    'designation': designation,
    'salary': salary,
    'raiseEligible': raiseEligible
  };
  obj['employees'].push(newEmployee);

}

addEmployee(company, 'Anna', 'Tech', 'Executive', 25600, false);
addEmployee(employeeList, 'Anna', 'Tech', 'Executive', 25600, false);

console.log('/// Problem 3 ///');
console.log(company['employees']);
console.log(employeeList['employees']);


/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/

let salaryTotal = 0;
for (const index of company.employees) {
  salaryTotal += index.salary;
};

console.log('/// Problem 4 ///');
console.log(`Salary Total: ${salaryTotal}`);


/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/

console.log('/// Problem 5 ///');
// For as long as there is an item in the employee array {
for (var i =0; i < company['employees'].length; i++) {
  // if the employee is raise eligible {
  if (company['employees'][i]['raiseEligible']==true) {
    // Save the employee's current salary to a holding variable (currSalary)
    let initialSalary = company['employees'][i]['salary'];
    // Create a new variable (newSalary) and set it equal to ((current salary * 0.10) + current salary)
    let newSalary = (initialSalary*1.1)
    // Set the salary value in the JSON to equal newSalary
    company['employees'][i]['salary'] = newSalary
    // Set the raise eligibility value in the JSON to false
    company['employees'][i]['raiseEligible'] = false;
    // print the results
    console.log(`Employee Name: ${company['employees'][i]['firstName']}`);
    console.log(`Initial Salary: ${initialSalary}`);
    console.log(`New Salary: ${company['employees'][i]['salary']}`);
  }
}

/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/


for (var i =0; i < company['employees'].length; i++)
{
    if (company['employees'][i]['firstName']=='Sam' || company['employees'][i]['firstName'] == 'Anna') {
      company['employees'][i].wfh ='true';
    }
    else {
      company['employees'][i].wfh='false';
    }

}
console.log('/// Problem 6 ///');
console.log(company['employees']);
