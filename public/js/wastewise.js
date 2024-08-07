function GPSgetLocation(){
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    //let src1= "https://www.google.com/maps/embed/v1/place?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&q=";
   // let src2=  address
    //let location =  src1 + src2;
    
    if (state =="" || city =="" ||address==""){
        alert("Please select State, City and Enter the address of Your location!");
    }
    else{

        let src1= "https://www.google.com/maps/embed/v1/place?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&q=";
        let src2= address + "+ places +" + city + ",+" + state;
        let location =  src1 + src2;

        document.getElementById("BTNgps").style.display ="none";
        document.getElementById("title").innerHTML ="Searched result showing the current  location of client on the Map "
       document.getElementById("map").src = location;
       document.getElementById("src2").value=address
       document.getElementById("direction").style.visibility ="false";
       document.getElementById("mapdiv1").style.display ="block";
       document.getElementById("filterForm").style.visibility ="false";

       document.getElementById("address2").value = address;
       document.getElementById("state2").value = state;
       document.getElementById("city2").value = city; 

    }
    }

 
 function getDumpsites(){
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let address = document.getElementById("address").value;
    let category = document.getElementById("category").value;
    if(category==""){
        category="Waste disposal sites near me "
    }
    if (state =="" || city =="" ||address==""){
        alert("Please select State, City and Enter the address of Your location!");
    }
    else{
        //let src1="https://www.google.com/maps/embed/v1/view?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&center=37.7749,-122.4194&zoom=13&markers=color:red%7Clabel:S%7C37.7749,-122.4194";
        let src1="https://www.google.com/maps/embed/v1/search?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&q=";
        let src2 = category+" + places +"+city +" ,+ "+ state;
        let location =  src1 +src2;

        document.getElementById("map").src = location;
        document.getElementById("title").innerHTML ="Tracking result showing the Nearest Dumpsite on the Map Near the search location "
        document.getElementById("getBTN").style.display ="none";
       document.getElementById("mapdiv1").style.display ="block";
       document.getElementById("direction").style.display ="inline-block";
       document.getElementById("category").style.display ="inline-block";
       document.getElementById("lbank").style.display ="block";
       document.getElementById("Address2").style.display ="block";
       document.getElementById("Address").attributes.type ="hidden";
 }
}
    function getRecyclers(){
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let address = document.getElementById("address").value;
        if (state =="" || city =="" ||address==""){
            alert("Please select State, City and Enter the address of Your location!");
        }
        else{
            //let src1="https://www.google.com/maps/embed/v1/view?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&center=37.7749,-122.4194&zoom=13&markers=color:red%7Clabel:S%7C37.7749,-122.4194";
            let src1="https://www.google.com/maps/embed/v1/search?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&q=";
            let src2 = "Recycling facilities near me + places + "+city +" ,+ "+ state;
            let location =  src1 +src2;
    
            document.getElementById("map").src = location;
            document.getElementById("title").innerHTML ="Tracking Result showing the Nearest Recyclers on the Map";
            document.getElementById("getBTN").style.display ="none";
           document.getElementById("mapdiv1").style.display ="block";
           document.getElementById("direction").style.display ="inline-block";
           document.getElementById("bank").style.display ="inline-block";
           document.getElementById("lbank").style.display ="block";
           document.getElementById("Address2").style.display ="block";
           document.getElementById("Address").attributes.type ="hidden";
           
            }
        }
    


    function getDirection(){
       
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let address = document.getElementById("address").value;
        
        if (state =="" || city =="" ||address==""){
            alert("Please select State, City and Enter the address of Your location!");
        }
        else{

        let origin = document.getElementById("address1").value;
        let destination  = document.getElementById("address2").value;
        
        let src1= "https://www.google.com/maps/embed/v1/directions?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw";
        let src2 = "&origin="+destination+"+"+ city+ "+"+ state+"&destination=" +origin +"+"+ city + "+"+ state + "&avoid=tolls|highways"
       
        document.getElementById("title").innerHTML ="Tracking result showing Direction from client current location to the selected Service Destination on the Map"
        document.getElementById("mapdiv1").style.display ="block";
        document.getElementById("map").src = src1+src2;
        hideLoading();
            
        }
    }

function getLocation(){
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
      
    if (state =="" || city =="" ||address==""){
        alert("Please select state, City and Address!");
    } 
    else{
    let src1= "https://www.google.com/maps/embed/v1/place?key=AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw&q=";
    let src2= address + "+ places +" + city + ",+" + state;
    let location =  src1 + src2;
  
       document.getElementById("mapdiv1").style.display ="block";
       document.getElementById("map").src = location;

        }
    }

    

      // Function to show the loading animation
  function showLoading() {
    document.getElementById('loadingAnimation').style.display = 'flex';
}

// Function to hide the loading animation
function hideLoading() {
    document.getElementById('loadingAnimation').style.display = 'none';
}


    
