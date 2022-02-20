import FeatureCard from '@components/FeatureCard/FeatureCard';
import Image from 'next/image';

const SectionOne = () => {
	function sectionOne(): JSX.Element {
		return (
			<div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1 bg-gray-100'>
				<div className='col-span-1'>
					<div className='ml-12  grid grid-flow-row-dense grid-cols-2 grid-rows-2 '>
						<Image
							className=''
							src='/icons/Group274.svg'
							height={140}
							width={0}
						></Image>
					</div>

					<div className='ml-12'>
						<h1 className='text-2xl primary-font-bold text-left is-purple-one'>Car leasing made</h1>
						<h1 className='mt-6 text-2xl primary-font-bold text-left is-purple-one'>More simple</h1>
						<div className='mt-6 text-1xl primary-font text-left is-grey-one'>A shiny motor, all the maintenance and no lengthy contracts at an unbeatable monthly rate</div>
						<br />
						<textarea
							name="message"
							placeholder="Enter message"
						/>
					</div>

				</div>

				<div className='ml-12 col-span-2'>
					<Image className='object-none object-left-bottom ' src="/icons/Group272@2x.png" height={798} width={749} />
				</div>
			</div>
		);
	}

	return (
		<div className='h-full w-full md:px-32'>
			{sectionOne()}
		</div>
	);
};

export default SectionOne;
