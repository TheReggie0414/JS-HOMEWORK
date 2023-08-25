const measureBucket = () => {
    let bucketOne = 5;
    let bucketTwo = 3;

    return function() {
        bucketOne -= 1;
        bucketTwo += 1;
        return ("В первом ведре: " + bucketOne + " л, а во втором ведре: " + bucketTwo + " л")
    };
};

const measure = measureBucket();
const finalMeasure = measure();
console.log(finalMeasure); 