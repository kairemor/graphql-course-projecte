import uuidv4 from 'uuid/v4';

const Mutation = {
    createUser(parent, args, {
        db
    }, info) {
        const emailTaken = db.users.some((user => user.email === args.data.email))

        if (emailTaken) {
            throw new Error("Email already taken.")
        }
        const user = {
            id: uuidv4(),
            ...args.data
        };
        db.users.push(user);
        return user;
    },
    deleteUser(patent, args, {
        db
    }, info) {
        const index = db.users.findIndex(user => user.id = args.id)

        if (index !== -1) {
            const deletedUser = users.splice(index, 1)
            db.posts = db.posts.filter(post => {
                const matchPost = post.id == args.id

                if (matchPost) {
                    comments = db.comments.filter(comment => comment.post !== post.id)
                }

                return !matchPost;
            })
            db.comments = db.comments.filter(comment => comment.author !== args.id)

            return deletedUser[0];
        } else {
            throw new Error("This user dont exist");
        }
    },
    updateUser(parent, args, {
        db
    }, info) {
        const {
            id,
            data
        } = args;
        let user = db.users.find(user => user.id === id)

        if (!user) {
            throw new Error("User not found")
        }

        if (typeof data.email === 'string') {
            const emailTaken = db.users.find(email => user.email === data.email)
            if (emailTaken) {
                throw new Error("Email already taken")
            }
            user.email = data.email;
        }

        if (typeof data.name === 'string') {
            user.name = data.name;
        }
        if (typeof data.age !== 'undefined') {
            user.age = data.age;
        }

        return user;
    },

    createPost(parent, args, {
        db
    }, info) {
        const authorExist = db.users.some(user => user.id === args.data.author)

        if (!authorExist) {
            throw new Error("No author with this id")
        }
        const post = {
            id: uuidv4(),
            ...args.data
        };

        db.posts.push(post);
        return post;
    },
    updatePost(parent, args, {
        db
    }, info) {
        const {
            id,
            data
        } = args;
        let post = db.posts.find(post => post.id === id)

        if (!post) {
            throw new Error("Post not found")
        }

        if (typeof data.title === 'string') {
            user.title = data.title;
        }

        if (typeof data.body === 'string') {
            user.body = data.body;
        }

        if (typeof data.published === 'boolean') {
            user.published = data.published;
        }

        return post
    },
    deletePost(parent, args, {
        db
    }, info) {
        const index = db.posts.findIndex(post => post.id === args.id)

        if (index !== -1) {
            const deletedPost = db.posts.splice(index, 1)
            db.comments = db.comments.filter(comment => comment.post !== deletedPost.id)

            return deletedPost[0]
        } else {
            throw new Error("This post dont exist")
        }
    },

    createComment(parent, args, {
        db
    }, info) {
        const authorExist = db.users.some(user => user.id === args.data.author)
        const postExist = db.posts.some(post => post.id === args.data.post && post.published)

        if (!authorExist) {
            throw new Error("No author with this id")
        }

        if (!postExist) {
            throw new Error("No post with this id")
        }

        const comment = {
            id: uuidv4(),
            ...args.data
        }

        db.comments.push(comment)

        return comment
    },
    updateComment(parent, args, {
        db
    }, info) {
        const {
            id,
            text
        } = args
        const comment = db.comments.find(comment => comment.id === id)

        if (!comment) {
            throw new Error("Comment not found")
        }

        if (typeof text === 'string') {
            comment.text = text
        }

        return comment
    },
    deleteComment(parent, args, {
        db
    }, info) {
        const index = db.comments.findIndex(comment => comment.id = comment.id)

        if (index !== -1) {
            const deletedPost = db.posts.splice(index, 1)
            return deletedPost
        } else {
            throw new Error("This comment dont exist")
        }
    },

}
export {
    Mutation as
    default
}