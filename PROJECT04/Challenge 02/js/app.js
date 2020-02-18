const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

document.addEventListener("keyup", event => {
	if( event.code === 'Enter'){
		const inpuValue = INPUT_HTML.value;
		if(inpuValue != ""){
			// 1. add todo
			console.log(inpuValue);
			// 2. clear input
			clearInput();
		}
	}
	console.log(event.code);
	// TODO: get value from input 
	// TODO: check condition if not null and console value
	// TODO: clear  input 
});

function clearInput() {
   INPUT_HTML.value = "";
}