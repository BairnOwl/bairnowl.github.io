window.addEventListener('load', function() {

    window.sr = ScrollReveal();
    sr.reveal('#intro');
    sr.reveal('#about-text');
    sr.reveal('#skills-circle');
    sr.reveal('#skills', { afterReveal: animateBars });

    initializeModals();

    // mouseover image icons for contact section
    $('#email-img').on({
		 "mouseover" : function() {
		    this.src = 'images/email-logo3.png';
		  },
		  "mouseout" : function() {
		    this.src='images/email-logo2.png';
		  }
	});

	$('#linkedin-img').on({
		 "mouseover" : function() {
		    this.src = 'images/linkedin-logo5.png';
		  },
		  "mouseout" : function() {
		    this.src='images/linkedin-logo4.png';
		  }
	});

	$('#github-img').on({
		 "mouseover" : function() {
		    this.src = 'images/github-logo2.png';
		  },
		  "mouseout" : function() {
		    this.src='images/github-logo3.png';
		  }
	});

	$('#facebook-img').on({
		 "mouseover" : function() {
		    this.src = 'images/facebook-logo2.png';
		  },
		  "mouseout" : function() {
		    this.src='images/facebook-logo3.png';
		  }
	});

	$('.external-img').on({
		 "mouseover" : function() {
		    this.src = 'images/icons/external2.png';
		  },
		  "mouseout" : function() {
		    this.src='images/icons/external.png';
		  }
	});

	$('.github-img-black').on({
		 "mouseover" : function() {
		    this.src = 'images/icons/github-logo2.png';
		  },
		  "mouseout" : function() {
		    this.src='images/icons/github-logo.png';
		  }
	});

	var mixer = mixitup('.portfolio-projects', {
        controls: {
            toggleLogic: 'or'
        }
    });

	// adds button color change functionality in project section
    $('.proj-btn').on('click', function() {
    	$('.proj-btn').removeClass('button-active');
    	$(this).addClass('button-active');
    });

    
}, false);

function animateBars(domEl) {

	var bars = {};
	bars['java'] = 100;
	bars['html'] = 100;
	bars['javascript'] = 95;
	bars['node'] = 95;
	bars['python'] = 85;
	bars['sql'] = 80;
	bars['c'] = 75;
	bars['swift'] = 60;
	bars['unity'] = 50;
	bars['c-sharp'] = 45;
	bars['c-plus-plus'] = 35;
	bars['php'] = 35;

	var keys = Object.keys(bars);
	var i = 0;

	var timer = setInterval(add, 150);

	function add() {
		if (i >= keys.length) {
			clearInterval(timer);
		} else {
			var key = keys[i];
			addBar('#' + key + '-bar', bars[key]);
			i++;
		}
	}

}

function addBar(selector, val) {
	var width = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (width >= val) {
            clearInterval(id);
        } else {
            width += 5; 
            $(selector).css('width', width + '%'); 
        }
    }
}

function initializeModals() {

	var projects = ['rundvous', 'gitbuddy', 'datathon', 'jungo', 'wikiverse', 'soundstock', 'chimehack', 'eventbox', 'alsus', 'hopecream', 'googlevr', 'meta'];

	for (var i in projects) {
		var selector = '#' + projects[i] + '-proj';

		$(selector).animatedModal({
	        modalTarget: projects[i] + '-modal',
	        animatedIn: 'zoomIn',
	        animatedOut: 'zoomOut',
	        color: '#FFFFFF',
	        beforeOpen: function() {},           
	        afterOpen: function() {}, 
	        beforeClose: function() {}, 
	        afterClose: function() {}
    	});
	}

	
}