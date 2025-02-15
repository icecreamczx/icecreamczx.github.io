var posts=["2025/02/13/hello-world/","2025/02/14/README/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };