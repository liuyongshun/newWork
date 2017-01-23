$( function() {

    $( '.select' ).on( 'click', function() {
        $( '.select' ).removeClass( 'focus' );
        $( this ).addClass( 'focus' );
    } );                

    $( '#button' ).on( 'click', function() {
        var value = $( '.focus' ).text();    
        var text = $( '.target li' );   

        if ( text.length == 0 ) {
            $( '<li>', {
            click: function () {
                $( '.target li' ).removeClass( 'right' );
                $( this ).addClass( 'right' );
            },
            text: value
            } ).appendTo( '.target' );

        } else {
            for ( i = 0; i < text.length ; i ++ ) {
            if ( value == text.eq( i ).text() ) return false;                      
            }

            $( '<li>', {
            click: function () {
                $( '.target li' ).removeClass( 'right' );
                $( this ).addClass( 'right' );
            },
            text: value
            } ).appendTo( '.target' );                    
        }
    } );

    $( '#btn' ).on( 'click', function() {
        $( '.right' ).remove();
    } );            
} );
