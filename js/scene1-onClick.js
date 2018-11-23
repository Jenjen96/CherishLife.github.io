AFRAME.registerComponent('scene1', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            this.el.parentNode.removeChild(this.el); 

            var videosphere1 = document.querySelector('#videosphere1');
            var videosphere2 = document.querySelector('#videosphere2');

            var question = document.querySelector('#first');
            var helper = document.querySelector('#helper')

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere2.setAttribute('visible', 'true');
            videosphere2.setAttribute("show-btn-when-vid-ended","target: #second");
            // reestablish listeners
            videosphere2.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});