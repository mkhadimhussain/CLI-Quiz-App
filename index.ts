#! /usr/bin/env node

import inquirer from "inquirer"

console.log("*********************************************");
console.log("*************WELCOME TO QUIZ APP*************")
console.log("*********************************************\n");

console.log("There are 12 TypeScript Questions In This Quiz.\n");

let attemptAns = await inquirer.prompt(
    [
        {
            name: "attempt",
            message: "Are You Want to Attempt this Quiz: ",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]
);

// When attempt is yes
if (attemptAns.attempt === "Yes") {

    // Question 1
    let answer1 = await inquirer.prompt(
        [
            {
                name: "q1",
                message: "\nconsole.log(10 > 20)",
                type: "list",
                choices: ["A. true", "B. false", "C. Yes", "D. No"]
            }
        ]
    );
    if (answer1.q1 === "B. false") {
        console.log("Correct Answer! \n");
    }
    else if (answer1.q1 === "A. true") {
        console.log("Wrong Answer!\n");
    }
    else if (answer1.q1 === "C. Yes") {
        console.log("Wrong Answer!\n");
    }
    else if (answer1.q1 === "D. No") {
        console.log("Wrong Answer!\n");
    }

    // Question 2
    let answer2 = await inquirer.prompt(
        [
            {
                name: "q2",
                message: "\nconsole.log(6 < 15)",
                type: "list",
                choices: ["A. true", "B. false", "C. Yes", "D. No"]
            }
        ]
    );
    if (answer2.q2 === "A. true") {
        console.log("Correct Answer! \n");
    }
    else if (answer2.q2 === "B. false") {
        console.log("Wrong Answer!\n");
    }
    else if (answer2.q2 === "C. Yes") {
        console.log("Wrong Answer!\n");
    }
    else if (answer2.q2 === "D. No") {
        console.log("Wrong Answer!\n");
    }

    // Question 3
    let answer3 = await inquirer.prompt(
        [
            {
                name: "q3",
                message: "\nconsole.log(9 != 9)",
                type: "list",
                choices: ["A. true", "B. false", "C. Yes", "D. No"]
            }
        ]
    );
    if (answer3.q3 === "B. false") {
        console.log("Correct Answer! \n");
    }
    else if (answer3.q3 === "A. true") {
        console.log("Wrong Answer!\n");
    }
    else if (answer3.q3 === "C. Yes") {
        console.log("Wrong Answer!\n");
    }
    else if (answer3.q3 === "D. No") {
        console.log("Wrong Answer!\n");
    }

    // Question 4
    let answer4 = await inquirer.prompt(
        [
            {
                name: "q4",
                message: "\nlet n: number = 10; \nlet n += 10; \nlet n++; \nconsole.log(n);",
                type: "list",
                choices: ["A. 11", "B. 10", "C. 20", "D. 21"]
            }
        ]
    );
    if (answer4.q4 === "D. 21") {
        console.log("Correct Answer! \n");
    }
    else if (answer4.q4 === "A. 11") {
        console.log("Wrong Answer!\n");
    }
    else if (answer4.q4 === "B. 10") {
        console.log("Wrong Answer!\n");
    }
    else if (answer4.q4 === "C. 20") {
        console.log("Wrong Answer!\n");
    }

    // Question 5
    let answer5 = await inquirer.prompt(
        [
            {
                name: "q5",
                message: "\nWhat is the name of this '&&' Logical Operator?",
                type: "list",
                choices: ["A. NOT", "B. OR", "C. AND", "D. None"]
            }
        ]
    );
    if (answer5.q5 === "C. AND") {
        console.log("Correct Answer! \n");
    }
    else if (answer5.q5 === "A. NOT") {
        console.log("Wrong Answer!\n");
    }
    else if (answer5.q5 === "B. OR") {
        console.log("Wrong Answer!\n");
    }
    else if (answer5.q5 === "D. None") {
        console.log("Wrong Answer!\n");
    }

    // Question 6
    let answer6 = await inquirer.prompt(
        [
            {
                name: "q6",
                message: "\nExtension of typescript is?",
                type: "list",
                choices: ["A. .js", "B. .ty", "C. .ts", "D. .td"]
            }
        ]
    );
    if (answer6.q6 === "C. .ts") {
        console.log("Correct Answer!\n");
    }
    else if (answer6.q6 === "A. .js") {
        console.log("Wrong Answer!\n");
    }
    else if (answer6.q6 === "B. .ty") {
        console.log("Wrong Answer!\n");
    }
    else if (answer6.q6 === "D. .td") {
        console.log("Wrong Answer!\n");
    }

    // Question 7
    let answer7 = await inquirer.prompt(
        [
            {
                name: "q7",
                message: "\nlet age: number = 22; \nWhich term best describes this statement?",
                type: "list",
                choices: ["A. Type Inference", "B. Inference", "C. Strong", "D. Strongly Type"]
            }
        ]
    );
    if (answer7.q7 === "D. Strongly Type") {
        console.log("Correct Answer!\n");
    }
    else if (answer7.q7 === "A. Type Inference") {
        console.log("Wrong Answer!\n");
    }
    else if (answer7.q7 === "B. Inference") {
        console.log("Wrong Answer!\n");
    }
    else if (answer7.q7 === "C. Strong") {
        console.log("Wrong Answer!\n");
    }

    // Question 8
    let answer8 = await inquirer.prompt(
        [
            {
                name: "q8",
                message: "\nTypeScript is ?",
                type: "list",
                choices: ["A. Case-sensitive", "B. Case-insensitive", "C. Both", "D. None of them"]
            }
        ]
    );
    if (answer8.q8 === "A. Case-sensitive") {
        console.log("Correct Answer!\n");
    }
    else if (answer8.q8 === "B. Case-insensitive") {
        console.log("Wrong Answer!\n");
    }
    else if (answer8.q8 === "C. Both") {
        console.log("Wrong Answer!\n");
    }
    else if (answer8.q8 === "D. None of them") {
        console.log("Wrong Answer!\n");
    }

    // Question 9
    let answer9 = await inquirer.prompt(
        [
            {
                name: "q9",
                message: "\nlet user_name: string = 'Alice'; \nThe variable is in?",
                type: "list",
                choices: ["A. Camel Case", "B. Upper Case", "C. Snake Case", "D. Lower Case"]
            }
        ]
    );
    if (answer9.q9 === "C. Snake Case") {
        console.log("Correct Answer!\n");
    }
    else if (answer9.q9 === "A. Camel Case") {
        console.log("Wrong Answer!\n");
    }
    else if (answer9.q9 === "B. Upper Case") {
        console.log("Wrong Answer!\n");
    }
    else if (answer9.q9 === "D. Lower Case") {
        console.log("Wrong Answer!\n");
    }

    // Question 10
    let answer10 = await inquirer.prompt(
        [
            {
                name: "q10",
                message: "\nlet fruit: string = 'apple'; \nconsole.log(fruit.toUpperCase());",
                type: "list",
                choices: ["A. apple", "B. Apple", "C. APPle", "D. APPLE"]
            }
        ]
    );
    if (answer10.q10 === "D. APPLE") {
        console.log("Correct Answer!\n");
    }
    else if (answer10.q10 === "A. apple") {
        console.log("Wrong Answer!\n");
    }
    else if (answer10.q10 === "B. Apple") {
        console.log("Wrong Answer!\n");
    }
    else if (answer10.q10 === "C. APPle") {
        console.log("Wrong Answer!\n")
    }

    // Question 11
    let answer11 = await inquirer.prompt(
        [
            {
                name: "q11",
                message: "\nWhat is the name of this '||' Logical Operator?",
                type: "list",
                choices: ["A. NOT", "B. OR", "C. AND", "D. None"]
            }
        ]
    );
    if (answer11.q11 === "B. OR") {
        console.log("Correct Answer!\n");
    }
    else if (answer11.q11 === "A. NOT") {
        console.log("Wrong Answer!\n");
    }
    else if (answer11.q11 === "C. AND") {
        console.log("Wrong Answer!\n");
    }
    else if (answer11.q11 === "D. None") {
        console.log("Wrong Answer!\n");
    }

    // Question 12
    let answer12 = await inquirer.prompt(
        [
            {
                name: "q12",
                message: "\nlet idNumber = 22; \nWhich term best describes this statement?",
                type: "list",
                choices: ["A. Type Inference", "B. Inference", "C. Strong", "D. Strongly Type"]
            }
        ]
    );
    if (answer12.q12 === "A. Type Inference") {
        console.log("Correct Answer!\n");
    }
    else if (answer12.q12 === "B. Inference") {
        console.log("Wrong Answer!\n");
    }
    else if (answer12.q12 === "C. Strong") {
        console.log("Wrong Answer!\n");
    }
    else if (answer12.q12 === "D. Strongly Type") {
        console.log("Wrong Answer!\n");
    }

    // End
    console.log("*********************************************");
    console.log("*****************QUIZ IS END*****************");
    console.log("*********************************************");

// When attempt is No
} 
else if (attemptAns.attempt === "No") {
    console.log("Have a nice day")
};






