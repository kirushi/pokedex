import React from 'react';
require('../../style/application.less');

export default function App({ children }) {
  return (
        <div className="container-fluid">
            {children}
        </div>
  );
}
//
// App.propTypes = {
//   children: React.PropTypes.oneOfType([
//     React.PropTypes.arrayOf(React.PropTypes.node),
//     React.PropTypes.node,
//   ]),
// };
