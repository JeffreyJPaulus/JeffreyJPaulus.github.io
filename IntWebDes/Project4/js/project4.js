/****************************************************************
*Original Author: Jeffrey Paulus                                *
*Date Created: 3-3-24                                           *
*Version: 0.1                                                   *
*Date Last Modified: 3-3-24                                     *
*Modified by: Jeffrey Paulus                                    *
*Modification log:                                              *
***0.1 - 3-3-24 - Creation Project 4                            *
*** -  -                                                        *
*************************************************************** */

"use strict";

$( function() {
    $( "#menu" ).menu();
  } );

$( function() {
    $( "#tabs" ).tabs();
  } );

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  
$( function() {
    function handleShape( e ) {
      $( ".shape" )
        .removeClass( "circle pill square rectangle" )
        .addClass( $( e.target ).val() );
    };
    function handleToggle( e ) {
      var target = $( e.target );
 
      if ( target.is( ".brand-toggle" ) ) {
        var checked = target.is( ":checked" ),
          value = $( "[name='brand']" )
            .filter( ":checked" )
            .attr( "data-" + target[ 0 ].id )
        $( ".shape" ).css( target[ 0 ].id, checked ? value : "" );
      } else {
        $( ".shape" ).toggleClass( target[ 0 ].id, target.is( ":checked") );
      }
    }
    function updateBrand() {
      handleShape( { target: $( "[name='shape']:checked" ) } );
      $( ".toggle:checked" ).each( function() {
        handleToggle( { target: $( this ) } );
      } );
    }
 
    // Initalize widgets
    $( "input" ).checkboxradio();
    $( ".shape-bar, .brand" ).controlgroup();
    $( ".toggles" ).controlgroup( {
      direction: "vertical"
    } );
 
    // Bind event handlers
    $( "[name='shape']").on( "change", handleShape );
    $( ".toggle" ).on( "change", handleToggle );
    $( "[name='brand']").on( "change", updateBrand );
 
    // Set initial values
    updateBrand();
  } );

