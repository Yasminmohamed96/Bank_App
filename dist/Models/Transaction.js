"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.client = 0;
        this.account = 0;
        this.card = 0;
        this.amount = 0;
        this.merchant = "";
        this.timestamp = "";
        this.ccv = "";
        this.Payment_gateway_ID = 0;
    }
    Transaction.prototype.deduct = function (CID, Amount) {
        //decrease balance by amount
    };
    Transaction.prototype.Add_To_payment_gateway = function (Payment_gateway_ID, Amount) {
        return 600;
    };
    Transaction.prototype.insert = function () {
        //add transaction to the database
    };
    return Transaction;
}());
exports.Transaction = Transaction;
