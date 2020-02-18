
  function onFilterInput(){
   let input = document.getElementById('inputFilterId');
   let filter = input.value.toUpperCase();
   console.log(filter);

   let listTrainerId = document.getElementsByTagName("li");
  for(let i = 0; i<listTrainerId.length; i++){
      console.log(listTrainerId[i].innerText);
  }
  }
  document.addEventListener('keypress',onFilterInput);

