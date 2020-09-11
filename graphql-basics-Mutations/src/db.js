const users = [{
        id: '1',
        name: 'Kaire',
        'email': 'kaire@example.fr',
        age: 12
    },
    {
        id: '2',
        name: 'Cheikh',
        'email': 'cheikh@example.fr',
        age: 12
    },
    {
        id: '3',
        name: 'Moustapha',
        'email': 'nous@example.fr',
    },
]

const posts = [{
        id: '1',
        title: 'Graph ql the futur',
        body: 'The body of the graph ql post',
        published: true,
        'author': '1'
    },
    {
        id: '2',
        title: 'Deep learning',
        body: 'THe 5 revolution of the IT',
        published: false,
        author: '2'
    },
    {
        id: '3',
        title: 'NLP the way to take sens fro text in deep',
        body: 'NLP is a way of getting the sens of a text or generating text from it',
        published: true,
        'author': '2'
    },
]

const comments = [{
        'id': '1',
        text: 'first comment ',
        author: '1',
        post: '1'
    },
    {
        'id': '2',
        text: 'second comment',
        author: '1',
        post: '2'
    },
    {
        'id': '3',
        text: 'third comment ',
        author: '2',
        post: '2'
    },
    {
        'id': '4',
        text: 'fourth comment',
        author: '2',
        post: '3'
    },
]

const db = {
    users,
    posts,
    comments
}

export {
    db as
    default
}