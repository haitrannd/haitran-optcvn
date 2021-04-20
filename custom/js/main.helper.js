
/* Helper Functions */

function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  // Register the event listener
  document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() {
	// alert(1);
}

/* 
 * Create filter
 */
function haitran_create_filter () {
	let key_val = $('input[name="char_name"]').val();
	let color_val = $('select[name="color"]').val();
	let class_val = $('select[name="class"]').val();
	let type_val = $('select[name="type"]').val();
	let head_ct_val = $('input[name="head"]').val();
	let tail_ct_val = $('input[name="tail"]').val();

	let effect_val = {};
	$('input.effect').each(function(index, el) {
		if ($(this).is(':checked')) {
			effect_val[index] = $(this).val();
		}
	});

	let filter = {};

	filter.head_ct = head_ct_val;
	filter.tail_ct = tail_ct_val;

	if (key_val != '') {
		filter.key = key_val;
	}
	if (color_val != 'all') {
		filter.color = color_val;
	}
	if (class_val != 'all') {
		filter.class = class_val;
	}
	if (type_val != 'all') {
		filter.type = type_val;
	}
	if (!$.isEmptyObject(effect_val)) {
		filter.effect = effect_val;
	}

	if ($.isEmptyObject(filter)) {
		filter = '';
	}

	return filter;
}

/* 
 * Filter engine
 */
function haitran_filter (obj, filter) {
	let check = 1;

	if (filter.key != undefined) {
		if (obj.title.toLowerCase().indexOf(filter.key.toLowerCase()) == -1) {
			check = 0;
			return check;
		}
	}

	if (filter.color != undefined) {
		let color = obj.color;
		color = color.split(',');
		let check_color = 0;
		for (let i in color) {
			let value = color[i].trim();
			if (filter.color != value) {
				check_color ++;
			}
		}

		if (check_color == color.length) {
			check = 0;
			return check;
		}
	}

	if (filter.class != undefined) {
		let class_filter = obj.class;
		class_filter = class_filter.split(',');
		let check_class = 0;
		for (let i in class_filter) {
			let value = class_filter[i].trim();
			if (filter.class != value) {
				check_class ++;
			}
		}

		if (check_class == class_filter.length) {
			check = 0;
			return check;
		}
	}

	if (filter.type != undefined) {
		if (filter.type != obj.type) {
			check = 0;
			return check;
		}
	}

	// CT
	let ct = parseInt(obj.skill.note.replace('lv10 - ', '').replace(' Giây'));
	if (ct < filter.head_ct || ct > filter.tail_ct) {
		check = 0;
		return check;
	}

	if (filter.effect != undefined) {
		if (obj.tags != undefined) {
			let arr_tags = obj.tags.split(', ');
			let tags = {};
			for(let i in arr_tags) {
				tags[i] = arr_tags[i];
			}

			check = haitran_check_obj_exist_in_obj(tags, filter.effect);
			return check;
		} else {
			check = 0;
			return check;
		}
	}

	return check;
}

/* 
 * Reset Filter
 */
function haitran_reset_filter () {
	$('.filter_wrapper select').val('all');
	$('input[name="char_name"]').val('');
	$('input[name="head"]').val(0);
	$('input[name="tail"]').val(100);
	$('.filter_wrapper input[type="checkbox"]').prop('checked', false);
	$('.pirate_festival_page .filter_block .filter_item .item').removeClass('active');
	$('.fa_filter_panel .filter_panel > div').removeClass('active');
	haitran_print_char('');
	$('.search span.filter').trigger('click');
}

/* 
 * Show data
 */
function haitran_print_char (filter) {
	// Reset
	$('.pirate_festival_page .body_page .char_wrapper').html("");
	$('.page_wrapper .modal').remove();

	if (filter == '') {
		ht_build_html();
	} else {
		ht_build_html(filter);
	}
}

function ht_build_html(filter = null) {
  function ht_rewrite(data) {
  	data = data.replace(/FREESPIRIT/g, '<span class="nt_class">FREESPIRIT <img src="icons/filter_type/filter_type_fs.png" alt=""></span>');
  	data = data.replace(/FREE SPIRIT/g, '<span class="nt_class">FREESPIRIT <img src="icons/filter_type/filter_type_fs.png" alt=""></span>');
  	data = data.replace(/FIGHTER/g, '<span class="nt_class">FIGHTER <img src="icons/filter_type/filter_type_fighter.png" alt=""></span>');
  	data = data.replace(/DRIVEN/g, '<span class="nt_class">DRIVEN <img src="icons/filter_type/filter_type_driven.png" alt=""></span>');
  	data = data.replace(/CEREBRAL/g, '<span class="nt_class">CEREBRAL <img src="icons/filter_type/filter_type_cere.png" alt=""></span>');
  	data = data.replace(/SLASHER/g, '<span class="nt_class">SLASHER <img src="icons/filter_type/filter_type_slasher.png" alt=""></span>');
  	data = data.replace(/STRIKER/g, '<span class="nt_class">STRIKER <img src="icons/filter_type/filter_type_striker.png" alt=""></span>');
  	data = data.replace(/SHOOTER/g, '<span class="nt_class">SHOOTER <img src="icons/filter_type/filter_type_shooter.png" alt=""></span>');
  	data = data.replace(/POWERHOUSE/g, '<span class="nt_class">POWERHOUSE <img src="icons/filter_type/filter_type_ph.png" alt=""></span>');

  	data = data.replace(/ QCK/g, '<span class="nt_color qck">QCK</span>');
  	data = data.replace(/ STR/g, '<span class="nt_color str">STR</span>');
  	data = data.replace(/ DEX/g, '<span class="nt_color dex">DEX</span>');
  	data = data.replace(/ PSY/g, '<span class="nt_color psy">PSY</span>');
  	data = data.replace(/ INT/g, '<span class="nt_color int">INT</span>');

  	data = data.replace(/QCK /g, '<span class="nt_color qck">QCK</span>');
  	data = data.replace(/STR /g, '<span class="nt_color str">STR</span>');
  	data = data.replace(/DEX /g, '<span class="nt_color dex">DEX</span>');
  	data = data.replace(/PSY /g, '<span class="nt_color psy">PSY</span>');
  	data = data.replace(/INT /g, '<span class="nt_color int">INT</span>');

  	return data;
  }

  var char = window.character;
	var modal_html = '';

	for (let i in char) {
    if (filter != null) {
    	if (!haitran_filter(char[i], filter)) {
    		continue;
    	}
    }

		let row = char[i];
		let type = row.color;
		type = type.split(',');
		let type_html = '';
		for (let j in type) {
			type_html += '<span class="color ' + type[j].trim() + '">' + type[j].trim() + '</span>';
		}

		let html = '<div class="open_modal char ' + i + '" data-toggle="modal" data-target="#' + i + '">';
    
    html      += '<div class="sm_img">';
    // html      +=   '<img src="sm_img/' + row.img.src + '" onerror="this.style.display=\'none\'" />';
    html      +=   '<img src="sm_img/' + row.img.src + '" onerror="no_img(this);" />';
    html      += '</div>';
    
    html      += '<div class="info_wrapper">';
		html      +=   '<div class="name">';
		html      +=     '<span><i class="fas fa-anchor"></i> ' + row.title + '</span>';
		html      +=   '</div>';

		html      +=   '<div class="color">';
		html      +=     type_html + ' - <span class="stars">' + row.stars + '</span>';
		html      +=   '</div>';
		html      += '</div>';

		html    += '</div>';
		$('.pirate_festival_page .body_page .char_wrapper').append(html);

		modal_html    += '<div class="modal fade" id="' + i + '" role="dialog">';
		modal_html    +=   '<div class="modal-dialog">';
		modal_html    +=     '<div class="modal-content">';
		modal_html    +=       '<div class="modal-header">';
		modal_html    +=         '<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + row.title + ' (' + row.stars + ')</h4>';
		modal_html    +=       '</div>';
		modal_html    +=       '<div class="modal-body">';

		modal_html    +=         '<div class="img_wrapper ht_mirror"><img data-src="images/' + row.img.src + '"/></div>';

		modal_html    +=         '<div class="info_wrapper">';
		modal_html    +=           '<div class="info class">';
		modal_html    +=             '<span><b>Class:</b> ' + ht_rewrite(row.class.toUpperCase()) + '</span>';
		modal_html    +=           '</div>';
		modal_html    +=           '<div class="info type">';
		modal_html    +=             '<span><b>Loại:</b> ' + row.type + '</span>';
		modal_html    +=           '</div>';
		modal_html    +=           '<div class="info skill">';
		modal_html    +=             '<span class="skill_title"><b>Kỹ năng (' + row.skill.note + '):</b> </span>';
		modal_html    +=             '<span class="skill_des">';
		let des_arr = row.skill.des.split(". ");
		for (let des in des_arr) {
			let des_row = ht_rewrite(des_arr[des]);
			modal_html += '<p>- ' + des_row + '</p>';
		}
		modal_html    +=             '</span>';
		modal_html    +=           '</div>';
		modal_html    +=           '<div class="info hidden_skill">';
		modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng bị động:</b> </span>';
		modal_html    +=             '<span class="skill_des">';
		let h_des_arr = row.hidden_skill.des.split(". ");
		for (let des in h_des_arr) {
			let des_row = ht_rewrite(h_des_arr[des]);
			modal_html += '<p>- ' + des_row + '</p>';
		}
		modal_html    +=             '</span>';
		modal_html    +=           '</div>';
		modal_html    +=           '<div class="info target">';
		modal_html    +=             '<span class="target_title"><b>Mục tiêu:</b> ' + row.others.target + '</span>';
		modal_html    +=           '</div>';
		modal_html    +=           '<div class="info extra_ablility">';
		modal_html    +=             '<span class="extra_ablility_title"><b>Khả năng:</b> <p>' + row.others.extra_ability + '</p></span>';
		modal_html    +=           '</div>';
		modal_html    +=           '<div class="info pattern">';
		modal_html    +=             '<span class="pattern_title"><b>Thứ tự tấn công: </b> <p>' + row.pattern + '</p></span>';
		modal_html    +=           '</div>';
		modal_html    +=         '</div>';

		modal_html    +=       '</div>';
		modal_html    +=     '</div>';
		modal_html    +=   '</div>';
		modal_html    += '</div>';
	}
	$('.page_wrapper').append(modal_html);

	$('.open_modal').click((event) => {
		let target = $($(event.currentTarget).attr('data-target')).find('.img_wrapper img');
		target.attr('src', target.attr('data-src'));
	});
}

// Default sm img
function no_img(obj) {
	jQuery(obj).parent().addClass('no_img');
	jQuery(obj).attr('src', 'icons/bg/flag_staw_hat.png');
}

/* 
 * Check obj exists in other obj
 * obj_1 is the root 
 */
function haitran_check_obj_exist_in_obj (obj_1, obj_2) {
	var check = 1;

	// Compare
	var count = 0;
	for (let i in obj_1) {
		for (let j in obj_2) {
			if (obj_1[i] == obj_2[j]) {
				count ++;
			}
		}
	}

	if (count != Object.keys(obj_2).length) {
		return check = 0;
	}

	return check;
}

/* 
 * Handle navigations and actions in user interface
 */
function haitran_handle_navigation_and_action_ui () {
  $('.filter_block').removeClass('init');

  window.location.href = '#';

  window.onhashchange = function(e) {
		let new_url = e.newURL;
		let hash = new_url.split('#')[1];

		switch(hash) {
			case '/pirate_festival_page':
			  $('.menu').slideUp(300);
			  $('.page.pirate_festival_page').toggleClass('active');
			  break;

			case '/event_page':
			  $('.menu').slideUp(300);
			  $('.page.event_page').toggleClass('active');
			  break;

			case '/contact_page':
			  $('.menu').slideUp(300);
			  $('.page.contact_page').toggleClass('active');
			  break;

			case '':
			  $('.page').removeClass('active');
		    $('.menu').slideDown(300);
			  break;
		}
	}

	$('.back_to_menu i').click(function(event) {
		window.location.href = '#';
	});

	$('.pirate_festival_page span.filter').click(function(event) {
		$('.pirate_festival_page .filter_block').fadeToggle(300);
		$(this).toggleClass('active');
		$('.back_to_menu i').toggleClass('hidden');
	});

	$('.reset_filter').on('click', function(event) {
		haitran_reset_filter();
	});

	var timeout_range = null;

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 0,
    to: 70,
    grid: true,
    postfix: " CT",
    skin: "modern",
    onChange: function (data) {
    	clearTimeout(timeout_range);
    	timeout_range = setTimeout(function () {
    		if (data.from != $('input[name="head"]').val()) {
    			$('input[name="head"]').val(data.from);
	      	$('input[name="head"]').trigger('change');
	    	}

	    	if (data.to != $('input[name="tail"]').val()) {
	    		$('input[name="tail"]').val(data.to);
	      	$('input[name="tail"]').trigger('change');
	    	}
    	}, 500);
    },
  });
}

/* 
 * Handle filter
 */
function haitran_handle_filter () {
	var char_name_timeout = null;
	$('input[name="char_name"]').keyup(function(event) {
		let filter = haitran_create_filter();
		clearTimeout(char_name_timeout);
		char_name_timeout = setTimeout( function () {
			haitran_print_char(filter);
		}, 500);
	});

	$('select[name="color"]').add('select[name="class"]').add('select[name="type"]').change(function(event) {
		let filter = haitran_create_filter();
		haitran_print_char(filter);
		$(this).parents('.filter_block').fadeToggle(300);
		$('.pirate_festival_page .search span.filter').toggleClass('active');
	});

	// Fake select click
	$('.fa_filter').on('click', function(event) {
		$('.fa_filter_panel').addClass('active');
		$('.' + $(this).attr('_open')).siblings('.filter_panel').removeClass('active');
		$('.' + $(this).attr('_open')).addClass('active');
	});

	// Fake filter - Handle option-click
	$('.fa_filter_panel .filter_panel > div').on('click', function(event) {
		let target = $('select[name="' + $(this).attr('target') + '"]');
		let val = $(this).attr('value');
		if ($(this).hasClass('active')) {
			val = 'all';
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		  $(this).siblings().removeClass('active');
		}
		target.val(val);
		target.trigger('change');
	});

	// Close panel
	$('.close_panel').click(function(event) {
		$('.fa_filter_panel').removeClass('active');
	});

	// Add "effect filter" options
	var effect_filter_data = window.skill;
	for (let i in effect_filter_data) {
		let options = effect_filter_data[i];
		for(let option in options) {
			$('#' + i).append('<div class="item"><input class="effect" type="checkbox" id="' + option + '" value="' + option + '"> <label for="' + option + '">' + options[option] + '</label></div>');
		}
	}

	$('input.effect').change(function(event) {
		if ($(this).is(':checked')) {
			$(this).parent().addClass('active');
		} else {
			$(this).parent().removeClass('active');
		}
		let filter = haitran_create_filter();
		console.log(filter);
		haitran_print_char(filter);
	});

	// CT Filter
	$('input[name="head"]').add('input[name="tail"]').change(function(event) {
  	if ($(this).attr('name') == 'head') {
  		if (parseInt($(this).val()) < parseInt($(this).parent().siblings('.block').find('input').val())) {
  			let filter = haitran_create_filter();
  			console.log(filter);
				haitran_print_char(filter);
  		} else {
  			$('input[name="head"]').val(0);
  			alert('CT đầu phải nhỏ hơn CT cuối');
  		}
  	}

  	if ($(this).attr('name') == 'tail') {
  		if (parseInt($(this).val()) > parseInt($(this).parent().siblings('.block').find('input').val())) {
  			let filter = haitran_create_filter();
				haitran_print_char(filter);
  		} else {
  			$('input[name="tail"]').val(100);
  			alert('CT cuối phải lớn hơn CT đầu');
  		}
  	}
  });
}

/* 
 * Handle all
 */
function haitran_handle_all () {
	haitran_handle_navigation_and_action_ui();
	haitran_print_char('');
	haitran_handle_filter();
}

/* 
 * Scroll-to function
 */
function ht_to(pos) {
	var body = jQuery('.body_page');
	var target = jQuery('.body_page .char_wrapper');
	if (pos == 'bottom') {
		var height = target.height();
		body.animate({scrollTop:height}, '500');
	} else if (pos == 'top') {
		body.animate({scrollTop:0}, '500');
	}
}