const replaceSvgContainers = (root) => {
  const containers = root.querySelectorAll
    ? root.querySelectorAll('[data-framer-name="Logo_8_"] .svgContainer')
    : [];

  containers.forEach((container) => {
    // Avoid replacing again if already replaced
    
    if (!container.dataset.logoInjected) {
      container.parentNode.style.setProperty("aspect-ratio", "auto", "important");

      container.innerHTML = `<img src="/framerusercontent.com/logo/logo.svg" alt="Logo" style="width:100%;height:100%;">`;
      container.dataset.logoInjected = "true";
    }
  });
};
replaceSvgContainers(document);
document.addEventListener("DOMContentLoaded", function () {
  // DOM is fully loaded and parsed, no need to wait for styles/images
  replaceSvgContainers(document);
});

window.onload = function () {
  
    // Initial replacement in case some already exist
    replaceSvgContainers(document);
  
    // Set up observer for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          // Check if the added node itself or any of its children need replacement
          if (node.nodeType === 1) {
            replaceSvgContainers(node);
            // window.Trustpilot.loadFromElement(document.querySelector(".trustpilot-widget"))
            
            const widgets = document.querySelectorAll('.trustpilot-widget');
            widgets.forEach(widget => {

              if (widget) Trustpilot.loadFromElement(widget);
            })
        
            
            
             
            
            
          }
        });
      });
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

