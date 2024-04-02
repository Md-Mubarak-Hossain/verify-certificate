import React from 'react';
import VerifyRequire from './homeUtilities/VerifyRequire';
import VerifyHolder from './homeUtilities/VerifyHolder';
const Home = () => {
  return (
    <div>
      {/* Verify holder*/}
      <VerifyHolder/>
      {/* verify requirement */}
      <VerifyRequire/>
    </div>
  );
};

export default Home;