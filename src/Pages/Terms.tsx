import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to our application. If you continue to browse and use this application, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Nexus’s relationship with you in relation to this application.
      </p>
      <p className="mb-4">
        If you disagree with any part of these terms and conditions, please do not use our application.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Use of the Application</h2>
      <p className="mb-4">
        The content of the pages of this application is for your general information and use only. It is subject to change without notice.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
      <p className="mb-4">
        Your use of this application and any dispute arising out of such use of the application is subject to the laws of Nepal.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default TermsAndConditions;
