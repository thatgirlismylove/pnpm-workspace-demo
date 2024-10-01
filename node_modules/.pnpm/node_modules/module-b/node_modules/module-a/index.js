const lodash = require("lodash")

const range = (x, y) => {
    console.log('from module-a range', x, y);
    return lodash.range(x,y)
}

console.log('module-a');


module.exports = {
    range
}