import React from 'react';

export default () => {

  const wRef = React.useRef<any>();

  React.useEffect(() => {
    if (wRef.current) {
      wRef.current.addEventListener('dom-ready', () => {
        wRef.current.openDevTools({ mode: 'detach' });
      })
    }
  }, [wRef.current]);

  return (
    <webview
      className="webview"
      src="https://signin.aliyun.com/login.htm"
      preload="file:./test.js"
      ref={wRef}
    >
    </webview>
  );
};
