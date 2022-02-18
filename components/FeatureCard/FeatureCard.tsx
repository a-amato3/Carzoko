import Image from 'next/image';

import styles from './FeatureCard.module.scss';

type FeatureCardProps = {
	title: string;
	content: string;
};

const FeatureCard = ({ title, content }: FeatureCardProps) => {
	return (
		<div className={styles.container}>
			<div>
				<Image
					src='/icons/circle-gradient-icon.svg'
					alt='circle gradient icon'
					height={140}
					width={140}
					layout='intrinsic'
				/>
			</div>

			<div className='ml-8'>
				<span className={styles.contentContainer}>
					<p className={`${styles.title} primary-font-bold`}>{title}</p>
					<p className={`${styles.content} secondary-font-regular`}>{content}</p>
				</span>
			</div>
		</div>
	);
};

export default FeatureCard;
