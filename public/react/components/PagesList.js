import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages,handleClick,setIsAddingArticle}) => {
	return <>
		{Object.keys(pages).length > 0 &&
			pages.map((page, idx) => {
				return <Page key={idx} page={page} handleClick={handleClick} />
			})
		}
		<button onClick={() => setIsAddingArticle(true)}>Add New Article</button>
	</>
} 
