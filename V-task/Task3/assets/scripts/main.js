
const locateMeBtn = document.getElementById("locateMeBtn")
locateMeBtn.addEventListener('click', function() {
if (navigator.geolocation) {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(geolocationAccessGranted, geolocationAccessDenied);
}
});

function geolocationAccessGranted(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    document.getElementById('locationBox').innerHTML = `latitude ${location.coords.latitude} longitude ${location.coords.longitude}`;
}
function geolocationAccessDenied(){
    alert('Permission not given by user.');
}

document.getElementById("saveToLocal").addEventListener('click',function(){
    const tbValue = document.getElementById("pinCode").value;
    if(tbValue){
        if(!Number.isFinite(Number(tbValue))){
            alert('Please enter only digits.')
        }
        else if(tbValue.length<6 || tbValue.length>6){
            alert('Please enter a 6 digit pincode');
        }
        else{
            localStorage.setItem('pincode', tbValue);
            document.getElementById('feedbackToSave').innerHTML="Saved Successfully!!"
            document.getElementById('pinCode').value="";
            console.log('Saved successfully to local and the pin code is tbValue');
        }
    }
    else{
        alert('Please eneter a pincode');
    }

});
document.getElementById('getFromLocal').addEventListener('click',()=>{
    const pincode = localStorage.getItem('pincode');
    document.getElementById('feedbackToRetrive').innerHTML = "The pincode you entered is: "+pincode.toString(); 
    console.log('Pincode retrieved succesfully from local.');
    localStorage.removeItem('pincode');

});