document.getElementById("calcDay").onclick = function(){
    let month = +document.getElementById("month").value
    let year = +document.getElementById("year").value
    let alert = document.getElementById("alert")
    alert.classList.add('d-block')


    if(month >= 1 && month <= 12){
        switch(month){
            case 4:
            case 6:
            case 9:
            case 11:
                alert.innerHTML = `tháng ${month} năm ${year} có 30 ngày`
                break
            case 2:
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
                    alert.innerHTML = `tháng ${month} năm ${year} có 29 ngày`
                } else {
                    alert.innerHTML = `tháng ${month} năm ${year} có 28 ngày`
                }
                break
            default:
                alert.innerHTML = `tháng ${month} năm ${year} có 31 ngày`
        }
    }else{
        alert.innerHTML = `không hợp lệ`
    }

}