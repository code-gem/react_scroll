import react from 'react';
import style from './UserPosts.module.css';

function allPosts() {
    return [
        { id: 0, name: "Michael Scott", content: "\"You miss 100% of the shots you\n don't take – Wayne Gretzky\"" },
        { id: 1, name: "Neil deGrasse Tyson", content: "If each dead person became a ghost,\n there’d be more than 100-billion of\nthem haunting us all. Creepy, but cool." },
        { id: 2, name: "Walter White", content: "I am the one who knocks" },
    ];
}

function Post(props) {
    const post = props.post;
    const content = post.content.split('\n').map(line => <p>{line}</p>) 

    return (
        <div className={style.Post}>
            <div className={style.Header}>
                <div className={style.Picture}></div>
                <div className={style.Name}>{post.name}</div>
            </div>
            <div className={style.Content}>
                {content}
            </div>
        </div>
    );
}

function UserPosts() {
    const content = allPosts();

    return (
        <div>
            { content.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}

export default UserPosts;