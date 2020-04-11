/*this function takes in a url for the api you want to use and takes in an image, the one you want display when a person is in*/

function getData(url,img){

  var image= document.createElement("IMG");
  var theDiv= document.getElementById("Image-Here")
  img.src=img;
  fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        let Info = data.Search;
        return Info.map(function(thePerson) {
           int theValue=`${thePerson.LastValue}`;

           if (theValue==1){
             img.src="C:\Users\Jack Morrison\Documents\GitHub\Online-ShoeBox\website\empty pic.png";
           }
        })
      })
      .catch(function(error) {
        console.log(error);
      });
      image.appendChild(theDiv);
}
