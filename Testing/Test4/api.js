let api = (() => {
    let data = [
        {
            title: 'lost in translation',
            poster: 'https://i.pinimg.com/originals/8b/04/11/8b0411f37c3a635d9321d7052439024c.jpg',
            director: 'sophia coppola',
        },
        {
            title: 'inherent vice',
            poster: 'http://www.impawards.com/2014/posters/inherent_vice.jpg',
            director: 'paul thomas anderson',
        },
        {
            title: 'ex machina',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            director: 'alex garland',
        }
    ];

    let all = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
        }, 2000);
        });
    };
    let add = (val1, val2, val3) => {
        let newdata = {title: val1, poster: val2, director: val3};
        data.push(newdata);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(data);
            }, 2000);
        });    
    }
    return { all, add };
})();
