require( 'dotenv' ).config();

let baseURL = 'https://www.billperrylaw.com/';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		baseURL = 'http://localhost:8080/';
	break;

	default:
		baseURL = '/';
}

module.exports = {
	baseURL: baseURL
	,title: 'Bill Perry Law'
	,environment: process.env.ELEVENTY_ENV
};
