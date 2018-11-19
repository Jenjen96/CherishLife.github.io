AFRAME.registerComponent('TutorialVideoBtn', {
    init: function() {
        this.gotoRealLecture = this.gotoRealLecture.bind(this);
        this.pause();
    },
    // Playing button 
    play: function () {
        this.el.addEventListener('click', this.gotoRealLecture); 
    },
    // Pausing button 
    pause: function () {
        this.el.removeEventListener('click', this.gotoRealLecture); 
    },
    //Tutorial Video
    gotoRealLecture: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log("in window.gotoRealLecture()");

            // simply goto youtube link
            window.location.href = './3.html'; 
        }
    }
});
