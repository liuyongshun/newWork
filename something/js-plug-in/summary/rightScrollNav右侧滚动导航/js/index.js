$( function() {
    $( '.side_nav' ).hide();
    $( window ).scroll( function () {
        var ysc = $( window ).scrollTop();   
        console.log( ysc );
        if ( ysc >= 600 ) {
            $( '.side_nav' ).show();
        }
        if( ysc >= 600 && ysc < 1400 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 0 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 1400 && ysc < 2235 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 1 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 2235 && ysc < 3130 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );                  
            $( '.fix_nav' ).eq( 2 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 3130 && ysc < 4470 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 3 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 4470 && ysc < 4900 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 4 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 4900 && ysc < 5520 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 5 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 5520 && ysc < 5840 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 6 ).addClass( 'fix_bg_color' );
        } else if( ysc >= 5840 && ysc < 7000 ) {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 7 ).addClass( 'fix_bg_color' );
        } else {
            $( '.fix_nav' ).removeClass( 'fix_bg_color' );
            $( '.fix_nav' ).eq( 8 ).addClass( 'fix_bg_color' );
        }
    } );
} );


function y_scroll() {
    parent.scroll( 1, 600 );
}
function y_scroll2() {
    parent.scroll( 1, 1400 );
}
function y_scroll3() {
    parent.scroll( 1, 2435 );
}
function y_scroll4() {
    parent.scroll( 1, 3230 );
}
function y_scroll5() {
    parent.scroll( 1, 4670 );
}
function y_scroll6() {
    parent.scroll( 1, 5000 );
}
function y_scroll7() {
    parent.scroll( 1, 5620 );
}
function y_scroll8() {
    parent.scroll( 1, 5940 );
}
