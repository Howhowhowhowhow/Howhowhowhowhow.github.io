var posts=["2025/04/03/AED/","2025/12/31/2025-2026/","2025/07/13/陈思诚新片《恶意》引发的一些联想/","2025/07/07/开新坑啦/","2025/04/05/communication-log/","2025/03/01/漫谈DeepSeek：人工智能领域的新星/","2025/02/23/welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };