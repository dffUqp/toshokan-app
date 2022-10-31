import React from 'react';

type SimpleItemProps = {
  title: string;
  content: number | string;
};

const SimpleItem = ({
  title,
  content,
}: SimpleItemProps): JSX.Element | null => {
  if (content == null) {
    return null;
  }

  return (
    <div>
      <span className="block w-full capitalize md:whitespace-nowrap">{title}</span>
      <span className="block w-full text-contrast-gray md:whitespace-nowrap">{content}</span>
    </div>
  );
};

export default SimpleItem;
