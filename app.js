const btn = document.querySelectorAll('.btn');
const f_res = document.querySelector('.f-res');
const s_res = document.querySelector('.s-res');
const res_con = document.querySelector('.res-con');

let arr = [];
let num = [];
let arith = [];
let strr = '';


function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}



function pro(str, str2){
	if (s_res.innerHTML != '0'){
		f_res.innerHTML = ' ';
		let temp = (s_res.innerHTML).replaceAll(',', '');;
		arr.push(temp);
		if(str2 != ' '){
			arr.push(str2);
		}
		let tt = s_res.innerHTML;
		s_res.innerHTML = '0';
		f_res.innerHTML = tt + ' ' + str + ' ';
	}
}




for (let i = 0; i <= btn.length; i++) {
	if (btn[i] != null){
		btn[i].addEventListener('click', () => {
			let content = btn[i].textContent;
			if (!(btn[i].classList.contains('btn-l')) && !(btn[i].classList.contains('btn-o'))) {
				if (s_res.innerHTML == 0) {
					s_res.innerHTML = ' ';
					s_res.innerHTML = s_res.innerHTML += content;
				} else{
					s_res.innerHTML = s_res.innerHTML += content;	
					strr = s_res.innerHTML;
					let t = (s_res.innerHTML).replaceAll(',',''); 			
					s_res.innerHTML = numberWithCommas(t); 
				}
			}else if ((btn[i].classList.contains('btn-l')) || (btn[i].classList.contains('btn-o'))){
				if (content == 'C') {
					s_res.innerHTML = '0';
					f_res.innerHTML = ' ';
					arr = [];
				}else if(content == '+/-'){
						s_res.innerHTML = s_res.innerHTML * (-1);
				}else if(content == '%'){
					s_res.innerHTML = s_res.innerHTML / (100);
				}else if(content == '÷'){
					pro('÷', '/');
				}else if(content == '×'){
					pro('×', '*');
				}else if(content == '−'){
					pro('−', '-');				
				}else if(content == '+'){
					pro('+', '+');
				}else if(content == '='){
					pro(' ', ' ');
					f_res.innerHTML = '=';
					console.log(arr);
					let equ = arr.join('');
					if (arr.length != 0){
						s_res.innerHTML = numberWithCommas(eval(equ));
						arr = [];
					}else{
						s_res.innerHTML = 0;
					}
				}
			}	
});
}
}
