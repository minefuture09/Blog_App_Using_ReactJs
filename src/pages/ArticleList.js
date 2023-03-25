import React from 'react'
import articleContent from './articleContent'
import Articles from "../components/Articles.js"

const ArticleList = () => {
    return (
        <div>
        <h1 className="sm:text-2xl font-bold mt-6  mb-6 text-gray-900">Articles</h1>

            <Articles articles={articleContent}/>
            
        
        </div>
    )
}

export default ArticleList
