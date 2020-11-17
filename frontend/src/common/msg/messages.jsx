/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css';

function Messages() {
  return (
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
    />
  );
}

export default Messages;
