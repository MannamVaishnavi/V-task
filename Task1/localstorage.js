document.getElementById('btn').addEventListener('click',()=>{
    const t = document.getElementById('tb').value;
    if(t){
        if(!Number.isFinite(Number(t))){
            alert('Please enter only digits.')
        }
        else if(t.length<6 || t.length>6){
            alert('Please enter a 6 digit pincode');
        }
        else{
            localStorage.setItem('pincode', t);
            document.getElementById('feedbackToSave').innerHTML="Saved Successfully!!"
            document.getElementById('tbValue').value="";
        }
    }
    else{
        alert('Please eneter a pincode');
    }
});
document.getElementById('btn1').addEventListener('click',()=>{
    const pin = localStorage.getItem('pincode');
    document.getElementById('sp1').innerHTML = "The pincode you entered is: "+pin.toString(); 

});