import FeatureCard from '@components/FeatureCard/FeatureCard';
import Image from 'next/image';

const SectionThree = () => {
	function sectionOne(): JSX.Element {
		return (
			<div className='flex flex-row justify-center items-center'>
				<div className='h-96 w-3/5 mx-auto mb-2 p4 rounded-2xl bg-gradient-to-r from-blue-300 to-green-300'>
					<div className='mx-3 my-3' style={{ width: '95%', height: '94%', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
						<Image className='object-none' src="/icons/car-image.jpeg" layout='fill'
							objectFit='cover' />
					</div>
				</div>

				<div className='px-8'>
					<div className='my-4'>
						<FeatureCard
							title='Unbeaten On Price'
							content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
						/>
					</div>

					<div className='mb-4'>
						<FeatureCard
							title='Supreme car quality guarantee'
							content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
						/>
					</div>

					<div className='mb-4'>
						<FeatureCard
							title='6 month contracts for piece of mind'
							content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
						/>
					</div>
				</div>

			</div>
		);
	}

	function sectionTwo(): JSX.Element {
		return (
			<div className='flex flex-row justify-center items-center'>
				<div>
					<div className='my-4'>
						<FeatureCard
							title='No hefty deposits'
							content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
						/>
					</div>

					<div className='mb-4'>
						<FeatureCard
							title='Save more, the longer you stay with us'
							content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
						/>
					</div>

					<div className='mb-4'>
						<FeatureCard
							title='Full convenience'
							content='We put user experience first, making it streamlined the minute you order your car to when you receive it.'
						/>
					</div>
				</div>

				<div className='h-96 w-3/5 mx-auto my-2 p4 rounded-2xl bg-gradient-to-r from-purple-300 to-red-300'>
				<div className='mx-3 my-3' style={{ width: '95%', height: '94%', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
						<Image className='object-none' src="/icons/car-image.jpeg" layout='fill'
							objectFit='cover' />
					</div>
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
