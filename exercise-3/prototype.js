const stringFunctions = require("../exercise-1/string.js");

String.prototype.ucfirst = function ()
{
    return stringFunctions.ucfirst(this.valueOf());
}

String.prototype.capitalize = function ()
{
    return stringFunctions.capitalize(this.valueOf());
}

String.prototype.camelCase = function ()
{
    return stringFunctions.camelCase(this.valueOf());
}

String.prototype.snake_case = function ()
{
    return stringFunctions.snake_case(this.valueOf());
}

String.prototype.replaceAll = function ()
{
    return stringFunctions.replaceAll(this.valueOf());
}

String.prototype.leet = function ()
{
    return stringFunctions.leet(this.valueOf());
}

String.prototype.verlan = function ()
{
    return stringFunctions.verlan(this.valueOf());
}

String.prototype.yoda = function ()
{
    return stringFunctions.yoda(this.valueOf());
}

String.prototype.vig = function ()
{
    return stringFunctions.vig(this.valueOf(), code);
}

Object.prototype.prop_access = function ()
{
    return stringFunctions.prop_access(this.valueOf(), path);
}