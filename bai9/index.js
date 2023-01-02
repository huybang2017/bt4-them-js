document.getElementById("button").onclick = function(){
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value
    let name3 = document.getElementById("name3").value

    let x1 = +document.getElementById("x1").value
    let y1 = +document.getElementById("y1").value
    let x2 = +document.getElementById("x2").value
    let y2 = +document.getElementById("y2").value
    let x3 = +document.getElementById("x3").value
    let y3 = +document.getElementById("y3").value
    let xTruong = +document.getElementById("xTruong").value
    let yTruong = +document.getElementById("yTruong").value
    let alert = document.getElementById("alert")
    alert.classList.add('d-block')

    let range1,range2,range3
    range1 = Math.sqrt(Math.pow(xTruong - x1,2) + Math.pow(yTruong - y1,2))
    range2 = Math.sqrt(Math.pow(xTruong - x2,2) + Math.pow(yTruong - y2,2))
    range3 = Math.sqrt(Math.pow(xTruong - x3,2) + Math.pow(yTruong - y3,2))

    if(range1 > range2 && range1 > range3){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name1}`
    }else if(range2 > range1 && range2 > range3){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name2}`
    }else if(range3 > range1 && range3 > range2){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name3}`
    }else if(range3 === range1 && range3 > range2){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name3} và ${name1}`
    }else if(range3 === range2 && range3 > range1){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name3} và ${name2}`
    }else if(range2 === range1 && range2 > range3){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name2} và ${name1}`
    }else if(range2 === range3 && range2 > range1){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name3} và ${name2}`
    }else if(range1 === range2 && range1 > range3){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name1} và ${name2}`
    }else if(range1 === range3 && range1 > range2){
        alert.innerHTML = `Sinh viên xa trường nhất: ${name1} và ${name3}`
    }else{
        alert.innerHTML = `cả 3 bạn đều xa trường như nhau`
    }
}