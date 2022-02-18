import Image from 'next/image';

const SectionFour = () => {
	function sectionOne(): JSX.Element {
		return (

			<div className='flex flex-col md:flex-row justify-center items-center space-x-14'>

				<div className='mb-4'>
				<Image src="/icons/Group320@2x.png"	height={600} width={370} />
				</div>

				<div className='mb-4'>
				<Image src="/icons/Group320@2x.png"	height={600} width={370} />
				</div>

				<div className='mb-4'>
				<Image src="/icons/Group320@2x.png"	height={600} width={370} />
				</div>
			</div>
		);
	}



	return (
		<div className='h-full w-full px-10 md:px-32 py-10 is-grey-two-bg'>
			<h1 className='mb-10 text-2xl primary-font-bold text-center is-purple-one'>Our cars</h1>

			{sectionOne()}
			<h6 className="text-center is-purple-one">View all cars</h6>
		</div>
	);
};

export default SectionFour;
