var sendEmail = function (email, movies, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve("Email sent....");
        },4000)
    });
}

var getTopMovies = function (callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(['movie1', 'movie2']);
        },4000);
    });
}

var getCustomer = function (id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                id: 1,
                name: 'Omkar',
                isGold: true,
                email: 'omkar@gmail.com'
            });
        }, 4000);
    })
}

var email;

getCustomer(1)
    .then(function resolve(customer) {
        email = customer.email;
        console.log("Customer: ", customer);
        if (customer.isGold) {
            return getTopMovies();
        }
        return null;
    })
    .then(function resolve(movies) {
        console.log("movies: " + movies);
        return sendEmail(email, movies);
    })
    .then(function resolve(result) {
        console.log(result);
    });