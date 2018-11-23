AFRAME.registerComponent('scene1c', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            var videosphere3 = document.querySelector('#videosphere3');
            var videosphere4 = document.querySelector('#videosphere4');

            var question = document.querySelector('#second');
            var helper = document.querySelector('#helper')

            // remove the prev video
            videosphere3.components.material.material.map.image.pause();
            videosphere3.setAttribute('visible', 'false');
            videosphere3.parentNode.removeChild(videosphere3); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            videosphere4.setAttribute('visible', 'true');
            //videosphere2.play(); // need to be after visible!
            videosphere4.components.material.material.map.image.play();

            // reestablish listeners
            document.querySelector('#scenes').play();

            // remove self
            this.el.parentNode.removeChild(this.el); 
        }
    },
});

