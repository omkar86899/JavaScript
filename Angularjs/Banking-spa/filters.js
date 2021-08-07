angular.module('BankingSpa')
    .filter('transactionFilter', function () {
        return function (transactionType) {
            if (transactionType == 0) {
                return "Withdrawl";
            }
            return "Deposit";
        }
    })