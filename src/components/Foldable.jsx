import { useState } from "react";

const FoldableSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
        <div className="foldable-section">
            <div className="foldable-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="toggle-icon">{isOpen ? "📂" : "📁"}</span>
                <span>{title}</span>
            </div>
            {isOpen && <div className="foldable-content">{children}</div>}
        </div>
    );
};

export default FoldableSection;