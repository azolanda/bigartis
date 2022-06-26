"use strict"

document.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('contact__form');
    let formRequired = document.querySelectorAll('._required');

        for (let i = 0; i < formRequired.length; i++){
            let input = formRequired[i];
            input.addEventListener('blur', function() {
                formRemoveError(input);
            })
        }

    form.addEventListener('submit', formSend);
    // formValidate(form);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0){
            // отправка формы
            form.classList.add('_sending');
            
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if(response.ok){
                
                let result = await response.json();
                console.log(result.message);
                // alert(result.message);
                // let result = await JSON.stringify(response);
                // setTimeout(()=>{
                    let successMess = document.getElementById('contact__form__message');
                    successMess.classList.remove('no-visible');
                    form.classList.remove('_sending');
                    form.reset();
                    form.classList.add('no-visible');
                // },1500);
            }
            else{
                alert("Ошибка отправки формы");
                form.classList.remove('_sending');
            }
        }
        else console.log("Для отправки формы заказа необходимо заполнить обязательные поля!");
    }

    function formValidate(form){
        let error = 0;

        let formRequired = document.querySelectorAll('._required');

        for (let i = 0; i < formRequired.length; i++){
            let input = formRequired[i];

            formRemoveError(input);
            
            if(input.value === ''){
                formAddError(input);
                error++;
            }
            else if(input.classList.contains('_name')){
                if(nameTest(input)){
                    formAddError(input);
                    error++;
                }
                
            }
            else if(input.classList.contains('_phone')){
                if(telTest(input)){
                    formAddError(input);
                    error++;
                }
                
            }
            else if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
                
            }
            else if(input.classList.contains('_website')){
                if(websiteTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_company')||input.classList.contains('_comments')){
                if(companyTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_town')){
                if(townTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_service')){
                if(serviceTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_budget')){
                if(budgetTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else {
                if(input.getAttribute("type") === "checkbox" && input.checked === false){
                    formAddError(input);
                    // input.parentElement.classList.add('_error');
                    error++;
                }
            }
            // else{
            //     if(input.value === ''){
            //         formAddError(input);
            //         error++;
            //     }
            // }
        }

        return error;
    }

    function formAddError(input){
        // input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        // input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function nameTest(input){
        return !/^[a-zA-Zа-яА-я- \-]*$/i.test(input.value);
    }

    function telTest(input){
        return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
    }

    function emailTest(input){
        // return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        return !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(input.value);
    }

    // /^(ftp|http|https):\/\/[^ "]+$/.test(url)
    // /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/

    function websiteTest(input){
        return !/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i.test(input.value);
    }

    function companyTest(input){
        return !/^[0-9a-zA-Zа-яА-я- \-\.\+\"\_\@\,\#\!\(\)\№\&\/]*$/i.test(input.value);
    }

    function townTest(input){
        return !/^[0-9a-zA-Zа-яА-я- \-\.]*$/i.test(input.value);
    }

    function serviceTest(input){
        return !/^[0-9a-zA-Zа-яА-я- \-\.\,]*$/i.test(input.value);
    }

    function budgetTest(input){
        console.log(input.value);
        return !/^[0-9a-zA-Zа-яА-я- \-\.]*$/i.test(input.value);
    }
});