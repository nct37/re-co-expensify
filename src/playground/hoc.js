// Higher Order Component (HOC) - A component that renders another component
// HOC(anotherComponent());
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>Proprietary. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>Welcome!</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>Please log in...</p>
      )}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info={`FUCK YOU!`} />,
  document.getElementById('app')
);
