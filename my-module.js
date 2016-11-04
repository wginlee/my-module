module.exports = {
  f: function(){
    console.log("The answer to the universe", private());
  }
};

function private(){
  // console.log("a private function from our module");
  return 42;
}