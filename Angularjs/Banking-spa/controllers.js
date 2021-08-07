angular.module('BankingSpa')
    .controller('HomeController', ['$scope', '$rootScope', 'BankDTO', function ($scope, $rootScope, BankDTO) {
        $rootScope.username = sessionStorage.getItem("username");
        $rootScope.logout = function () {
            $rootScope.username = "";
            $scope = "";
            sessionStorage.clear();
        }

        $scope.viewmodel = {
            transaction: {
                amount: 0,
                transactionType: ""
            },
            status: ""
        };
        $scope.clear = function () {
            $scope.viewmodel = {};
        }

        $scope.transact = function () {
            BankDTO.doTransaction($rootScope.username, $scope.viewmodel.transaction)
                .then(function (response) {
                    $scope.viewmodel.status = "success";
                })
                .catch(function (err) {
                    $scope.viewmodel.status = "fail";
                })
        }
    }])
    .controller('ViewPassbookController', ['$scope', '$rootScope', 'BankDTO', '$filter', function ($scope, $rootScope, BankDTO,$filter) {
        $rootScope.username = sessionStorage.getItem("username");
        $rootScope.logout = function () {
            $rootScope.username = "";
            $scope = "";
            sessionStorage.clear();
        }

        $scope.viewmodel = {
            transactions: []
        };
        BankDTO.getTransactions($rootScope.username)
            .then(function (response) {
                console.log(response.data)
                $scope.viewmodel.transactions = response.data;
            })
            .catch(function (err) {
                console.log(err.Message);
            });
        $scope.exportCsv = function () {
            var link, csvData;

            csvData = 'Transaction ID,Amount,Transaction Type, Time\n';
            $scope.viewmodel.transactions.forEach(element => {
                csvData += element.TransactionId+','+element.Amount+','+$filter('transactionFilter')(element.Type)+','+element.Time;
                csvData += "\n";
            });

            link = document.createElement('a');
            link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(csvData));
            link.setAttribute('download', 'transactions.csv');

            link.click();
        }
    }])
    .controller('LoginController', ['$scope', '$rootScope', 'BankDTO', '$location', function ($scope, $rootScope, BankDTO, $location) {
        $rootScope.username = sessionStorage.getItem("username");
        $rootScope.logout = function () {
            $rootScope.username = "";
            $scope = "";
            sessionStorage.clear();
        }

        $scope.viewmodel = {
            username: "",
            password: "",
            error: ""
        };

        $scope.login = function () {
            BankDTO.getAccount($scope.viewmodel.username)
                .then(function (response) {
                    if ($scope.viewmodel.password == response.data.Password) {
                        sessionStorage.setItem("username", $scope.viewmodel.username);
                        $rootScope.username = $scope.viewmodel.username;
                        alert("Login Successful");
                        $location.path('/home');
                        return;
                    }
                    $scope.viewmodel.error = "invalid credentials";
                })
                .catch(function (err) {
                    $scope.viewmodel.error = "Server Error please try again";
                })
        }
        $scope.clear = function () {
            $scope.viewmodel = {};
        }
    }])
    .controller('RegisterController', ['$scope', '$rootScope', 'BankDTO', '$location', function ($scope, $rootScope, BankDTO, $location) {
        $rootScope.username = sessionStorage.getItem("username");
        $rootScope.logout = function () {
            $rootScope.username = "";
            $scope = "";
            sessionStorage.clear();
        }

        $scope.viewmodel = {
            account: {},
            confirmPassword: "",
            status: ""
        };

        $scope.viewmodel.account = {
            name: "",
            email: "",
            password: "",
            balance: 0
        }

        $scope.register = function () {
            BankDTO.addAccount($scope.viewmodel.account)
                .then(function (response) {
                    alert("Account Created Successfully");
                })
                .catch(function (err) {
                    alert(err.data.Message);
                    return;
                })
            $location.path('/login');
        }
        $scope.clear = function () {
            $scope.viewmodel = {};
        }
    }])