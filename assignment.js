// Function to prompt the user to enter numbers to create an array
function getUserInputArray() {
    const arr = [];
    let input;
    while (true) {
        input = prompt("Enter a number (or press Cancel to finish):");
        if (input === null) {
            break;
        }
        const num = Number(input);
        if (!isNaN(num)) {
            arr.push(num);
        } else {
            alert("Please enter a valid number.");
        }
    }
    return arr;
}

// Function to find all indexes of a given number in an array
function findIndexes(arr, num) {
    const indexes = [];
    arr.forEach((element, index) => {
        if (element === num) {
            indexes.push(index);
        }
    });
    return indexes;
}

// Quicksort implementation
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Main program
function main() {
    const arr = getUserInputArray();
    if (arr.length === 0) {
        alert("No numbers were entered.");
        return;
    }

    const target = Number(prompt("Enter one of the numbers you input before:"));
    const indexes = findIndexes(arr, target);
    if (indexes.length > 0) {
        alert(`The number ${target} is found at index(es): ${indexes.join(", ")}`);
    } else {
        alert(`The number ${target} is not found in the array.`);
    }

    const sortedArray = quicksort(arr);
    alert("The sorted array is: " + sortedArray.join(", "));
}

main();
