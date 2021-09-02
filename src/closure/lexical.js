const buildCount = (i) =>{ //arrow function
    let count = i;
    const displayCount =() =>{
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

