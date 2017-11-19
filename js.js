var ourRequest=new XMLHttpRequest();
ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-1.json");
ourRequest.onload=function(){
    console.log(ourRequest.responseText);
}
ourRequest.send();

50c7c8e256d8581aadb566dd80b9ad8a