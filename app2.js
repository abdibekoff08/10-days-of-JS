//Day 2: Conditional Statements: If-Else
function getGrade(score) {
    let grade;
    // Write your code here
    if (25 < score && score <= 30) grade = 'A';
    else if (20 < score && score <= 25) grade = 'B';
    else if (15 < score && score <= 20) grade = 'C';
    else if (10 < score && score <= 15) grade = 'D';
    else if (5 < score && score <= 10) grade = 'E';
    else grade = 'F';
    return grade;
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}



//Day 2: Conditional Statements: Switch
function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case "aeiou".includes(s[0]): letter = 'A'; 
        break;
        
        case "bcdfg".includes(s[0]): letter = 'B'; 
        break;
        
        case "hjklm".includes(s[0]): letter = 'C'; 
        break;
        
        case "npqrstvwxyz".includes(s[0]): letter = 'D'; 
        break;
    }
    return letter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}



//Day 2: Loops
function vowelsAndConsonants(s) {
    let vowels =['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++)
        if (vowels.includes(s[i]))
            console.log(s[i]);
            
    for (let i = 0; i < s.length; i++)
        if (!vowels.includes(s[i]))
            console.log(s[i])
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}



//Day 3: Arrays
function getSecondLargest(nums) {
    // Complete the function
    let largest; 
    let second;
    largest = second = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            second = largest;
            largest = nums[i];
        }
        else {
            if (nums[i] > second && nums[i] !== largest)
            second = nums[i];
        }
    }
    return second;
}
    
function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}



//Day 3: Try, Catch, and Finally
function reverseString(s) {
    try {
        let split_string = s.split('');
        split_string.reverse();
        console.log(split_string.join(''));
    }
    catch (a) {
        console.log(a.message);
        console.log(s);    
    }
}

function main() {
    const s = eval(readLine());
    
    reverseString(s);
}



//Day 3: Throw
function isPositive(a) {
    if (a > 0) return "YES";
    else if (a == 0) throw new Error("Zero Error");
    else throw new Error("Negative Error");
}

function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }

}



//Day 4: Create a Rectangle Object
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
}

function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}