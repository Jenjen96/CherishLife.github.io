AFRAME.registerComponent('cursor-listener', {
	init: function () {
		el = this.el;
		this.goToScene = this.goToScene.bind(this);
		el.addEventListener('click', this.goToScene);
	},

	goToScene: function(evt) {
		if(this.el.getAttribute('visible')) {
			console.log('in window.goToScene');
			var videosphere1 = document.querySelector('#videosphere1');
			var videosphere2 = document.querySelector('#videosphere2');

			//remove the previous video
			videosphere1.components.material.material.map.image.pause();
			videosphere1.setAttribute('visible', 'fasle');
			videosphere1.parentNode.removeChild(videosphere1);

			//hide the button
			this.el.setAttribute('visible', 'false');


			//refresh play button
			var playbtn = document.querySelector('#playbtn');
			playbtn.pause();
			playbtn.play();

			//change the scene
			videosphere2.setAttribute('visible', 'true');
			videosphere2.components.material.material.map.image.play();

			//restablish listeners
			document.querySelector('#scenes').play();

			//remove self
			this.el.parentNode.removeChild(this.el);
		}
	},
});


	
