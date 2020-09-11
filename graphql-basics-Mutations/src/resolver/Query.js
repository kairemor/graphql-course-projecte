const Query = {
    users(parent, args, {
        db
    }, info) {
        if (!args.query) {
            return db.users
        }
        return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
    },
    posts(parent, args, {
        db
    }, info) {
        if (!args.query) {
            return db.posts
        }
        return db.posts.filter(post => post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase()))
    },
    me() {
        return {
            id: 'avbc123',
            name: 'kaire',
            age: 22,
            employed: true
        }
    },
    post() {
        return {
            id: 'avbc123',
            title: 'GraphQl the futur of the webservices',
            body: 'this is the content of the post',
            published: true
        }
    },
    comments(parent, args, {
        db
    }, info) {
        return db.comments
    }
}

export {
    Query as
    default
}