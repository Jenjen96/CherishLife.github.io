AFRAME.registerComponent('error-message', {
    init: function () {
        this.el.addEventListener('click', function(evt) {
            document.getElementById('helper').setAttribute('visible', 'true');

        });
    }
});


