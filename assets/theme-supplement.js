document.addEventListener('DOMContentLoaded', ()=> {
  // Lazy Loading
  const images = document.querySelectorAll('img[data-src]');
  
  const loadImage = function(entries, observer) {
    entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function() {
      entry.target.classList.remove('sc-lazy-load');
      observer.unobserve(entry.target);
    });
    });
  }      
  const imageObserver = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0
  });

  images.forEach(img => imageObserver.observe(img));

  // Sliders
  const featuredSlider = (function () {
    const viewportWidth = window.innerWidth;
    let paddingInlineValue = 6.5;
    let paddingInlinePixels = (paddingInlineValue / 100) * viewportWidth;

    const CUSTOM_PARAMS =  {
      edgePadding: 10,
      gutter: 10,
      nav: false,
      loop: false,
      items: 1,
      mouseDrag: true,
      responsive: {
        768: { items: 3, edgePadding: paddingInlinePixels, gutter: 20 },
        992: { items: 4, mouseDrag: false }
      },
      swipeAngle: false,
      speed: 500
    }

    let customSliders = [];
    // Check if the page has Custom Carousels before initializing them
    document.querySelectorAll('[data-featured-slider]').forEach(slider => {
      const identifier = slider.getAttribute('data-featured-slider');
      // Check if there's a corresponding controls element for this slider
      const hasControls = document.querySelector(`[data-controls="${identifier}"]`) !== null;

      let sliderParams = { ...CUSTOM_PARAMS, container: slider };

      if (hasControls) {
        const controlsSelector = `[data-controls="${identifier}"]`;
        sliderParams.controlsContainer = controlsSelector;
      }

      const tnsSlider = tns(sliderParams);
      customSliders.push(tnsSlider);
    });

    return {
      init: (selector, params) => {
        const container = {
          container: selector,
        };

        const slider = tns({ ...CUSTOM_PARAMS, ...params, ...container });
        customSliders.push(slider);
      }
    }
  })();

  let topSlider = tns({
    container: '[data-slider=top-header-slides]',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    loop: true,
    controls: false,
    autoplayButtonOutput: false,
    nav: false,
    speed: 600,
    autoplayTimeout: 4000
  });
  
  document.querySelectorAll('.SC-Video_icon').forEach(function(playIcon) {
    var container = playIcon.closest('.SC-Video_wrapper').querySelector('[data-video-container]');
    var iframe = playIcon.closest('.SC-Video_wrapper').querySelector('[data-video-iframe]');
    var player = new Vimeo.Player(iframe);

    function requestFullscreen(element) {
      if (element.requestFullscreen) {
        return element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        return element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        return element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        return element.msRequestFullscreen();
      }
      return Promise.reject(new Error("Fullscreen API is not supported."));
    }

    function playVideoAndRequestFullscreen() {
      container.style.display = 'none';
      iframe.style.display = 'block';

      requestFullscreen(iframe).then(function() {
        player.play().catch(function(error) {
          console.error('Failed to play the video:', error);
          container.style.display = 'block';
          iframe.style.display = 'none';
        });
      }).catch(function(error) {
        console.error('Failed to enter fullscreen:', error);
      });
    }

    playIcon.addEventListener('click', playVideoAndRequestFullscreen);
  });
});
