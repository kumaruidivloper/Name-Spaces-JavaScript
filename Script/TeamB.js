var nameSpace = nameSpace || {};
nameSpace.TeamB = nameSpace.TeamB || {};


nameSpace.TeamB.customer = function (firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }

    return this;
}