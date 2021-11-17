import React from 'react';
import { NavLink } from 'react-router-dom';
import './Articles.scss';

const Articles = ({ content }) => {
    return (
        <div className='articles'>
            <div className='container'>
                <h1 className='display-1 '>Blog posts </h1>
                <hr id='hr1' />

                <div className='row'>

                    {content.map((blog) => {
                        return <div className=' blog col-lg-4  text-center' key={blog.id}>

                            <div className="blog_card">
                                <div className="blog_card_image">
                                    <img src="#" alt="" />
                                </div>
                                <div className="blog_card_content">
                                    <h3>{blog.heading}</h3>
                                    <h5 style={{ color: '#c8a482' }}>{blog.date}</h5>
                                    <p>{blog.alt}</p>
                                    <NavLink to={`/articles/${blog.id}`}>
                                        <h6>Read More</h6>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                    })}

                </div>
            </div>
        </div >

    )
}
export default Articles;