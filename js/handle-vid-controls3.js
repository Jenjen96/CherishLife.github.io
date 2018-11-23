AFRAME.registerComponent('handle-vid-controls3', {
    init: function () {
        //dependencies: ['videosphere1', 'videosphere2'];
        console.log('in ' + this.el.id + '::init()');

        this.onClick = this.onClick.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.debug = this.debug.bind(this);
        
        // aggregate the 2 scenes here
        this.videosphere3 = document.querySelector('#videosphere3');
        this.videosphere4 = document.querySelector('#videosphere4');
        this.video3 = videosphere3.components.material.material.map.image;
        this.video4 = videosphere4.components.material.material.map.image;
    }, 
    play: function () {
        console.log('in ' + this.el.id + '::play() and attaching listeners');
        window.addEventListener('click', this.onClick);
        window.addEventListener('keyup', this.onKeyUp);
    },
    pause: function () {
        console.log('in ' + this.el.id + '::pause() and removing listeners');
        window.removeEventListener('click', this.onClick);
        window.removeEventListener('keyup', this.onKeyUp);
    },
    onClick: function (evt) {
        console.log('in ' + this.el.id + '::onClick()');
        var video;
        if (this.videosphere3 && this.videosphere3.getAttribute('visible'))
            video = this.video3;
        else 
            video = this.video4;

        this.togglePlay(video, true);
    },
    onKeyUp: function (evt) {
        //console.log('in ' + this.el.id + '::onKeyUp()');
        var video;
        if (this.videosphere3 && this.videosphere3.getAttribute('visible'))
            video = this.video3;
        else 
            video = this.video4;

        if (evt.code == "Space")
            this.togglePlay(video);
        else if (evt.code == "KeyS")
            this.skipToEnd(video);
        else if (evt.code == 'KeyD')
            this.debug();
    },
    togglePlay: function (video, isJustPlay=false) {
        console.log('in ' + this.el.id + '::togglePlay() isJustPlay='+ isJustPlay + ' with video=' + video.id );

        if (!video)
            return;

        if (isJustPlay){
            if (video.paused)
                video.play();
        }
        else {
            if (!video.paused)
                video.pause();
            else
                video.play();
        } 
    },
    skipToEnd: function (video) {
        console.log('in ' + this.el.id + '::skipToEnd() for video=' + video.id);
        video.currentTime = 190;
        video.pause();
    },
    debug: function() {
        console.log('in ' + this.el.id + '::debug()');
        this.videosphere4.pause();
        console.log('in ' + this.el.id + '::debug() AFTER pause ' + videosphere4.id + ' paused=' + this.videosphere4.components.material.material.map.image.paused);
    }
});
