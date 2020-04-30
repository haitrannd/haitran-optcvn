
window.character = {

	'luffy_ace' : {
		'title' : 'Luffy/Ace',
		'color' : 'str, qck',
		'class' : 'freespirit, fighter',
		'level' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
			'des' : 'Tăng ATK của FREE SPIRIT lên 3 levels (20 giây), tăng DEF lên 3 levels (20 giây), tấn công trong một phạm vi lớn, gây một lượng sát thương bằng với (ATK x 0.65).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của lên 5 levels, tăng tỉ lệ crit lên 2 levels cho FREE SPIRIT.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Có 50% cơ hội tránh hiệu ứng bất lợi (Chắc thế)'
		},
		'img' : {
			'src' : 'luffy_ace.jpg'
		},
	},

	'barto_caven' : {
		'title' : 'Bartolomeo/Cavendish',
		'color' : 'dex, qck',
		'class' : 'driven, striker, slasher',
		'level' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 28 CT',
			'des' : 'Sát thương địch ở tầm trung theo hàng ngang với lượng sát thương bằng (ATK x 0.8). Tăng tỉ lệ xuất hiện (guard – khiên chắn) của các đồng minh DRIVEN lên 7 levels (21 giây). Tăng ATK của DRIVEN lên 7 levels (21 giây).',
		},
		'hidden_skill' : {
			'des' : 'GUARD cho DRIVEN lên 3 levels. Tăng ATK của bản thân lên 8 levels.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi phục 50HP mỗi vòng',
		},
		'img' : {
			'src' : 'barto_caven.jpg'
		},
	},

	'sanji_judge' : {
		'title' : 'Sanji/Judge',
		'color' : 'psy',
		'class' : 'powerhouse, fighter',
		'level' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
			'des' : 'Gây 1250 sát thương cho kẻ địch ở tầm trung theo hàng ngang. Tăng ATK của POWERHOUSE lên 6 levels (20 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hơn hoặc bằng 50%, tăng HP của POWERHOUSE lên 5 levels và tăng ATK bản thân lên 8 levels'
		},
		'others' : {
			'target' : 'Tấn công địch có ATK cao nhất',
			'extra_ability' : 'Có 50% cơ hội tránh bị one hit (Chắc thế)',
		},
		'img' : {
			'src' : 'sanji_judge.jpg'
		},
	},

	'luffy_law' : {
		'title' : 'Luffy/Law',
		'color' : 'dex, qck',
		'class' : 'fighter, freespirit, slasher',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 45 CT',
			'des' : 'Gây 1700 sát thương chuẩn cho tất cả kẻ địch. Gây thêm sát thương băng với (ATK x 1.45) cho một kẻ địch ngẫu nhiên. Tăng ATK của đồng mình lên 2 levels (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'ATK đồng minh tăng lên 6 levels'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'img' : {
			'src' : 'luffy_law.jpg'
		},
	},

	'sabo_koala' : {
		'title' : 'Sabo/Koala',
		'color' : 'str, int',
		'class' : 'freespirit, cerebral',
		'level' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 29 CT',
			'des' : 'Tấn công kẻ địch đứng giữa hàng trước với sát thường bằng (ATK x 0.65), giảm DEF 3 levels (25 giây). Tấn công kẻ địch ở khu vực phía trước với sát thương bằng (ATK x 1.15).',
		},
		'hidden_skill' : {
			'des' : 'Tăng crit CEREBRAL và bản thân lên 5 levels. Tăng SPEED của CEREBRAL và bản thân lên 2 levels.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '50% cơ hộ tránh quirks (Ko hiểu là gì =))',
		},
		'img' : {
			'src' : 'sabo_koala.jpg'
		},
	},

	'whitebread_V1' : {
		'title' : 'Whitebread V1',
		'color' : 'str',
		'class' : 'striker, powerhouse',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 23 CT',
			'des' : 'Giảm 48% máu toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 30%, toàn bộ đồng minh tăng ATK lên 8 levels, tăng DEF bản thân lên 8 levels'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh sát thương liên hoàn (Ví dụ như doffy v2 có thể gây sát thương 4 lần liên tiếp, whitebread có thể block)',
		},
		'img' : {
			'src' : 'whitebread_v1.jpg'
		},
	},

	'Lucci_v1' : {
		'title' : 'Lucci V1',
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 23 CT',
			'des' : 'Giảm 48% máu toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 30%, toàn bộ đồng minh tăng ATK lên 8 levels, tăng DEF bản thân lên 8 levels'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh sát thương liên hoàn (Ví dụ như doffy v2 có thể gây sát thương 4 lần liên tiếp, whitebread có thể block)',
		},
		'img' : {
			'src' : 'lucci_v1.jpg'
		},
	},

	'crocodile_v1' : {
		'title' : 'Crocodile V1',
		'color' : 'str',
		'class' : 'cerebral, driven',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 19 CT',
			'des' : 'Giảm ATK của kẻ địch đi 24% và tăng CRIT của đồng minh lên 4 levels (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 levels. Khi HP nhỏ hơn hoặc bằng 60%, tăng ATK bản thân lên 8 levels'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP sau mỗi vòng',
		},
		'img' : {
			'src' : 'crocodile_v1.jpg'
		},
	},

	'akai_v1' : {
		'title' : 'Akainu V1',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
			'des' : 'Gây 1150 sát thương chuẩn cho toàn bộ kẻ địch, gây 1900 sát thương chuẩn nếu trận chiến còn 50 giây hoặc nhỏ hơn, gây 3150 sát thương chuẩn nếu còn 30 giây hoặc nhỏ hơn',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR lên 6 levels. Tăng thêm 2 levels nếu còn 30 giây hoặc ít hơn'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng nếu HP nhỏ hơn hoặc bằng 50%',
		},
		'img' : {
			'src' : 'akai_v1.jpg'
		},
	},

	'inuarashi' : {
		'title' : 'Inuarashi',
		'color' : 'str',
		'class' : 'cerebral, slasher',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 CT',
			'des' : 'Giảm ATK bản thân đi 20%, tấn công kẻ địch ở tầm ngang với sát thương bằng với (ATK x 1.95)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của CEREBRAL lên 6 levels, tăng ATK của bản thân lên 9 levels nếu HP dưới 60%.'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội ngăn trói',
		},
		'img' : {
			'src' : 'inuarashi.jpg'
		},
	},

	'bigmom_v1' : {
		'title' : 'Bigmom V1',
		'color' : 'str',
		'class' : 'powerhouse, driven',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 51 CT',
			'des' : 'Tấn công kẻ địch ở hàng ngang phía trước với sát thương bằng (ATK x 0.95), tấn công kẻ địch ở hàng giữa theo chiều dọc với sát thương bằng (ATK x 1.2), tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 0.9). Tăng ATK bản thân lên 16 levels trong 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR, QCK, DEX lên 3 levels'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội chặn các hiệu ứng khóa (para, bind) (Chắc thế)',
		},
		'img' : {
			'src' : 'bigmom_v1.jpg'
		},
	},

	'bullet' : {
		'title' : 'Bullet',
		'color' : 'str',
		'class' : 'fighter, driven',
		'level' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 20 CT',
			'des' : 'Tăng ATK bản thân lên 11 levels (15 giây), tăng DEF bản thân lên 8 leves (15 giây), bật trạng thái khiêu khích (sẽ bị kẻ địch nhắm vào). Giảm 20% máu của kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'STR, QCK, INT tăng ATK lên 6 levels. Các đồng minh khác tăng ATK lên 5 levels'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '50% cơ hội tránh hiệu ứng bất lợi',
		},
		'img' : {
			'src' : 'bullet.jpg'
		},
	},

	'log_luffy' : {
		'title' : 'Log Luffy',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 CT',
			'des' : 'Tấn công kẻ địch ở tầm trung gây (ATK x 1.35) sát thương và tăng SPEED của đồng minh lên 3 levels nếu còn 50 giây hoặc ít hơn',
		},
		'hidden_skill' : {
			'des' : 'STR tăng ATK lên 5 levels. ATK bản thân tăng 5 levels'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Khi HP nhỏ hơn hoặc bằng 50%, hồi 100HP mỗi vòng',
		},
		'img' : {
			'src' : 'log_luffy.jpg'
		},
	},

	'zoro_v1' : {
		'title' : 'Zoro V1',
		'color' : 'dex',
		'class' : 'slasher, driven',
		'level' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
			'des' : 'Tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 1.35) và giảm DEF kẻ địch đi 3 levels trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT của SLASHER lên 6 levels, ATK bản thân lên 6 levels'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có ATK cao nhất',
			'extra_ability' : '70% cơ hội tránh leanness',
		},
		'img' : {
			'src' : 'zoro_v1.jpg'
		},
	},

	'nami_v1' : {
		'title' : 'Nami V1',
		'color' : 'dex',
		'class' : 'cerebral, striker',
		'level' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 22 CT',
			'des' : 'Gây (ATK x 1.1) sát thương cho toàn bộ kẻ địch và có 30% cơ hội … trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Hơi khó hiểu, có vẻ như tăng tốc độ thi triển kỹ năng của DEX khi thời gian còn 50 giây hoặc ít hơn.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng',
		},
		'img' : {
			'src' : 'nami_v1.jpg'
		},
	},

}

jQuery(document).ready(function($) {
	$('button.pirate_festival').click(function(event) {
		$('.menu').slideUp(300);
		$('.page.pirate_festival_page').toggleClass('active');
	});

	$('.back_to_menu i').click(function(event) {
		$('.page').removeClass('active');
		$('.menu').slideDown(300);
	});

	function haitran_print_char (key) {
		var char = window.character;
		var modal_html = '';

		// Reset
		$('.pirate_festival_page .body_page').html("");
		$('.page_wrapper .modal').remove();

		if (key == '') {
			for (let i in char) {
				let row = char[i];
				let type = row.color;
				type = type.split(',');
				let type_html = '';
				for (let j in type) {
					type_html += '<span class="color ' + type[j].trim() + '">' + type[j].trim() + '</span>';
				}

				let html = '<div class="char ' + i + '" data-toggle="modal" data-target="#' + i + '">';

				html      += '<div class="name">';
				html      +=   '<span><i class="fas fa-anchor"></i> ' + row.title + '</span>';
				html      += '</div>';

				html      += '<div class="color">';
				html      +=   '(' + type_html + ')';
				html      += '</div>';

				html    += '</div>';
				$('.pirate_festival_page .body_page').append(html);

				modal_html    += '<div class="modal fade" id="' + i + '" role="dialog">';
				modal_html    +=   '<div class="modal-dialog">';
				modal_html    +=     '<div class="modal-content">';
				modal_html    +=       '<div class="modal-header">';
				modal_html    +=         '<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + row.title + '</h4>';
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
				modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng ẩn:</b> </span>';
				modal_html    +=             '<span class="skill_des">' + row.hidden_skill.des + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info target">';
				modal_html    +=             '<span class="target_title"><b>Mục tiêu:</b> ' + row.others.target + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=           '<div class="info extra_ablility">';
				modal_html    +=             '<span class="extra_ablility_title"><b>Khả năng:</b> ' + row.others.extra_ability + '</span>';
				modal_html    +=           '</div>';
				modal_html    +=         '</div>';

				modal_html    +=       '</div>';
				modal_html    +=     '</div>';
				modal_html    +=   '</div>';
				modal_html    += '</div>';
			}
			$('.page_wrapper').append(modal_html);
		} else {
			for (let i in char) {
				if (char[i].title.toLowerCase().indexOf(key) != -1) {
					let row = char[i];
					let type = row.color;
					type = type.split(',');
					let type_html = '';
					for (let j in type) {
						type_html += '<span class="color ' + type[j].trim() + '">' + type[j].trim() + '</span>';
					}

					let html = '<div class="char ' + i + '" data-toggle="modal" data-target="#' + i + '">';

					html      += '<div class="name">';
					html      +=   '<span><i class="fas fa-anchor"></i> ' + row.title + '</span>';
					html      += '</div>';

					html      += '<div class="color">';
					html      +=   '(' + type_html + ')';
					html      += '</div>';

					html    += '</div>';
					$('.pirate_festival_page .body_page').append(html);

					modal_html    += '<div class="modal fade" id="' + i + '" role="dialog">';
					modal_html    +=   '<div class="modal-dialog">';
					modal_html    +=     '<div class="modal-content">';
					modal_html    +=       '<div class="modal-header">';
					modal_html    +=         '<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + row.title + '</h4>';
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
					modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng ẩn:</b> </span>';
					modal_html    +=             '<span class="skill_des">' + row.hidden_skill.des + '</span>';
					modal_html    +=           '</div>';
					modal_html    +=           '<div class="info target">';
					modal_html    +=             '<span class="target_title"><b>Mục tiêu:</b> ' + row.others.target + '</span>';
					modal_html    +=           '</div>';
					modal_html    +=           '<div class="info extra_ablility">';
					modal_html    +=             '<span class="extra_ablility_title"><b>Khả năng:</b> ' + row.others.extra_ability + '</span>';
					modal_html    +=           '</div>';
					modal_html    +=         '</div>';

					modal_html    +=       '</div>';
					modal_html    +=     '</div>';
					modal_html    +=   '</div>';
					modal_html    += '</div>';
				}
			}

			$('.page_wrapper').append(modal_html);
		}
	}

	haitran_print_char('');

	var char_name_timeout = null;
	$('input[name="char_name"]').keyup(function(event) {
		clearTimeout(char_name_timeout);
		var value = $(this).val();
		char_name_timeout = setTimeout( function () {
			haitran_print_char(value);
		}, 500);
	});
});