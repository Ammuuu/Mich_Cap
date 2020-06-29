function typeAnimation() {
    Typed.new("#writing-text", {
        strings: [
            "Welcome to my Portfolio!"
        ],
        stringsElement: null,
        typeSpeed: 50,
        contentType: 'text',
        preStringTyped: function() {},
        onStringTyped: function() {}
    });
}

typeAnimation();