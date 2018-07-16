let person = 
    {
        firstname: "Jimmie",
        lastname: "Payne",
    }
;
console.log("Name: " + person.firstname.toUpperCase() + " " + person.lastname.toUpperCase())
let workHistory =
    {
        companyName: "Security Engineers INC.",
        jobTitle: "Security Officer",
        description: "Trained Armed Security",
    }
;
work(workHistory.companyName, workHistory.jobTitle, workHistory.description);

let interests = ["Gaming", "Coding", "Sky-diving"];

myInterests(interests)

let preExp = [
    "Interfaced with students via webcam and remote desktop connection, to assist them in all aspects of their exam process  for ProctorU",
    "Handle all types of store transactions for Circle Ks products and services",
    "Tutored students in subjects such as basic mathematics, Algebra, Pre-Calculus Algebra, Pre-Calculus Trigonometry, and Calculus",
]

myPreviousExp(preExp)

let mySkills = [
    {
        skillname: "Gaming",
        cool: true,
    },
    {
        skillname: "Python",
        cool: true,
    },
    {
        skillname: "Java",
        cool: false,
    }
];
    skillDisplay(mySkills)

// The Age Check:
function skillDisplay(x) {
    console.log("My Skills:"); 
    for (let i = 0; i < x.length; i++) {
        val1 = x[i];

    if (val1.cool === true) {
        console.log("* BAM: " + val1.skillname);
        // If Not:
    } else {
        console.log("* " + val1.skillname);
    }
}
}
function myInterests(x) {
    console.log("My Interests:");    
    for (i=0; i < x.length; i++) {
    console.log("* "+x[i]);
    }
    console.log("");
}
// The Work History:
function work(company, title, description) {

    console.log("Career: " + company + " / " + title);
    console.log("Description: " + description);
    console.log("");
}

function myPreviousExp(x) {
    console.log("My Previous Experience:");    
    for (i=0; i < x.length; i++) {
    console.log("* "+x[i]);
    }
    console.log("")
}