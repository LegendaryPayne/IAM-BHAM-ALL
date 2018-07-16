let api = (() => {
    let data = [
        {
            id: 1,
            name: 'haley kendrick',
            title: 'director of operations',
        },
        {
            id: 2,
            name: 'kayla king',
            title: 'admissions director',
        },
        {
            id: 3,
            name: 'carlton lewis',
            title: 'professional development coach',
        },
        {
            id: 4,
            name: 'haley blackburn',
            title: 'director of employer engagement',
        },
        {
            id: 5,
            name: 'jessica valles',
            title: 'data specialist',
        },
        {
            id: 6,
            name: 'alex croom',
            title: '2/4 year program coordinator',
        },
    ];

    let all = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let rand = 2

                if (rand % 2 === 0) {
                    resolve(data);
                } else {
                    reject(new Error('Code 500: Internal Server Error'));
                }
            }, 2000);
        });
    };

    return { all };
})();
