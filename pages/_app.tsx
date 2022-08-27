import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles data-global='yes' />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
