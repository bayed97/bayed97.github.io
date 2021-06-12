function calculateBMI()
{
    if (document.getElementById("height").value == "" || document.getElementById("weight").value == "" ) {
          alert('Form height or weight is empty');
    }else {

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight/(height/100*height/100);
    var r = (bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + r;

    if (r >= 0 && r < 18.59){
         alert("Yeay your BMI is calculated!");
          document.getElementById("Category").innerHTML="Your are underweight";
      }else if (r >= 18.59 && r <= 24.99){
         alert("Yeay your BMI is calculated!");
          document.getElementById("Category").innerHTML="Your are normal";
      }else if ( r >= 25 && r <= 29.99) {
         alert("Yeay your BMI is calculated!");
        document.getElementById("Category").innerHTML="Your are overweight";
      }else if ( r >= 30 && r <= 34.99) {
         alert("Yeay your BMI is calculated!");
          document.getElementById("Category").innerHTML="Your are obese";
      } else if (r >= 35){
         alert("Yeay your BMI is calculated!");
        document.getElementById("Category").innerHTML="Your are extremely obessed";
      } else{
          alert("Error. Please Enter Valid Weight and/or Height");
      }
    }
    }
