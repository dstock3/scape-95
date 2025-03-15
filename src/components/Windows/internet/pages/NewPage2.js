import React from 'react';
import '../../../../style/net-page.css';

function NewPage2({ pageData }) {
  return (
    <>
      <h1>{pageData.content.header}</h1>
      {pageData.content.paragraphs.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
    </>
  );
}

export default NewPage2;
