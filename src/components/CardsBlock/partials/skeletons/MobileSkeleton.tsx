import ContentLoader from 'react-content-loader';

const MobileSkeleton = (): JSX.Element => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={220}
      backgroundColor="var(--gray)"
      foregroundColor="var(--brown-dark)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="150" height="220" />
      <rect x="170" y="3" rx="0" ry="0" width="100%" height="25" />
      <rect x="170" y="40" rx="0" ry="0" width="100%" height="70" />

      <rect x="170" y="140" rx="0" ry="0" width="50%" height="15" />
      <rect x="170" y="165" rx="0" ry="0" width="50%" height="15" />
      <rect x="170" y="190" rx="0" ry="0" width="50%" height="15" />
    </ContentLoader>
  );
};

export default MobileSkeleton;
