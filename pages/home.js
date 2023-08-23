import { useSelector } from 'react-redux';

function Home() {
	const values = useSelector((state) => state);
	console.log('values', values);
	return <div>Hello world</div>;
}

export default Home;
