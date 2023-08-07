(function() {
    var membersPhotoElements = $('#band-members-list img');
    for (var i = 0; i < membersPhotoElements.length; i++) {
            var memberPhotoElement = $(membersPhotoElements[i]);
            memberPhotoElement.attr({'src': fotoHref[i],
                           'alt': fotoAlt[i]   
                         });
    }

    var componentsLink = $('#band-members-list a');
    componentsLink.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var href= $this.attr('href');
        var components = $('#band-members-list li');
        var camponentsPanel = $('#members-bio-container div');
        var componentsParagraph = $('#band-members-list p')
        var thisParagraph = $this.find('p');
        if (!$this.parent().hasClass('active-member-bio')) {
            components.removeClass('active-member-bio');
            camponentsPanel.removeClass('active-member-bio');
            $this.parent().addClass('active-member-bio');
            $(href).addClass('active-member-bio');
            componentsParagraph.removeClass('active-member-name');
            thisParagraph.addClass('active-member-name');
        }
    })
}())