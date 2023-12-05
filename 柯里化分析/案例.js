const filterLowerNumber = number => {
    return array => {
        let result = [];
        for (let i = 0, length = array.length; i < length; i++) {
            let currentValue = array[i];
            if (currentValue < number) result.push(currentValue);
        }
        return result;
    }
}

const filterLowerThan10 = filterLowerNumber(10);

filterLowerThan10([1, 3, 5, 29, 34]);