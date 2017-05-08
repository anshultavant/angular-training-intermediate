"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(firstName, lastName, email, sendCatalog) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (sendCatalog === void 0) { sendCatalog = true; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sendCatalog = sendCatalog;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map