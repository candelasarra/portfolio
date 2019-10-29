import React, { useEffect } from 'react';
import '../visual/CSSfiles/DisplayHtmlInDiv.css';
const DisplayHtmlInDiv = () => {
  useEffect(() => {
    load_home();
  }, []);
  function load_home() {
    document.getElementById('content').innerHTML =
      '<object type="text/html" data="http://candelasrecipes.com" style="height:inherit; width: inherit; "></object>';
  }
  return <div id="content" className="DisplayHtml-content-div"></div>;
};

export default DisplayHtmlInDiv;
