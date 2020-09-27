import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';


const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/`)
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();

        setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) }, [name])
    })

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name)

    return (
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times </p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles} />
        </>
    );

}


export default ArticlePage;
