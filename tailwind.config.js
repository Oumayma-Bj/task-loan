module.exports = {
    mode: "jit",
    purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'sm':{'max': '640px'} ,
        };
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
