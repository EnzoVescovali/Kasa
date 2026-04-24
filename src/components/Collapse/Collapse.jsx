import React, { useState, useRef, useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "./Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className="collapse">
      <div className="collapse__summary" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronDown} className={`collapse__icon ${isOpen ? 'open' : ''}`} />
      </div>
      <div 
        className="collapse__content" 
        ref={contentRef} 
        style={{ 
          height: isOpen ? `${maxHeight}px` : '0px', 
          overflow: 'hidden', 
          transition: 'height 0.3s ease' 
        }}
      >
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default Collapse;