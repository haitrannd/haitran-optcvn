
/* Helper Functions */

/* 
 * Create filter
 */
function haitran_create_filter () {
	let key_val = $('input[name="char_name"]').val();
	let color_val = $('select[name="color"]').val();
	let class_val = $('select[name="class"]').val();
	let type_val = $('select[name="type"]').val();

	let effect_val = {};
	$('input.effect').each(function(index, el) {
		if ($(this).is(':checked')) {
			effect_val[index] = $(this).val();
		}
	});

	let filter = {};

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
 * Show data
 */
function haitran_print_char (filter) {
	var char = window.character;
	var modal_html = '';

	// Reset
	$('.pirate_festival_page .body_page').html("");
	$('.page_wrapper .modal').remove();

	if (filter == '') {
		for (let i in char) {
			let row = char[i];
			let type = row.color;
			type = type.split(',');
			let type_html = '';
			for (let j in type) {
				type_html += '<span class="color ' + type[j].trim() + '">' + type[j].trim() + '</span>';
			}

			let html = '<div class="open_modal char ' + i + '" data-toggle="modal" data-target="#' + i + '">';

			html      += '<div class="name">';
			html      +=   '<span><i class="fas fa-anchor"></i> ' + row.title + '</span>';
			html      += '</div>';

			html      += '<div class="color">';
			html      +=   type_html + ' - <span class="stars">' + row.stars + '</span>';
			html      += '</div>';

			html    += '</div>';
			$('.pirate_festival_page .body_page').append(html);

			modal_html    += '<div class="modal fade" id="' + i + '" role="dialog">';
			modal_html    +=   '<div class="modal-dialog">';
			modal_html    +=     '<div class="modal-content">';
			modal_html    +=       '<div class="modal-header">';
			modal_html    +=         '<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + row.title + ' ( ' + row.stars + ' )</h4>';
			modal_html    +=       '</div>';
			modal_html    +=       '<div class="modal-body">';

			modal_html    +=         '<div class="img_wrapper"><img data-src="images/' + row.img.src + '" /></div>';

			modal_html    +=         '<div class="info_wrapper">';
			modal_html    +=           '<div class="info class">';
			modal_html    +=             '<span><b>Class:</b> ' + row.class + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=           '<div class="info type">';
			modal_html    +=             '<span><b>Loại:</b> ' + row.type + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=           '<div class="info skill">';
			modal_html    +=             '<span class="skill_title"><b>Kỹ năng (' + row.skill.note + '):</b> </span>';
			modal_html    +=             '<span class="skill_des">' + row.skill.des + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=           '<div class="info hidden_skill">';
			modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng bị động:</b> </span>';
			modal_html    +=             '<span class="skill_des">' + row.hidden_skill.des + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=           '<div class="info target">';
			modal_html    +=             '<span class="target_title"><b>Mục tiêu:</b> ' + row.others.target + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=           '<div class="info extra_ablility">';
			modal_html    +=             '<span class="extra_ablility_title"><b>Khả năng:</b> ' + row.others.extra_ability + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=           '<div class="info pattern">';
			modal_html    +=             '<span class="pattern_title"><b>Thứ tự tấn công: </b> ' + row.pattern + '</span>';
			modal_html    +=           '</div>';
			modal_html    +=         '</div>';

			modal_html    +=       '</div>';
			modal_html    +=     '</div>';
			modal_html    +=   '</div>';
			modal_html    += '</div>';
		}
		$('.page_wrapper').append(modal_html);

		$('.open_modal').click((event) => {
			let target = $($(event.currentTarget).attr('data-target')).find('img');
			target.attr('src', target.attr('data-src'));
		});
	} else {
		for (let i in char) {
			if (haitran_filter(char[i], filter)) {
				let row = char[i];
				let type = row.color;
				type = type.split(',');
				let type_html = '';
				for (let j in type) {
					type_html += '<span class="color ' + type[j].trim() + '">' + type[j].trim() + '</span>';
				}

				let html = '<div class="open_modal char ' + i + '" data-toggle="modal" data-target="#' + i + '">';

				html      += '<div class="name">';
				html      +=   '<span><i class="fas fa-anchor"></i> ' + row.title + '</span>';
				html      += '</div>';

				html      += '<div class="color">';
				html      +=   type_html + ' - <span class="stars">' + row.stars + '</span>';
				html      += '</div>';

				html    += '</div>';
				$('.pirate_festival_page .body_page').append(html);

				modal_html    += '<div class="modal fade" id="' + i + '" role="dialog">';
				modal_html    +=   '<div class="modal-dialog">';
				modal_html    +=     '<div class="modal-content">';
				modal_html    +=       '<div class="modal-header">';
				modal_html    +=         '<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + row.title + '( ' + row.stars + ' )</h4>';
				modal_html    +=       '</div>';
				modal_html    +=       '<div class="modal-body">';

				modal_html    +=         '<div class="img_wrapper"><img src="images/' + row.img.src + '" /></div>';

				modal_html    +=         '<div class="info_wrapper">';
				modal_html    +=           '<div class="info class">';
				modal_html    +=             '<span><b>Class:</b> ' + row.class + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info type">';
				modal_html    +=             '<span><b>Loại:</b> ' + row.type + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info skill">';
				modal_html    +=             '<span class="skill_title"><b>Kỹ năng (' + row.skill.note + '):</b> </span>';
				modal_html    +=             '<span class="skill_des">' + row.skill.des + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info hidden_skill">';
				modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng bị động:</b> </span>';
				modal_html    +=             '<span class="skill_des">' + row.hidden_skill.des + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info target">';
				modal_html    +=             '<span class="target_title"><b>Mục tiêu:</b> ' + row.others.target + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info extra_ablility">';
				modal_html    +=             '<span class="extra_ablility_title"><b>Khả năng:</b> ' + row.others.extra_ability + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info pattern">';
				modal_html    +=             '<span class="pattern_title"><b>Thứ tự tấn công: </b> ' + row.pattern + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=         '</div>';

				modal_html    +=       '</div>';
				modal_html    +=     '</div>';
				modal_html    +=   '</div>';
				modal_html    += '</div>';
			}
		}

		$('.page_wrapper').append(modal_html);

		$('.open_modal').click((event) => {
			let target = $($(event.currentTarget).attr('data-target')).find('img');
			target.attr('src', target.attr('data-src'));
		});
	}
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
	$('.menu .button_wrapper button.btn').click(function(event) {
		$('.menu').slideUp(300);
		$('.page.' + $(this).attr('target')).toggleClass('active');
	});

	$('.back_to_menu i').click(function(event) {
		$('.page').removeClass('active');
		$('.menu').slideDown(300);
	});

	$('.pirate_festival_page span.filter').click(function(event) {
		$('.pirate_festival_page .filter_block').fadeToggle(300);
		$(this).toggleClass('active');
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
		haitran_print_char(filter);
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