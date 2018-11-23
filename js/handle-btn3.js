AFRAME.registerComponent('handle-btn3', {
    init: function() {
        el = this.el;
        this.gotoLecture = this.gotoLecture.bind(this);
        el.addEventListener('click', this.gotoLecture);
    },
    gotoLecture: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoLecture');
            var videosphere2 = document.querySelector('#videosphere2');
            var videosphere3 = document.querySelector('#videosphere3'); 

            // remove the prev video
            videosphere2.components.material.material.map.image.pause();
            videosphere2.setAttribute('visible', 'false');
            videosphere2.parentNode.removeChild(videosphere2); 

            // hide the button
            this.el.setAttribute('visible', 'false');

            //refresh playbtn
            var playbtn = document.querySelector('#playbtn');
            playbtn.pause();
            playbtn.play();

            // change the scene
            videosphere3.setAttribute('visible', 'true');
            //videosphere2.play(); // need to be after visible!
            videosphere3.components.material.material.map.image.play();

            // reestablish listeners
            document.querySelector('#scenes').play();

            // remove self
            this.el.parentNode.removeChild(this.el); 
        }
    },
});

