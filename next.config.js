const { PHASE_PRODUCTION_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    //For Server
    return {
      env: {
        mongodb_username: "alaahamdy2197",
        mongodb_password: "y26kJiZGBET2hU25",
        mongodb_clustername: "cluster0",
        mongodb_database: "blogs",
      },
    };
  }

  return {
    //For Production
    env: {
      mongodb_username: "alaahamdy2197",
      mongodb_password: "y26kJiZGBET2hU25",
      mongodb_clustername: "cluster0",
      mongodb_database: "blogs-site",
    },
  };
};
