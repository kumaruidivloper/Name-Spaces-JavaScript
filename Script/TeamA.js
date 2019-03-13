var nameSpace = nameSpace || {};
nameSpace.TeamA = nameSpace.TeamA || {};

nameSpace.TeamA.customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + '' + this.lastName;
    }
    return this;
}