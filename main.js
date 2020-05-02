
window.character = {

	'luffy_ace' : {
		'title' : 'Luffy/Ace',
		'color' : 'str, qck',
		'class' : 'freespirit, fighter',
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
			'des' : 'Tăng ATK của FREE SPIRIT lên 3 cấp (20 giây), tăng DEF lên 3 cấp (20 giây), tấn công trong một phạm vi lớn, gây một lượng sát thương bằng với (ATK x 0.65).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của lên 5 cấp, tăng tỉ lệ crit lên 2 cấp cho FREE SPIRIT.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Có 50% cơ hội tránh hiệu ứng bất lợi (Chắc thế)'
		},
		'pattern': '',
		'img' : {
			'src' : 'luffy_ace.png'
		},
	},

	'barto_caven' : {
		'title' : 'Bartolomeo/Cavendish',
		'color' : 'dex, qck',
		'class' : 'driven, striker, slasher',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 28 CT',
			'des' : 'Sát thương địch ở tầm trung theo hàng ngang với lượng sát thương bằng (ATK x 0.8). Tăng tỉ lệ xuất hiện (guard – khiên chắn) của các đồng đội DRIVEN lên 7 cấp (21 giây). Tăng ATK của DRIVEN lên 7 cấp (21 giây).',
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
	},

	'sanji_judge' : {
		'title' : 'Sanji/Judge',
		'color' : 'psy',
		'class' : 'powerhouse, fighter',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
			'des' : 'Gây 1250 sát thương cho kẻ địch ở tầm trung theo hàng ngang. Tăng ATK của POWERHOUSE lên 6 cấp (20 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hơn hoặc bằng 50%, tăng HP của POWERHOUSE lên 5 cấp và tăng ATK bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Tấn công địch có ATK cao nhất',
			'extra_ability' : 'Có 50% cơ hội tránh bị one hit (Chắc thế)',
		},
		'pattern': '',
		'img' : {
			'src' : 'sanji_judge.png'
		},
	},

	'luffy_law' : {
		'title' : 'Luffy/Law',
		'color' : 'dex, qck',
		'class' : 'fighter, freespirit, slasher',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 45 CT',
			'des' : 'Gây 1700 sát thương chuẩn cho tất cả kẻ địch. Gây thêm sát thương băng với (ATK x 1.45) cho một kẻ địch ngẫu nhiên. Tăng ATK của đồng mình lên 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'ATK đồng đội tăng lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'luffy_law.png'
		},
	},

	'sabo_koala' : {
		'title' : 'Sabo/Koala',
		'color' : 'str, int',
		'class' : 'freespirit, cerebral',
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 29 CT',
			'des' : 'Tấn công kẻ địch đứng giữa hàng trước với sát thường bằng (ATK x 0.65), giảm DEF 3 cấp (25 giây). Tấn công kẻ địch ở khu vực phía trước với sát thương bằng (ATK x 1.15).',
		},
		'hidden_skill' : {
			'des' : 'Tăng crit CEREBRAL và bản thân lên 5 cấp. Tăng SPEED của CEREBRAL và bản thân lên 2 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '50% cơ hộ tránh CRIT',
		},
		'pattern': '',
		'img' : {
			'src' : 'sabo_koala.png'
		},
	},

	'whitebeard_v1' : {
		'title' : 'Whitebeard V1',
		'color' : 'str',
		'class' : 'striker, powerhouse',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 23 CT',
			'des' : 'Giảm 48% máu toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 30%, toàn bộ đồng đội tăng ATK lên 8 cấp, tăng DEF bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh sát thương liên hoàn (Ví dụ như doffy v2 có thể gây sát thương 4 lần liên tiếp, whitebread có thể block)',
		},
		'pattern': '',
		'img' : {
			'src' : 'whitebeard_v1.png'
		},
	},

	'Lucci_v1' : {
		'title' : 'Lucci V1',
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 23 CT',
			'des' : 'Giảm 48% máu toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 30%, toàn bộ đồng đội tăng ATK lên 8 cấp, tăng DEF bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh sát thương liên hoàn (Ví dụ như doffy v2 có thể gây sát thương 4 lần liên tiếp, whitebread có thể block)',
		},
		'pattern': '',
		'img' : {
			'src' : 'lucci_v1.png'
		},
	},

	'crocodile_v1' : {
		'title' : 'Crocodile V1',
		'color' : 'str',
		'class' : 'cerebral, driven',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 19 CT',
			'des' : 'Giảm ATK của kẻ địch đi 24% và tăng CRIT của đồng đội lên 4 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 cấp. Khi HP nhỏ hơn hoặc bằng 60%, tăng ATK bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP sau mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'crocodile_v1.png'
		},
	},

	'akai_v1' : {
		'title' : 'Akainu V1',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
			'des' : 'Gây 1150 sát thương chuẩn cho toàn bộ kẻ địch, gây 1900 sát thương chuẩn nếu trận chiến còn 50 giây hoặc nhỏ hơn, gây 3150 sát thương chuẩn nếu còn 30 giây hoặc nhỏ hơn',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR lên 6 cấp. Tăng thêm 2 cấp nếu còn 30 giây hoặc ít hơn'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng nếu HP nhỏ hơn hoặc bằng 50%',
		},
		'pattern': '',
		'img' : {
			'src' : 'akainu_v1.png'
		},
	},

	'inuarashi' : {
		'title' : 'Inuarashi',
		'color' : 'str',
		'class' : 'cerebral, slasher',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 CT',
			'des' : 'Giảm ATK bản thân đi 20%, tấn công kẻ địch ở tầm ngang với sát thương bằng với (ATK x 1.95)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của CEREBRAL lên 6 cấp, tăng ATK của bản thân lên 9 cấp nếu HP dưới 60%.'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội ngăn trói',
		},
		'pattern': '',
		'img' : {
			'src' : 'inuarashi.png'
		},
	},

	'bigmom_v1' : {
		'title' : 'Bigmom V1',
		'color' : 'str',
		'class' : 'powerhouse, driven',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 51 CT',
			'des' : 'Tấn công kẻ địch ở hàng ngang phía trước với sát thương bằng (ATK x 0.95), tấn công kẻ địch ở hàng giữa theo chiều dọc với sát thương bằng (ATK x 1.2), tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 0.9). Tăng ATK bản thân lên 16 cấp trong 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP của STR, QCK, DEX lên 3 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội chặn các hiệu ứng khóa (para, bind) (Chắc thế)',
		},
		'pattern': '',
		'img' : {
			'src' : 'bigmom_v1.png'
		},
	},

	'bullet' : {
		'title' : 'Bullet',
		'color' : 'str',
		'class' : 'fighter, driven',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 20 CT',
			'des' : 'Tăng ATK bản thân lên 11 cấp (15 giây), tăng DEF bản thân lên 8 leves (15 giây), bật trạng thái khiêu khích (sẽ bị kẻ địch nhắm vào). Giảm 20% máu của kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'STR, QCK, INT tăng ATK lên 6 cấp. Các đồng đội khác tăng ATK lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '50% cơ hội tránh hiệu ứng bất lợi',
		},
		'pattern': '',
		'img' : {
			'src' : 'bullet.png'
		},
	},

	'log_luffy' : {
		'title' : 'Log Luffy',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 CT',
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
	},

	'zoro_v1' : {
		'title' : 'Zoro V1',
		'color' : 'dex',
		'class' : 'slasher, driven',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
			'des' : 'Tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 1.35) và giảm DEF kẻ địch đi 3 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT của SLASHER lên 6 cấp, ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có ATK cao nhất',
			'extra_ability' : '70% cơ hội tránh leanness',
		},
		'pattern': '',
		'img' : {
			'src' : 'zoro_v1.png'
		},
	},

	'nami_v1' : {
		'title' : 'Nami V1',
		'color' : 'dex',
		'class' : 'cerebral, striker',
		'cấp' : 'legend',
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
		'pattern': '',
		'img' : {
			'src' : 'nami_v1.png'
		},
	},

	'usopp' : {
		'title' : 'Usopp',
		'color' : 'dex',
		'class' : 'shooter',
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 CT',
			'des' : 'Giảm HP của kẻ địch hàng trước đi 37%, có 75% cơ hội one hit (9 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của SHOOTER lên 6 cấp, ATK bản thân lên 6 cấp khi HP nhỏ hơn hoặc bằng 50%. ATK bản thân lên 7 cấp khi HP dưới 30%.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có SPEED cao nhất',
			'extra_ability' : '70% cơ hội tránh khóa chiêu',
		},
		'pattern': '',
		'img' : {
			'src' : 'usopp.png'
		},
	},

	'ace_v1' : {
		'title' : 'Ace V1',
		'color' : 'dex',
		'class' : 'shooter, freespirit',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 CT',
			'des' : 'Giảm 70% ATK bản thân, gây (ATK x 1.9) sát thương cho kẻ địch ở tầm trung và tăng ATK của SHOOTER lên 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng SPEED của SHOOTER lên 6 cấp, tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có ATK cao nhất',
			'extra_ability' : '70% tránh được leanness',
		},
		'pattern': '',
		'img' : {
			'src' : 'ace_v1.png'
		},
	},

	'corazon' : {
		'title' : 'Corazon',
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'cấp' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 32 CT',
			'des' : 'Hồi 2.75x HP của đồng đội xung quanh và tăng DEF lên 7 cấp (10 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 70%, ATK của đồng đội tăng 10 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Khi HP bản thân nhỏ hơn hoặc bằng 50%, Hồi 200 HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'corazon.png'
		},
	},

	'magellan' : {
		'title' : 'Magellan',
		'color' : 'dex',
		'class' : 'striker, shooter',
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 31 CT',
			'des' : 'ATK giảm 3 cấp đối với kẻ địch ở tầm xa (47 giây). Giảm tốc độ tăng CT của kẻ địch 4 cấp (34 giây).',
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
	},

	'rayleigh_v2' : {
		'title' : 'Rayleigh V2',
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 37 CT',
			'des' : 'Gây 600 sát thương chuẩn cho toàn bộ kẻ địch, tăng ATK của đồng đội lên 3 cấp (24 giây), tăng DEF lên 2 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng mình lên 5 cấp, khi còn dưới 20% HP, tăng HP đồng minh lên 2 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh ngăn chặn',
		},
		'pattern': '',
		'img' : {
			'src' : 'rayleigh_v2.png'
		},
	},

	'jinbe_v2' : {
		'title' : 'Jinbe V2',
		'color' : 'dex',
		'class' : 'powerhouse, fighter',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 CT',
			'des' : 'Giảm 12% ATK kẻ địch trong phạm vi trung bình. Tăng ATK của FIGHTER, SLASHER và SHOOTER lên 4 cấp trong 19 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STR, DEX, PSY lên 5 cấp, tăng DEF lên 1 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'jinbe_v2.png'
		},
	},

	'dof_v2' : {
		'title' : 'Doflamingo V2',
		'color' : 'dex',
		'class' : 'driven, cerebral',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 CT',
			'des' : 'Gây (ATK x 1.45) sát thương cho kẻ địch ở tầm trung. Tiếp tục gây thêm (ATK x 0.35) sát thương nếu còn 60 giây. Tiếp tục gây thêm (ATK x 04) sát thương nếu còn 45 giây. Tiếp tục gây thêm (ATK x 0.45) sát thương nếu còn 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': '',
		'img' : {
			'src' : 'dof_v2.png'
		},
	},

	'brook' : {
		'title' : 'Brook',
		'color' : 'dex',
		'class' : 'slasher, freespirit',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 45 CT',
			'des' : 'Hồi 2450 HP cho đồng mình ở hàng trung tâm và tăng DEF lên 3 cấp (30 Giây).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 5 cấp. Khi HP nhỏ hơn hoặc bằng 50%, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh ngăn chặn',
		},
		'pattern': '',
		'img' : {
			'src' : 'brook.png'
		},
	},

	'blackbeard' : {
		'title' : 'Blackbeard',
		'color' : 'dex',
		'class' : 'driven, powerhouse',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 42 CT',
			'des' : 'Giảm HP địch đi 25%, gây 1750 sát thương chuẩn cho kẻ địch STR và giảm DEF đi 4 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 5 cấp, ATK bản thân 3 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ít máu nhất',
			'extra_ability' : '50% cơ hội tránh CRIT',
		},
		'pattern': '',
		'img' : {
			'src' : 'blackbeard.png'
		},
	},

	'kaido' : {
		'title' : 'Kaido',
		'color' : 'dex',
		'class' : 'striker, powerhouse',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 55 CT',
			'des' : 'Giảm HP kẻ địch ở hàng trước đi 25%, và gây (ATK x 2.1) sát thương',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của POWERHOUSE/STRIKER lên 6 cấp, ATK bản thân lên 7 cấp. Tăng tốc độ CT lên 6 cấp'
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 CT',
			'des' : 'Gây (ATK x 1.4) sát thương cho một vùng lớn và có 70% cơ hội khóa CT của kẻ địch trong 6 giây',
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
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 CT',
			'des' : 'Giảm ATK của địch đi 5 cấp và DEF đi 3 cấp trong 25 giây, giảm HP địch đi 25%',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng đội lên 5 cấp, HP lên 1 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'mihawk_perona.png'
		},
	},

	'marco' : {
		'title' : 'Marco',
		'color' : 'qck',
		'class' : 'fighter, powerhouse',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 23 CT',
			'des' : 'Tấn công kẻ địch tầm trung bình với lượng sát thường (ATK x 0.75), giảm ATK 6 cấp trong 15 giây, hồi phục HP một đồng đội bằng 2.7x HP',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 24 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 CT',
			'des' : 'Giảm CT của INT đi 15%, tăng ATK INT lên 3 cấp (20 giây), tăng ATK của đồng đội INT có ATK cao nhất (20 giây) lên 8 cấp',
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
		'title' : 'Name & Robin',
		'color' : 'int, dex',
		'class' : 'cerebral, striker, freespirit',
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 28 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 26 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 CT',
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

	'sanji_v3' : {
		'title' : 'O-Soba Mask',
		'color' : 'qck',
		'class' : 'powerhouse, freespirit',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 CT',
			'des' : 'Gây (ATK x 1.35) sát thương cho kẻ địch tầm trung tâm và tăng tỉ lệ đánh trượt lên 4 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK cả team lên 5 cấp, ATK bản thân lên 4 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sanji_v3.png'
		},
	},

	'luffy_zoro' : {
		'title' : 'Luffy & Zoro',
		'color' : 'str, dex',
		'class' : 'slasher, freespirit',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 CT',
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
		'cấp' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 38 CT',
			'des' : 'Hồi 0.6 x HP cho đồng đội trung tâm, giảm 7 giây trói, giảm 7 giây tê liệt, giảm 7 giây hiệu ứng bất lợi',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 CT',
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
		'cấp' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 30 CT',
			'des' : 'Hồi 1.45 x HP cho một vùng lớn. Khi máu lớn hơn hoặc bằng 50% tăng CRIT của QCK và INT lên 2 cấp (15 giây). ATK tăng thêm 4 cấp (15 giây) khi HP trên 80%',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 CT',
			'des' : 'Gây (ATK x 0.7) sát thương lên một vùng rộng, tăng ATK FIGHTER/SHOOTER lên 4 cấp (20 giây) và rút ngắn thời gian trạng thái khóa (block) đi 11 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER/SHOOTER lên 5 cấp, tăng tốc độ CT FIGHTER/SHOOTER lên 2 cấp khi còn 70s'
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
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 29 CT',
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
		'color' : 'int',
		'class' : 'striker, powerhouse',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 CT',
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
		'cấp' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 40 CT',
			'des' : 'Hồi 2.5 x HP cho đồng đội, rút ngắn thời gian tê liệt 6 giây, rút ngắn thời gian trói 6 giây',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 24 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 CT',
			'des' : 'Tấn công một vùng nhỏ phía trước, gây (ATK x 0.85) sát thương. CEREBRAL/STRIKER ATK tăng 6 cấp (25 giây), hồi HP toàn bộ đồng đội bằng 0.45 x HP',
		},
		'hidden_skill' : {
			'des' : 'Trong 45 giây đầu, CEREBRAL/STRIKER tăng SPEED lên 5 cấp, tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'inu_neko.png'
		},
	},

	'zeus_prometheus_bm' : {
		'title' : 'Zeus & Prometheus & Bigmom',
		'color' : 'int',
		'class' : 'powerhouse, striker, slasher',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 CT',
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
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 15 CT',
			'des' : 'Khi còn trên 70 giây, cắt 15% HP một vùng lớn kẻ địch. Khi nhở hoặc bằng 70 giây, cắt 30% HP một vùng lớn kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'SLASHER tăng SPEED 5 cấp, ATK bản thân tăng 8 cấp trong 30 giây'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'mihawk_v2.png'
		},
	},

	'cracker' : {
		'title' : 'Cracker',
		'color' : 'qck',
		'class' : 'powerhouse, slasher',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 CT',
			'des' : 'Gây (ATK x 1.3) sát thương lên kẻ địch ở vùng trung tâm, tăng CRIT SLASHER/POWERHOUSE lên 5 cấp (15 giây). Khi HP nhỏ hoặc bằng 50%, giảm thời gian CT đi 25%.',
		},
		'hidden_skill' : {
			'des' : 'SLASHER/POWERHOUSE tăng tốc CT lên 6 cấp'
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - ? CT',
			'des' : 'Gây (ATK x 2.7) sát thương cho hàng ngang vùng trung tâm',
		},
		'hidden_skill' : {
			'des' : '60 giây đầu tăng ATK đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'snakeman.png'
		},
	},

	'cavendish' : {
		'title' : 'Cavendish',
		'color' : 'qck',
		'class' : 'slasher, driven',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 39 CT',
			'des' : 'Gây 2450 sát thương chuẩn cho vùng lớn kẻ địch phía trước, rút ngắn thời gian CT của FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL 20%',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 32 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 25 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 55 CT',
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
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
			'des' : 'Cắt 32% HP toàn bộ địch. Hồi HP bản thân bằng (HP x 2.15)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên (GUARD) của đồng đội lên 5 cấp. Khi HP đồng đội nhỏ hoặc bằng 50%, tăng DEF đồng đội đó lên 3 cấp.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'whitebeard_marco.png'
		},
	},

	'sanji_v2' : {
		'title' : 'Sanji V2',
		'color' : 'psy',
		'class' : 'powerhouse, fighter',
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 34 CT',
			'des' : 'Gây 1200 sát thương chuẩn kẻ địch vùng trung tâm, đồng đội vùng trung tâm tăng DEF lên 7 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc độ CT của đồng đội lên 5 cấp. Khi HP nhỏ hoặc bằng 60%, DEF đồng đội tăng 1 cấp'
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 CT',
			'des' : 'Gây (ATK x 1.3) sát thương cho kẻ địch hàng ngang vùng trung tâm, giảm ATK đi 15 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER tăng HP lên 6 cấp, DEF lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'jinbe_v1.png'
		},
	},

	'buggy' : {
		'title' : 'Buggy',
		'color' : 'int',
		'class' : 'driven, shooter',
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 17 CT',
			'des' : 'Tấn công 4 kẻ địch với sát thương (ATK x 0.6). SLASHER/SHOOTER tăng ATK lên 7 cấp',
		},
		'hidden_skill' : {
			'des' : '30 giây đầu tăng SPEED của SLASHER/SHOOTER lên 6 cấp. Tăng tốc độ CT SLASHER/SHOOTER lên 2 cấp'
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 CT',
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
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 15 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 CT',
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

	'hordy' : {
		'title' : 'Hordy',
		'color' : 'int',
		'class' : 'slasher',
		'cấp' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 CT',
			'des' : 'Gây 1700 sát thương chuẩn lên kẻ địch có DEF cao nhất, tăng DEF POWERHOUSE lên 6 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP POWERHOUSE lên 6 cấp, tăng tốc độ CT lên 2 cấp cho POWERHOUSE'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'hordy.png'
		},
	},

	'sengoku' : {
		'title' : 'Sengoku',
		'color' : 'int',
		'class' : 'slasher',
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 41 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 CT',
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
		'cấp' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 45 CT',
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
		'cấp' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 29 CT',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 29 CT',
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
		'cấp' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 CT',
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
		'cấp' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 34 CT',
			'des' : 'Gây 1000 sát thương chuẩn lên 1 kẻ địch, giảm DEF đi 4 cấp trong 20 giây một vùng lớn. Hồi HP đồng đội bằng (HP x 1.25)',
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
		'cấp' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 CT',
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

	$('.pirate_festival_page span.filter').click(function(event) {
		$('.pirate_festival_page .filter_block').fadeToggle(300);
	});

	function haitran_create_filter () {
		let key_val = $('input[name="char_name"]').val();
		let color_val = $('select[name="color"]').val();
		let class_val = $('select[name="class"]').val();
		let type_val = $('select[name="type"]').val();
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

		if ($.isEmptyObject(filter)) {
			filter = '';
		}

		return filter;
	}

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

		return check;
	}

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
				modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng bị động:</b> </span>';
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
				if (haitran_filter(char[i], filter)) {
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
					modal_html    +=             '<span class="hidden_skill_title"><b>Kỹ năng bị động:</b> </span>';
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
	});
});