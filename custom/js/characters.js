window.character = {

	'luffy_ace' : {
		'title' : 'Luffy/Ace',
		'color' : 'str, qck',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Tăng ATK của FREE SPIRIT lên 3 cấp (20 giây), tăng DEF lên 3 cấp (20 giây), tấn công trong một phạm vi lớn phía trước, gây một lượng sát thương bằng với (ATK x 0.65).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của FREESPIRIT lên 5 cấp, tăng tỉ lệ crit lên 2 cấp cho FREE SPIRIT.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Có 50% cơ hội tránh tê liệt (paralysis)'
		},
		'pattern': '',
		'img' : {
			'src' : 'luffy_ace.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_class_fs, skill_def_up, skill_def_up_class_fs, skill_deal_dmg, hiddenskill_atk_up, hiddenskill_atk_up_class_fs, hiddenskill_crit_up, hiddenskill_crit_up_class_fs, target_nearby, ability_prevent_para',
	},

	'barto_caven' : {
		'title' : 'Bartolomeo/Cavendish',
		'color' : 'dex, qck',
		'class' : 'driven, striker, slasher',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Sát thương địch hàng dọc với lượng sát thương bằng (ATK x 0.8). Tăng tỉ lệ xuất hiện (guard – khiên chắn) của các đồng đội DRIVEN lên 7 cấp (21 giây). Tăng ATK của DRIVEN lên 7 cấp (21 giây).',
		},
		'hidden_skill' : {
			'des' : 'GUARD cho DRIVEN lên 3 cấp. Tăng ATK của bản thân lên 8 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi phục 50HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'barto_caven.png'
		},
		'tags': 'skill_deal_dmg, skill_guard_up, skill_guard_up_class_driven, skill_atk_up, skill_atk_up_class_driven, hiddenskill_guard_up, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_heal',
	},

	'sanji_judge' : {
		'title' : 'Sanji/Judge',
		'color' : 'psy',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây 1250 sát thương cho kẻ địch ở tầm trung theo hàng ngang. Tăng ATK của POWERHOUSE lên 6 cấp (20 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hơn hoặc bằng 50%, tăng HP của POWERHOUSE lên 5 cấp và tăng ATK bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Tấn công địch có ATK cao nhất',
			'extra_ability' : 'Có 50% cơ hội tránh khóa chiêu (silence)',
		},
		'pattern': '',
		'img' : {
			'src' : 'sanji_judge.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_atk_up_class_ph, hiddenskill_hp_up, hiddenskill_hp_up_class_ph, hiddenskill_atk_up, hiddenskill_atk_up_self, target_highest_atk, ability_prevent_silence',
	},

	'luffy_law' : {
		'title' : 'Luffy/Law',
		'color' : 'dex, qck',
		'class' : 'fighter, freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Gây 1700 sát thương chuẩn cho tất cả kẻ địch. Gây thêm sát thương băng với (ATK x 1.45) cho một kẻ địch ngẫu nhiên. Tăng ATK của đồng mình lên 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'ATK đồng đội tăng lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'luffy_law.png'
		},
		'tags': 'skill_fixed_dmg, skill_deal_dmg, skill_atk_up, skill_atk_up_all, hiddenskill_atk_up, hiddenskill_atk_up_all, target_nearby, ability_heal',
	},

	'sabo_koala' : {
		'title' : 'Sabo/Koala',
		'color' : 'str, int',
		'class' : 'freespirit, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công kẻ địch đứng giữa hàng trước với sát thường bằng (ATK x 0.65), giảm DEF 3 cấp (25 giây). Tấn công kẻ địch ở khu vực phía trước với sát thương bằng (ATK x 1.15).',
		},
		'hidden_skill' : {
			'des' : 'Tăng crit CEREBRAL và bản thân lên 5 cấp. Tăng SPEED của CEREBRAL và bản thân lên 2 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '50% cơ hộ tránh CRIT',
		},
		'pattern': 'Atk → Strong → Heal lv1 (small) → Atk',
		'img' : {
			'src' : 'sabo_koala.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_def_down_all, hiddenskill_crit_up, hiddenskill_crit_up_class_cerebral, hiddenskill_crit_up_self, hiddenskill_speed_up, hiddenskill_speed_up_class_cerebral, hiddenskill_speed_up_self, target_nearby, ability_prevent_crit',
	},

	'whitebeard_v1' : {
		'title' : 'Whitebeard V1',
		'color' : 'str',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Giảm 48% máu toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hoặc bằng 30%, toàn bộ đồng đội tăng ATK lên 8 cấp, tăng DEF bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh sát thương liên hoàn (Ví dụ như doffy v2 có thể gây sát thương 4 lần liên tiếp, whitebread có thể block)',
		},
		'pattern': 'Atk → Strong atk → Full',
		'img' : {
			'src' : 'whitebeard_v1.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_all, hiddenskill_atk_up, hiddenskill_atk_up_all, hiddenskill_def_up, hiddenskill_def_up_self, target_nearby, ability_prevent_stack_dmg',
	},

	'Lucci_v1' : {
		'title' : 'Lucci V1',
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - ? Giây',
			'des' : 'Gây 4850 sát thương chuẩn lên 1 kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK POWERHOUSE lên 6 cấp, giảm DEF đi 2 cấp. Trong 25 giây đầu tăng ATK bản thân lên 18 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': 'Strong - Atk - Atk - Full',
		'img' : {
			'src' : 'lucci_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_atk_up_class_ph, hiddenskill_def_down, hiddenskill_def_down_ally, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_prevent_para',
	},

	'crocodile_v1' : {
		'title' : 'Crocodile V1',
		'color' : 'str',
		'class' : 'cerebral, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 19 Giây',
			'des' : 'Giảm HP của kẻ địch đi 24% và tăng CRIT của đồng đội lên 4 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 cấp. Khi HP nhỏ hơn hoặc bằng 60%, tăng ATK bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP sau mỗi vòng',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'crocodile_v1.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_all, skill_crit_up, skill_crit_up_all, hiddenskill_atk_up, hiddenskill_atk_up_class_cerebral, hiddenskill_atk_up_self',
	},

	'akai_v1' : {
		'title' : 'Akainu V1',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây 1150 sát thương chuẩn cho vùng lớn, gây 1900 sát thương chuẩn nếu trận chiến còn 50 giây hoặc nhỏ hơn, gây 3150 sát thương chuẩn nếu còn 30 giây hoặc nhỏ hơn',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR lên 6 cấp. Tăng thêm 2 cấp nếu còn 30 giây hoặc ít hơn'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng nếu HP nhỏ hơn hoặc bằng 50%',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'akainu_v1.png'
		},
		'tags': 'skill_fixed_dmg, hiddenskill_atk_up, hiddenskill_atk_up_color_str, target_nearby, ability_heal',
	},

	'inuarashi' : {
		'title' : 'Inuarashi',
		'color' : 'str',
		'class' : 'cerebral, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm HP bản thân đi 20%, tấn công kẻ địch ở tầm ngang với sát thương bằng với (ATK x 1.95)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của CEREBRAL lên 6 cấp, tăng ATK của bản thân lên 9 cấp nếu HP dưới 60%.'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội tránh khóa chiêu (silence)',
		},
		'pattern': 'Strong - Atk - Strong - Full',
		'img' : {
			'src' : 'inuarashi.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_self, skill_deal_dmg, hiddenskill_speed_up, hiddenskill_atk_up, hiddenskill_atk_up_self',
	},

	'bigmom_v1' : {
		'title' : 'Bigmom V1',
		'color' : 'str',
		'class' : 'powerhouse, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 51 Giây',
			'des' : 'Tấn công kẻ địch ở hàng ngang phía trước với sát thương bằng (ATK x 0.95), tấn công kẻ địch ở hàng giữa theo chiều dọc với sát thương bằng (ATK x 1.2), tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 0.9). Tăng ATK bản thân lên 16 cấp trong 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP của STR, QCK, DEX lên 7 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội chặn tê liệt (paralysis)',
		},
		'pattern': 'Atk → Atk → Atk → Full',
		'img' : {
			'src' : 'bigmom_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_self, hiddenskill_hp_up, hiddenskill_hp_up_self, target_nearby, ability_prevent_para',
	},

	'bullet' : {
		'title' : 'Bullet',
		'color' : 'str',
		'class' : 'fighter, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 20 Giây',
			'des' : 'Tăng ATK bản thân lên 11 cấp (15 giây), tăng DEF bản thân lên 8 leves (15 giây), bật trạng thái khiêu khích (sẽ bị kẻ địch nhắm vào). Giảm 20% máu của kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'STR, QCK, INT tăng ATK lên 6 cấp. Các đồng đội khác tăng ATK lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '50% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': '',
		'img' : {
			'src' : 'bullet.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_def_up, skill_def_up_self, skill_lock_target, skill_cut_hp, hiddenskill_atk_up, hiddenskill_atk_up_color_str, hiddenskill_atk_up_color_qck, hiddenskill_atk_up_color_int, hiddenskill_atk_up_all, target_nearby, ability_prevent_para',
	},

	'log_luffy' : {
		'title' : 'Log Luffy',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Tấn công kẻ địch ở tầm trung gây (ATK x 1.35) sát thương và tăng SPEED của đồng đội lên 3 cấp nếu còn 50 giây hoặc ít hơn',
		},
		'hidden_skill' : {
			'des' : 'STR tăng ATK lên 5 cấp. ATK bản thân tăng 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Khi HP nhỏ hơn hoặc bằng 50%, hồi 100HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'log_luffy.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_up, skill_speed_up_all, target_nearby, ability_heal',
	},

	'zoro_v1' : {
		'title' : 'Zoro V1',
		'color' : 'dex',
		'class' : 'slasher, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 1.35) và giảm DEF kẻ địch đi 3 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT của SLASHER lên 6 cấp, ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có ATK cao nhất',
			'extra_ability' : '70% cơ hội tránh tê liệt',
		},
		'pattern': '',
		'img' : {
			'src' : 'zoro_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, hiddenskill_crit_up_class_slasher, hiddenskill_crit_up, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_prevent_para',
	},

	'nami_v1' : {
		'title' : 'Nami V1',
		'color' : 'dex',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Gây (ATK x 1.1) sát thương một vùng lớn và có 30% cơ hội làm tê liệt kẻ địch (paralysis).',
		},
		'hidden_skill' : {
			'des' : 'Tăng DEX SPEED lên 6 cấp, giảm thời gian dùng chiêu đi 2 giây.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng',
		},
		'pattern': 'Atk → Self healing lv2 → Strong → Heal lv1 (small)',
		'img' : {
			'src' : 'nami_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hiddenskill_speed_up, hiddenskill_speed_up_color_dex, hiddenskill_ct_up, hiddenskill_ct_up_color_dex, target_nearby, ability_heal',
	},

	'usopp' : {
		'title' : 'Usopp',
		'color' : 'dex',
		'class' : 'shooter',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Giảm HP của kẻ địch hàng trước đi 37%, có 75% cơ hội khóa chiêu (9 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của SHOOTER lên 6 cấp, ATK bản thân lên 6 cấp khi HP nhỏ hơn hoặc bằng 50%. ATK bản thân lên 7 cấp khi HP dưới 30%.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có SPEED cao nhất',
			'extra_ability' : '70% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Atk → Self healing lv2 → Strong → Atk',
		'img' : {
			'src' : 'usopp.png'
		},
		'tags': 'skill_cut_hp, skill_silence_enemies, hiddenskill_speed_up, hiddenskill_speed_up_class_shooter, hiddenskill_atk_up, hiddenskill_atk_up_self',
	},

	'ace_v1' : {
		'title' : 'Ace V1',
		'color' : 'dex',
		'class' : 'shooter, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Giảm 70% HP bản thân, gây (ATK x 1.9) sát thương cho kẻ địch ở tầm trung và tăng ATK của SHOOTER lên 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng SPEED của SHOOTER lên 6 cấp, tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có ATK cao nhất',
			'extra_ability' : '70% tránh khóa tê liệt',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'ace_v1.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_self, skill_deal_dmg, skill_atk_up, skill_atk_up_class_shooter, hiddenskill_speed_up, hiddenskill_speed_up_class_shooter, hiddenskill_atk_up, hiddenskill_atk_up_self, target_highest_atk, ability_prevent_para',
	},

	'corazon' : {
		'title' : 'Corazon',
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Hồi (2.75 x RCV) HP cho đồng đội xung quanh và tăng DEF lên 7 cấp (10 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 70%, ATK của đồng đội tăng 10 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Khi HP bản thân nhỏ hơn hoặc bằng 50%, Hồi 200 HP mỗi vòng',
		},
		'pattern': 'Atk → Heal lv3 (small) → Atk → Heal lv2 (small)',
		'img' : {
			'src' : 'corazon.png'
		},
		'tags': 'skill_heal, skill_def_up, hiddenskill_atk_up, target_nearby, ability_heal',
	},

	'magellan' : {
		'title' : 'Magellan',
		'color' : 'dex',
		'class' : 'striker, shooter',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'ATK giảm 3 cấp đối với kẻ địch ở tầm xa (47 giây). Giảm tốc độ tăng Giây của kẻ địch 4 cấp (34 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi HP của đồng minh ở cấp 5 hoặc cao hơn, tăng HP đồng minh thêm 7 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'magellan.png'
		},
		'tags': 'skill_atk_down, skill_ct_down, hiddenskill_hp_up, target_nearby, ability_heal',
	},

	'rayleigh_v2' : {
		'title' : 'Rayleigh V2',
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Gây 600 sát thương chuẩn cho toàn bộ kẻ địch, tăng ATK của đồng đội lên 3 cấp (24 giây), tăng DEF lên 2 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng mình lên 5 cấp, khi còn dưới 20% HP, tăng HP đồng minh lên 2 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh ngăn chặn',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'rayleigh_v2.png'
		},
	},

	'jinbe_v2' : {
		'title' : 'Jinbe V2',
		'color' : 'dex',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm 12% ATK kẻ địch trong phạm vi trung bình. Tăng ATK của FIGHTER, SLASHER và SHOOTER lên 4 cấp trong 19 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR, DEX, PSY lên 5 cấp, tăng DEF lên 1 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'jinbe_v2.png'
		},
	},

	'dof_v2' : {
		'title' : 'Doflamingo V2',
		'color' : 'dex',
		'class' : 'driven, cerebral',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (ATK x 1.45) sát thương cho kẻ địch ở tầm trung. Tiếp tục gây thêm (ATK x 0.35) sát thương nếu còn 60 giây. Tiếp tục gây thêm (ATK x 04) sát thương nếu còn 45 giây. Tiếp tục gây thêm (ATK x 0.45) sát thương nếu còn 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'dof_v2.png'
		},
	},

	'brook' : {
		'title' : 'Brook',
		'color' : 'dex',
		'class' : 'slasher, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Hồi 2450 HP cho đồng mình ở hàng trung tâm và tăng DEF lên 3 cấp (30 Giây).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 5 cấp. Khi HP nhỏ hơn hoặc bằng 50%, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh ngăn chặn',
		},
		'pattern': 'Atk → Heal lv1 (small) → Atk → Heal lv2 (small)',
		'img' : {
			'src' : 'brook.png'
		},
	},

	'blackbeard' : {
		'title' : 'Blackbeard',
		'color' : 'dex',
		'class' : 'driven, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 42 Giây',
			'des' : 'Giảm HP địch đi 25%, gây 1750 sát thương chuẩn cho kẻ địch STR và giảm DEF đi 4 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 5 cấp, ATK bản thân 3 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ít máu nhất',
			'extra_ability' : '50% cơ hội tránh CRIT',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'blackbeard.png'
		},
	},

	'kaido' : {
		'title' : 'Kaido',
		'color' : 'dex',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 55 Giây',
			'des' : 'Giảm HP kẻ địch ở hàng trước đi 25%, và gây (ATK x 2.1) sát thương',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của POWERHOUSE/STRIKER lên 6 cấp, ATK bản thân lên 7 cấp. Giảm thời gian dùng skill đi 6 giây'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ít máu nhất',
			'extra_ability' : 'Không có',
		},
		'pattern': '',
		'img' : {
			'src' : 'kaido.png'
		},
	},

	'kuzan_v3' : {
		'title' : 'Kuzan V3',
		'color' : 'qck',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Gây (ATK x 1.4) sát thương cho một vùng lớn và có 70% cơ hội khóa skill của kẻ địch trong 6 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của STR, DEX, QCK lên 5 cấp, các đồng đội còn lại được tăng SPEED lên 2 cấp trong 15 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'kuzan_v3.png'
		},
	},

	'mihawk_perona' : {
		'title' : 'Mihawk & Perona',
		'color' : 'str, psy',
		'class' : 'cerebral, slasher, driven',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Giảm ATK của địch đi 5 cấp và DEF đi 3 cấp trong 25 giây, giảm HP địch đi 25%',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng đội lên 5 cấp, HP lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% né khóa chiêu (silence)',
		},
		'pattern': 'Atk → Self healing lv2 → Strong atk → Atk',
		'img' : {
			'src' : 'mihawk_perona.png'
		},
	},

	'marco' : {
		'title' : 'Marco',
		'color' : 'qck',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Tấn công kẻ địch tầm trung bình với lượng sát thường (ATK x 0.75), giảm ATK 6 cấp trong 15 giây, hồi phục HP một đồng đội bằng (2.7 x RCV)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 50%, tăng tỉ lệ xuất hiện khiên của QCK và PSY lên 7 cấp. Tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'marco.png'
		},
	},

	'red_hair_pirates' : {
		'title' : 'Red hair pirates',
		'color' : 'psy, qck',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Giảm HP hàng ngang và hàng trung bình đi 21%, tăng DEF đồng đội lên 4 cấp (14 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi trận đấu còn 70s, đồng đội tăng DEF lên 5 cấp, ATK bản thân tăng 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'red_hair_pirates.png'
		},
	},

	'arlong_pirates' : {
		'title' : 'Arlong pirates',
		'color' : 'str',
		'class' : 'slasher, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Khi HP lớn hơn hoặc bằng 30%, tăng ATK đồng đội lên 3 cấp trong 15 giây, tấn công kẻ địch tầm trung bình (ATK x 1.3) sát thương. Khi HP nhỏ hơn hoặc bằng 30%, tăng ATK đồng đội lên 4 cấp trong 15 giây, tấn công kẻ địch tầm trung bình (ATK x 1.55) sát thương',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 5 cấp. Khi HP nhỏ hơn hoặc bằng 30%, ATK bản thân tăng 5 cấp, DEF bản thân tăng 4 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'arlong_pirates.png'
		},
	},

	'pudding' : {
		'title' : 'Pudding',
		'color' : 'int',
		'class' : 'cerebral, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Giảm thời gian dùng skill của INT đi 15%, tăng ATK INT lên 3 cấp (20 giây), tăng ATK của đồng đội INT có ATK cao nhất (20 giây) lên 8 cấp',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP INT lên 5 cấp, tăng ATK của INT có ATK cao nhất lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'pudding.png'
		},
	},

	'nami_robin' : {
		'title' : 'Nami & Robin',
		'color' : 'int, dex',
		'class' : 'cerebral, striker, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm HP kẻ địch tầm trung đi 30%, rút ngắn thời gian bị tê liệt của đồng đội đi 10 giây, tăng CRIT lên 3 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng khả năng hồi phục của đồng đội lên 5 cấp, tăng tỉ lệ xuất hiện khiên lên 1 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'nami_robin.png'
		},
	},

	'robin' : {
		'title' : 'Robin',
		'color' : 'int',
		'class' : 'cerebral, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Tăng tỉ lệ xuất hiện khiên lên 7 cấp (25 giây), 80% tỉ lệ one hit kẻ địch hàng giữa (12 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên của CEREBRAL lên 6 cấp, tăng DEF CEREBRAL lên 3 cấp trong 25 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'robin.png'
		},
	},

	'sabo_v2' : {
		'title' : 'Sabo V2',
		'color' : 'qck',
		'class' : 'fighter, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Tấn công một vùng rộng ở phía trước, gây (ATK x 0.9) sát thương và tăng ATK của STR, DEX, QCK lên 6 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, tăng SPEED của STR, DEX, QCK lên 2 cấp. Tăng SPEED của STR, DEX, QCK lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sabo_v2.png'
		},
	},

	'sabo_v3' : {
		'title' : 'Sabo V3',
		'color' : 'dex',
		'class' : 'fighter, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.15) sát thương cho một vùng lớn ở phía trước. FIGHTER/SHOOTER/FREESPIRIT tăng ATK lên 2 cấp',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER/SHOOTER/FREESPIRIT tăng ATK lên 6 cấp (40 giây), ATK bản thân tăng 2 cấp (40 giây)'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội né CRIT',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'sabo_v3.png'
		},
	},

	'sanji_v3' : {
		'title' : 'O-Soba Mask',
		'color' : 'qck',
		'class' : 'powerhouse, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Gây (ATK x 1.35) sát thương cho kẻ địch tầm trung tâm và tăng tỉ lệ đánh trượt lên 4 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK cả team lên 5 cấp, ATK bản thân lên 4 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% né CRIT',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'sanji_v3.png'
		},
	},

	'luffy_zoro' : {
		'title' : 'Luffy & Zoro',
		'color' : 'str, dex',
		'class' : 'slasher, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.35) sát thương cho kẻ địch tầm trung tâm và tầm ngang, tăng tỉ lệ CRIT cho FREESPIRIT và SLASHER lên 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi FREESPIRIT/SLASHER CRIT, tăng ATK 6 cấp, có thể tăng tối đa 2 lần. Trong 30 giây đầu tăng CRIT FREESPIRIT/SLASHER lên 1 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'luffy_zoro.png'
		},
	},

	'chopper' : {
		'title' : 'Chopper',
		'color' : 'psy',
		'class' : 'shooter, cerebral',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Hồi (0.6 x RCV) HP cho đồng đội trung tâm, giảm 7 giây trói, giảm 7 giây tê liệt, giảm 7 giây hiệu ứng bất lợi',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'chopper.png'
		},
	},

	'lucci_v2' : {
		'title' : 'Lucci V2',
		'color' : 'qck',
		'class' : 'shooter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho địch ở hàng ngang, giảm DEF đi 7 cấp',
		},
		'hidden_skill' : {
			'des' : 'Khi CRIT, SHOOTER được tăng SPEED lên 7 cấp, ATK lên 5 cấp, cộng dồn tối đa 3 lần'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'lucci_v2.png'
		},
	},

	'komurasaki' : {
		'title' : 'Komurasaki',
		'color' : 'qck',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Hồi (1.45 x RCV) HP cho một vùng lớn. Khi máu lớn hơn hoặc bằng 50% tăng CRIT của QCK và INT lên 2 cấp (15 giây). ATK tăng thêm 4 cấp (15 giây) khi HP trên 80%',
		},
		'hidden_skill' : {
			'des' : 'QCK, INT tăng HP lên 5 cấp, DEF lên 1 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'komurasaki.png'
		},
	},

	'ace_v2' : {
		'title' : 'Ace V2',
		'color' : 'int',
		'class' : 'shooter, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (ATK x 0.7) sát thương lên một vùng rộng, tăng ATK FIGHTER/SHOOTER lên 4 cấp (20 giây) và rút ngắn thời gian trạng thái khóa (block) đi 11 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER/SHOOTER lên 5 cấp, giảm thời gian dùng skill FIGHTER/SHOOTER đi 2 giây khi còn 70s'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'ace_v2.png'
		},
	},

	'katakuri' : {
		'title' : 'Katakuri',
		'color' : 'int',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công hàng ngang gây (ATK x 0.9) sát thương và giảm SPEED đi 6 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đánh lùi lên 6 cấp. Khi đẩy lùi 1 kẻ địch, tướng đẩy lùi sẽ được tăng ATK lên 7 cấp, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'katakuri.png'
		},
	},

	'whitebeard_v2' : {
		'title' : 'Whitebread v2',
		'color' : 'qck',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm HP một vùng nhỏ kẻ địch đi 26%, tăng DEF một lượng lớn đồng đội lên 4 cấp (25 giây). Khi HP nhỏ hoặc bằng 50% tăng ATK lên 5 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRIKER/POWERHOUSE lên 6 cấp, khi HP nhỏ hoặc bằng 40% tăng DEF lên 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'whitebeard_v2.png'
		},
	},

	'stampede_luffy' : {
		'title' : 'Stampede Luffy',
		'color' : 'psy',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Khi HP lớn hoặc bằng 50%, ATK bản thân tăng 10 cấp (15 giây). Gây (ATK x 1.95) sát thương cho địch ở hàng giữa',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STR, DEX, PSY'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'stampede_luffy.png'
		},
	},

	'shira_sherry' : {
		'title' : 'Shirahoshi & Mansherry',
		'color' : 'psy, int',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Hồi (2.5 x RCV) HP cho đồng đội, rút ngắn thời gian tê liệt 6 giây, rút ngắn thời gian trói 6 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRIKER/CEREBRAL/FREESPIRIT lên 5 cấp. Khi HP nhỏ hoặc bằng 50%, tăng HP lên 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'shira_sherry.png'
		},
	},

	'vivi_rebecca' : {
		'title' : 'Vivi & Rebecca',
		'color' : 'dex, str',
		'class' : 'cerebral, striker, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Tất cả kẻ địch giảm DEF 3 cấp (30 giây). STRIKER/CEREBRAL tăng ATK 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, STRIKER/CEREBRAL tăng ATK 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'vivi_rebecca.png'
		},
	},

	'inu_neko' : {
		'title' : 'Inuarashi & Nekomamushi',
		'color' : 'psy, str',
		'class' : 'cerebral, striker, slasher',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Tấn công một vùng nhỏ phía trước, gây (ATK x 0.85) sát thương. CEREBRAL/STRIKER ATK tăng 6 cấp (25 giây), hồi HP toàn bộ đồng đội bằng (0.45 x RCV)',
		},
		'hidden_skill' : {
			'des' : 'Trong 45 giây đầu, CEREBRAL/STRIKER tăng SPEED lên 5 cấp, tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt (paralysis)',
		},
		'pattern': 'Atk → Strong Atk → Heal lv1 (small) → Strong atk',
		'img' : {
			'src' : 'inu_neko.png'
		},
	},

	'zeus_prometheus_bm' : {
		'title' : 'Zeus & Prometheus & Bigmom',
		'color' : 'int',
		'class' : 'powerhouse, striker, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Tấn công một vùng lớn phía trước, gây (ATK x 1.25) sát thương. Nếu HP lớn hoặc bằng 50%, tăng ATK đồng đội lên 3 cấp',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng đội lên 7 cấp, HP lên 2 cấp, DEF giảm 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'zeus_prometheus_bm.png'
		},
	},

	'fujitora_v2' : {
		'title' : 'Fujitora V2',
		'color' : 'int',
		'class' : 'powerhouse, slasher',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Tấn công toàn bộ địch, gây (ATK x 1.25) sát thương. Có 30% khóa mục tiêu',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đẩy lùi của SLASHER lên 6 cấp. Tăng HP SLASHER lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'fujitora_v2.png'
		},
	},

	'zoro_v2' : {
		'title' : 'Zoro V2',
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Tấn công địch ở giữa phía trước, gây (ATK x 1.7) sát thương và SLASHER ATK tăng 4 cấp (8 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đẩy lùi của SLASHER lên 6 cấp. Tăng DEF bản thân lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'zoro_v2.png'
		},
	},

	'mihawk_v2' : {
		'title' : 'Mihawk V2',
		'color' : 'dex',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Khi còn trên 70 giây, cắt 15% HP một vùng lớn kẻ địch. Khi nhở hoặc bằng 70 giây, cắt 30% HP một vùng lớn kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'SLASHER tăng SPEED 5 cấp, ATK bản thân tăng 8 cấp trong 30 giây'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : '50% tránh CRIT',
		},
		'pattern': 'Strong - Full - Atk - Strong',
		'img' : {
			'src' : 'mihawk_v2.png'
		},
	},

	'cracker' : {
		'title' : 'Cracker',
		'color' : 'qck',
		'class' : 'powerhouse, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Gây (ATK x 1.3) sát thương lên kẻ địch ở vùng trung tâm, tăng CRIT SLASHER/POWERHOUSE lên 5 cấp (15 giây). Khi HP nhỏ hoặc bằng 50%, giảm thời gian dùng skill đi 25%.',
		},
		'hidden_skill' : {
			'des' : 'SLASHER/POWERHOUSE giảm thời gian dùng skill đi 6 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'cracker.png'
		},
	},

	'doflamingo_v1' : {
		'title' : 'Doflamingo V1',
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây (ATK x 1.4) sát thương cho một kẻ địch, tăng DEF DRIVEN lên 5 cấp (19 giây).',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN tăng HP lên 6 cấp. DRIVEN tăng DEF 2 cấp trong 30 giây đầu'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'doflamingo_v1.png'
		},
	},

	'hancock_v2' : {
		'title' : 'Hancock V2',
		'color' : 'psy',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây 1300 sát thương chuẩn cho 3 kẻ địch, tăng ATK SHOOTER/FREESPIRIT lên 6 cấp (23 giây) và CRIT lên 4 cấp',
		},
		'hidden_skill' : {
			'des' : 'SHOOTER/FREESPIRIT CRIT tăng 6 cấp. Khi CRIT, tăng ATK FREESPIRIT lên 2 cấp, cộng dồn 4 lần.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'hancock_v2.png'
		},
	},

	'nekomamushi' : {
		'title' : 'Nekomamushi',
		'color' : 'psy',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho vùng lớn ở phía trước, tăng DEF STRIKER lên 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'STRIKER HP tăng 6 cấp. Khi HP nhỏ hoặc bằng 60%, STRIKER tăng ATK 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'nekomamushi.png'
		},
	},

	'katakuri_v2' : {
		'title' : 'Katakuri V2',
		'color' : 'psy',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 1.65) sát thương cho một vùng nhỏ, hồi 25% máu',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER/SLASHER/SHOOTER/CEREBRAL/POWERHOUSE tăng ATK lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'katakuri_v2.png'
		},
	},

	'snakeman' : {
		'title' : 'Snakeman',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - ? Giây',
			'des' : 'Gây (ATK x 2.7) sát thương cho hàng ngang vùng trung tâm',
		},
		'hidden_skill' : {
			'des' : '60 giây đầu tăng ATK đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh trạng thái ngăn hồi phục (anti heal)',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'snakeman.png'
		},
	},

	'cavendish' : {
		'title' : 'Cavendish',
		'color' : 'qck',
		'class' : 'slasher, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây (ATK x 0.6) sát thương cho vùng lớn kẻ địch, tăng ATK bản thân lên 20 cấp (30 giây), DEF lên 14 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, tăng SPEED STR/DEX/QCK lên 8 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'cavendish.png'
		},
	},

	'carrot' : {
		'title' : 'Carrot',
		'color' : 'qck',
		'class' : 'slasher, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 39 Giây',
			'des' : 'Gây 2450 sát thương chuẩn cho vùng lớn kẻ địch phía trước, rút ngắn thời gian dùng skill của FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL 20%',
		},
		'hidden_skill' : {
			'des' : 'Tăng speed FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL lên 5 cấp, ATK bản thân tăng 5 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'carrot.png'
		},
	},

	'zephyr' : {
		'title' : 'Zephyr',
		'color' : 'qck',
		'class' : 'shooter, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 32% HP kẻ địch ở vùng trung tâm, gây 1550 sát thương chuẩn lên kẻ địch trong 1 vùng nhỏ',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK SHOOTER lên 5 cấp. Tăng ATK bản thân lên 4 cấp nếu số đồng đội trong trận chỉ còn ít hơn hoặc bằng 5, lên 7 cấp nếu ít hơn hoặc bằng 3'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'zephyr.png'
		},
	},

	'bege' : {
		'title' : 'Bege',
		'color' : 'int',
		'class' : 'shooter, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Bật trạng thái khiêu khích (30 giây). Khi ở trong trạng thái khiêu khích và máu nhỏ hoặc bằng 50%, hồi 50% máu và tăng DEF SHOOTER lên 5 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, SHOOTER tăng HP lên 5 cấp, DEF lên 5 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'bege.png'
		},
	},

	'franky' : {
		'title' : 'Franky',
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 21% HP kẻ địch vùng trung tâm, FIGHTER/SLASHER/STRIKER/SHOOTER tăng DEF lên 4 cấp (20 giây).Nếu số lượng địch nhiều hơn số lượng đồng đội là 3, tăng DEF 4 cấp (20 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER/SLASHER/STRIKER/SHOOTER'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'franky.png'
		},
	},

	'garp' : {
		'title' : 'Garp',
		'color' : 'psy',
		'class' : 'powerhouse, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Cắt 45% HP một kẻ địch, rút ngắn trạng thái khóa chiêu đi 9 giây, tăng ATK lên 3 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 7 cấp. Khi còn 70 giây, tăng tỉ lệ thành công của đồng đội lên 4 cấp (Mé bọn google dịch =))'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'garp.png'
		},
	},

	'sanji_v1' : {
		'title' : 'Sanji V1',
		'color' : 'int',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Giảm DEF kẻ địch vùng trung tâm đi 6 cấp trong 6 giây, gây (ATK x 2.15) sát thương',
		},
		'hidden_skill' : {
			'des' : 'INT tăng ATK lên 6 cấp, tăng ATK bản thân lên 8 cấp khi trận đấu còn 50 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sanji_v1.png'
		},
	},

	'enel' : {
		'title' : 'God Enel',
		'color' : 'qck',
		'class' : 'shooter, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 55 Giây',
			'des' : 'Gây 2400 sát thương chuẩn lên toàn bộ kẻ địch, giảm DEF đi 4 cấp trong 40 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng đội lên 5 cấp, tăng DEF đồng đội có khả năng hồi phục cao nhất lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'enel.png'
		},
	},

	'shiki' : {
		'title' : 'Shiki',
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Gây 1450 sát thương chuẩn lên kẻ địch hàng ngang, giảm DEF đi 2 cấp trong 24 giây, và có 51% khả năng khóa hành động của kẻ địch trong 6 giây',
		},
		'hidden_skill' : {
			'des' : 'DEX/QCK/INT tăng HP lên 5 cấp. Khi còn 80 giây, tăng ATK toàn bộ đồng đội'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'shiki.png'
		},
	},

	'whitebeard_marco' : {
		'title' : 'Whitebeard & Marco',
		'color' : 'qck',
		'class' : 'powerhouse, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Cắt 32% HP toàn bộ địch. Hồi HP bản thân bằng (RCV x 2.15)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên (GUARD) của đồng đội lên 5 cấp. Khi HP đồng đội nhỏ hoặc bằng 50%, tăng DEF đồng đội đó lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'whitebeard_marco.png'
		},
	},

	'sanji_v2' : {
		'title' : 'Sanji V2',
		'color' : 'psy',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Khi còn trên 80% HP, tăng ATK bản thân 12 cấp (15 giây), tấn công kẻ địch có ATK cao nhất 3 lần với sát thương bằng với (ATK x 0.95)',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER tăng SPEED lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sanji_v2.png'
		},
	},

	'judge' : {
		'title' : 'Judge',
		'color' : 'int',
		'class' : 'powerhouse, driven',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Gây (ATK x 0.8) sát thương cho một vùng nhỏ, tăng ATK POWERHOUSE lên 6 cấp trong 33 giây',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER/DRIVEN/POWERHOUSE tăng ATK lên 7 cấp. Khi Máu nhỏ hoặc bằng 20%, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'judge.png'
		},
	},

	'tesoro' : {
		'title' : 'Tesoro',
		'color' : 'qck',
		'class' : 'striker, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây 1200 sát thương chuẩn kẻ địch vùng trung tâm, đồng đội vùng trung tâm tăng DEF lên 7 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Giảm thời gian dùng skill của đồng đội 5 giây. Khi HP nhỏ hoặc bằng 60%, DEF đồng đội tăng 1 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'tesoro.png'
		},
	},

	'jinbe_v1' : {
		'title' : 'Jinbe V1',
		'color' : 'int',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây (ATK x 1.3) sát thương cho kẻ địch hàng ngang vùng trung tâm, giảm ATK đi 15 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER tăng HP lên 6 cấp, DEF lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'jinbe_v1.png'
		},
	},

	'buggy' : {
		'title' : 'Buggy',
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Đồng đội tăng ATK lên 5 cấp (25 giây), SPEED lên 8 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'SPEED đồng đội tăng lên 6 cấp. Tăng ATK bản thân lên 6 cấp khi CRIT, cộng dồn 3 lần'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'buggy.png'
		},
	},

	'kizaru' : {
		'title' : 'Kizaru',
		'color' : 'psy',
		'class' : 'slasher, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Tấn công 4 kẻ địch với sát thương (ATK x 0.6). SLASHER/SHOOTER tăng ATK lên 7 cấp',
		},
		'hidden_skill' : {
			'des' : '30 giây đầu tăng SPEED của SLASHER/SHOOTER lên 6 cấp. Giảm thời gian dùng skill của SLASHER/SHOOTER đi 2 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'kizaru.png'
		},
	},

	'kuzan_v2' : {
		'title' : 'Kuzan V2',
		'color' : 'psy',
		'class' : 'slasher, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Gây 1200 sát thương chuẩn lên toàn bộ địch và giảm DEF của STR/INT đi 2 cấp (28 giây)',
		},
		'hidden_skill' : {
			'des' : 'QCK/PSY SPEED tăng 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'kuzan_v2.png'
		},
	},

	'akainu_v2' : {
		'title' : 'Akainu V2',
		'color' : 'int',
		'class' : 'fighter, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Cắt 16% HP toàn bộ địch, DEF của QCK/PSY giảm 4 cấp (40 giây)',
		},
		'hidden_skill' : {
			'des' : 'STR/INT ATK tăng 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'akainu_v2.png'
		},
	},

	'shanks_v2' : {
		'title' : 'Shanks V2',
		'color' : 'int',
		'class' : 'freespirit, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Cắt 10% HP toàn bộ địch, giảm tỷ lệ xuất hiện khiên đi 4 cấp (25 giây), tăng CRIT của INT lên 5 cấp trong 14 giây',
		},
		'hidden_skill' : {
			'des' : 'CRIT của INT tăng 5 cấp. Khi đồng đội INT CRIT, tăng ATK lên 1 cấp, cộng dồn 4 lần'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'shanks_v2.png'
		},
	},

	'law_v1' : {
		'title' : 'Law V1',
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1300 sát thương chuẩn cho một vùng nhỏ, và inflicts continuous damage lv3 (40 seconds), giảm DEF 4 cấp (20 giây)',
		},
		'hidden_skill' : {
			'des' : 'HP SLASHER/FREESPIRIT tăng 6 cấp khi còn 70 giây. Khả năng hồi phục của SLASHER/FREESPIRIT tăng 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'law_v1.png'
		},
	},

	'bartolomeo' : {
		'title' : 'Bartolomeo',
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Gây (ATK x 1.2) sát thương cho một kẻ địch, chuyển trạng thái khiêu khích (28 giây) và tăng tỉ lệ xuất hiện khiên lên 10 cấp trong 28 giây',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN/STRIKER tăng tỉ lệ xuất hiện khiên lên 6 cấp. Khi HP nhỏ hoặc bằng 30% tăng DEF DRIVEN/STRIKER lên 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'bartolomeo.png'
		},
	},

	'law_v2' : {
		'title' : 'Law V2',
		'color' : 'qck',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây 2850 sát thương chuẩn cho kẻ địch vùng trung tâm và tăng CRIT của STRIKER lên 4 cấp',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu STRIKER tăng SPEED lên 8 cấp.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'law_v2.png'
		},
	},

	'mihawk_v1' : {
		'title' : 'Mihawk V1',
		'color' : 'int',
		'class' : 'slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Tấn công kẻ địch trong một vùng lớn phía trước, gây (ATK x 1.65) sát thương, và giảm tỉ lệ xuất hiện khiên đi 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'SLASHER ATK tăng 6 cấp. Khi kẻ địch bị đánh lùi, tăng ATK bản thân lên 6 cấp, cộng dồn 3 lần'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'mihawk_v1.png'
		},
	},

	'sengoku' : {
		'title' : 'Sengoku',
		'color' : 'int',
		'class' : 'fighter, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 41 Giây',
			'des' : 'Gây (ATK x 0.5) sát thương cho một kẻ địch vùng trung tâm, tăng ATK đồng đội lên 4 cấp. Khi còn 50 giây, tăng ATK lên 4 cấp',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 50 giây, đồng đội tăng HP lên 6 cấp, ATK lên 5 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sengoku.png'
		},
	},

	'kuzan_v1' : {
		'title' : 'Kuzan V1',
		'color' : 'qck',
		'class' : 'shooter, striker',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây 2500 sát thương chuẩn một vùng lớn, 85% tỉ lệ khóa hành động kẻ địch trong 5 giây',
		},
		'hidden_skill' : {
			'des' : 'Khi CRIT, tăng ATK đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'kuzan_v1.png'
		},
	},

	'shanks_v1' : {
		'title' : 'Shanks V1',
		'color' : 'psy',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Cắt 23% HP toàn bộ địch. Nếu còn 30 giây, gây 2150 sát thương chuẩn và DEF giảm 7 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 30 giây PSY tăng ATK lên 9 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'shanks_v1.png'
		},
	},

	'rayleigh_v1' : {
		'title' : 'Rayleigh V1',
		'color' : 'int',
		'class' : 'slasher, fighter',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Giảm khóa chiêu đi 10 giây. Có 35% cơ hội khóa chiêu một vùng lớn địch trong 10 giây và giảm ATK xuống 9 cấp trong 19 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'rayleigh_v1.png'
		},
	},

	'g4_v1' : {
		'title' : 'Luffy Gear 4 V1',
		'color' : 'psy',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công địch có HP cao nhất với sát thương bằng (ATK x 4), giảm ATK bản thân 10 cấp (15 giây) và DEF bản thân 3 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'g4_v1.png'
		},
	},

	'sabo_v1' : {
		'title' : 'Sabo V1',
		'color' : 'psy',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Giảm DEF địch có HP cao nhất đi 4 cấp trong 15 giây, gây (ATK x 0.6) sát thương, tăng ATK FREESPIRIT lên 5 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED FREESPIRIT lên 6 cấp. Tăng ATK FREESPIRIT lên 2 cấp nếu CRIT, cộng dồn 2 lần'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sabo_v1.png'
		},
	},

	'hancock_v1' : {
		'title' : 'Hancock V1',
		'color' : 'qck',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây 1000 sát thương chuẩn lên 1 kẻ địch, giảm DEF đi 4 cấp trong 20 giây một vùng lớn. Hồi HP đồng đội bằng (RCV x 1.25)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hoặc bằng 50%, QCK/PSY tăng SPEED lên 9 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'hancock_v1.png'
		},
	},

	'fujitora_v1' : {
		'title' : 'Fujitora V1',
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Cắt 49% HP toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN tăng HP lên 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'fujitora_v1.png'
		},
	},

	'snakeman_v2' : {
		'title' : 'Snake-man V2',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (1.3 x ATK) sát thương cho 2 kẻ địch và tăng ATK STR lên 5 cấp trong 20 giây. Khi trận đấu còn 30 giây, gây (2 x ATK) sát thương một vùng',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR lên 5 cấp và SPEED lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa skill',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Full Power Atk',
		'img' : {
			'src' : 'snakeman_v2.png'
		},
	},

	'Boa_Hancock_Devoted_to_Strawhat_Luffy' : {
		'title' : 'Boa Hancock, Devoted to Strawhat Luffy',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Hồi (1.5 x RCV) HP cho một vùng, tăng ATK của STR lên 3 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Normal Attack → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'Boa_Hancock_Devoted_to_Strawhat_Luffy.png'
		},
	},

	'Monkey_D_Luffy_Straw_Hat_Pirates_Outcome_of_a_Hard_fought_Battle' : {
		'title' : 'Monkey D. Luffy, Straw Hat Pirates: Outcome of a Hard-fought Battle',
		'color' : 'psy',
		'class' : 'fighter, freespirit',
		'stars' : 'Pirate Festival Gift',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 2000 sát thương chuẩn cho kẻ địch ở vùng trung tâm',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, Tăng CRIT PSY lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'Monkey_D_Luffy_Straw_Hat_Pirates_Outcome_of_a_Hard_fought_Battle.png'
		},
	},

	'Kami_Enel_Ruthless_Thunder' : {
		'title' : 'Kami Enel, Ruthless Thunder',
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Tăng DEF bản thân lên 5 cấp trong 10 giây, tăng GUARD đồng đội lên 5 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Nếu còn 5 hoặc ít hơn đồng đội trên sân, tăng HP INT lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'Kami_Enel_Ruthless_Thunder.png'
		},
	},

	'Trafalgar_Law_True_Desire_of_Life' : {
		'title' : 'Trafalgar Law, True Desire of Life',
		'color' : 'str',
		'class' : 'slasher, freespirit',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây 2000 sát thương chuẩn cho 1 kẻ địch ở vùng trung tâm, và hồi 1700HP cho 1 đồng đội ở vùng trung tâm',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Short Range Heal → Normal Attack',
		'img' : {
			'src' : 'Trafalgar_Law_True_Desire_of_Life.png'
		},
	},

	'Charlotte_Katakuri_Haki_that_Conquers_the_Future' : {
		'title' : 'Charlotte Katakuri, Haki that Conquers the Future',
		'color' : 'int',
		'class' : 'driven, fighter',
		'stars' : 'Legend',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm SPEED kẻ địch trong một vùng lớn 5 cấp trong 20 giây. Giảm tích nộ (CT charge) của kẻ địch thuộc FREESPIRIT đi 4 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED INT lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Attack → Lv.2 Self Heal → Strong Attack → Normal Attack',
		'img' : {
			'src' : 'Charlotte_Katakuri_Haki_that_Conquers_the_Future.png'
		},
	},

	'blackbeard_v2' : {
		'title' : 'Blackbeard V2',
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 20 Giây',
			'des' : 'Gây (1.2 x ATK) sát thương cho kẻ địch ở vùng trung tâm và tăng ATK bản thân lên 10 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP INT lên 1 cấp. Khi máu bằng hoặc nhỏ hơn 60%, Tăng tích nộ (CT charge) bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'blackbeard_v2.png'
		},
	},

	'sabo_v4' : {
		'title' : 'Sabo V4',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'Legend',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp trong 25 giây, tăng SPEED FIGHTER lên 5 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STR lên 5 cấp mỗi khi STR CRIT, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh khóa skill',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : 'sabo_v4.png'
		},
	},

	'nami_v2' : {
		'title' : 'O-Nami, Novice Kunoichi',
		'color' : 'qck',
		'class' : 'striker, cerebral',
		'stars' : 'Legend',
		'type' : 'Hồi Phục',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Khi HP lớn hoặc bằng 70%, giảm DEF toàn bộ địch đi 4 cấp trong 19 giây. CRIT của đồng đội tăng 1 cấp (19 giây). Nếu HP nhỏ hơn 70%, hồi (2.15 x RCV) HP cho đồng đội',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng đội lên 5 cấp, tăng CT đồng đội lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '...',
		},
		'pattern': 'Normal Attack → Lv.1 Small Range Heal → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'nami_v2.png'
		},
	},

	'Hody' : {
		'title' : 'Hody Jones, False Crusader Rampaging Recklessly',
		'color' : 'int',
		'class' : 'powerhouse, shooter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây 1700 sát thương chuẩn cho kẻ địch có DEF cao nhất, tăng DEF lên 6 cấp cho đồng đội có DEF cao nhất.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK POWERHOUSE lên 6 cấp, tăng CT POWERHOUSE lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao nhất',
			'extra_ability' : '...',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack',
		'img' : {
			'src' : 'hody.png'
		},
	},

	'shirahoshi' : {
		'title' : 'Shirahoshi, Promised Reunion',
		'color' : 'psy',
		'class' : 'striker',
		'stars' : 'Legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 39 Giây',
			'des' : 'Hồi HP một vùng lớn đồng đội bằng (2.55 x RCV) HP. Tăng khả năng đánh lùi của đồng đội lên 5 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hoặc bằng 50%, tăng RCV bản thân lên 29 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% cơ hội tránh khóa chiêu.',
		},
		'pattern': 'Normal Attack → Lv.3 Small Range Heal → Lv.1 self heal → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'shirahoshi.png'
		},
	},

	'jack' : {
		'title' : 'Jack, Eleph-Eleph Fruit: Ancient Model User',
		'color' : 'str',
		'class' : 'striker, fighter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Tăng DEF đồng đội lên 3 cấp (20 giây). Cắt 14% HP kẻ địch trong một vùng rộng, cắt 23% nếu trận đấu còn 70 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng đội lên 5 cấp, tăng DEF đồng đội lên 1 cấp trong 30 giây đầu.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 100HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 self heal',
		'img' : {
			'src' : 'jack.png'
		},
	},

	'rayleigh_v3' : {
		'title' : 'Dark King Rayleigh, Teaching a New Era',
		'color' : 'psy',
		'class' : 'cerebral, fighter',
		'stars' : 'Legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 1000 sát thương chuẩn cho toàn bộ kẻ địch. Giảm DEF kẻ địch có nhiều máu nhất đi 5 cấp, tăng ATK đồng đội có ATK cao nhất lên 7 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK FIGHTER/CEREBRAL và DEF FIGHTER/CEREBRAL lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Lv.3 heal small Range → Lv.1 self heal → Lv.2 heal',
		'img' : {
			'src' : 'rayleigh_v3.png'
		},
	},

	'dex_tm_luffy' : {
		'title' : 'Monkey D. Luffy, Celebrate 6th Anniversary Cruise',
		'color' : 'dex',
		'class' : 'freespirit, fighter',
		'stars' : 'TM Character',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (0.9 x ATK) sát thương lên những kẻ địch ở vùng trung tâm và tăng SPEED của DEX lên 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'dex_tm_luffy.png'
		},
	},

	'str_carrot_kizuna' : {
		'title' : 'Carrot, Awakening Sulong',
		'color' : 'str',
		'class' : 'fighter, slasher',
		'stars' : 'Kizuna',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Giảm DEF vùng lớn kẻ địch đi 6 cấp trong 20 giây. Giảm SPEED DEX trong 1 vùng lớn trước mặt đi 7 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STR lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : '30% tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Attack → Lv.2 Self Heal → Strong Attack → Normal Attack',
		'img' : {
			'src' : 'str_carrot_kizuna.png'
		},
	},

	'dex_kid_legend' : {
		'title' : 'Eustass Kid, Magnetic Captain Challenging the Dragon',
		'color' : 'dex',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Tăng DEF tất cả đồng minh lên 3 cấp trong 25 giây và gây (1.6 x ATK) sát thương cho kẻ địch có class POWERHOUSE',
		},
		'hidden_skill' : {
			'des' : 'Tăng DEF của DEX lên 2 cấp, HP của DEX lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% tránh sát thương liên hoàn',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'dex_kid_legend.png'
		},
	},

	'dex_hawkins_legend' : {
		'title' : 'Magician Basil Hawkins, Follower of the Dragon',
		'color' : 'dex',
		'class' : 'cerebral, slasher',
		'stars' : 'legend',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tăng DEF bản thân lên 5 cấp, ATK bản thân lên 6 cấp và giảm sát thương kẻ địch đối với bản thân trong 20 giây. Nếu HP dưới 40%, gây (0.7 x ATK) sát thương cho một vùng kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED bản thân lên 5 cấp nếu máu dưới 50%.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100 HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.1 Self Heal → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'dex_hawkins_legend.png'
		},
	},

	'mr0_int_raid' : {
		'title' : 'Mr. 0, Uncowardly Duel',
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'raid',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm sự chính xác của toàn bộ kẻ địch đi 5 cấp trong 20 giây. Giảm ATK FREESPIRIT đi 7 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP DRIVEN lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100 HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.2 Self Heal → Strong Attack → Normal Attack',
		'img' : {
			'src' : 'mr0_int_raid.png'
		},
	},

	'osoba_dex_raid' : {
		'title' : 'O-Soba Mask, Mysterious Germa 66',
		'color' : 'dex',
		'class' : 'powerhouse, freespirit',
		'stars' : 'raid',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (1.3 x ATK) sát thương cho 1 kẻ địch, tăng SPEED DEX lên 5 cấp trong 20 giây và DEF DEX lên 6 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP DEX lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : 'osoba_dex_raid.png'
		},
	},

	'xdrake_dex_rr' : {
		'title' : 'Red Flag X Drake, Former Drake Pirate',
		'color' : 'dex',
		'class' : 'powerhouse, slasher',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (1.25 x ATK) cho kẻ địch ở vùng trung tâm phía trước, tăng ATK DEX lên 3 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 50 giây, tăng ATK DEX lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'xdrake_dex_rr.png'
		},
	},

	'page_one_dex_rr' : {
		'title' : 'Page One, Tobiroppo of the Beasts Pirates',
		'color' : 'dex',
		'class' : 'powerhouse, slasher',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Giảm tích nộ (CT) của kẻ địch có DEF cao nhất đi 20%. Nếu có nhiều hơn 5 đồng mình ở trên sân, tăng SPEED DEX lên 4 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu, tăng HP DEX lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : 'page_one_dex_rr.png'
		},
	},

	'sanji_str_rr_pf' : {
		'title' : 'Sanji, Burning Flames of Anger',
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (1 x ATK) sát thương cho 1 kẻ địch ở đổi diện, tăng ATK STR lên 4 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STR lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Short Range Heal → Normal Attack',
		'img' : {
			'src' : 'sanji_str_rr_pf.png'
		},
	},

	'otama_str_lrr_pf' : {
		'title' : 'O-Tama, Bonding with Komachiyo',
		'color' : 'str',
		'class' : 'freespirit, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Hồi (1.05 x RCV) HP cho đồng minh một vùng và (1.7 x RCV) HP cho đồng mình có HP thấp nhất.',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT FIGHTER và FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Normal Attack → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'otama_str_lrr_pf.png'
		},
	},

}