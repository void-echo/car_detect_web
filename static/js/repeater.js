jQuery(document).ready(function($) {
	if ( typeof cf7_repeater === 'undefined' || cf7_repeater === null ) {
		return;
	}
	$(".cf7-button-repeater a").html(cf7_repeater.add_new);
	$( ".cf7-repeater-container" ).each(function( index ) {
	  var name = [];
	  var hidden_field = $(this).find(".cf7-repeater").attr("id");
	  var name_history = $(this).find('.cf7-repeater-input-c input').val();
	  
	  $( $(this).closest('.cf7-repeater-container').find('.cf7-repeater-filed1').find('input,textarea,select') ).each(function( index ) {
		  var name_input = $(this).attr("name");
		  name.push(name_input); 
		});
		name = name.filter(function(elem, index, self) {
		    return index == self.indexOf(elem);
		})
		$("#cf7-"+hidden_field).val( name_history + "," + name);
	});
	
	$(".cf7-button-repeater a").click(function(event) {
		event.preventDefault();
		var name = [];
		var name_r = [];
		var hidden_field = $(this).closest('.cf7-repeater-container').find(".cf7-repeater").attr("id");
		var step = $(this).data("count");
		var name_history = $(this).closest('.cf7-repeater-container').find('.cf7-repeater-input-c input').val();
		$( $(this).closest('.cf7-repeater-container').find('.cf7-repeater-filed1').find('input,textarea,select') ).each(function( index ) {
		  var name_input = $(this).attr("name");
		  name.push(name_input); 
		  if( name_input.search(/\[/i) < 0 ) {
		  		name_r.push(name_input + "-"+ step );  
		  }else{
		  		name_input = name_input.replace(/\[/i, "-"+step+"[");
		  		name_r.push(name_input);  
		  } 
		   
		});
		name_r = name_r.filter(function(elem, index, self) {
		    return index == self.indexOf(elem);
		})
		var field = $(this).closest('.cf7-repeater-container').find('.cf7-repeater-filed').html();
		var button_remove = '<div class="cf7-remove-repeater-container"><a data-name="'+name_r+'" class="cf7-remove-repeater" href="#">'+cf7_repeater.remove+'</a></div>';
		$("#cf7-"+hidden_field).val( name_history + "," + name_r);
		name = name.filter(function(elem, index, self) {
		    return index == self.indexOf(elem);
		})
		console.log( name );
		console.log( name_r );
		console.log(field);
		field = cf7_replace_name(name,name_r,field) ;
		console.log(field);
		$(this).closest('.cf7-repeater-container').find(".cf7-repeater").append('<div class="cf7-repeater-filed">' + field + button_remove + '</div>');
		$(this).data("count",step + 1);
		update_count_cf7();

	});
	$("body").on("click",".cf7-remove-repeater",function(){
		var name = $(this).data("name");
		var name_his = $(this).closest('.cf7-repeater-container').find('.cf7-repeater-input-c input').val();
		var name_done = name_his.replace(","+name, "");
		$(this).closest('.cf7-repeater-container').find('.cf7-repeater-input-c input').val(name_done);
		$(this).closest('.cf7-repeater-filed').remove();
		return false;
	})
	var update_count_cf7 = function(){
		$( '.wpcf7-character-count' ).each( function() {
			var $count = $( this );
			var name = $count.attr( 'data-target-name' );
			var down = $count.hasClass( 'down' );
			var starting = parseInt( $count.attr( 'data-starting-value' ), 10 );
			var maximum = parseInt( $count.attr( 'data-maximum-value' ), 10 );
			var minimum = parseInt( $count.attr( 'data-minimum-value' ), 10 );

			var updateCount = function( target ) {
				var $target = $( target );
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr( 'data-current-value', count );
				$count.text( count );

				if ( maximum && maximum < length ) {
					$count.addClass( 'too-long' );
				} else {
					$count.removeClass( 'too-long' );
				}

				if ( minimum && length < minimum ) {
					$count.addClass( 'too-short' );
				} else {
					$count.removeClass( 'too-short' );
				}
			};

			$( ':input[name="' + name + '"]' ).each( function() {
				updateCount( this );

				$( this ).keyup( function() {
					updateCount( this );
				} );
			} );
		} );
	}
	function cf7_replace_name($f, $r, $s) {
		return $s.replace(new RegExp("(" + (typeof($f) == "string" ? $f.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&") : $f.map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")}).join("|")) + ")", "g"), typeof($r) == "string" ? $r : typeof($f) == "string" ? $r[0] : function(i){ return $r[$f.indexOf(i)]});
	}
})