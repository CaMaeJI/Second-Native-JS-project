import './slider';
import modal from './modules/Modal';
import tabs from './modules/tabs';
import forms from './modules/Forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    const modalState = {};

    changeModalState(modalState);
    modal('.header_btn', '.popup_engineer', '.popup_close');
    modal('.phone_link', '.popup', '.popup_close');
    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    modal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.timer1', '2022-10-01');
    images();
    
});