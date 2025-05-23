import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ filename, language = 'javascript', code }) => {
    return (
        <div className="code-wrapper">
            <div className="code-filename">{filename}</div>
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                backgroundColor: '#2a2a2a',
                padding: '1rem',
                borderRadius: '0 0 .5rem .5rem',
                overflowX: 'auto',
                display: 'block',
                maxWidth: '100%',
                margin: '0',
                boxSizing: 'border-box',
                whiteSpace: 'pre',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;