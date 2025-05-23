import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                chirp_extra_bold: ['Chirp-ExtraBold', ...defaultTheme.fontFamily.sans],
                mac_regular: ['Mac-Regular', ...defaultTheme.fontFamily.sans],
                mac_bold: ['Mac-Bold', ...defaultTheme.fontFamily.sans],
                google_sans: ['Google Sans', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                'custom-grey' : '#e7e9ea',
                'custom-blue' : '#1d9bf0',
                'custom-grey2' : '#71767b',
            },
        },
    },

    plugins: [forms],
};
