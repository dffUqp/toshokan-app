import ContentLoader from 'react-content-loader';

type SeasonNowSkeletonProps = {
  className: string;
};

const SeasonNowSkeleton = ({
  className,
}: SeasonNowSkeletonProps): JSX.Element => (
  <ContentLoader
    speed={2}
    width={175}
    height={249}
    viewBox="0 0 175 249"
    backgroundColor="var(--gray)"
    foregroundColor="var(--brown-dark)"
    className={className}
  >
    <rect x="0" y="0" rx="0" ry="0" width="175" height="249" />
  </ContentLoader>
);

export default SeasonNowSkeleton;
