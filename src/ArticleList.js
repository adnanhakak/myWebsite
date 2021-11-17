import React from 'react'
import { useParams } from 'react-router-dom';
import './ArticlesList.css';

const ArticleList = ({ content }) => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className='cont'>
            <div className='container'>
                {content.filter((blog) => parseInt(blog.id) === parseInt(id)).map((filteredblog) => {
                    return <div key={filteredblog.id}>
                        <h3 id='heading'>{filteredblog.heading}</h3> <p id='date'> {filteredblog.date}</p>
                        <div id='blogcontent'> {filteredblog.content}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default ArticleList;


// {
//     content.filter((blog) => blog.id === id)
//         .map((blog, index) => (
//             <div>{blog.content}</div>
//         ))}