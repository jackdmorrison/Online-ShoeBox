/*this function takes in a url for the api you want to use and takes in an image, the one you want display when a person is in*/

function getData(url,empty,imgID){
  var image= document.getElementById(imgID);
  //var theDiv= document.getElementById("Image-Here")

  fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
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
  //theDiv.appendChild(image);
}
