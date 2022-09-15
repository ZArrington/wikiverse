import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { SinglePageView } from './ArticleData';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [singlePage,setSinglePage] = useState(null);

	useEffect(() => {
		fetchPages();
	}, []);


	async function fetchPages(){
		try {
			console.log(apiURL);
			const response = await fetch(`${apiURL}/wiki`);//${slug}
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	//fetch request to /wiki/:slug endpoint for specific article
	async function fetchSlug(slug){
		try {
			const response2 = await fetch(`${apiURL}/wiki/${slug}`);//${slug}
			const pageData = await response2.json();
			setSinglePage(pageData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	
	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{
			(!singlePage) ? (<PagesList pages={pages} handleClick={fetchSlug} />): (<SinglePageView singlePage={singlePage} setSinglePage={setSinglePage} />)
			}
			<button></button>

		</main>
	)
}