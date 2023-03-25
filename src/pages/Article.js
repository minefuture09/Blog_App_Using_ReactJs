import React from 'react'
import articleContent from './articleContent.js';

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find((article)=> article.name === name);
    if(!article) return <h1>Article Does Not Exists!</h1>
    return (
        <div>
            <h1 className="sm:text-2xl font-bold mt-6  mb-6 text-gray-900">{article.title}</h1>
            {article.content.map((paragraph,index) => (
                <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
            
             ))}

        </div>
    )

}

export default Article;
