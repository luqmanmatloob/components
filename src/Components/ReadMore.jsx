import { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <>
          {text.slice(0, maxLength)}
          <span onClick={toggleTruncate} style={{ cursor: 'pointer', color: 'blue' }}>
            ...Read more
          </span>
        </>
      ) : (
        <>
          {text}
          <span onClick={toggleTruncate} style={{ cursor: 'pointer', color: 'blue' }}>
            Show less
          </span>
        </>
      )}
    </div>
  );
};

export default ReadMore;
