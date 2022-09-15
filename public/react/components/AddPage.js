
import React, {useState} from 'react';
import apiURL from '../api';

export const AddPage = ({setIsAddingArticle,setSinglePage}) => {
//make the form
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [tags, setTags] = useState('');   


const handleSubmit = (ev) => {
    const url = `${apiURL}/wiki/`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {title,content,name,email,tags}
        )
    }
    fetch(url,options)
    .then(response => response.json())
    .then(data => console.log(data))
    setIsAddingArticle(false);
    setSinglePage({});
}
    
    return  ( <>
    <h2>Add a Page</h2>
     <form onSubmit={handleSubmit}>
    <label>
        Title:
        <input type="text" name="title" value={ title } onChange={ev => setTitle(ev.target.value)} />
    </label>
    <label>
        Article Content:
        <input type="text"  name="content" value={ content } onChange={ev => setContent(ev.target.value)}/> 
        Author Name:
        <input type="text" name="name" value={ name } onChange={ev => setName(ev.target.value)}/>
        Author Email:
        <input type="text" name="email" value={ email } onChange={ev => setEmail(ev.target.value)}/>
        Tags:
        <input type="text" name="tags" value={ tags } onChange={ev => setTags(ev.target.value)}/>
    </label>
    </form>
    <button type="submit">Create Page</button>
    </>
    );
}