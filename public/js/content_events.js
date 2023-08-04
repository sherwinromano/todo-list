import { capitalize, daily_task, important, planned } from "./app.js";

export function dailyTask(e) {
    const list_wrapper = e.target.parentElement.parentElement;
    
    if(e.target.id == 'check-icon') {

        const radio_button = list_wrapper.firstElementChild.firstElementChild;
        const list_text = list_wrapper.firstElementChild.lastElementChild;
        const edit_button = list_wrapper.lastElementChild.firstElementChild;
                     
        list_wrapper.classList.add('bg-highlight');
        radio_button.setAttribute('id', 'checked');
        radio_button.classList.remove('fa-regular', 'fa-circle');
        radio_button.classList.add('fa-solid', 'fa-circle-check');
        list_text.classList.add('line-through');
        edit_button.removeAttribute('id', 'edit-icon');
        
    } else if (e.target.id == 'checked') {

        const radio_button = list_wrapper.firstElementChild.firstElementChild;
        const list_text = list_wrapper.firstElementChild.lastElementChild;
        const edit_button = list_wrapper.lastElementChild.firstElementChild;

        list_wrapper.classList.remove('bg-highlight');
        radio_button.classList.remove('fa-solid', 'fa-circle-check');
        radio_button.classList.add('fa-circle', 'fa-regular');
        radio_button.setAttribute('id', 'check-icon');
        list_text.classList.remove('line-through');
        edit_button.setAttribute('id', 'edit-icon');

    } else if (e.target.id == 'edit-icon') {

        const parent = list_wrapper.firstElementChild;
        const radio_button = parent.firstElementChild;
        const list_text = parent.lastElementChild;
        const edit_button = e.target;
        const input_field = document.createElement('input');

        input_field.setAttribute('type', 'text');
        input_field.classList.add('bg-transparent', 'outline-none', 'text-base');
        input_field.value = list_text.innerText;
        parent.removeChild(list_text);
        parent.appendChild(input_field);
        input_field.focus();
        radio_button.removeAttribute('id', 'check-icon');
        edit_button.setAttribute('id', 'save');
        edit_button.classList.remove('fa-solid', 'fa-pencil'); 
        edit_button.classList.add('fa-solid', 'fa-check'); 

    } else if (e.target.id == 'save') {

        const parent = list_wrapper.firstElementChild;
        const input_field = parent.lastElementChild;
        const radio_button = parent.firstElementChild;
        const list_text = document.createElement('p');
        const edit_button = e.target;
        
        if(!input_field.value) {
            alert("Can't proceed, please input some values");
            input_field.focus();
        } else {    
            list_text.classList.add('text-base');
            list_text.innerText = capitalize(input_field.value);
            parent.removeChild(input_field);
            parent.appendChild(list_text);
            edit_button.setAttribute('id', 'edit-icon');
            edit_button.classList.remove('fa-solid', 'fa-check');
            edit_button.classList.add('fa-solid', 'fa-pencil');
            radio_button.setAttribute('id', 'check-icon');
        }
    } else if (e.target.id == 'remove-icon') {
        daily_task.removeChild(list_wrapper);
    } 
}

export function Important(e) {
    const list_wrapper = e.target.parentElement.parentElement;
    
    if(e.target.id == 'check-icon') {

        const radio_button = list_wrapper.firstElementChild.firstElementChild;
        const list_text = list_wrapper.firstElementChild.lastElementChild;
        const edit_button = list_wrapper.lastElementChild.firstElementChild;
                     
        list_wrapper.classList.add('bg-highlight');
        radio_button.setAttribute('id', 'checked');
        radio_button.classList.remove('fa-regular', 'fa-circle');
        radio_button.classList.add('fa-solid', 'fa-circle-check');
        list_text.classList.add('line-through');
        edit_button.removeAttribute('id', 'edit-icon');
        
    } else if (e.target.id == 'checked') {

        const radio_button = list_wrapper.firstElementChild.firstElementChild;
        const list_text = list_wrapper.firstElementChild.lastElementChild;
        const edit_button = list_wrapper.lastElementChild.firstElementChild;

        list_wrapper.classList.remove('bg-highlight');
        radio_button.classList.remove('fa-solid', 'fa-circle-check');
        radio_button.classList.add('fa-circle', 'fa-regular');
        radio_button.setAttribute('id', 'check-icon');
        list_text.classList.remove('line-through');
        edit_button.setAttribute('id', 'edit-icon');

    } else if (e.target.id == 'edit-icon') {

        const parent = list_wrapper.firstElementChild;
        const radio_button = parent.firstElementChild;
        const list_text = parent.lastElementChild;
        const edit_button = e.target;
        const input_field = document.createElement('input');

        input_field.setAttribute('type', 'text');
        input_field.classList.add('bg-transparent', 'outline-none', 'text-base');
        input_field.value = list_text.innerText;
        parent.removeChild(list_text);
        parent.appendChild(input_field);
        input_field.focus();
        radio_button.removeAttribute('id', 'check-icon');
        edit_button.setAttribute('id', 'save');
        edit_button.classList.remove('fa-solid', 'fa-pencil'); 
        edit_button.classList.add('fa-solid', 'fa-check'); 

    } else if (e.target.id == 'save') {

        const parent = list_wrapper.firstElementChild;
        const input_field = parent.lastElementChild;
        const radio_button = parent.firstElementChild;
        const list_text = document.createElement('p');
        const edit_button = e.target;
        
        if(!input_field.value) {
            alert("Can't proceed, please input some values");
            input_field.focus();
        } else {    
            list_text.classList.add('text-base');
            list_text.innerText = capitalize(input_field.value);
            parent.removeChild(input_field);
            parent.appendChild(list_text);
            edit_button.setAttribute('id', 'edit-icon');
            edit_button.classList.remove('fa-solid', 'fa-check');
            edit_button.classList.add('fa-solid', 'fa-pencil');
            radio_button.setAttribute('id', 'check-icon');
        }
    } else if (e.target.id == 'remove-icon') {
        important.removeChild(list_wrapper);
    } 
}

export function Planned(e) {
    const list_wrapper = e.target.parentElement.parentElement;
    
    if(e.target.id == 'check-icon') {

        const radio_button = list_wrapper.firstElementChild.firstElementChild;
        const list_text = list_wrapper.firstElementChild.lastElementChild;
        const edit_button = list_wrapper.lastElementChild.firstElementChild;
                     
        list_wrapper.classList.add('bg-highlight');
        radio_button.setAttribute('id', 'checked');
        radio_button.classList.remove('fa-regular', 'fa-circle');
        radio_button.classList.add('fa-solid', 'fa-circle-check');
        list_text.classList.add('line-through');
        edit_button.removeAttribute('id', 'edit-icon');
        
    } else if (e.target.id == 'checked') {

        const radio_button = list_wrapper.firstElementChild.firstElementChild;
        const list_text = list_wrapper.firstElementChild.lastElementChild;
        const edit_button = list_wrapper.lastElementChild.firstElementChild;

        list_wrapper.classList.remove('bg-highlight');
        radio_button.classList.remove('fa-solid', 'fa-circle-check');
        radio_button.classList.add('fa-circle', 'fa-regular');
        radio_button.setAttribute('id', 'check-icon');
        list_text.classList.remove('line-through');
        edit_button.setAttribute('id', 'edit-icon');

    } else if (e.target.id == 'edit-icon') {

        const parent = list_wrapper.firstElementChild;
        const radio_button = parent.firstElementChild;
        const list_text = parent.lastElementChild;
        const edit_button = e.target;
        const input_field = document.createElement('input');

        input_field.setAttribute('type', 'text');
        input_field.classList.add('bg-transparent', 'outline-none', 'text-base');
        input_field.value = list_text.innerText;
        parent.removeChild(list_text);
        parent.appendChild(input_field);
        input_field.focus();
        radio_button.removeAttribute('id', 'check-icon');
        edit_button.setAttribute('id', 'save');
        edit_button.classList.remove('fa-solid', 'fa-pencil'); 
        edit_button.classList.add('fa-solid', 'fa-check'); 

    } else if (e.target.id == 'save') {

        const parent = list_wrapper.firstElementChild;
        const input_field = parent.lastElementChild;
        const radio_button = parent.firstElementChild;
        const list_text = document.createElement('p');
        const edit_button = e.target;
        
        if(!input_field.value) {
            alert("Can't proceed, please input some values");
            input_field.focus();
        } else {    
            list_text.classList.add('text-base');
            list_text.innerText = capitalize(input_field.value);
            parent.removeChild(input_field);
            parent.appendChild(list_text);
            edit_button.setAttribute('id', 'edit-icon');
            edit_button.classList.remove('fa-solid', 'fa-check');
            edit_button.classList.add('fa-solid', 'fa-pencil');
            radio_button.setAttribute('id', 'check-icon');
        }
    } else if (e.target.id == 'remove-icon') {
        planned.removeChild(list_wrapper);
    } 
}