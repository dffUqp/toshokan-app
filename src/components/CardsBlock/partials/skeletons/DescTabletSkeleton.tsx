import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';

const DescTabletSkeleton = (): JSX.Element => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <ContentLoader
      speed={2}
      width={205}
      height={348}
      viewBox="0 0 205 348"
      backgroundColor="var(--gray)"
      foregroundColor="var(--brown-dark)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="205" height="300" />
      <rect x="0" y="313" rx="0" ry="0" width="205" height="30" />
    </ContentLoader>
  </motion.div>
);

export default DescTabletSkeleton;
