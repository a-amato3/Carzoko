import FeatureCard from '@components/FeatureCard/FeatureCard';

const SectionThree = () => {
	function sectionOne(): JSX.Element {
		return (
			<div className='flex flex-col justify-center items-center'>
				<div className='h-80 w-4/5 mx-auto mb-2 p4 rounded-2xl bg-gradient-to-r from-blue-300 to-green-300'></div>

				<div className='my-4'>
					<FeatureCard
						title='Unbeaten On Price'
						content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
					/>
				</div>

				<div className='mb-4'>
					<FeatureCard
						title='Unbeaten On Price'
						content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
					/>
				</div>

				<div className='mb-4'>
					<FeatureCard
						title='Unbeaten On Price'
						content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
					/>
				</div>
			</div>
		);
	}

	function sectionTwo(): JSX.Element {
		return (
			<div className='flex flex-col justify-center items-center'>
				<div className='h-80 w-4/5 mx-auto my-2 p4 rounded-2xl bg-gradient-to-r from-purple-300 to-red-300'></div>

				<div className='my-4'>
					<FeatureCard
						title='Unbeaten On Price'
						content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
					/>
				</div>

				<div className='mb-4'>
					<FeatureCard
						title='Unbeaten On Price'
						content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
					/>
				</div>

				<div className='mb-4'>
					<FeatureCard
						title='Unbeaten On Price'
						content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
					/>
				</div>
			</div>
		);
	}

	return (
		<div className='h-full w-full px-10 md:px-32 py-10 is-grey-two-bg'>
			<h1 className='mb-10 text-2xl primary-font-bold text-center is-purple-one'>Why Carzoko?</h1>

			{sectionOne()}
			{sectionTwo()}
		</div>
	);
};

export default SectionThree;
