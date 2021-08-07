angular.module('BankingSpa')
    .service('BankDTO', ['$http', function ($http) {
        var banktDTO = {};

        banktDTO.addAccount = function (account) {
            return $http.post("http://localhost:63169/api/v1/accounts",JSON.stringify(account))
        }
        banktDTO.getAccount = function (username) {
            return $http.get("http://localhost:63169/api/v1/accounts/"+username)
        }
        banktDTO.doTransaction = function (username,transaction) {
            return $http.post("http://localhost:63169/api/v1/accounts/"+username+"/transactions",JSON.stringify(transaction))
        }
        banktDTO.getTransactions = function (username) {
            return $http.get("http://localhost:63169/api/v1/accounts/"+username+"/transactions")
        }

        return banktDTO;
    }])