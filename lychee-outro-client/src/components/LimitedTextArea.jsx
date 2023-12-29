import React, {useCallback, useState} from "react";

const LimitedTextarea = ({rows, cols, value, limit}) => {
  const [content, setContent] = useState(value?.slice(0, limit));

  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );
  

  return (
    <div className="flex-col flex">
      <textarea className="w-[400px] p-[4px] text-sm border-[1px] border-gray-300 outline-none rounded-md" rows={rows} cols={cols} onChange={(event) => setFormattedContent(event.target.value)} value={content} />
      <p className="text-xs text-gray-600 flex justify-end">
        {content.length}/{limit}
      </p>
    </div>
  );
};

export default LimitedTextarea;
