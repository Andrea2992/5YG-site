(function() {
    var fotoHref = [
        'img/foto-bio/davide-bio.png',
        'img/foto-bio/andrea-avv-bio.png',
        'img/foto-bio/francesca-bio.png',
        'img/foto-bio/andrea-bass-bio.png',
        'img/foto-bio/michael-bio.png',
    ];

    var fotoAlt = [
        'Davide Falconetti',
        'Andrea Imbergamo',
        'Francesca Cocolet',
        'Andrea Cok',
        'Michael Bonanno'
    ]

    var fotoBio = $('#components-list img');
    for (var i = 0; i < fotoBio.length; i++) {
            var $fotoBio = $(fotoBio[i]);
            $fotoBio.attr({'src': fotoHref[i],
                           'alt': fotoAlt[i]   
                         });
    }

    var componentsLink = $('#components-list a');
    componentsLink.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var href= $this.attr('href');
        var components = $('#components-list li');
        var camponentsPanel = $('#panels div');
        var componentsParagraph = $('#components-list p')
        var $thisParagraph = $this.find('p');
        if (!$this.parent().hasClass('active-panel')) {
            components.removeClass('active-panel');
            camponentsPanel.removeClass('active-panel');
            $this.parent().addClass('active-panel');
            $(href).addClass('active-panel');
            componentsParagraph.removeClass('active-component');
            $thisParagraph.addClass('active-component');
        }



    })

      
}())