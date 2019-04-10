AFRAME.registerComponent('scene1-3', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            this.el.parentNode.removeChild(this.el); 

            var videosphere3 = document.querySelector('#videosphere3');
            var videosphere4 = document.querySelector('#videosphere4');

            var question = document.querySelector('#third-1');
            var helper = document.querySelector('#helper3-1')

            // remove the prev video
            videosphere3.components.material.material.map.image.pause();
            videosphere3.setAttribute('visible', 'false');
            videosphere3.parentNode.removeChild(videosphere3); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere4.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere4.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});

AFRAME.registerComponent('scene1-1', {
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

            var question = document.querySelector('#first-1');
            var helper = document.querySelector('#helper1-1')

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere2.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere2.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});

AFRAME.registerComponent('scene1-2', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            this.el.parentNode.removeChild(this.el); 

            var videosphere2 = document.querySelector('#videosphere2');
            var videosphere3 = document.querySelector('#videosphere3');

            var question = document.querySelector('#second-1');
            var helper = document.querySelector('#helper2-1')

            // remove the prev video
            videosphere2.components.material.material.map.image.pause();
            videosphere2.setAttribute('visible', 'false');
            videosphere2.parentNode.removeChild(videosphere2); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere3.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere3.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});


AFRAME.registerComponent('scene2-1', {
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

            var question = document.querySelector('#first-2');
            var helper = document.querySelector('#helper2-1')

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere2.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere2.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});

AFRAME.registerComponent('scene2-2', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            this.el.parentNode.removeChild(this.el); 

            var videosphere1 = document.querySelector('#videosphere2');
            var videosphere2 = document.querySelector('#videosphere3');

            var question = document.querySelector('#second-2');
            var helper = document.querySelector('#helper2-2')

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere2.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere2.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});

AFRAME.registerComponent('scene3-1', {
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

            var question = document.querySelector('#first-3');
            var helper = document.querySelector('#helper3-1')

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere2.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere2.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});

AFRAME.registerComponent('scene3-2', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            this.el.parentNode.removeChild(this.el); 

            var videosphere1 = document.querySelector('#videosphere2');
            var videosphere2 = document.querySelector('#videosphere3');

            var question = document.querySelector('#second-3');
            var helper = document.querySelector('#helper3-2')

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            // videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            question.setAttribute('position', '1000 1000 1000');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere2.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere2.components.material.material.map.image.play();
            document.querySelector('#scenes').play();

            // remove self
        }
    },
});