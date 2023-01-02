// note: vì để giả sử nhập đúng nên không cần ktra hợp lệ

document.getElementById("yesterday").onclick = function(){
    // input: lấy giá trị
    let day = +document.getElementById("day").value
    let month = +document.getElementById("month").value
    let year = +document.getElementById("year").value
    let alert = document.getElementById("alert")
    // tính ngày hôm qua
    // thuật toán ngày từ 2->31 day--
    // xét năm nhuận không nhuận thì tính từ tháng thứ 3
    //ngày 1/1/year thì sẽ thành 31/12/ year--
    switch(month){
        case 1:
            if(day === 1 && month === 1){
                day = 31
                month = 12
                year--
            }else{
                if(day >= 2 && day <= 31){
                    day--
                }else{
                    day = 30
                    month--
                }
            }
            break
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
            if(day >= 2 && day <= 31){
                day--
            }else{
                day = 30
                month--
            }
            break
		case 3:
			if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
				if(day >= 2 && day <= 31){
                    day--
                }else{
                    day = 29
                    month--
                }
			} else {
				if(day >= 2 && day <= 31){
                    day--
                }else{
                    day = 28
                    month--
                }
			}
            break
		default:
			if(day >= 2 && day <= 30){
                day--
            }else{
                day = 31
                month--
            }
            break
    }

    // let nd,nm,ny
    // nd = day
    // nm = month
    // ny = year
    // if(day <)

    alert.classList.add('d-block')
    alert.innerHTML = `${day} ${month} ${year}`
}

document.getElementById("tomorrow").onclick = function(){
    // input lấy giá trị
    let day = +document.getElementById("day").value
    let month = +document.getElementById("month").value
    let year = +document.getElementById("year").value
    let alert = document.getElementById("alert")
    let d
    // thuật toán: dùng thuật toán lấy dư để tìm ngày mai
    // vd: ngày 2 thì 2 % 30 dư 2 + 1 = 3 => ngày thứ 3 tương tự như những ngày khác
    // ngày 31/12/year thì chuyển sang 1/1/year++
    switch(month){
        case 4:
        case 6:
        case 9:
        case 11:
            d= 30
            break
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
				d = 29
			} else {
				d = 28
			}
            break
        default:
            d = 31
    }
    day = (day % d) + 1
    if(day === 1){
        month = (month % 12) + 1
    }else if(day === 31 && month === 12){
        day = 1
        month = 1
        year++
    }


    alert.classList.add('d-block')
    alert.innerHTML = `${day} ${month} ${year}`
}
console.log(2 % 30); 