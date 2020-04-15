/*this function takes in a url for the api you want to use and takes in an imagesrc and image id, and changes the src of the image based on the reults of the api fetch*/

function getData(url,empty,imgID){
  //finds the element with that iD
  var image= document.getElementById(imgID);

//fetches info from api
  fetch(url)
  //turns result into .json()
      .then((resp) => resp.json())
      .then(function(data) {
        //stringifys the data and turns it from string to array then to int until 
        console.log(data);
        var string=JSON.stringify(data);
        console.log(data);
        var result=string.split(",");
        console.log(result);
        console.log(result[12]);
        var temp=result[12].split(":");
        console.log(temp);
        var value=JSON.parse(temp[1]);
        console.log(value);
        if (value==0) {
          image.src=empty;
          console.log(value);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
}
