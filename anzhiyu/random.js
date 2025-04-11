var posts=["2025/04/11/闽南婚礼/","2025/04/09/当我听米店的时候，我在听些什么/","2025/04/10/米店/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };