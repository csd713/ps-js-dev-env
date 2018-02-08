export default function getBaseUrl() {
	const inDevelopment = window.location.hostname === 'localhost';
	return inDevelopment ? 'http://localhost:3001/' : '/';
	//return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://mysterious-dawn-16770.herokuapp.com/';
  }
