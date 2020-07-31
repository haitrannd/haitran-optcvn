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
		'pattern': 'Strong Atk → Strong Atk → Heal lv1 → Strong Atk',
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
			'des' : 'Gây (ATK x 0.8) sát thương cho một vùng rộng theo hàng ngang. Tăng tỉ lệ xuất hiện khiên chắn của DRIVEN lên 7 cấp (21 giây). Tăng ATK của DRIVEN lên 7 cấp (21 giây).',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên chắn cho DRIVEN lên 3 cấp. Tăng ATK của bản thân lên 8 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi 50HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk',
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
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 → Normal Atk',
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
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
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
			'des' : 'Tấn công vùng lớn phía trước với sát thường bằng (ATK x 0.65), giảm DEF 3 cấp (25 giây). Tấn công vùng nhỏ phía trước với sát thương bằng (ATK x 1.15).',
		},
		'hidden_skill' : {
			'des' : 'FREESPIRIT/CEREBRAL tăng CRIT  lên 5 cấp, tăng SPEED lên 2 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '50% cơ hộ tránh tê liệt (paralysis)',
		},
		'pattern': 'Atk → Strong → Heal lv1 (small) → Atk',
		'img' : {
			'src' : 'sabo_koala.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_def_down_all, hiddenskill_crit_up, hiddenskill_crit_up_class_cerebral, hiddenskill_crit_up_class_fs, hiddenskill_speed_up, hiddenskill_speed_up_class_cerebral, hiddenskill_speed_up_class_fs, target_nearby, ability_prevent_crit',
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
			'extra_ability' : '70% cơ hội tránh sát thương liên hoàn',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk',
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
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 4850 sát thương chuẩn lên 1 kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK POWERHOUSE lên 6 cấp, giảm DEF đi 2 cấp. Trong 25 giây đầu tăng ATK bản thân lên 18 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': 'Strong Atk → Normal Atk → Normal Atk → Fullpower Atk',
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
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
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
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
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
		'pattern': 'Strong Atk → Normal Atk → Strong Atk → Fullpower Atk',
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
		'pattern': 'Normal Atk →  Normal Atk → Normal Atk → Fullpower Atk',
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
			'extra_ability' : '50% tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Atk → Strong Atk → Normal Atk → Strong Atk',
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
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
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
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk → Strong Atk',
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
		'pattern': 'Normal Atk → Self healing lv2 → Strong Atk → Heal lv1 (small)',
		'img' : {
			'src' : 'nami_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hiddenskill_speed_up, hiddenskill_speed_up_color_dex, hiddenskill_ct_up, hiddenskill_ct_up_color_dex, target_nearby, ability_heal',
	},

	'usopp_dex_v1_legend' : {
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
		'pattern': 'Normal Atk → Self healing lv2 → Strong Atk → Normal Atk',
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
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
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
		'pattern': 'Normal Atk → Heal lv3 (small) → Normal Atk → Heal lv2 (small)',
		'img' : {
			'src' : 'corazon.png'
		},
		'tags': 'skill_heal, skill_def_up, hiddenskill_atk_up, target_nearby, ability_heal',
	},

	'magellan_dex' : {
		'title' : 'Magellan',
		'color' : 'dex',
		'class' : 'striker, shooter',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm ATK một vùng lớn đi 3 cấp (47 giây). Làm chậm nộ của kẻ địch đi 4 cấp (34 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi có 5 hoặc nhiều hơn đồng minh ở trên sân, tăng HP đồng minh thêm 7 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Self Heal lv2 → Strong Atk → Normal Atk',
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
			'des' : 'Gây 1200 sát thương chuẩn một vùng lớn, tăng ATK của đồng đội lên 5 cấp (16 giây), tăng DEF lên 5 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng mình lên 5 cấp, khi còn dưới 20% HP, tăng HP đồng minh lên 2 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '80% tránh khóa hành động',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'rayleigh_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_def_up, hiddenskill_hp_up, target_nearby, ability_prevent_bind'
	},

	'jinbe_v2' : {
		'title' : 'Jinbe V2',
		'color' : 'dex',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm 12% HP kẻ địch một vùng rộng. Tăng ATK của FIGHTER, SLASHER và SHOOTER lên 4 cấp trong 19 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR, DEX, PSY lên 5 cấp, tăng DEF lên 1 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Self healing lv2',
		'img' : {
			'src' : 'jinbe_v2.png'
		},
		'tags': 'skill_cut_hp, skill_atk_up, skill_atk_up_class_fighter, skill_atk_up_class_shooter, skill_atk_up_class_slasher, hiddenskill_atk_up, hiddenskill_atk_up_color_str, hiddenskill_atk_up_color_dex, hiddenskill_atk_up_color_psy, hiddenskill_def_up, target_nearby, ability_heal'
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
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'dof_v2.png'
		},
		'tags': 'skill_deal_dmg, hiddenskill_atk_up, hiddenskill_atk_up_class_cerebral, target_nearby, ability_heal'
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
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Heal lv1 (small) → Normal Atk → Heal lv2 (small)',
		'img' : {
			'src' : 'brook.png'
		},
		'tags': 'skill_heal, skill_def_up, hiddenskill_atk_up, hiddenskill_def_up, hiddenskill_def_up_self, target_nearby, ability_prevent_para'
	},

	'blackbeard_v1_dex' : {
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
			'extra_ability' : '50% cơ hội tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'blackbeard_v1_dex.png'
		},
		'tags': 'skill_cut_hp, skill_fixed_dmg, skill_fixed_dmg_color_str, skill_def_down, skill_def_down_color_str, hiddenskill_atk_up, hiddenskill_atk_up_self, target_low_hp, ability_prevent_para'
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
			'des' : 'Tăng ATK của POWERHOUSE/STRIKER lên 6 cấp, ATK bản thân lên 7 cấp. Làm chậm CT bản thân đi 6 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ít máu nhất',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'kaido.png'
		},
		'tags': 'skill_cut_hp, skill_deal_dmg, hiddenskill_atk_up, hiddenskill_atk_up_class_ph, hiddenskill_atk_up_class_striker, hiddenskill_atk_up_self, hiddenskill_ct_down, target_low_hp'
	},

	'kuzan_v3' : {
		'title' : 'Kuzan V3',
		'color' : 'qck',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Gây (ATK x 1.4) sát thương cho một vùng lớn và có 70% cơ hội khóa skill của kẻ địch có ATK cao nhất trong 6 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của STR, DEX, QCK lên 5 cấp, các đồng đội còn lại được tăng SPEED lên 2 cấp trong 15 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Fullpower Atk → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'kuzan_v3.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_enemies, hiddenskill_speed_up, hiddenskill_speed_up_color_str, hiddenskill_speed_up_color_dex, hiddenskill_speed_up_color_qck, ability_prevent_silence'
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
			'extra_ability' : '50% tránh khóa hành động (bind)',
		},
		'pattern': 'Normal Atk → Self healing lv2 → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'mihawk_perona.png'
		},
		'tags': 'skill_atk_down, skill_def_down, skill_cut_hp, hiddenskill_speed_up, hiddenskill_hp_up, target_nearby, ability_prevent_bind'
	},

	'marco' : {
		'title' : 'Marco',
		'color' : 'qck',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Tấn công một vùng với lượng sát thường (ATK x 0.55), giảm ATK 2 cấp trong 15 giây, hồi phục HP một đồng đội bằng (1.86 x RCV)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 50%, tăng tỉ lệ xuất hiện khiên của QCK và PSY lên 7 cấp. Tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Khi HP dưới 50%, hồi  200HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Self Heal lv2',
		'img' : {
			'src' : 'marco.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, skill_heal, hidden_skill_guard_up, hidden_skill_guard_up_color_qck, hidden_skill_guard_up_color_psy, hiddenskill_atk_up, hiddenskill_atk_up_self, ability_heal'
	},

	'red_hair_pirates' : {
		'title' : 'Red hair pirates, Shanks',
		'color' : 'psy, qck',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Giảm HP vùng rộng theo hàng ngang đi 21%, tăng DEF đồng đội lên 4 cấp (14 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi trận đấu còn 70s, đồng đội tăng DEF lên 5 cấp, ATK bản thân tăng 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhâ',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1',
		'img' : {
			'src' : 'red_hair_pirates.png'
		},
		'tags': 'skill_cut_hp, skill_def_up, hiddenskill_def_up, hiddenskill_atk_up, hiddenskill_atk_up_self, ability_prevent_silence'
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa hành động',
		},
		'pattern': 'Normal Atk → Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'arlong_pirates.png'
		},
		'tags': 'skill_atk_up, skill_deal_dmg, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_prevent_bind'
	},

	'pudding_int_legend' : {
		'title' : 'Pudding',
		'color' : 'int',
		'class' : 'cerebral, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Giảm thời gian dùng skill của INT đi 15%, tăng ATK đồng minh lên 3 cấp (20 giây), tăng ATK của đồng minh có ATK cao nhất (20 giây) lên 8 cấp',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP INT lên 5 cấp, tăng ATK của INT có ATK cao nhất lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 → Normal Atk',
		'img' : {
			'src' : 'pudding.png'
		},
		'tags': 'skill_ct_up, skill_atk_up, hiddenskill_hp_up, hiddenskill_hp_up_color_int, target_nearby, ability_prevent_silence'
	},

	'nami_robin' : {
		'title' : 'Nami & Robin',
		'color' : 'int, dex',
		'class' : 'cerebral, striker, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm 30% HP một vùng rộng, rút ngắn thời gian bị tê liệt của đồng đội đi 10 giây, tăng CRIT lên 3 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng RCV đồng minh lên 5 cấp, tăng tỉ lệ xuất hiện khiên lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 → Normal Atk',
		'img' : {
			'src' : 'nami_robin.png'
		},
		'tags': 'skill_cut_hp, skill_para_down, skill_crit_up, hidden_skill_rcv_up hidden_skill_guard_up, target_nearby, ability_prevent_para'
	},

	'robin' : {
		'title' : 'Robin',
		'color' : 'int',
		'class' : 'cerebral, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Tăng tỉ lệ xuất hiện khiên lên 7 cấp (25 giây), 80% tỉ lệ khóa chiêu vùng kẻ địch phía trước (12 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên của CEREBRAL lên 6 cấp, tăng DEF CEREBRAL lên 3 cấp trong 25 giây đầu.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi máu dưới 50%, Hồi phục 150HP mỗi lượt',
		},
		'pattern': 'heal lv1 → Atk -> heal lv2',
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
			'des' : 'Trong 30 giây đầu, tăng SPEED của STR, DEX, QCK lên 3 cấp. Tăng SPEED của STR, DEX, QCK lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heavy Atk → Heal lv1 (Small range) -> Normal Atk',
		'img' : {
			'src' : 'sabo_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_str, skill_atk_up_color_qck, skill_atk_up_color_dex, hiddenskill_speed_up, hiddenskill_speed_up_color_qck, hiddenskill_speed_up_color_dex, hiddenskill_speed_up_color_str, target_nearby, ability_prevent_silence'
	},

	'sabo_v3' : {
		'title' : 'Sabo V3',
		'color' : 'dex',
		'class' : 'fighter, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.15) sát thương cho một vùng lớn ở phía trước. FIGHTER/SHOOTER/FREESPIRIT tăng ATK lên 2 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, FIGHTER/SHOOTER/FREESPIRIT tăng ATK lên 6 cấp, ATK bản thân tăng 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sabo_v3.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_shooter, skill_atk_up_class_fighter, skill_atk_up_class_fs, hiddenskill_atk_up, hiddenskill_atk_up_class_fighter, hiddenskill_atk_up_class_shooter, hiddenskill_atk_up_class_fs, target_nearby, ability_prevent_silence'
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
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sanji_v3.png'
		},
		'tags': 'skill_deal_dmg, skill_miss_up, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_prevent_silence'
	},

	'luffy_zoro' : {
		'title' : 'Luffy & Zoro',
		'color' : 'str, dex',
		'class' : 'slasher, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.35) sát thương cho một vùng lớn theo hàng ngang, tăng tỉ lệ CRIT cho FREESPIRIT và SLASHER lên 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi CRIT, tăng ATK FREESPIRIT/SLASHER lên 6 cấp, cộng dồn 2 lần. Trong 30 giây đầu tăng CRIT FREESPIRIT/SLASHER lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa hành động',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'luffy_zoro.png'
		},
		'tags': 'skill_deal_dmg, skill_crit_up, skill_crit_up_class_fs, skill_crit_up_class_slasher, hiddenskill_atk_up, hiddenskill_atk_up_class_fs, hiddenskill_atk_up_class_slasher, hiddenskill_crit_up, hiddenskill_crit_up_class_fs, hiddenskill_crit_up_class_slasher, target_nearby, ability_prevent_bind'
	},

	'chopper' : {
		'title' : 'Chopper',
		'color' : 'psy',
		'class' : 'shooter, cerebral',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Hồi (0.6 x RCV) HP cho đồng đội trung tâm, giảm 7 giây trói, giảm 7 giây tê liệt, giảm 7 giây khóa chiêu',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gàn',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heal lv2 → Normal Atk',
		'img' : {
			'src' : 'chopper.png'
		},
		'tags': 'skill_heal, skill_bind_down, skill_silence_down, skill_para_down, hiddenskill_hp_up, target_nearby, ability_prevent_silence'
	},

	'lucci_v2' : {
		'title' : 'Lucci V2',
		'color' : 'qck',
		'class' : 'shooter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Giảm DEF vùng lớn kẻ địch theo hàng ngang đi 7 cấp, gây (ATK x 1.5) sát thương.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED SHOOTER lên 7 cấp. Khi CRIT, ATK bản thân tăng 5 cấp, cộng dồn tối đa 3 lần'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Khi máu dưới 50%, hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'lucci_v2.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, hiddenskill_speed_up, hiddenskill_speed_up_class_shooter, hiddenskill_atk_up, hiddenskill_atk_up_self, target_highest_atk, ability_heal'
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

	'katakuri_v1_int' : {
		'title' : 'Katakuri V1',
		'color' : 'int',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công một vùng lớn theo hàng ngang gây (ATK x 0.9) sát thương và giảm SPEED đi 6 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đánh lùi của đồng minh lên 6 cấp. Khi đẩy lùi 1 kẻ địch, Tăng ATK bản thân lên 7 cấp, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : '70% tránh khóa hành động',
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
			'des' : 'Khi HP lớn hoặc bằng 50%, ATK bản thân tăng 10 cấp (15 giây). Gây (ATK x 1.95) sát thương một vùng',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STR, DEX, PSY lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower atk',
		'img' : {
			'src' : 'stampede_luffy.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_deal_dmg, hiddenskill_atk_up, hiddenskill_atk_up_color_str, hiddenskill_atk_up_color_dex, hiddenskill_atk_up_color_psy, target_nearby, ability_prevent_para'
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

	'boa_hancock_v2_psy' : {
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
			'des' : 'SHOOTER/FREESPIRIT CRIT tăng 6 cấp. Khi CRIT, tăng ATK SHOOTER/FREESPIRIT lên 2 cấp, cộng dồn 4 lần.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Hồi 200HP mỗi lượt',
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
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'katakuri_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_heal, skill_heal_self, hiddenskill_atk_up, hiddenskill_atk_up_class_shooter, hiddenskill_atk_up_class_fighter, hiddenskill_atk_up_class_slasher, hiddenskill_atk_up_class_shooter, hiddenskill_atk_up_class_cerebral, hiddenskill_atk_up_class_ph, target_highest_atk, ability_prevent_para'
	},

	'snakeman' : {
		'title' : 'Snakeman',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Gây (ATK x 2.7) sát thương một vùng rộng phía trước theo hàng ngang',
		},
		'hidden_skill' : {
			'des' : '60 giây đầu tăng ATK đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'snakeman.png'
		},
		'tags': 'skill_deal_dmg, hiddenskill_atk_up, target_nearby, ability_prevent_para'
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'cavendish.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_self, skill_def_up_self, hiddenskill_speed_up, hiddenskill_speed_up_color_qck, hiddenskill_speed_up_color_str, hiddenskill_speed_up_color_dex, target_nearby, ability_prevent_para'
	},

	'carrot' : {
		'title' : 'Carrot',
		'color' : 'qck',
		'class' : 'slasher, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 39 Giây',
			'des' : 'Gây 2450 sát thương chuẩn cho vùng lớn kẻ địch phía trước, rút ngắn thời gian dùng skill của FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL đi 20%',
		},
		'hidden_skill' : {
			'des' : 'Tăng speed FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL lên 5 cấp, ATK bản thân tăng 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'carrot.png'
		},
		'tags': 'skill_fixed_dmg, skill_ct_shorten, hiddenskill_speed_up,hiddenskill_speed_up_class_fighter, hiddenskill_speed_up_class_shooter, hiddenskill_speed_up_class_slasher, hiddenskill_speed_up_class_cerebral, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_prevent_para'
	},

	'zephyr' : {
		'title' : 'Zephyr',
		'color' : 'qck',
		'class' : 'shooter, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 32% HP một vùng rộng, gây 1550 sát thương chuẩn lên kẻ địch trong 1 vùng nhỏ',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK SHOOTER lên 5 cấp. Tăng ATK bản thân lên 4 cấp nếu số đồng đội trong trận chỉ còn ít hơn hoặc bằng 5, lên 7 cấp nếu ít hơn hoặc bằng 3'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Strong Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'zephyr.png'
		},
		'tags': 'skill_cut_hp, skill_fixed_dmg, hiddenskill_atk_up, hiddenskill_atk_up_class_shooter, hiddenskill_atk_up_self, target_nearby, ability_prevent_para'
	},

	'bege_capone_int' : {
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
			'des' : 'SHOOTER tăng HP lên 5 cấp. Khi còn 70 giây, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Self Heal lv2',
		'img' : {
			'src' : 'bege.png'
		},
		'tags': 'skill_lock_target, skill_heal, skill_heal_self, skill_def_up, skill_def_up_class_shooter, hiddenskill_hp_up, hiddenskill_hp_up_class_shooter, hiddenskill_def_up, hiddenskill_def_up_self, target_nearby, ability_prevent_silence'
	},

	'franky_qck' : {
		'title' : 'Franky',
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 21% HP một vùng rộng trước mặt, FIGHTER/SLASHER/STRIKER/SHOOTER tăng DEF lên 4 cấp (20 giây).Nếu số lượng địch nhiều hơn số lượng đồng đội là 3, tăng DEF 4 cấp (20 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER/SLASHER/STRIKER/SHOOTER lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Self Heal lv2',
		'img' : {
			'src' : 'franky.png'
		},
		'tags': 'skill_cut_hp, skill_def_up, skill_def_up_class_fighter, skill_def_up_class_slasher, skill_def_up_class_striker, skill_def_up_class_shooter, hiddenskill_hp_up, hiddenskill_hp_up_class_fighter, hiddenskill_hp_up_class_slasher, hiddenskill_hp_up_class_striker, hiddenskill_hp_up_class_shooter, target_nearby, ability_prevent_para'
	},

	'garp_psy_legend' : {
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
			'des' : 'Tăng ATK bản thân lên 7 cấp. Khi còn 70 giây, tăng tỉ lệ xuất hiện khiên của đồng đội lên 4 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'garp.png'
		},
		'tags': 'skill_cut_hp, skill_silence_down, skill_atk_up, hiddenskill_atk_up, hiddenskill_atk_up_self, hiddenskill_guard_up, ability_prevent_silence, missing'
	},

	'sanji_v1' : {
		'title' : 'Sanji V1',
		'color' : 'int',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Giảm DEF kẻ địch một vùng rộng đi 6 cấp trong 6 giây, gây (ATK x 2.15) sát thương',
		},
		'hidden_skill' : {
			'des' : 'INT tăng ATK lên 6 cấp, tăng ATK bản thân lên 8 cấp khi trận đấu còn 50 giây'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sanji_v1.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, hiddenskill_atk_up, hiddenskill_atk_up_color_int, hiddenskill_atk_up_self, target_nearby, ability_prevent_para'
	},

	'enel_qck' : {
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
			'des' : 'Tăng HP đồng đội lên 6 cấp, tăng DEF đồng đội có khả năng hồi phục cao nhất lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Heal lv3',
		'img' : {
			'src' : 'enel.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, hiddenskill_hp_up, hiddenskill_def_up, target_nearby, ability_prevent_para'
	},

	'shiki_qck' : {
		'title' : 'Shiki',
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Gây 1450 sát thương chuẩn một vùng rộng theo hàng ngang, giảm DEF đi 2 cấp trong 24 giây, và có 51% khả năng tê liệt kẻ địch trong 6 giây',
		},
		'hidden_skill' : {
			'des' : 'DEX/QCK/INT tăng HP lên 5 cấp. Khi còn 80 giây, tăng ATK toàn bộ đồng đội lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Atk → Self heal lv2 → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'shiki.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_para_enemies, hiddenskill_hp_up, hiddenskill_hp_up_color_int, hiddenskill_hp_up_color_dex, hiddenskill_hp_up_color_qck, hiddenskill_atk_up, target_highest_speed'
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
			'des' : 'Tăng tỉ lệ xuất hiện khiên (GUARD) của tất cả đồng đội lên 5 cấp. Khi HP nhỏ hoặc bằng 50%, tăng DEF bản thân lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'whitebeard_marco.png'
		},
		'tags': 'skill_cut_hp, skill_heal, skill_heal_self, hiddenskill_guard_up, hiddenskill_def_up, hiddenskill_def_up_self, target_nearby, ability_prevent_silence'
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
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sanji_v2.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_deal_dmg, hiddenskill_speed_up, hiddenskill_speed_up_class_fighter, target_nearby, ability_prevent_para'
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
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Normal Atk',
		'img' : {
			'src' : 'judge.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_ph, hiddenskill_atk_up, hiddenskill_atk_up_class_fighter, hiddenskill_atk_up_class_ph, hiddenskill_atk_up_class_driven, hiddenskill_def_up, hiddenskill_def_up_self, target_highest_atk, ability_prevent_para'
	},

	'tesoro_qck' : {
		'title' : 'Tesoro',
		'color' : 'qck',
		'class' : 'striker, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây 1200 sát thương chuẩn một vùng rộng, đồng đội xung quanh tăng DEF lên 7 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc tích nộ của đồng đội lên 5 cấp. Khi HP lớn hoặc bằng 60%, DEF đồng đội tăng 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hơn 50%, hồi 100HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Normal Atk → Self Heal lv2',
		'img' : {
			'src' : 'tesoro.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_up, hiddenskill_ct_up, hiddenskill_def_up, target_nearby, ability_heal'
	},

	'jinbe_v1' : {
		'title' : 'Jinbe V1',
		'color' : 'int',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây (ATK x 1.3) sát thương trong một vùng rộng, giảm ATK đi 15 cấp (25 giây)',
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
		'tags': 'skill_deal_dmg, skill_atk_down, hiddenskill_hp_up, hiddenskill_hp_up_class_fighter, hiddenskill_def_up, hiddenskill_def_up_class_fighter, target_nearby, ability_heal'
	},

	'buggy_int' : {
		'title' : 'Buggy',
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Đồng đội xung quanh tăng ATK lên 5 cấp (25 giây), SPEED lên 8 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'SPEED tất cả đồng đội tăng lên 6 cấp. Tăng ATK bản thân lên 6 cấp khi CRIT, cộng dồn 3 lần'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Normal Atk',
		'img' : {
			'src' : 'buggy.png'
		},
		'tags': 'skill_atk_up, skill_speed_up, hiddenskill_speed_up, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby, ability_heal'
	},

	'kizaru_psy' : {
		'title' : 'Kizaru',
		'color' : 'psy',
		'class' : 'slasher, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Tấn công 4 kẻ địch với sát thương (ATK x 0.6). SLASHER/SHOOTER tăng ATK lên 7 cấp (10 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của SLASHER/SHOOTER lên 6 cấp. Trong 30 giây đầu tăng tốc tích nộ của SLASHER/SHOOTER lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (range) → Fullpower Atk',
		'img' : {
			'src' : 'kizaru.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_slasher, skill_atk_up_class_shooter, hiddenskill_speed_up, hiddenskill_speed_up_class_slasher, hiddenskill_speed_up_class_shooter, hiddenskill_ct_up, hiddenskill_ct_up_class_slasher, hiddenskill_ct_up_class_shooter, target_nearby, ability_prevent_silence'
	},

	'kuzan_v2_aokiji_psy' : {
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'kuzan_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_def_down_color_str, skill_def_down_color_int, hiddenskill_speed_up, hiddenskill_speed_up_color_qck, hiddenskill_speed_up_color_qsy, target_nearby, ability_prevent_para'
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
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'akainu_v2.png'
		},
		'tags': 'skill_cut_hp, skill_def_down, skill_def_down_color_qck, skill_def_down_color_psy, hiddenskill_atk_up, hiddenskill_atk_up_color_str, hiddenskill_atk_up_color_int, target_highest_atk, ability_prevent_silence'
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Strong Atk',
		'img' : {
			'src' : 'shanks_v2.png'
		},
		'tags': 'skill_cut_hp, skill_guard_down, skill_crit_up, skill_crit_up_color_int, hiddenskill_crit_up, hiddenskill_crit_up_color_int, hiddenskill_atk_up, hiddenskill_atk_up_color_int, target_nearby, ability_prevent_para'
	},

	'law_v1' : {
		'title' : 'Law V1',
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1300 sát thương chuẩn cho một vùng nhỏ, tăng sát thương liên hoàn lên 3 cấp (40 giây), giảm DEF 4 cấp (20 giây)',
		},
		'hidden_skill' : {
			'des' : 'HP SLASHER/FREESPIRIT tăng 6 cấp. Khi còn 70 giây, Tăng RCV SLASHER/FREESPIRIT lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'law_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, hiddenskill_hp_up, hiddenskill_hp_up_class_slasher, hiddenskill_hp_up_class_fs, hiddenskill_rcv_up, hiddenskill_rcv_up_class_slasher, hiddenskill_rcv_up_class_fs, target_highest_def, ability_prevent_silence'
	},

	'bartolomeo' : {
		'title' : 'Bartolomeo',
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Gây (ATK x 1.2) sát thương cho một kẻ địch, chuyển trạng thái khiêu khích (28 giây). Tăng tỉ lệ xuất hiện khiên lên 10 cấp trong 28 giây',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN/STRIKER tăng tỉ lệ xuất hiện khiên lên 6 cấp. Khi HP nhỏ hoặc bằng 30% tăng DEF DRIVEN/STRIKER lên 3 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Heal lv2',
		'img' : {
			'src' : 'bartolomeo.png'
		},
		'tags': 'skill_deal_dmg, skill_lock_target, skill_guard_up, hiddenskill_guard_up, hiddenskill_guard_up_class_driven, hiddenskill_guard_up_class_striker, hiddenskill_def_up, hiddenskill_def_up_class_driven, hiddenskill_def_up_class_striker, target_highest_atk, ability_prevent_silence'
	},

	'law_v2' : {
		'title' : 'Law V2',
		'color' : 'qck',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây 2850 sát thương chuẩn một vùng lớn và tăng CRIT của STRIKER lên 4 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu STRIKER tăng SPEED lên 8 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'law_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_crit_up, skill_crit_up_class_striker, hiddenskill_speed_up, hiddenskill_speed_up_class_striker, target_nearby, ability_prevent_silence'
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'mihawk_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_guard_down, hiddenskill_atk_up, hiddenskill_atk_up_class_slasher'
	},

	'sengoku' : {
		'title' : 'Sengoku',
		'color' : 'int',
		'class' : 'fighter, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 41 Giây',
			'des' : 'Gây (ATK x 0.5) sát thương một vùng lớn, tăng ATK đồng đội lên 4 cấp. Khi còn 50 giây, tăng ATK lên 4 cấp',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 50 giây, đồng đội tăng HP lên 6 cấp. Tăng ATK đồng đội lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sengoku.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hiddenskill_hp_up, hiddenskill_atk_up, target_nearby, ability_prevent_para'
	},

	'kuzan_v1_aokiji_qck_legend' : {
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
			'des' : 'Khi CRIT, tăng ATK đồng đội lên 7 cấp, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Normal Atk',
		'img' : {
			'src' : 'kuzan_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_bind_enemies, hiddenskill_atk_up, target_nearby'
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Self Heal lv2 (range) → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'shanks_v1.png'
		},
		'tags': 'skill_cut_hp, skill_fixed_dmg, skill_def_down, hiddenskill_atk_up, target_nearby, ability_prevent_silence'
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
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heal lv1 (range) → Normal Atk → Heal lv2 (range)',
		'img' : {
			'src' : 'rayleigh_v1.png'
		},
		'tags': 'skill_silence_down, skill_silence_enemies, skill_atk_down, hiddenskill_speed_up, target_nearby, ability_prevent_silence'
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
			'des' : 'Tăng ATK bản thân lên 7 cấp. Tăng ATK FIGHTER/FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% cơ hội tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'g4_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, skill_atk_down_self, skill_def_down, skill_def_down_self, hiddenskill_atk_up, hiddenskill_atk_up_self, hiddenskill_atk_up_class_fighter, hiddenskill_atk_up_class_fs, target_highest_atk, ability_prevent_para'
	},

	'sabo_v1_psy' : {
		'title' : 'Sabo V1',
		'color' : 'psy',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Giảm DEF kẻ địch có HP cao nhất đi 4 cấp trong 15 giây, gây (ATK x 0.6) sát thương, tăng ATK FREESPIRIT lên 5 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED FREESPIRIT lên 6 cấp. Tăng ATK SHOOTER/FREESPIRIT lên 2 cấp nếu CRIT, cộng dồn 2 lần'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 200HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (in small range) → Strong Atk',
		'img' : {
			'src' : 'sabo_v1.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, skill_atk_up, skill_atk_up_class_fs, hiddenskill_speed_up, hiddenskill_speed_up_class_fs, hiddenskill_atk_up, hiddenskill_atk_up_class_fs, hiddenskill_atk_up_class_shooter, target_highest_atk, ability_heal'
	},

	'hancock_v1' : {
		'title' : 'Hancock V1',
		'color' : 'qck',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây 1000 sát thương chuẩn lên 1 kẻ địch. Giảm DEF đi 4 cấp trong 20 giây một vùng lớn. Hồi HP đồng đội bằng (RCV x 1.25)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hoặc bằng 50%, QCK/PSY tăng ATK lên 9 cấp. Khi HP nhỏ hơn 50%, QCK/PSY tăng RCV lên 9 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heal lv2 (in range) → Normal Atk → Heal lv2 (in small range)',
		'img' : {
			'src' : 'hancock_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_heal, hiddenskill_atk_up, hiddenskill_atk_up_color_qck, hiddenskill_atk_up_color_psy, hiddenskill_rcv_up, hiddenskill_rcv_up_color_qck, hiddenskill_rcv_up_color_psy, target_nearby, ability_prevent_silence'
	},

	'fujitora_v1' : {
		'title' : 'Fujitora V1',
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Cắt 59% HP toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN tăng HP lên 8 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP dưới 50%, hồi 200HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Full Power Atk',
		'img' : {
			'src' : 'fujitora_v1.png'
		},
		'tags': 'skill_cut_hp, hiddenskill_hp_up, hiddenskill_hp_up_class_driven, target_nearby, ability_heal'
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
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_str, hiddenskill_atk_up, hiddenskill_atk_up_color_str, hiddenskill_speed_up, hiddenskill_speed_up_color_str, target_nearby, ability_prevent_silence'
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
		'tags': 'skill_speed_down, skill_ct_down, skill_ct_down_class_fs, hiddenskill_speed_up, hiddenskill_speed_up_color_int, target_nearby, ability_prevent_para'
	},

	'blackbeard_v2' : {
		'title' : 'Blackbeard V2',
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 20 Giây',
			'des' : 'Gây (1.2 x ATK) sát thương một vùng lớn và tăng ATK bản thân lên 10 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP INT lên 1 cấp. Khi máu bằng hoặc nhỏ hơn 60%, Tăng tích nộ (CT charge) bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khí máu dưới 50%, hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'blackbeard_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_self, hiddenskill_hp_up, hiddenskill_hp_up_color_int, hiddenskill_ct_up, hiddenskill_ct_up_self, target_nearby, ability_heal'
	},

	'sabo_v4_str' : {
		'title' : 'Sabo V4',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'Legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp trong 25 giây, tăng SPEED FIGHTER lên 6 cấp trong 25 giây',
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
		'tags': 'skill_atk_up, skill_atk_up_class_fs, skill_speed_up, skill_speed_up_class_fighter, hiddenskill_atk_up, target_nearby, ability_prevent_silence'
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
			'des' : 'Tăng HP đồng đội lên 5 cấp, tăng CT đồng đội lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.1 Small Range Heal → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'nami_v2.png'
		},
		'tags': 'skill_def_down, skill_crit_up, skill_heal, hiddenskill_hp_up, hiddenskill_ct_up, target_nearby, ability_heal'
	},

	'Hody' : {
		'title' : 'Hody Jones, False Crusader Rampaging Recklessly',
		'color' : 'int',
		'class' : 'powerhouse, shooter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây 1700 sát thương chuẩn cho kẻ địch có DEF cao nhất. Tăng DEF lên 6 cấp cho POWERHOUSE.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP POWERHOUSE lên 6 cấp, tăng CT POWERHOUSE lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao nhất',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack',
		'img' : {
			'src' : 'hody.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_up, skill_def_up_class_ph, hiddenskill_hp_up, hiddenskill_hp_up_class_ph, hiddenskill_ct_up, hiddenskill_crit_up_class_ph, target_highest_speed, ability_prevent_silence'
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
		'tags': 'skill_heal, skill_blow_up, hiddenskill_rcv_up, hiddenskill_rcv_up_self, target_nearby, ability_prevent_silence'
	},

	'jack' : {
		'title' : 'Jack, Eleph-Eleph Fruit: Ancient Model User',
		'color' : 'str',
		'class' : 'striker, fighter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Tăng DEF đồng đội vùng lớn xung quanh lên 3 cấp (20 giây). Cắt 14% HP kẻ địch trong một vùng lớn, cắt 23% nếu trận đấu còn 70 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng đội lên 5 cấp. Tăng DEF đồng đội lên 1 cấp trong 30 giây đầu.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 100HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 self heal',
		'img' : {
			'src' : 'jack.png'
		},
		'tags': 'skill_def_up, skill_cut_hp, hiddenskill_hp_up, hiddenskill_def_up, target_nearby, ability_heal'
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
			'des' : 'Tăng ATK FIGHTER/CEREBRAL lên 5 cấp và DEF FIGHTER/CEREBRAL lên 1 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Lv.3 heal small Range → Lv.1 self heal → Lv.2 heal',
		'img' : {
			'src' : 'rayleigh_v3.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_atk_up, hiddenskill_atk_up, hiddenskill_atk_up_class_fighter, hiddenskill_atk_up_class_cerebral, hiddenskill_def_up, hiddenskill_def_up_class_fighter, hiddenskill_def_up_class_cerebral, target_highest_atk, ability_prevent_silence',
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

	'luffy_boa_kizuna' : {
		'title' : 'Luffy & Hancock, Joint Front for Training',
		'color' : 'psy, int',
		'class' : 'freespirit, fighter, shooter',
		'stars' : 'Kizuna',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (2 x ATK) sát thương cho 2 kẻ địch, tăng DEF đồng đội lên 4 cấp (25 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi còn ít hơn 4 đồng đội, tăng khiên (guard) đồng đội lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.1 heal allies in short range',
		'img' : {
			'src' : 'luffy_boa_kizuna.png'
		},
	},

	'smoker_qck_legend' : {
		'title' : 'White Chase Smoker, Marine Who Carries Out His Own Justice',
		'color' : 'qck',
		'class' : 'striker, driven',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 42 Giây',
			'des' : 'Gây (2.5 x ATK) sát thương một vùng lớn phía trước, 100% tê liệt 2 kẻ địch trong 10 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP QCK lên 5 cấp. Khi còn dưới 50% HP, giảm độ chính xác đòn đánh kẻ địch đi 6 cấp (missing).'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'smoker_qck_legend.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hiddenskill_hp_up_color_qck, hiddenskill_hp_up, hidden_skill_accuracy_enemy_down, target_highest_atk, ability_prevent_para'
	},

	'sugar_qck_legend' : {
		'title' : 'Sugar, Queen of the Toys',
		'color' : 'qck',
		'class' : 'cerebral, driven',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Giảm DEF toàn bộ kẻ địch đi 3 cấp trong 18 giây. Giảm ATK và SPEED 2 kẻ địch STR đi 9 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 20 giây đầu, tăng tốc độ tích nộ của QCK lên 5 cấp và giảm tốc độ tích nộ của 2 kẻ địch STR đi 8 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 250HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.1 Self Heal → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'sugar_qck_legend.png'
		},
		'tags': 'skill_def_down, skill_atk_down, skill_atk_down_color_str, skill_speed_down, skill_speed_down_color_str, hiddenskill_ct_up, hiddenskill_ct_up_color_qck, hiddenskill_ct_down, hiddenskill_ct_down_color_str, target_nearby, ability_heal'
	},

	'qck_caesar_rr' : {
		'title' : 'Master Caesar, Gas-Gas Fruit User',
		'color' : 'qck',
		'class' : 'cerebral, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Áp dụng tấn công liên hoàn lên 2 cấp cho STR và INT trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Nếu HP dưới 70%, tăng tốc tích nộ tất cả đồng mình lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Short Range Heal → Normal Attack',
		'img' : {
			'src' : 'qck_caesar_rr.png'
		},
		'tags': 'skill_continuous_dmg_up, skill_continuous_dmg_up_color_str, skill_continuous_dmg_up_color_int, hiddenskill_ct_up, target_nearby'
	},

	'qck_bonney_rr_ver_2' : {
		'title' : 'Big Eater Jewelry Bonney, Hidden Worst Generation',
		'color' : 'qck',
		'class' : 'freespirit, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Hồi (1.2 x RCV) cho đồng minh một vùng xung quanh và tăng ATK của FIGHTER/FREESPIRIT lên 3 cấp trong 20 giây, DEF của FIGHTER/FREESPIRIT lên 2 cấp trong 16 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP của FIGHTER/FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Lv.1 Short Range Heal',
		'img' : {
			'src' : 'qck_bonney_rr_ver_2.png'
		},
		'tags': 'skill_heal, skill_atk_up, skill_atk_up_class_fighter, skill_atk_up_class_fs, skill_def_up, skill_def_up_class_fighter, skill_def_up_class_fs, hiddenskill_hp_up, hiddenskill_hp_up_class_fighter, hiddenskill_hp_up_class_fs, target_nearby'
	},

	'qck_ivankov_rr_ver_2' : {
		'title' : 'Emporio Ivankov, Miracle Person Engineer',
		'color' : 'qck',
		'class' : 'freespirit, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (0.9 x ATK) sát thương một vùng rộng và tăng SPEED của FIGHTER/FREESPIRIT lên 5 cấp trong 16 giây.',
		},
		'hidden_skill' : {
			'des' : 'Nếu HP dưới 50%, tăng ATK bản thân lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_ivankov_rr_ver_2.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_up, skill_speed_up_class_fighter, skill_speed_up_class_fs, hiddenskill_atk_up, hiddenskill_atk_up_self, target_nearby'
	},

	'int_reiju_tm' : {
		'title' : 'Vinsmoke Reiju, True Force of the Science Military Force',
		'color' : 'int',
		'class' : 'powerhouse, fighter',
		'stars' : 'TM',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (1 x ATK) sát thương một vùng rộng, 100% làm tê liệt một kẻ địch trong 32 giây.',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, INT tăng SPEED lên 5 cấp và tăng ATK lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_reiju_tm.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hiddenskill_speed_up, hiddenskill_speed_up_color_int, hiddenskill_atk_up, hiddenskill_atk_up_color_int, target_nearby'
	},

	'qck_blackbeard_pf' : {
		'title' : "Blackbeard, Hell's Darkness",
		'color' : 'qck',
		'class' : 'powerhouse, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 2400 sát thương chuẩn cho kẻ địch có ATK, 60% cơ hội khóa chiêu trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK DRIVEN lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_blackbeard_pf.png'
		},
		'tags': 'skill_fixed_dmg, skill_silence_enemies, hiddenskill_atk_up, hiddenskill_atk_up_class_driven, target_highest_atk'
	},

	'qck_stussy_pf' : {
		'title' : "Stussy, Secret Justice from the Darkness",
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (3 x ATK) sát thương cho 1 kẻ địch ở trong tầm, tăng ATK của QCK lên 4 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 15 giây đầu, tăng SPEED QCK lên 5 cấp, DEF QCK lên 4 cấp, ATK QCK lên 4 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_stussy_pf.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_qck, hiddenskill_speed_up, hiddenskill_speed_up_color_qck, hiddenskill_def_up, hiddenskill_def_up_color_qck, hiddenskill_atk_up, hiddenskill_atk_up_color_qck, target_nearby'
	},

	'qck_nekomamushi_pf' : {
		'title' : "Nekomamushi, Misunderstanding King of Night",
		'color' : 'qck',
		'class' : 'striker, cerebral',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Cắt 15% HP một vùng rộng trước mặt, tăng DEF STRIKER/CEREBRAL lên 2 cấp trong 10 giây, tăng ATK STRIKER/CEREBRAL lên 4 cấp trong 49 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng DEF STRIKER/CEREBRAL lên 4 cấp. Khi còn 60 giây, tăng ATK STRIKER/CEREBRAL lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'qck_nekomamushi_pf.png'
		},
		'tags': 'skill_ct_up, skill_def_up, skill_def_up_class_striker, skill_def_up_class_cerebral, skill_atk_up, skill_atk_up_class_striker, skill_atk_up_class_cerebral, hiddenskill_def_up, hiddenskill_def_up_class_striker, hiddenskill_def_up_class_cerebral, hiddenskill_atk_up, hiddenskill_atk_up_class_striker, hiddenskill_atk_up_class_cerebral, target_nearby'
	},

	'qck_whitebread_pf' : {
		'title' : "Whitebeard, Unchallenged Pinnacle for the Throne",
		'color' : 'qck',
		'class' : 'striker, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Giảm DEF toàn bộ kẻ địch đi 5 cấp trong 15 giây và gây (2 x ATK) sát thương cho một vùng rộng. 80% cơ hội khóa chiêu 2 kẻ địch có class POWERHOUSE trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu, tăng HP QCK lên 5 cấp. Khi còn 50 giây, tăng ATK bản thân lên 5 cấp, tăng tốc tích nộ lên 5 cấp, tăng SPEED lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP thấp',
			'extra_ability' : '80% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_whitebread_pf.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, skill_silence_enemies, hiddenskill_hp_up, hiddenskill_hp_up_color_qck, hiddenskill_atk_up, hiddenskill_atk_up_self, hiddenskill_ct_up, hiddenskill_ct_up_self, hiddenskill_speed_up, hiddenskill_speed_up_self, target_low_hp, ability_prevent_silence'
	},

	'qck_kizuna_kaido' : {
		'title' : "Kaido, Animal Kingdom Pirates",
		'color' : 'qck',
		'class' : 'striker, driven',
		'stars' : 'Kizuna',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Gây (1.5 x ATK) sát thương một vùng lớn, giảm DEF kẻ địch có DEF cao nhất đi 6 cấp, giảm ATK kẻ địch có ATK cao nhất đi 6 cấp. Hồi phục (2 x RCV) HP cho bản thân và 100% tự khóa chiêu bản thân trong 50 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRIKER lên 6 cấp. Trong 30 giây đầu, Tăng ATK STRIKER lên 5 cấp. Khi còn 50 giây, tăng ATK và SPEED bản thân lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_kizuna_kaido.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_atk_down, skill_heal, skill_heal_self, skill_silence_self, hiddenskill_hp_up, hiddenskill_hp_up_class_striker, hiddenskill_atk_up, hiddenskill_atk_up_class_striker, hiddenskill_atk_up_self, hiddenskill_speed_up_self, hiddenskill_speed_up, target_nearby'
	},

	'psy_law_v3_legend' : {
		'title' : "Trafalgar Law, Alliance to Liberate the Land of Wano",
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây 2200 sát thương chuẩn một vùng lớn, giảm khóa chiêu, trói và tê liệt đi 22 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc tích nộ đồng minh PSY lên 6 cấp. Trong 40 giây đầu, giảm tích nộ, tỉ lệ bật khiên và SPEED của kẻ địch có class DRIVEN/POWERHOUSE đi 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 250HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_law_v3_legend.png'
		},
		'tags': 'skill_fixed_dmg, skill_silence_down, skill_para_down, skill_bind_down, hiddenskill_ct_up, hiddenskill_ct_up_color_psy, hiddenskill_ct_down, hiddenskill_ct_down_class_driven, hiddenskill_ct_down_class_ph, hiddenskill_guard_down, hiddenskill_guard_down_class_driven, hiddenskill_guard_down_class_ph, hiddenskill_speed_down, hiddenskill_speed_down_class_driven, hidden_skill_speed_down_class_ph, target_nearby, ability_heal'
	},

	'psy_enel_pf' : {
		'title' : "Kami Enel, The God Seeking his Dream World",
		'color' : 'psy',
		'class' : 'shooter, driven',
		'stars' : 'Pirate Festival Character',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1400 sát thương chuẩn cho toàn bộ địch, 30% làm tê liệt trong 20 giây, tăng ATK PSY lên 4 cấp trong 19 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, tăng ATK PSY lên 5 cấp, SPEED PSY lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : 'Miễn nhiễm tê liệt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_enel_pf.png'
		},
		'tags': 'skill_fixed_dmg, skill_para_enemies, skill_atk_up, skill_atk_up_color_psy, hiddenskill_atk_up, hiddenskill_atk_up_psy, hiddenskill_speed_up, hiddenskill_speed_up_color_qsy, target_highest_speed, ability_prevent_para'
	},

	'psy_boa_legend_v3_summer' : {
		'title' : "Boa Hancock, Vacation on the Evening Beach",
		'color' : 'psy',
		'class' : 'shooter, freespirit',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây 4000 sát thương chuẩn cho kẻ địch có HP thấp, giảm ATK một vùng lớn đi 11 cấp trong 15 giây và tăng ATK PSY lên 6 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK PSY lên 5 cấp. Nếu HP dưới 50%, tăng DEF PSY lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Strong Attack → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'psy_boa_legend_v3_summer.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_down, skill_atk_up, skill_atk_up_color_psy, hiddenskill_atk_up, hiddenskill_atk_up_color_psy, hiddenskill_def_up, hiddenskill_def_up__color_psy, target_nearby, ability_prevent_silence'
	},

	'psy_nico_robin_summer_rr_2020' : {
		'title' : "Nico Robin, Vacation on the Moonlit Beach",
		'color' : 'psy',
		'class' : 'fighter, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Giảm DEF một vùng lớn đi 3 cấp trong 20 giây và giảm ATK DRIVEN đi 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED PSY lên 5 cấp, tăng tốc độ tích nộ PSY lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.1 Self Heal → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'psy_nico_robin_summer_rr.png'
		},
		'tags': 'skill_def_down, skill_atk_down, skill_atk_down_class_driven, hiddenskill_speed_up, hiddenskill_speed_up_color_qsy, hiddenskill_ct_up, hiddenskill_ct_up_color_psy, target_nearby'
	},

	'rebecca_psy_rr_summer_2020' : {
		'title' : "Rebecca, Royal Family Vacation",
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Tăng CRIT tất cả đồng minh lên 4 cấp trong 25 giây và tăng ATK FREESPIRIT lên 4 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK PSY lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.1 Small Range Heal → Strong Attack',
		'img' : {
			'src' : 'rebecca_psy_rr_summer_2020.png'
		},
		'tags': 'skill_crit_up, skill_atk_up, skill_atk_up_class_fs, hiddenskill_atk_up, hiddenskill_atk_up_color_psy, target_nearby'
	},

	'violet_psy_rr_summer_2020' : {
		'title' : "Violet, Royal Family Vacation",
		'color' : 'psy',
		'class' : 'freespirit, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Hồi HP bằng với (2.5 x RCV) một vùng lớn và giảm tê liệt cho đồng minh FREESPIRIT đi 6 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP PSY lên 5 cấp, DEF PSY lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Normal Attack → Lv.2 Short Range Heal',
		'img' : {
			'src' : 'violet_psy_rr_summer_2020.png'
		},
		'tags': 'skill_heal, skill_para_down, hiddenskill_hp_up, hiddenskill_hp_up_color_psy, hiddenskill_def_up, hiddenskill_def_up__color_psy, target_nearby'
	},
}