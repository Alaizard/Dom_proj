const facebook = {
    clientID: '255243732124219',
    clientSecret: '2e12dd64bdd41645ffaf9668e8a6e156',
    callbackURL: 'http://localhost:5000/auth/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
  };
  
  const google = {
    clientID: '800114750370-of0ntjnmmpbrnh98ctd2jpd6vbs1jm0c.apps.googleusercontent.com',
    clientSecret: '50FCi3I10l62BMc30_V1tBAe',
    callbackURL: 'http://localhost:5000/auth/google/callback',
  };

   const amazon = {
      clientID: "amzn1.application-oa2-client.52d8f204a72b407e8601938723a6f078",
      clientSecret: "56cb090d2e588e9a038225ad58ac93641ef254b769c37f018d0253991e6937d4",
      callbackURL: "http://localhost:5000/auth/amazon/callback",
  };

  module.exports = {facebook, google, amazon}