import React from 'react';

export const SinglePageView = ({ singlePage,setSinglePage }) => {

    return<>
      <h1>{singlePage.title}</h1>
      <p><strong>Author: </strong>{singlePage.author.name}</p>
      <p>{singlePage.content}</p>
      <p><strong>Published: </strong>{singlePage.createdAt}</p>
      <p><strong>Tags: </strong></p>{singlePage.tags.map((tag,idx) => {return <p key={idx}>{tag.name}</p>})}
      <button onClick= {() => setSinglePage(null)}>Back to Wiki List</button>
      
      

    </>
  }