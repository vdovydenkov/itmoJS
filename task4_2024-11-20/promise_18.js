function task(x) {
    return new Promise((resolve, reject) => {
        if (x == 0) {
            resolve(465778);
        } else if (x < 18) {
            resolve('yes');
        } else {
            reject('no');
        }
    });
}

task(20)
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
