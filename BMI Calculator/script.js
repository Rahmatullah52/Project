const btn = document.getElementById("Calculate");
btn.addEventListener("click", function() {
         
     let height = document.querySelector("#height").value;
     let weight = document.querySelector("#weight").value;

     if(height == '' || weight == '') {
        alert('Enter your Height and Weight');
        return;
     }

     height = height / 100;

     let BMI = (weight / (height * height));
         BMI = BMI.toFixed(2);

         document.querySelector("#result").innerHTML = BMI;

         let status = '';

         if(BMI < 18.5) {
            status = 'The Weight is Low';
         }

         if(BMI >= 18.5 && BMI < 25){
            status = 'Your Weight is Fix';
            
         }

         if(BMI >= 25 && BMI < 30){
            status = 'Your Weight is High';
            
         }

         if(BMI >= 30){
            status = 'You are over weight please contect with your Doctor ';
            
         }

         document.querySelector('.comment').innerHTML = `
        <span id="comment"> ${status} </span>`

});