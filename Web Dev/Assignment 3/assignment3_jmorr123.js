const arr0 = [9,3,4.3,24,54,8,19,23,46,87,3.14];
document.getElementById("tasks").innerHTML = task1();
document.getElementById("task2").innerHTML = task2();
//task 1
function task1() {
    for (let i = 0; i < arr0.length; i++) 
        if (arr0[i] === 23)
            alert("The index of " + arr0[i] + " is: " + i);
    return "Task 1"; //return can be left out since return is undefined.
}
function task2() {
    let allNumbersLargerThan10 ="";
    for (let i = 0; i < arr0.length; i++) {
        if (arr0[i] > 10) 
            allNumbersLargerThan10+=arr0[i] + " ";
    }
    alert("All numbers that are larger than 10 are: \n\n" + allNumbersLargerThan10);
    return "Task 2";
}
