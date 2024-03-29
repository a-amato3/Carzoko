import Head from 'next/head';

import SectionOne from '@components/SectionOne/sectionOne';
import SectionThree from '@components/SectionThree/sectionThree';
import SectionFour from '@components/SectionFour/sectionFour';

const Home = () => {
	return (
		<div className='flex flex-col items-center min-h-screen min-w-full'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionOne />
			<SectionThree />
			<SectionFour />
		</div>
	);
};

export default Home;

