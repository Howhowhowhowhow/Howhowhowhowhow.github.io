var posts=["2025/03/01/漫谈DeepSeek：人工智能领域的新星/","2025/02/23/welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };