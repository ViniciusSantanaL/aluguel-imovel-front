(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(e) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            let bash = $(this.hash)[0].getAttribute('id')

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop:  bash === 'about' ? (target.offset().top + 75) : (target.offset().top - 75)
                }, 500, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

})(jQuery); // End of use strict

const ratio = .6
const spies = document.querySelectorAll('[data-spy]')

let observer = null

/**
 * @param {Element} element
 */
const activate = function (element) {
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`li[id="li-${id}"]`)

    if (anchor === null) {
        return null
    }

    anchor.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active'))

    anchor.classList.add('active')
}

/**
 * @param {IntersectionObserverEntry[]} entries
 * @param {IntersectionObserver} observer
 */
const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
            activate(entry.target)
        }
    })
}

/**
 * @param {function} callback
 * @param {number} delay
 * @returns {function(...[*]=)}
 */
const debounce = function(callback, delay) {
    let timer;
    return function(){
        let args = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}

/**
 *
 * @param {NodeListOf.<Element>} elements
 */
const scrollspy = function (elements) {
    if (observer !== null) {
        elements.forEach(element => observer.unobserve(element))
    }

    const y = Math.round(window.innerHeight * ratio)
    observer = new IntersectionObserver(callback, {
        rootMargin: `-${window.innerHeight - y -1}px 0px -${y}px 0px`
    })

    spies.forEach(element => {observer.observe(element)})
}

if (spies.length > 0) {
    scrollspy(spies)

    let windowH = window.innerHeight
    window.addEventListener('resize', debounce(function () {
        if (window.innerHeight !== windowH) {
            scrollspy(spies)

            windowH = window.innerHeight
        }
    }, 500))
}
