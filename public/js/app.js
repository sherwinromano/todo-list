import { dailyTask, Important, Planned } from "./content_events.js";

// For popup
const add_new_task = document.querySelector('#add-btn'); 
const toggle_popup = document.querySelector('#popup');
const toggle_overlay = document.querySelector('#overlay');
const close_btn_popup = document.querySelector('#close-popup');
const popup_content = document.querySelector('#popup-content');
const dropdown_menu = document.querySelector('#dropdown-menu');
const date = document.querySelector('#date');
const closePopUp = () => {
    toggle_overlay.classList.add('opacity-0');
    toggle_overlay.classList.add('pointer-events-none');
}

// For media query
const screen_size = window.innerWidth;
const new_task = document.querySelector('#add-new-btn'); 
const menu_btn = document.querySelector('#menu-btn');
const sidebar_menu = document.querySelector('#sidebar');

// For toggle dark & light mode
const main_container = document.querySelector('#container');
const toggle_theme = document.querySelector('#toggle-btn');

// For deleting all task
const clear = document.querySelector('#clear-btn');

// For navigations 
const navlink_dailytask = document.querySelector('#link-dailytask');
const navlink_important = document.querySelector('#link-important');
const navlink_planned = document.querySelector('#link-planned');

// For adding new task
const add_new_btn = document.querySelector('#add');

// For content / Export to event_handler file
export const daily_task = document.querySelector('#daily-task');
export const important = document.querySelector('#important');
export const planned = document.querySelector('#planned');
export const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}
// For display content on each list
const content_title = document.querySelector('#content-title');
const showDailyTask = () => {
    content_title.innerText = 'Daily Task';    
    navlink_dailytask.classList.add('active')
    navlink_important.classList.remove('active');
    navlink_planned.classList.remove('active');
    daily_task.classList.remove('hidden');
    daily_task.classList.add('block');
    important.classList.remove('block');
    important.classList.add('hidden');
    planned.classList.remove('block');
    planned.classList.add('hidden');
}
const showImportant = () => {
    content_title.innerText = 'Important';
    navlink_important.classList.add('active');
    navlink_dailytask.classList.remove('active');
    navlink_planned.classList.remove('active');
    important.classList.remove('hidden');
    important.classList.add('block');
    daily_task.classList.remove('block');
    daily_task.classList.add('hidden');
    planned.classList.remove('block');
    planned.classList.add('hidden');
}
const showPlanned = () => {
    content_title.innerText = 'Planned';
    navlink_planned.classList.add('active');
    navlink_dailytask.classList.remove('active');
    navlink_important.classList.remove('active');
    planned.classList.remove('hidden');
    planned.classList.add('block');
    daily_task.classList.remove('block');
    daily_task.classList.add('hidden');
    important.classList.remove('block');
    important.classList.add('hidden');
}

navlink_dailytask.addEventListener('click', () => {
    showDailyTask();
});
navlink_important.addEventListener('click', () => {
    showImportant();
});
navlink_planned.addEventListener('click', () => {
    showPlanned();
})

// Content events
daily_task.addEventListener('click', dailyTask);
important.addEventListener('click', Important);
planned.addEventListener('click', Planned);

// Toggle popup (Desktop)
add_new_task.addEventListener('click', () => {
    const input_data = document.querySelector('#description');

    input_data.value = "";
    toggle_popup.classList.remove('lg:translate-y-100');
    toggle_popup.classList.add('lg:-translate-y-1/2');
    toggle_overlay.classList.remove('opacity-0');
    toggle_overlay.classList.remove('pointer-events-none');
    
    if(dropdown_menu.value == 'planned') {
        date.classList.remove('hidden');
    }

    close_btn_popup.addEventListener('click', () => {
         closePopUp();
         toggle_popup.classList.add('lg:translate-y-100');
         toggle_popup.classList.remove('lg:-translate-y-1/2');
    })
})


// Adding new task
add_new_btn.addEventListener('click', () => {
    const dropdown_menu = document.querySelector('#dropdown-menu');
    const input_data = document.querySelector('#description');

    const list_wrapper = document.createElement('div');
    const parent_one = document.createElement('div');
    const radio_icon = document.createElement('i');
    const input_value = document.createElement('p');
    const parent_two = document.createElement('div');
    const edit_icon = document.createElement('i');
    const remove_icon = document.createElement('i'); 
    
    list_wrapper.classList.add('list-wrapper','xs:h-18', 'xs:px-2', 'sm:px-4', 'sm:h-20');
    list_wrapper.appendChild(parent_one);
    parent_one.classList.add('flex', 'items-center', 'xs:gap-3', 'sm:gap-4');
    parent_one.appendChild(radio_icon);
    radio_icon.setAttribute('id', 'check-icon');
    radio_icon.classList.add('fa-regular', 'fa-circle', 'text-base', 'cursor-pointer');
    parent_one.appendChild(input_value);
    input_value.classList.add('text-base');
    input_value.innerText = capitalize(input_data.value);
    list_wrapper.appendChild(parent_two);
    parent_two.classList.add('flex', 'xs:gap-7', 'sm:gap-10');
    parent_two.appendChild(edit_icon);
    edit_icon.setAttribute('id', 'edit-icon');
    edit_icon.classList.add('fa-solid', 'fa-pencil', 'text-base', 'cursor-pointer');
    parent_two.appendChild(remove_icon);
    remove_icon.setAttribute ('id', 'remove-icon');  
    remove_icon.classList.add('fa-solid', 'fa-minus', 'text-base', 'cursor-pointer');

    if(main_container.classList.contains('bg-dark-mode')) {
        list_wrapper.classList.add('text-light-mode');
        list_wrapper.classList.add('border-b-border-dark');
    } else {
        list_wrapper.classList.remove('text-light-mode');
        list_wrapper.classList.add('border-b-border-light');
    }

    if(!input_data.value) {
        alert("Can't proceed, please input some values");
        input_data.focus();
    } else {
        if(dropdown_menu.value == 'dailytask') {
            if(screen_size < 1024) {
                toggle_popup.classList.add('xs:translate-y-50');
                toggle_popup.classList.remove('xs:translate-y-50%');
            } else {
                toggle_popup.classList.add('lg:translate-y-100');
                toggle_popup.classList.remove('lg:-translate-y-1/2');
            }
            closePopUp();
            showDailyTask();
            daily_task.appendChild(list_wrapper);
            localStorage.setItem('Daily Task', daily_task.innerHTML);
        } else if (dropdown_menu.value == 'important') {
            if(screen_size < 1024) {
                toggle_popup.classList.add('xs:translate-y-50');
                toggle_popup.classList.remove('xs:translate-y-50%');
            } else {
                toggle_popup.classList.add('lg:translate-y-100');
                toggle_popup.classList.remove('lg:-translate-y-1/2');
            }
            closePopUp();
            showImportant();
            important.appendChild(list_wrapper);
            localStorage.setItem('Important', important.innerHTML);
        } else {
            const task_date = document.createElement('div');
            
            task_date.classList.add('absolute', 'text-3', 'font-semibold', 'xs:left-9', 'sm:left-12', 'xs:bottom-2', 'sm:bottom-3');
            task_date.innerText = `Date: ${date.value}`;
            list_wrapper.appendChild(task_date);   

            if(screen_size < 1024) {
                toggle_popup.classList.add('xs:translate-y-50');
                toggle_popup.classList.remove('xs:translate-y-50%');
            } else {
                toggle_popup.classList.add('lg:translate-y-100');
                toggle_popup.classList.remove('lg:-translate-y-1/2');
            }

            if (!date.value) {
                alert("Please insert date");
                toggle_popup.classList.remove('lg:translate-y-100');
                toggle_popup.classList.add('lg:-translate-y-1/2');
                toggle_overlay.classList.remove('opacity-0');
                toggle_overlay.classList.remove('pointer-events-none');
            } else {
                closePopUp();
                showPlanned();
                list_wrapper.classList.add('relative');
                planned.appendChild(list_wrapper);
                localStorage.setItem('Planned', planned.innerHTML);
            }
        }
    }
});

// Display local storage
daily_task.innerHTML = localStorage.getItem('Daily Task');
important.innerHTML = localStorage.getItem('Important');
planned.innerHTML = localStorage.getItem('Planned');

// Toggle date input for planned
dropdown_menu.addEventListener('click', () => {
    if(dropdown_menu.value == 'planned') {
        date.classList.remove('hidden');
    } else {
        date.classList.add('hidden');
    }
})
// Clearing all task 
clear.addEventListener('click', () => {
    const daily_task = clear.parentElement.parentElement.firstElementChild;
    const important = daily_task.nextElementSibling;
    const planned = important.nextElementSibling;

    if(daily_task.classList.contains('block')) {
        daily_task.innerHTML = "";
        localStorage.removeItem("Daily Task");
    } else if (important.classList.contains('block')) {
        important.innerHTML = "";
        localStorage.removeItem("Important");
    } else {
        planned.innerHTML = "";
        localStorage.removeItem("Planned");
    }
});

// Toggle dark & light bg
toggle_theme.addEventListener('click', () => {
    const list_wrapper = document.querySelectorAll('.list-wrapper');
    const link_wrapper = sidebar_menu.firstElementChild.lastElementChild;
    const link_important = link_wrapper.children[1];
    
    main_container.classList.remove('bg-light-mode');
    main_container.classList.toggle('bg-dark-mode');
    
    if(main_container.classList.contains('bg-dark-mode')) {
        sidebar_menu.classList.add('text-light-mode');
        sidebar_menu.classList.remove('border-r-border-light');
        sidebar_menu.classList.add('border-r-border-dark');
        sidebar_menu.classList.remove('bg-light-mode');
        sidebar_menu.classList.add('bg-dark-mode');
        link_wrapper.classList.remove('border-border-light');
        link_wrapper.classList.add('border-border-dark');
        link_important.classList.remove('border-t-border-light', 'border-b-border-light');
        link_important.classList.add('border-t-border-dark', 'border-b-border-dark');
        add_new_task.classList.add('bg-light-mode');
        add_new_task.classList.add('text-dark-mode');
        new_task.classList.add('bg-light-mode');
        new_task.classList.add('text-dark-mode');
        toggle_popup.classList.remove('bg-light-mode');
        toggle_popup.classList.add('bg-dark-mode');
        close_btn_popup.classList.add('text-light-mode');
        popup_content.classList.add('text-light-mode');
        toggle_theme.classList.add('bg-light-mode');
        toggle_theme.classList.add('text-dark-mode');
        toggle_theme.innerHTML = '<span class="material-symbols-outlined">light_mode</span><p class="text-base">Toggle Light</p>';
        if(screen_size < 641) {
            toggle_theme.innerHTML = '<span class="material-symbols-outlined">light_mode</span>'
        }
        navlink_dailytask.classList.add('border-l-light-mode');
        navlink_important.classList.add('border-l-light-mode');
        navlink_planned.classList.add('border-l-light-mode');
    } else {
        main_container.classList.add('bg-light-mode');
        sidebar_menu.classList.remove('text-light-mode');
        sidebar_menu.classList.remove('border-r-border-dark');
        sidebar_menu.classList.add('border-r-border-light');
        sidebar_menu.classList.add('bg-light-mode');
        sidebar_menu.classList.remove('bg-dark-mode');
        link_wrapper.classList.remove('border-border-dark');
        link_wrapper.classList.add('border-border-light');
        link_important.classList.remove('border-t-border-dark', 'border-b-border-dark');
        link_important.classList.add('border-t-border-light', 'border-b-border-light');
        add_new_task.classList.remove('bg-light-mode');
        add_new_task.classList.remove('text-dark-mode');
        new_task.classList.remove('bg-light-mode');
        new_task.classList.remove('text-dark-mode');
        toggle_popup.classList.add('bg-light-mode');
        toggle_popup.classList.remove('bg-dark-mode');
        close_btn_popup.classList.remove('text-light-mode');
        popup_content.classList.remove('text-light-mode');
        toggle_theme.classList.remove('bg-light-mode');
        toggle_theme.classList.remove('text-dark-mode');
        toggle_theme.innerHTML = '<span class="material-symbols-outlined">dark_mode</span><p class="text-base">Toggle Dark</p>';
        if(screen_size < 641) {
            toggle_theme.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
        }
        navlink_dailytask.classList.remove('border-l-light-mode');
        navlink_important.classList.remove('border-l-light-mode');
        navlink_planned.classList.remove('border-l-light-mode');
    }

    list_wrapper.forEach(list => {
        if(main_container.classList.contains('bg-dark-mode')) {
            list.classList.add('text-light-mode');
            list.classList.remove('border-b-border-light');
            list.classList.add('border-b-border-dark');
        } else {
            list.classList.remove('text-light-mode');
            list.classList.add('border-b-border-light');
            list.classList.remove('border-b-border-dark');
        }
    });
})

// Toggle popup (Mobile / Tablet)
new_task.addEventListener('click', () => {
    const input_data = document.querySelector('#description');

    input_data.value = "";
    toggle_popup.classList.remove('translate-y-100');
    toggle_popup.classList.add('-translate-y-1/2');
    toggle_overlay.classList.remove('opacity-0');
    toggle_overlay.classList.remove('pointer-events-none');
    
    if(dropdown_menu.value == 'planned') {
        date.classList.remove('hidden');
    }

    if(screen_size < 1024) {
        toggle_popup.classList.remove('xs:translate-y-50');
        toggle_popup.classList.add('xs:translate-y-50%');
    }
    close_btn_popup.addEventListener('click', () => {
        toggle_popup.classList.add('xs:translate-y-50');
        toggle_popup.classList.remove('xs:translate-y-50%');
        toggle_overlay.classList.add('opacity-0');
        toggle_overlay.classList.add('pointer-events-none');
    })

})

// Toggle sidebar (Mobile / Tablet)
menu_btn.addEventListener('click', () => {
    const remove_sidebar = () => {
        sidebar_menu.classList.add('xs:translate-x-full');
        toggle_overlay.classList.add('opacity-0');
        toggle_overlay.classList.add('pointer-events-none');
    }

    sidebar_menu.classList.remove('xs:translate-x-full');
    toggle_overlay.classList.remove('opacity-0');
    toggle_overlay.classList.remove('pointer-events-none');
    
    navlink_dailytask.addEventListener('click', () => {
        showDailyTask();
        remove_sidebar();
    });
    navlink_important.addEventListener('click', () => {
        showImportant();
        remove_sidebar();
    });
    navlink_planned.addEventListener('click', () => {
        showPlanned();
        remove_sidebar();
    });
})