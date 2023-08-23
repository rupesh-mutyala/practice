import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }) {
	// Data fetching, server-side rendering, or other logic here

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
