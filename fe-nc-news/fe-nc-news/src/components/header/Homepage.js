import React from "react";

function Homepage(props) {
  const {userinfo} = props
  return (
    <body className="Homepagetext">
      <h2>
        Welcome to NC latest News{" "}
        {userinfo && ` ${userinfo.user.name}`}!
      </h2>
      {userinfo && (
        <img src={userinfo.user.avatar_url} alt="userimg" />
      )}
      <p>
        Hi!, Welcome to NC-News website.
        <br></br>
        On this website, we will share with you all the latest news from NC.
        <br></br>
        You can navegate through our site and see all different articles. You
        will be able to see who created them and who commented them!
        <br></br>
        <br></br>
        Right now, you are logged-in as 'jessjelly'. If you want to change to
        another user, select your favorite one from 'Change user' option.
        <br></br>
        With the logged user, you will be able to create and delete your own
        comments as well as vote for them. Don't forget to vote for your
        favorite article too!{" "}
        <span role="img" aria-label="sheep">
          🐑
        </span>
        <br></br>
        If you can't wait for the very last new articles, please select one of
        the following topics.
      </p>
    </body>
  );
}

export default Homepage;
