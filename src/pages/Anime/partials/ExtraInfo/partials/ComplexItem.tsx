import React from 'react';
import { TComplexContent } from '../ExtraInfoTypes';

type ComplexItemProps = {
  title: string;
  content: TComplexContent;
};

const ComplexItem = ({
  title,
  content,
}: ComplexItemProps): JSX.Element | null => {
  if (content.length === 0) {
    return null;
  }

  return (
    <div>
      <span className="block w-full capitalize md:whitespace-nowrap">
        {title}
      </span>
      {content.map((item, index) => (
        <span
          className="block w-full text-contrast-gray
          md:inline md:whitespace-nowrap md:after:content-[','] md:after:mr-2 md:last:after:hidden"
          key={typeof item === 'string' ? index : item.mal_id}
        >
          {typeof item === 'string' ? item : item.name}
        </span>
      ))}
    </div>
  );
};

export default ComplexItem;
