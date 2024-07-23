/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathStack = path.split("/").filter(val => val !== "." && val !== "").reverse()
    const result = []

    while(pathStack.length){
        const name = pathStack.pop()
        if(name === "..")
            result.pop()
        else
            result.push(name)
    }

    if(!result.length ) return '/'
    return ["",...result.filter(Boolean)].join("/")
};