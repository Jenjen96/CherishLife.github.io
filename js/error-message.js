AFRAME.registerComponent('errorMsg', {
    init: function() {
        el = this.el;
        this.showErrMsg = this.showErrMsg.bind(this);
        el.addEventListener('click', this.showErrMsg);
    },
    //TO do
    showErrMsg: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('Show error message');
      
           
        }
    },
});

