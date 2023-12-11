let target_number=Math.ceil(Math.random()*100)


function number_check(){
    let find_number=document.getElementById("enter_value").value;
    let x=document.getElementById("status");
    if (target_number==find_number){
        x.style.color="green";
        console.log(x.textContent="CONGRATULATION GOOD GUESS");
    }
    else if (target_number>find_number){
        x.style.color="orange";

        console.log(x.textContent="YOUR GUESSED LESS VALUE");
    }
    else if (target_number<find_number) {
        x.style.color="red";
        console.log(x.textContent="YOUR GUESSED MORE VALUE");
    }

}