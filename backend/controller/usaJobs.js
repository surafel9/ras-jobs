require('dotenv').config();
const axios = require('axios');
const { json } = require('body-parser');
const express = require('express');
const baseURL = 'https://data.usajobs.gov/api/search';
const host = 'data.usajobs.gov';
var userAgent = 'io4kasa@gmail.com';
var authKey = process.env.USAJOBS_API_KEY;

const getUSAJOBS = async (req, res, next) => {
	const Keyword = req.query;
	///const { Keyword, LocationName } = req.body;
	//console.log(Keyword);
	const params = {
		Keyword,
	};

	try {
		const response = await axios.get(baseURL, {
			params,
			headers: {
				Host: host,
				'User-Agent': userAgent,
				'Authorization-Key': authKey,
			},
		});
		//console.log(response.data.SearchResult.SearchResultItems);

		res.status(200).json(response.data.SearchResult.SearchResultItems);

		//req.usajobsData = response.data.SearchResult.SearchResultItems;
		//next();
	} catch (error) {
		console.log(error);
		res.status(500).json('An error occurred while fetching USAJOBS data.');
	}
};

module.exports = getUSAJOBS;
