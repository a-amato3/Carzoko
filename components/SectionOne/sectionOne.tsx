import FeatureCard from '@components/FeatureCard/FeatureCard';
import Image from 'next/image';

const SectionOne = () => {
	function sectionOne(): JSX.Element {
		return (
			<div>
				<div className='grid   grid-flow-col	 '>
					<div className='	'>
						<h1 className='mt-10 text-2xl primary-font-bold text-left is-purple-one'>Carzoko</h1>
						<h1 className='mt-10 text-2xl primary-font-bold text-left is-purple-one'>Car leasing made simple</h1>
					</div>

					<div className=''>
						<Image className='object-none object-left-bottom 	' src="/icons/Group272@2x.png" height={798} width={749} />
					</div>
				</div>


				<div className='flex flex-col justify-center items-center'>
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

			</div>
		);
	}



	return (
		<div className='h-full w-full px-10 md:px-32 py-10 is-grey-two-bg'>

			{sectionOne()}
		</div>
	);
};

export default SectionOne;
