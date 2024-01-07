import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }
        let timeElapsed = (time - timeStart);
        let complection = Math.min(timeElapsed / dur, 1);
        // if (timeElapsed > 1) timeElapsed = 1;
        // function makeEaseInOut(timing) {
        //     return function(timeFraction) {
        //       if (timeFraction < .5)
        //         return timing(2 * timeFraction) / 2;
        //       else
        //         return (2 - timing(2 * (1 - timeFraction))) / 2;
        //     }
        //   }
        // let complection = function bounce(timeElapsed) {
        //     for (let a = 0, b = 1; 1; a += b, b /= 2) {
        //       if (timeElapsed >= (7 - 4 * a) / 11) {
        //         return -Math.pow((11 - 6 * a - 11 * timeElapsed) / 4, 2) + Math.pow(b, 2)
        //       }
        //     }
        //   }
        //   let bounceEaseOut = makeEaseInOut(complection);
        cb(complection);

        if (timeElapsed < 2000) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }
    return _animateOverTime;
};

$.prototype.fade = function(dur, display, fin, action) {
    for (let i = 0; i < this.length; i++) {
        let ani;
        switch(action) {
            case 'fadeIn':
                this[i].style.display = display || 'block';  // block - значение по умолчанию
                const _fadeIn = (complection) => {
                    this[i].style.opacity = complection;
                };
                ani = this.animateOverTime(dur, _fadeIn, fin);
                requestAnimationFrame(ani);
                break;
            case 'fadeOut':
                const _fadeOut = (complection) => {
                    this[i].style.opacity = 1 - complection;
                    if (complection === 1) {
                        this[i].style.display = 'none';
                    }
                };
                ani = this.animateOverTime(dur, _fadeOut, fin);
                requestAnimationFrame(ani);
                break;    
        };
    };
};

$.prototype.fadeIn = function(dur, display, fin) {
    this.fade(dur, display, fin, 'fadeIn');
    return this;
};

$.prototype.fadeOut = function(dur, display, fin) {
   this.fade(dur, display, fin, 'fadeOut');
    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for(let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            this.fadeIn(dur, display, fin);  
            } else {
                this.fadeOut(dur, display, fin);
            };
        }
    return this;
};










$.prototype.gasRight = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        let textArea = document.getElementById('textExample');
        let text = textArea.value;
        let to = text.length,
         from = 0;
        const _gasRight = (complection) => {
            this[i].style.color = 'rgb(47, 131, 47)';
            // this[i].style.left = complection*500 + 'px';
            // this[i].style.rotate = - complection*360 + 'deg';
            let result = (to - from) * complection + from;
            textArea.value = text.slice(0, Math.ceil(result))
            // if (complection === 1) {
            //     this[i].style.display = 'none';
            // }
            // this[i].style.display = '';
        };
        // setTimeout(() => { clearInterval(fin); }, 10000);
        const ani = this.animateOverTime(dur, _gasRight, fin);
        requestAnimationFrame(ani);
    };
    return this;
};