import SoundCloudPlayer from "../Components/SoundCloudPlayer";

$(document).ready(() => {

    $("a[href^='#']").on('click', e => {
        e.preventDefault();

        let hash = $(e.currentTarget).attr('href');
        if (hash === '#') {
            hash = 'header';
        }

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 50
            },
            300,
            () => {
                window.location.hash = hash;
            }
        );
    });

    const $globalPlayer = $('.global-player');
    if ($globalPlayer.length) {
        new SoundCloudPlayer($globalPlayer);
    }

});
