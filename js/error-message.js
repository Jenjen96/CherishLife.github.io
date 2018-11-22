AFRAME.registerComponent('error-message', {
    init: function () {
        console.log('Helllo')
        this.el.addEventListener('click', function(evt) {
            console.log('Error Message Display')
            document.getElementById('helper').setAttribute('visible', 'true');
        });
    }
});


