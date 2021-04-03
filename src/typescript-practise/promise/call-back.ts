const start = (callback) => {
  setTimeout(() => {
    callback("Hi1")
    setTimeout(() => {
      callback("Hi2")
      setTimeout(() => {
        callback("Hi3")
      }, 1000);
    }, 1000);
  }, 1000);
};

start(text => console.log(text));