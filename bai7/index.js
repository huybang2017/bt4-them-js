document.getElementById("button").onclick = function () {
    // input: lấy giá trị
    let num = +document.getElementById("num").value
    // tạo các biến cần
    let numHundred, numDozen, numUnit, talkUnit, talkDozen, talkHundred
    // xử lí các ký số
    numUnit = num % 10
    numDozen = (num - (numUnit)) % 100 / 10
    numHundred = (num - (numDozen * 10 + numUnit)) % 1000 / 100

    let alert = document.getElementById("alert")
    alert.classList.add('d-block')

    // dùng switch if else để làm thuật toán đọc số
    switch (numUnit) {
        case 0:
            if(numDozen === 1){
                talkUnit = `mười`
            }else if(numDozen > 1){
                talkUnit = `mươi`
            }else if(numDozen === 0){
                talkUnit = ""
            }
            break
        case 1:
            talkUnit = "một"
            break
        case 2:
            talkUnit = "hai"
            break
        case 3:
            talkUnit = "ba"
            break
        case 4:
            talkUnit = "bốn"
            break
        case 5:
            talkUnit = "năm"
            break
        case 6:
            talkUnit = "sáu"
            break
        case 7:
            talkUnit = "bảy"
            break
        case 8:
            talkUnit = "tám"
            break
        case 9:
            talkUnit = "chín"
            break
    }

    switch (numDozen) {
        case 0:
            if(numUnit !== 0){
                talkDozen = "lẻ"
            }else{
                talkDozen = " "
            }
            break
        case 1:
            if(numUnit !== 0){
                talkDozen = "một mươi"
            }else{
                talkDozen = ""
            }
            break
        case 2:
            if(numUnit !== 0){
                talkDozen = "hai mươi"
            }else{
                talkDozen = "hai"
            }
            break
        case 3:
            if(numUnit !== 0){
                talkDozen = "ba mươi"
            }else{
                talkDozen = "ba"
            }
            break
        case 4:
            if(numUnit !== 0){
                talkDozen = "bốn mươi"
            }else{
                talkDozen = "bốn"
            }
            break
        case 5:
            if(numUnit !== 0){
                talkDozen = "năm mươi"
            }else{
                talkDozen = "năm"
            }
            break
        case 6:
            if(numUnit !== 0){
                talkDozen = "sáu mươi"
            }else{
                talkDozen = "sáu"
            }
            break
        case 7:
            if(numUnit !== 0){
                talkDozen = "bảy mươi"
            }else{
                talkDozen = "bảy"
            }
            break
        case 8:
            if(numUnit !== 0){
                talkDozen = "tám mươi"
            }else{
                talkDozen = "tám"
            }
            break
        case 9:
            if(numUnit !== 0){
                talkDozen = "chín mươi"
            }else{
                talkDozen = "chín"
            }
            break
    }

    switch (numHundred) {
        case 1:
            talkHundred = "một trăm"
            break
        case 2:
            talkHundred = "hai trăm"
            break
        case 3:
            talkHundred = "ba trăm"
            break
        case 4:
            talkHundred = "bốn trăm"
            break
        case 5:
            talkHundred = "năm trăm"
            break
        case 6:
            talkHundred = "sáu trăm"
            break
        case 7:
            talkHundred = "bảy trăm"
            break
        case 8:
            talkHundred = "tám trăm"
            break
        case 9:
            talkHundred = "chín trăm"
            break
    }
    // output: đọc các số nguyên có 3 chữ số
    alert.innerHTML = `${talkHundred} ${talkDozen} ${talkUnit}`
}