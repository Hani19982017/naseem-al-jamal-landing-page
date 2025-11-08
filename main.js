var arrow_up = document.querySelector(".icon3");
var expanded_box = document.querySelector(".message_content_box");
var click_flag = 0;
arrow_up.addEventListener("click", (e) => {
    if (click_flag != 1) {

        click_flag = 1
        expanded_box.style.height = "90vh";
    }
    else {
        click_flag = 0;
        expanded_box.style.height = "0vh";
    }
}
)

