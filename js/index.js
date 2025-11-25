document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.nav-bar');
    
    // Only monitor the Project section (ID: 'project')
    const projectSection = document.getElementById('project'); 

    const triggerOffset = 100;

    function checkScroll() {
        if (!navBar || !projectSection) return; 

        const rect = projectSection.getBoundingClientRect();
        let shouldBeDarkMode = false;
        
        if (rect.top <= triggerOffset && rect.bottom > 0) {
            shouldBeDarkMode = true;
        }
        
        if (shouldBeDarkMode) {
            navBar.classList.add('dark-mode');
        } else {
            navBar.classList.remove('dark-mode');
        }
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // --- Video Modal Logic ---
    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('openModalButton');
    const span = document.getElementsByClassName('close-button')[0];
    const video = document.getElementById('projectVideo');

    // When the user clicks the button, open the modal and play video
    btn.onclick = function() {
        modal.style.display = 'block';
        video.play();
    }

    // When the user clicks on <span> (x), close the modal and pause video
    span.onclick = function() {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Rewind the video
    }

    // When the user clicks anywhere outside of the modal, close it and pause video
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            video.pause();
            video.currentTime = 0; // Rewind the video
        }
    }
    
});