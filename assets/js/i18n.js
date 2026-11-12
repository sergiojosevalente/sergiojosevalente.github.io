// Page translations. English is the text in index.html; this file swaps visible text
// and labels for Bahasa Indonesia, Tetun and Simplified Chinese. No build step.
// Each entry: "English source": [Indonesian, Tetun, Chinese]. Strings not listed
// (product names, tech tags) stay as they are.
(function () {
  var LANGS = ['en', 'id', 'tet', 'zh'];
  var COL = { id: 0, tet: 1, zh: 2 };
  var HTML_LANG = { en: 'en', id: 'id', tet: 'tet', zh: 'zh-Hans' };

  var T = {
    // ----- head, navigation, labels -----
    'Sergio Jose Valente Da Cruz — Full-Stack Developer': ['Sergio Jose Valente Da Cruz — Full-Stack Developer', 'Sergio Jose Valente Da Cruz — Full-Stack Developer', 'Sergio Jose Valente Da Cruz — 全栈开发者'],
    'Sergio Jose Valente Da Cruz — IT & Application Officer at Telkomcel and Full-Stack Developer in Dili, Timor-Leste. Go, PHP (CodeIgniter 4, Laravel), MySQL, PostgreSQL. Creator of Moxtel.': [
      'Sergio Jose Valente Da Cruz — IT & Application Officer di Telkomcel dan Full-Stack Developer di Dili, Timor-Leste. Go, PHP (CodeIgniter 4, Laravel), MySQL, PostgreSQL. Pembuat Moxtel.',
      'Sergio Jose Valente Da Cruz — IT & Application Officer iha Telkomcel no Full-Stack Developer iha Dili, Timor-Leste. Go, PHP (CodeIgniter 4, Laravel), MySQL, PostgreSQL. Kriadór Moxtel nian.',
      'Sergio Jose Valente Da Cruz — Telkomcel IT 与应用专员，东帝汶帝力的全栈开发者。Go、PHP（CodeIgniter 4、Laravel）、MySQL、PostgreSQL。Moxtel 的作者。'],
    'Building secure, scalable systems for Timor-Leste. Go · PHP · MySQL · PostgreSQL · Docker.': [
      'Membangun sistem yang aman dan skalabel untuk Timor-Leste. Go · PHP · MySQL · PostgreSQL · Docker.',
      'Harii sistema seguru no eskalável ba Timor-Leste. Go · PHP · MySQL · PostgreSQL · Docker.',
      '为东帝汶构建安全、可扩展的系统。Go · PHP · MySQL · PostgreSQL · Docker。'],
    'Skip to content': ['Langsung ke konten', 'Ba kontéudu', '跳到正文'],
    'Sergio Jose Valente, home': ['Sergio Jose Valente, beranda', 'Sergio Jose Valente, pájina prinsipál', 'Sergio Jose Valente，首页'],
    'Main': ['Utama', 'Prinsipál', '主导航'],
    'About': ['Tentang', 'Kona-ba', '关于'],
    'Experience': ['Pengalaman', 'Esperiénsia', '经历'],
    'Projects': ['Proyek', 'Projetu', '项目'],
    'Skills': ['Keahlian', 'Abilidade', '技能'],
    'Contact': ['Kontak', 'Kontaktu', '联系'],
    'Language': ['Bahasa', 'Lian', '语言'],
    'Switch light or dark theme': ['Ganti tema terang atau gelap', 'Troka tema naroman ka nakukun', '切换浅色或深色主题'],
    'Light / dark': ['Terang / gelap', 'Naroman / nakukun', '浅色 / 深色'],
    'Open menu': ['Buka menu', 'Loke menu', '打开菜单'],
    'Download CV': ['Unduh CV', 'Download CV', '下载简历'],
    'Social profiles': ['Profil media sosial', 'Perfíl média sosiál', '社交账号'],
    'Footer': ['Footer', 'Rodapé', '页脚'],
    'Back to top': ['Kembali ke atas', 'Fila ba leten', '返回顶部'],

    // ----- hero -----
    'Open to collaboration · Dili, Timor-Leste': ['Terbuka untuk kolaborasi · Dili, Timor-Leste', 'Loke ba kolaborasaun · Dili, Timor-Leste', '欢迎合作 · 东帝汶帝力'],
    "Hi, I'm": ['Halo, saya', "Olá, ha'u", '你好，我是'],
    'IT & Application Officer at': ['IT & Application Officer di', 'IT & Application Officer iha', 'IT 与应用专员 ·'],
    '· Full-Stack Developer': ['· Full-Stack Developer', '· Full-Stack Developer', '· 全栈开发者'],
    'I design and build secure, scalable systems — registration portals, messaging platforms, monitoring and automation — for corporate and government institutions in Timor-Leste, using Go, PHP and modern web technology.': [
      'Saya merancang dan membangun sistem yang aman dan skalabel — portal registrasi, platform pesan, monitoring dan otomasi — untuk institusi korporat dan pemerintah di Timor-Leste, dengan Go, PHP dan teknologi web modern.',
      "Ha'u dezeña no harii sistema seguru no eskalável — portál rejistu, plataforma mensajen, monitorizasaun no automasaun — ba instituisaun kompañia no governu iha Timor-Leste, uza Go, PHP no teknolojia web modernu.",
      '我为东帝汶的企业和政府机构设计并构建安全、可扩展的系统——注册门户、消息平台、监控与自动化——使用 Go、PHP 和现代 Web 技术。'],
    'View projects': ['Lihat proyek', 'Haree projetu', '查看项目'],
    'Contact me': ['Hubungi saya', "Kontaktu ha'u", '联系我'],
    'backend & services': ['backend & layanan', 'backend & servisu', '后端与服务'],
    'Portrait of Sergio Jose Valente': ['Foto Sergio Jose Valente', 'Retratu Sergio Jose Valente', 'Sergio Jose Valente 的照片'],
    'years in IT operations & development': ['tahun di operasional & pengembangan TI', 'tinan iha operasaun & dezenvolvimentu IT', '年 IT 运维与开发经验'],
    'systems delivered for business & government': ['sistem untuk bisnis & pemerintah', 'sistema entrega ba negósiu & governu', '个为企业和政府交付的系统'],
    'awards & recognitions': ['penghargaan & apresiasi', 'prémiu & rekoñesimentu', '项奖项与认可'],
    'certifications': ['sertifikasi', 'sertifikasaun', '项认证'],

    // ----- about -----
    'About me': ['Tentang saya', "Kona-ba ha'u", '关于我'],
    'Technology that uplifts local systems': ['Teknologi yang memajukan sistem lokal', 'Teknolojia ne’ebé hasa’e sistema lokál', '用技术提升本地系统'],
    "I'm a Full-Stack Developer and IT professional with over three years of hands-on experience in database support, system integration and IT operations. At Telkomcel I work as an IT & Application Officer, and I have designed and delivered web platforms and tools for corporate and government institutions.": [
      'Saya Full-Stack Developer dan profesional TI dengan lebih dari tiga tahun pengalaman langsung di dukungan database, integrasi sistem dan operasional TI. Di Telkomcel saya bekerja sebagai IT & Application Officer, dan saya telah merancang serta menghadirkan platform web dan tools untuk institusi korporat dan pemerintah.',
      "Ha'u Full-Stack Developer no profisionál IT ho esperiénsia liu tinan tolu iha suporta database, integrasaun sistema no operasaun IT. Iha Telkomcel ha'u servisu nu’udar IT & Application Officer, no ha'u dezeña no entrega ona plataforma web no ferramenta sira ba instituisaun kompañia no governu.",
      '我是一名全栈开发者和 IT 专业人士，在数据库支持、系统集成和 IT 运维方面拥有三年以上的实践经验。我在 Telkomcel 担任 IT 与应用专员，并为企业和政府机构设计、交付了多个 Web 平台和工具。'],
    'Originally from Bauro Village, Iralafai, Lospalos — Lautem Municipality, I carry a deep sense of purpose in using technology to strengthen local systems and drive sustainable progress in Timor-Leste. I value teamwork, integrity and accountability, and I like to approach every responsibility with a proactive, solution-oriented mindset.': [
      'Berasal dari Desa Bauro, Iralafai, Lospalos — Munisipiu Lautem, saya punya tujuan kuat untuk memakai teknologi demi memperkuat sistem lokal dan mendorong kemajuan berkelanjutan di Timor-Leste. Saya menghargai kerja tim, integritas dan akuntabilitas, dan saya suka menjalankan setiap tanggung jawab dengan sikap proaktif dan berorientasi solusi.',
      "Ha'u mai husi Suku Bauro, Iralafai, Lospalos — Munisípiu Lautém, no ha'u iha objetivu metin atu uza teknolojia hodi hametin sistema lokál no lori progresu sustentável ba Timor-Leste. Ha'u fó valór ba servisu hamutuk, integridade no responsabilidade, no ha'u gosta hala’o kada responsabilidade ho hanoin proativu no buka solusaun.",
      '我来自东帝汶劳滕市洛斯帕洛斯伊拉拉法伊的包罗村，致力于用技术加强本地系统、推动东帝汶的可持续发展。我重视团队合作、诚信与责任，乐于以积极主动、以解决问题为导向的态度对待每一项工作。'],
    'Based in': ['Domisili', 'Hela iha', '所在地'],
    'Dili, Timor-Leste': ['Dili, Timor-Leste', 'Dili, Timor-Leste', '东帝汶帝力'],
    'Current role': ['Posisi saat ini', 'Knaar agora', '当前职位'],
    'Education': ['Pendidikan', 'Edukasaun', '教育背景'],
    'B.Eng. Telecommunications Engineering, Telkom University (GPA 3.36)': ['S.T. Teknik Telekomunikasi, Telkom University (IPK 3,36)', 'Lisensiatura Enjeñaria Telekomunikasaun, Telkom University (GPA 3.36)', '电信工程学士，Telkom University（GPA 3.36）'],
    'Languages': ['Bahasa', 'Lian', '语言'],
    'Tetum (native) · English (professional) · Bahasa Indonesia · Portuguese (basic)': ['Tetun (bahasa ibu) · Inggris (profesional) · Bahasa Indonesia · Portugis (dasar)', 'Tetun (lian inan) · Inglés (profisionál) · Indonéziu · Portugés (báziku)', '德顿语（母语）· 英语（专业水平）· 印尼语 · 葡萄牙语（基础）'],
    'Also': ['Lainnya', 'Mós', '其他'],
    'Co-founder of Multi Science Academy · Database training instructor': ['Co-founder Multi Science Academy · Instruktur pelatihan database', 'Ko-fundadór Multi Science Academy · Formadór database', 'Multi Science Academy 联合创始人 · 数据库培训讲师'],

    // ----- experience -----
    "Where I've worked": ['Tempat saya bekerja', "Fatin ne’ebé ha'u servisu ona", '工作经历'],
    'O&M VAS/IN Support Officer': ['O&M VAS/IN Support Officer', 'O&M VAS/IN Support Officer', 'O&M VAS/IN 支持专员'],
    'IT & Application Officer': ['IT & Application Officer', 'IT & Application Officer', 'IT 与应用专员'],
    'Develop and run business applications and platforms: Games.tl, the Xanana Gusmão Reading Room portal and the TRON super app.': [
      'Mengembangkan dan menjalankan aplikasi dan platform bisnis: Games.tl, portal Xanana Gusmão Reading Room dan super app TRON.',
      'Dezenvolve no hala’o aplikasaun no plataforma negósiu: Games.tl, portál Xanana Gusmão Reading Room no super app TRON.',
      '开发并运营业务应用与平台：Games.tl、Xanana Gusmão Reading Room 门户和 TRON 超级应用。'],
    'Grafana monitoring of Datacom nodes and IT services with Telegram alerts when a service goes down and recovers.': [
      'Monitoring Grafana untuk node Datacom dan layanan TI, dengan alert Telegram saat layanan down dan pulih kembali.',
      'Monitorizasaun Grafana ba node Datacom no servisu IT, ho alerta Telegram bainhira servisu ida down no di’ak fali.',
      '使用 Grafana 监控 Datacom 节点和 IT 服务，服务中断及恢复时通过 Telegram 告警。'],
    'Build internal tools for IT operations, including Moxtel, an all-in-one terminal and file-transfer app for Windows.': [
      'Membangun tools internal untuk operasional TI, termasuk Moxtel, aplikasi terminal dan transfer file all-in-one untuk Windows.',
      'Harii ferramenta internu ba operasaun IT, inklui Moxtel, aplikasaun terminal no transferénsia file all-in-one ba Windows.',
      '为 IT 运维构建内部工具，包括 Moxtel——一款 Windows 一体化终端与文件传输应用。'],
    'VAS services, OCS API and SMTP/Telegram integrations, monitoring and UAT support —': [
      'Layanan VAS, integrasi OCS API dan SMTP/Telegram, monitoring dan dukungan UAT —',
      'Servisu VAS, integrasaun OCS API no SMTP/Telegram, monitorizasaun no suporta UAT —',
      'VAS 服务、OCS API 与 SMTP/Telegram 集成、监控和 UAT 支持 ——'],
    'see 2026 work': ['lihat pekerjaan 2026', 'haree servisu 2026', '查看 2026 年工作'],
    'Design application flows and database schemas, and lead development planning for secure, scalable internal systems.': [
      'Merancang alur aplikasi dan skema database, serta memimpin perencanaan pengembangan sistem internal yang aman dan skalabel.',
      'Dezeña fluxu aplikasaun no eskema database, no lidera planu dezenvolvimentu ba sistema internu seguru no eskalável.',
      '设计应用流程和数据库结构，主导安全、可扩展内部系统的开发规划。'],
    'Build and maintain MySQL-based platforms: internal dashboards, broadcast systems and employee portals.': [
      'Membangun dan memelihara platform berbasis MySQL: dashboard internal, sistem broadcast dan portal karyawan.',
      'Harii no mantein plataforma bazeia ba MySQL: dashboard internu, sistema broadcast no portál funsionáriu.',
      '构建并维护基于 MySQL 的平台：内部仪表盘、广播系统和员工门户。'],
    'Support internal IT systems and Value-Added Services (VAS) for availability and performance.': [
      'Mendukung sistem TI internal dan Value-Added Services (VAS) agar tetap tersedia dan berkinerja baik.',
      'Suporta sistema IT internu no Value-Added Services (VAS) atu sempre disponível no funsiona di’ak.',
      '支持内部 IT 系统和增值服务（VAS），保障可用性与性能。'],
    'Integrate real-time monitoring and alerting, including Telegram-bot alerts written in Go.': [
      'Mengintegrasikan monitoring dan alert real-time, termasuk alert bot Telegram yang ditulis dengan Go.',
      'Integra monitorizasaun no alerta real-time, inklui alerta bot Telegram ne’ebé hakerek ho Go.',
      '集成实时监控与告警，包括用 Go 编写的 Telegram 机器人告警。'],
    'Troubleshoot backend services, perform root-cause analysis, and run end-to-end testing and UAT.': [
      'Menangani masalah layanan backend, melakukan analisis akar masalah, serta menjalankan pengujian end-to-end dan UAT.',
      'Rezolve problema servisu backend, halo análize kauza prinsipál, no hala’o teste end-to-end no UAT.',
      '排查后端服务故障，进行根因分析，并执行端到端测试和 UAT。'],
    'Database Training Instructor': ['Instruktur Pelatihan Database', 'Formadór Database', '数据库培训讲师'],
    'Hands-on training in database design and development for employee management systems.': [
      'Pelatihan praktik desain dan pengembangan database untuk sistem manajemen karyawan.',
      'Formasaun prátika kona-ba dezeñu no dezenvolvimentu database ba sistema jestaun funsionáriu.',
      '为员工管理系统开展数据库设计与开发的实操培训。'],
    'Relational database design in MySQL and backend integration with PHP (CodeIgniter 3): CRUD, authentication, deployment.': [
      'Desain database relasional di MySQL dan integrasi backend dengan PHP (CodeIgniter 3): CRUD, autentikasi, deployment.',
      'Dezeñu database relasionál iha MySQL no integrasaun backend ho PHP (CodeIgniter 3): CRUD, autentikasaun, deployment.',
      'MySQL 关系型数据库设计及 PHP（CodeIgniter 3）后端集成：CRUD、身份验证、部署。'],
    'Officer Development Program': ['Officer Development Program', 'Officer Development Program', '管培生项目（ODP）'],
    'REST APIs and dashboards for hardware site monitoring; automated server-log parsing into real-time records.': [
      'REST API dan dashboard untuk monitoring hardware site; parsing log server otomatis menjadi data real-time.',
      'REST API no dashboard ba monitorizasaun hardware iha site; parsing log server automátiku ba rejistu real-time.',
      '用于站点硬件监控的 REST API 和仪表盘；自动解析服务器日志为实时记录。'],
    'Token-based login with Telegram and JWT; IoT monitoring of DC voltage and server-room temperature.': [
      'Login berbasis token dengan Telegram dan JWT; monitoring IoT untuk tegangan DC dan suhu ruang server.',
      'Login ho token liuhusi Telegram no JWT; monitorizasaun IoT ba voltajen DC no temperatura sala server.',
      '基于 Telegram 和 JWT 的令牌登录；用 IoT 监测直流电压和机房温度。'],
    'Co-Founder': ['Co-Founder', 'Ko-fundadór', '联合创始人'],
    'Designed a full-stack education platform with e-learning, job matching and a blog (Go, Express.js, MongoDB, Next.js).': [
      'Merancang platform pendidikan full-stack dengan e-learning, pencocokan kerja dan blog (Go, Express.js, MongoDB, Next.js).',
      'Dezeña plataforma edukasaun full-stack ho e-learning, buka servisu no blog (Go, Express.js, MongoDB, Next.js).',
      '设计了一个全栈教育平台，包含在线学习、职位匹配和博客（Go、Express.js、MongoDB、Next.js）。'],
    'Guest lecture “Why Technology” at Assales Baucau Fatumaca (July 2024) on technology in youth education.': [
      'Kuliah tamu “Why Technology” di Assales Baucau Fatumaca (Juli 2024) tentang teknologi dalam pendidikan generasi muda.',
      'Palestra konvidadu “Why Technology” iha Assales Baucau Fatumaca (Jullu 2024) kona-ba teknolojia iha edukasaun foin-sa’e sira.',
      '在 Assales Baucau Fatumaca 做客座讲座“Why Technology”（2024 年 7 月），主题为青年教育中的技术。'],
    'Research Assistant': ['Asisten Peneliti', 'Asistente Peskiza', '研究助理'],
    'Telkom University — CPS Laboratory & BYSONIC/Corby-Net · West Java': ['Telkom University — Laboratorium CPS & BYSONIC/Corby-Net · Jawa Barat', 'Telkom University — Laboratóriu CPS & BYSONIC/Corby-Net · Java Osidentál', 'Telkom University — CPS 实验室 & BYSONIC/Corby-Net · 西爪哇'],
    'Cyber academy (Cyber Physical Systems lab), UI/UX discussion material, and an automatic parking prototype with PIR and ultrasonic sensors.': [
      'Cyber academy (lab Cyber Physical Systems), materi diskusi UI/UX, dan prototipe parkir otomatis dengan sensor PIR dan ultrasonik.',
      'Cyber academy (laboratóriu Cyber Physical Systems), materiál diskusaun UI/UX, no protótipu parke automátiku ho sensór PIR no ultrasóniku.',
      '网络学院（信息物理系统实验室）、UI/UX 讨论材料，以及采用 PIR 和超声波传感器的自动停车原型。'],
    'IoT fundamentals and embedded systems training (MBKM Research); training on biomedical sensors.': [
      'Pelatihan dasar IoT dan sistem embedded (Riset MBKM); pelatihan sensor biomedis.',
      'Formasaun bázika IoT no sistema embedded (Peskiza MBKM); formasaun kona-ba sensór biomédiku.',
      'IoT 基础与嵌入式系统培训（MBKM 研究）；生物医学传感器培训。'],

    // ----- projects -----
    'Portfolio': ['Portofolio', 'Portfóliu', '作品集'],
    'Selected projects': ['Proyek pilihan', 'Projetu balun', '精选项目'],
    'Real systems built for public, private and government organizations. Internal systems are described without access details.': [
      'Sistem nyata untuk organisasi publik, swasta dan pemerintah. Sistem internal dijelaskan tanpa detail akses.',
      'Sistema reál ne’ebé harii ba organizasaun públiku, privadu no governu. Sistema internu deskreve la ho detalle asesu.',
      '为公共、私营和政府机构构建的真实系统。内部系统的介绍不含访问细节。'],
    'Filter projects': ['Filter proyek', 'Filtra projetu', '筛选项目'],
    'All': ['Semua', 'Hotu', '全部'],
    'Public sites': ['Situs publik', 'Site públiku', '公开网站'],
    'Internal systems': ['Sistem internal', 'Sistema internu', '内部系统'],
    'In development': ['Dalam pengembangan', 'Iha dezenvolvimentu', '开发中'],
    'Internal': ['Internal', 'Internu', '内部'],
    'TRON — Ride-hailing & Delivery Super App': ['TRON — Super App Ojek Online & Pengantaran', 'TRON — Super App Transporte & Entrega', 'TRON — 网约车与配送超级应用'],
    'TRON website and the customer, Driver and Merchant apps': ['Situs TRON dan aplikasi pelanggan, Driver dan Merchant', 'Website TRON no aplikasaun kliente, Driver no Merchant', 'TRON 网站及乘客、司机和商家应用'],
    'Transporte Online for Timor-Leste: rides, deliveries, food and shopping in one platform — a public website, Flutter apps for customers, drivers and merchants, an admin console for Ops, Finance, Compliance and Support, and Grafana monitoring with Telegram alerts.': [
      'Transporte Online untuk Timor-Leste: perjalanan, pengantaran, makanan dan belanja dalam satu platform — situs publik, aplikasi Flutter untuk pelanggan, driver dan merchant, konsol admin untuk Ops, Finance, Compliance dan Support, serta monitoring Grafana dengan alert Telegram.',
      'Transporte Online ba Timor-Leste: viajen, entrega, hahán no sosa sasán iha plataforma ida — website públiku, aplikasaun Flutter ba kliente, motorista no merchant, konsola admin ba Ops, Finansas, Compliance no Suporta, no monitorizasaun Grafana ho alerta Telegram.',
      '东帝汶的 Transporte Online：出行、配送、外卖和购物集于一个平台——公开网站、面向乘客/司机/商家的 Flutter 应用、供运营/财务/合规/客服使用的管理后台，以及带 Telegram 告警的 Grafana 监控。'],
    '8 Go services behind one gateway, 295 documented API endpoints, real-time trips over WebSocket': [
      '8 layanan Go di balik satu gateway, 295 endpoint API terdokumentasi, perjalanan real-time lewat WebSocket',
      'Servisu Go 8 iha kotuk gateway ida, endpoint API 295 ne’ebé dokumentadu, viajen real-time liuhusi WebSocket',
      '8 个 Go 服务共用一个网关，295 个有文档的 API 端点，基于 WebSocket 的实时行程'],
    'Server-side fares with OSRM routing, self-hosted Timor-Leste map, OnePay wallet with a double-entry ledger': [
      'Tarif dihitung di server dengan routing OSRM, peta Timor-Leste self-hosted, dompet OnePay dengan pembukuan double-entry',
      'Tarifa kalkula iha server ho routing OSRM, mapa Timor-Leste self-hosted, karteira OnePay ho kontabilidade double-entry',
      '服务端计价与 OSRM 路线规划、自托管东帝汶地图、采用复式记账的 OnePay 钱包'],
    'Safety: SOS, Share My Trip, pickup PIN, verified partners; promotions, rewards and push notifications': [
      'Keamanan: SOS, Share My Trip, PIN penjemputan, mitra terverifikasi; promo, reward dan push notification',
      'Seguransa: SOS, Share My Trip, PIN foti, parseiru verifikadu; promosaun, prémiu no push notification',
      '安全：SOS、行程分享、上车 PIN、认证合作伙伴；促销、奖励和推送通知'],
    'Xanana Gusmão Reading Room — New Version': ['Xanana Gusmão Reading Room — Versi Baru', 'Xanana Gusmão Reading Room — Versaun Foun', 'Xanana Gusmão Reading Room — 新版'],
    'Xanana Gusmão Reading Room website, 2026 version': ['Situs Xanana Gusmão Reading Room, versi 2026', 'Website Xanana Gusmão Reading Room, versaun 2026', 'Xanana Gusmão Reading Room 网站 2026 版'],
    'Revamp Aug – Nov 2026 · first version Nov 2024 – Feb 2025': ['Revamp Agu – Nov 2026 · versi pertama Nov 2024 – Feb 2025', 'Revamp Ago – Nov 2026 · versaun dahuluk Nov 2024 – Fev 2025', '改版 2026 年 8 月 – 11 月 · 首版 2024 年 11 月 – 2025 年 2 月'],
    'A complete revamp of the library and museum portal in Dili: library with digital catalogue and membership, museum exhibitions and audiovisual gallery, courses and programs, book shop, space booking, news and events.': [
      'Revamp total portal perpustakaan dan museum di Dili: perpustakaan dengan katalog digital dan keanggotaan, pameran museum dan galeri audiovisual, kursus dan program, toko buku, pemesanan ruang, berita dan acara.',
      'Revamp kompletu ba portál biblioteka no museu iha Dili: biblioteka ho katálogu dijitál no membru, ezibisaun museu no galeria audiovizuál, kursu no programa, loja livru, rezerva fatin, notísia no eventu.',
      '帝力图书馆与博物馆门户的全面改版：数字目录与会员的图书馆、博物馆展览与视听画廊、课程与项目、书店、场地预订、新闻与活动。'],
    'Four languages (English, Tetun, Português, Indonesia) and light/dark theme': ['Empat bahasa (English, Tetun, Português, Indonesia) dan tema terang/gelap', 'Lian haat (English, Tetun, Português, Indonesia) no tema naroman/nakukun', '四种语言（英语、德顿语、葡萄牙语、印尼语）及浅色/深色主题'],
    'Member login, registration with document validation and QR-verified certificates': ['Login anggota, registrasi dengan validasi dokumen dan sertifikat terverifikasi QR', 'Login membru, rejistu ho validasaun dokumentu no sertifikadu verifika ho QR', '会员登录、带证件验证的注册，以及可扫码验证的证书'],
    'Telegram alerts': ['Alert Telegram', 'Alerta Telegram', 'Telegram 告警'],
    'Games.tl — Zona Jogus Telkomcel': ['Games.tl — Zona Jogus Telkomcel', 'Games.tl — Zona Jogus Telkomcel', 'Games.tl — Telkomcel 游戏专区'],
    'games.tl Zona Jogus Telkomcel': ['games.tl Zona Jogus Telkomcel', 'games.tl Zona Jogus Telkomcel', 'games.tl Telkomcel 游戏专区'],
    "Telkomcel's gaming voucher and top-up platform for Timor-Leste: PUBG Mobile, Free Fire, Mobile Legends, AOV and more, paid with Telkomcel balance or Tpay.": [
      'Platform voucher game dan top-up Telkomcel untuk Timor-Leste: PUBG Mobile, Free Fire, Mobile Legends, AOV dan lainnya, dibayar dengan pulsa Telkomcel atau Tpay.',
      'Plataforma voucher jogu no top-up Telkomcel nian ba Timor-Leste: PUBG Mobile, Free Fire, Mobile Legends, AOV no seluk tan, selu ho pulsa Telkomcel ka Tpay.',
      'Telkomcel 面向东帝汶的游戏点卡与充值平台：PUBG Mobile、Free Fire、Mobile Legends、AOV 等，可用 Telkomcel 话费或 Tpay 支付。'],
    'Direct top-up by player ID or voucher codes, every purchase confirmed with an OTP': ['Top-up langsung lewat ID pemain atau kode voucher, setiap pembelian dikonfirmasi dengan OTP', 'Top-up direta ho ID jogadór ka kódigu voucher, kada sosa konfirma ho OTP', '通过玩家 ID 直充或兑换码，每笔购买均需 OTP 确认'],
    'Orders, news, downloads, English / Tetum / Indonesia and light/dark mode': ['Pesanan, berita, unduhan, English / Tetum / Indonesia dan mode terang/gelap', 'Orden, notísia, download, English / Tetum / Indonesia no modu naroman/nakukun', '订单、新闻、下载，英语/德顿语/印尼语及浅色/深色模式'],
    'Payments': ['Pembayaran', 'Pagamentu', '支付'],
    'Multilingual': ['Multibahasa', 'Multilíngua', '多语言'],
    'Nov 2026 · my own product': ['Nov 2026 · produk saya sendiri', "Nov 2026 · produtu ha'u nian rasik", '2026 年 11 月 · 我的个人产品'],
    'Moxtel — All-in-one Terminal for Windows': ['Moxtel — Terminal All-in-one untuk Windows', 'Moxtel — Terminal All-in-one ba Windows', 'Moxtel — Windows 一体化终端'],
    'Moxtel terminal with four SSH sessions': ['Terminal Moxtel dengan empat sesi SSH', 'Terminal Moxtel ho sesaun SSH haat', '打开四个 SSH 会话的 Moxtel 终端'],
    'A free desktop app for IT teams: SSH, RDP, VNC, SFTP/FTP/S3, Serial and Mosh in tabs, automatic file transfers on a schedule, network tools, terminal recording and an encrypted password vault.': [
      'Aplikasi desktop gratis untuk tim TI: SSH, RDP, VNC, SFTP/FTP/S3, Serial dan Mosh dalam tab, transfer file otomatis terjadwal, network tools, perekaman terminal dan brankas password terenkripsi.',
      'Aplikasaun desktop gratuitu ba ekipa IT: SSH, RDP, VNC, SFTP/FTP/S3, Serial no Mosh iha tab, transferénsia file automátiku tuir oráriu, ferramenta rede, gravasaun terminal no kofre password enkriptadu.',
      '面向 IT 团队的免费桌面应用：标签页中的 SSH、RDP、VNC、SFTP/FTP/S3、串口和 Mosh，定时自动文件传输、网络工具、终端录制和加密密码库。'],
    'Download ↗': ['Unduh ↗', 'Download ↗', '下载 ↗'],
    'Node Monitoring for Datacom & IT Service': ['Monitoring Node untuk Datacom & Layanan TI', 'Monitorizasaun Node ba Datacom & Servisu IT', 'Datacom 与 IT 服务节点监控'],
    'Grafana dashboards for the health of Datacom network nodes and IT service servers, with automatic Telegram notifications when a node or service goes down — and again when it recovers.': [
      'Dashboard Grafana untuk kesehatan node jaringan Datacom dan server layanan TI, dengan notifikasi Telegram otomatis saat node atau layanan down — dan saat pulih kembali.',
      'Dashboard Grafana ba saúde node rede Datacom no server servisu IT, ho notifikasaun Telegram automátiku bainhira node ka servisu down — no mós bainhira di’ak fali.',
      '用 Grafana 仪表盘监测 Datacom 网络节点和 IT 服务服务器的健康状况，节点或服务中断时自动发送 Telegram 通知，恢复后再次通知。'],
    'Jogos CPLP 2025 Registration Portal': ['Portal Registrasi Jogos CPLP 2025', 'Portál Rejistu Jogos CPLP 2025', 'Jogos CPLP 2025 报名门户'],
    'Jogos CPLP 2025 registration portal': ['Portal registrasi Jogos CPLP 2025', 'Portál rejistu Jogos CPLP 2025', 'Jogos CPLP 2025 报名门户'],
    'End-to-end accreditation for national and international delegations: approvals, documents, QR ID cards and a Flutter app for on-site validation with offline sync.': [
      'Akreditasi end-to-end untuk delegasi nasional dan internasional: persetujuan, dokumen, kartu ID QR dan aplikasi Flutter untuk validasi di lokasi dengan sinkronisasi offline.',
      'Akreditasaun end-to-end ba delegasaun nasionál no internasionál: aprovasaun, dokumentu, kartaun ID QR no aplikasaun Flutter ba validasaun iha fatin ho sinkronizasaun offline.',
      '为国内外代表团提供端到端注册认证：审批、文件、二维码证件，以及支持离线同步的现场核验 Flutter 应用。'],
    'TAIS 2025 Summit Platform': ['Platform Summit TAIS 2025', 'Plataforma Sumíte TAIS 2025', 'TAIS 2025 峰会平台'],
    'TAIS 2025 summit platform': ['Platform summit TAIS 2025', 'Plataforma sumíte TAIS 2025', 'TAIS 2025 峰会平台'],
    "Registration and content platform for Telkomcel's flagship annual summit, with QR check-in, live attendance and room-capacity dashboards and badge printing.": [
      'Platform registrasi dan konten untuk summit tahunan utama Telkomcel, dengan check-in QR, dashboard kehadiran dan kapasitas ruang secara langsung, serta cetak badge.',
      'Plataforma rejistu no kontéudu ba sumíte anuál prinsipál Telkomcel nian, ho check-in QR, dashboard prezensa no kapasidade sala real-time, no imprime kartaun.',
      'Telkomcel 年度旗舰峰会的注册与内容平台，支持二维码签到、实时出席与会场容量仪表盘以及胸牌打印。'],
    'INTL Employee Management System': ['Sistem Manajemen Karyawan INTL', 'Sistema Jestaun Funsionáriu INTL', 'INTL 员工管理系统'],
    'INTL employee management system': ['Sistem manajemen karyawan INTL', 'Sistema jestaun funsionáriu INTL', 'INTL 员工管理系统'],
    "Secure employee records for Timor-Leste's National Printing Office, with dashboards, CSV/XLS/PDF reports and role-based access.": [
      'Data karyawan yang aman untuk Percetakan Nasional Timor-Leste, dengan dashboard, laporan CSV/XLS/PDF dan akses berbasis peran.',
      'Rejistu funsionáriu seguru ba Imprensa Nasionál Timor-Leste, ho dashboard, relatóriu CSV/XLS/PDF no asesu tuir knaar.',
      '为东帝汶国家印刷局提供安全的员工档案管理，含仪表盘、CSV/XLS/PDF 报表和基于角色的访问控制。'],
    'Mass-SMS campaign portal with community groups, scheduling, quota checks via the charging system (OCS), delivery reports and OTP login.': [
      'Portal kampanye SMS massal dengan grup komunitas, penjadwalan, cek kuota lewat sistem charging (OCS), laporan pengiriman dan login OTP.',
      'Portál kampaña SMS ba ema barak ho grupu komunidade, oráriu, verifika kuota liuhusi sistema charging (OCS), relatóriu entrega no login OTP.',
      '群发短信营销门户，支持社群分组、定时发送、通过计费系统（OCS）检查额度、送达报告和 OTP 登录。'],
    'Corporate profile site telling the TDS brand story: who they are, what they do, where they operate and what sets them apart.': [
      'Situs profil perusahaan yang menceritakan kisah brand TDS: siapa mereka, apa yang mereka kerjakan, di mana mereka beroperasi dan apa keunggulannya.',
      'Site perfíl kompañia ne’ebé konta istória marka TDS: sira se, sira halo saida, sira opera iha ne’ebé no saida mak halo sira diferente.',
      '讲述 TDS 品牌故事的企业官网：他们是谁、做什么、在哪里运营以及有何不同。'],
    'Library system': ['Sistem perpustakaan', 'Sistema biblioteka', '图书馆系统'],
    'ICS Library Management System': ['Sistem Manajemen Perpustakaan ICS', 'Sistema Jestaun Biblioteka ICS', 'ICS 图书馆管理系统'],
    'ICS library management system': ['Sistem manajemen perpustakaan ICS', 'Sistema jestaun biblioteka ICS', 'ICS 图书馆管理系统'],
    'Barcode-based book lending, student tracking and visitor monitoring.': ['Peminjaman buku berbasis barcode, pelacakan siswa dan monitoring pengunjung.', 'Empresta livru ho barcode, tuir estudante no monitoriza vizitante.', '基于条码的图书借阅、学生跟踪和访客监控。'],
    'Education platform': ['Platform pendidikan', 'Plataforma edukasaun', '教育平台'],
    'Multi Science Academy platform': ['Platform Multi Science Academy', 'Plataforma Multi Science Academy', 'Multi Science Academy 平台'],
    'Digital classrooms, bootcamps and academic job matching on a modern full-stack platform.': ['Kelas digital, bootcamp dan pencocokan kerja akademik di platform full-stack modern.', 'Sala aula dijitál, bootcamp no buka servisu akadémiku iha plataforma full-stack modernu.', '现代全栈平台上的数字课堂、训练营和学术职位匹配。'],
    'Telkomcel Enterprise Ticketing': ['Telkomcel Enterprise Ticketing', 'Telkomcel Enterprise Ticketing', 'Telkomcel 企业工单系统'],
    'Enterprise ticketing system': ['Sistem ticketing enterprise', 'Sistema ticketing enterprise', '企业工单系统'],
    'Corporate complaint and incident ticketing synced with the Enterprise System, auto-tickets from service monitoring, Telegram updates and MTTR dashboards.': [
      'Ticketing keluhan dan insiden korporat yang tersinkron dengan Enterprise System, tiket otomatis dari monitoring layanan, update Telegram dan dashboard MTTR.',
      'Ticketing keixa no insidente kompañia nian ne’ebé sinkroniza ho Enterprise System, tiket automátiku husi monitorizasaun servisu, update Telegram no dashboard MTTR.',
      '与企业系统同步的企业投诉与事件工单，服务监控自动建单、Telegram 更新和 MTTR 仪表盘。'],
    'Telkomcel Broadcast Messaging': ['Telkomcel Broadcast Messaging', 'Telkomcel Broadcast Messaging', 'Telkomcel 群发消息平台'],
    'Broadcast messaging system': ['Sistem pesan broadcast', 'Sistema mensajen broadcast', '群发消息系统'],
    'SMS campaign platform for broadcast messaging to subscribers, with a secure backend control panel.': ['Platform kampanye SMS untuk pesan broadcast ke pelanggan, dengan panel kontrol backend yang aman.', 'Plataforma kampaña SMS ba mensajen broadcast ba asinante sira, ho painél kontrolu backend seguru.', '面向用户群发短信的营销平台，配有安全的后台控制面板。'],
    'Telkomcel VAS Management System': ['Sistem Manajemen VAS Telkomcel', 'Sistema Jestaun VAS Telkomcel', 'Telkomcel VAS 管理系统'],
    'VAS management system': ['Sistem manajemen VAS', 'Sistema jestaun VAS', 'VAS 管理系统'],
    'Manages Value-Added Services routing across SMS, USSD and portal systems.': ['Mengelola routing Value-Added Services di sistem SMS, USSD dan portal.', 'Jere routing Value-Added Services iha sistema SMS, USSD no portál.', '管理 SMS、USSD 和门户系统之间的增值服务路由。'],
    'SIM Registration Backend': ['Backend Registrasi SIM', 'Backend Rejistu SIM', 'SIM 卡实名登记后端'],
    'Registrations from three channels with KYC validation and de-duplication, an e-portal review queue with audit trail, and service activation on approval.': [
      'Registrasi dari tiga kanal dengan validasi KYC dan de-duplikasi, antrean review e-portal dengan audit trail, dan aktivasi layanan setelah disetujui.',
      'Rejistu husi kanál tolu ho validasaun KYC no hasai duplikadu, fila revizaun e-portal ho audit trail, no ativasaun servisu bainhira aprova.',
      '三渠道登记，含 KYC 校验与去重、带审计轨迹的电子门户审核队列，审批通过后开通服务。'],
    'MNO Activity Monitoring & Approval': ['Monitoring & Persetujuan Aktivitas MNO', 'Monitorizasaun & Aprovasaun Atividade MNO', 'MNO 作业监控与审批'],
    'Planned network activities with SOP/MOP attachments, automatic impact levels and tiered approvals right from Telegram.': ['Aktivitas jaringan terencana dengan lampiran SOP/MOP, level dampak otomatis dan persetujuan berjenjang langsung dari Telegram.', 'Atividade rede planeadu ho anexu SOP/MOP, nível impaktu automátiku no aprovasaun tuir nível direta husi Telegram.', '计划内网络作业附带 SOP/MOP，自动评估影响等级，并可直接在 Telegram 中分级审批。'],
    'Read-only Telegram commands for traffic, ping, trace and BGP state, with allowlists, rate limits and command logs.': ['Perintah Telegram read-only untuk trafik, ping, trace dan status BGP, dengan allowlist, rate limit dan log perintah.', 'Komandu Telegram read-only ba tráfiku, ping, trace no estadu BGP, ho allowlist, limite rate no log komandu.', '只读 Telegram 命令，可查询流量、ping、trace 和 BGP 状态，带白名单、限流和命令日志。'],
    'SSL & Domain Monitoring': ['Monitoring SSL & Domain', 'Monitorizasaun SSL & Domíniu', 'SSL 与域名监控'],
    'Automated certificate, DNS and WHOIS checks with change detection, real-time Telegram alerts and a daily digest.': ['Pengecekan sertifikat, DNS dan WHOIS otomatis dengan deteksi perubahan, alert Telegram real-time dan ringkasan harian.', 'Verifikasaun automátiku sertifikadu, DNS no WHOIS ho detesaun mudansa, alerta Telegram real-time no rezumu loroloron.', '自动检查证书、DNS 和 WHOIS，检测变更，实时 Telegram 告警并发送每日摘要。'],
    'Data Center Temperature Monitoring': ['Monitoring Suhu Data Center', 'Monitorizasaun Temperatura Data Center', '数据中心温度监控'],
    'ESP32 sensors with three-state thresholds and rate-limited alerts that repeat every minute until recovery.': ['Sensor ESP32 dengan tiga level ambang batas dan alert terbatas yang diulang tiap menit sampai pulih.', 'Sensór ESP32 ho limite nível tolu no alerta ne’ebé repete kada minutu to’o di’ak fali.', 'ESP32 传感器，三级阈值，限频告警每分钟重复直到恢复。'],
    'MOS – SMSC Integration': ['Integrasi MOS – SMSC', 'Integrasaun MOS – SMSC', 'MOS – SMSC 集成'],
    'Kannel and SMSC integration for short code 1881 subscriptions: routing, delivery-report correlation, retries and throughput control.': ['Integrasi Kannel dan SMSC untuk langganan short code 1881: routing, korelasi laporan pengiriman, retry dan kontrol throughput.', 'Integrasaun Kannel no SMSC ba asinatura short code 1881: routing, korelasaun relatóriu entrega, koko fali no kontrolu throughput.', '为短号码 1881 订阅集成 Kannel 与 SMSC：路由、送达报告关联、重试和吞吐量控制。'],
    'Familink Cell-ID Access Control': ['Kontrol Akses Cell-ID Familink', 'Kontrolu Asesu Cell-ID Familink', 'Familink Cell-ID 访问控制'],
    'Location checks against allowed cells every minute; automatic internet barring and unbarring with Telegram notifications.': ['Cek lokasi terhadap cell yang diizinkan setiap menit; blokir dan buka blokir internet otomatis dengan notifikasi Telegram.', 'Verifika fatin ho cell ne’ebé permite kada minutu; blokeia no loke fali internet automátiku ho notifikasaun Telegram.', '每分钟检查位置是否在允许的小区内；自动封停和解封上网并发送 Telegram 通知。'],
    'Show all projects': ['Tampilkan semua proyek', 'Hatudu projetu hotu', '显示全部项目'],
    'Show all {n} projects': ['Tampilkan semua {n} proyek', 'Hatudu projetu {n} hotu', '显示全部 {n} 个项目'],

    // ----- 2026 work -----
    '2026 at Telkomcel': ['2026 di Telkomcel', '2026 iha Telkomcel', '2026 年在 Telkomcel'],
    'What I built and supported this year': ['Yang saya bangun dan dukung tahun ini', "Saida mak ha'u harii no suporta tinan ne’e", '今年我构建和支持的工作'],
    'Applications, services and integrations from 2026, grouped by area. Internal systems are described without access details.': [
      'Aplikasi, layanan dan integrasi tahun 2026, dikelompokkan per bidang. Sistem internal dijelaskan tanpa detail akses.',
      'Aplikasaun, servisu no integrasaun husi 2026, tuir área. Sistema internu deskreve la ho detalle asesu.',
      '2026 年的应用、服务和集成，按领域分组。内部系统的介绍不含访问细节。'],
    'Monitoring & dashboards': ['Monitoring & dashboard', 'Monitorizasaun & dashboard', '监控与仪表盘'],
    'A dashboard for Mobile Network Operations that brings the team\'s key operational information together in one view.': ['Dashboard untuk Mobile Network Operations yang menyatukan informasi operasional utama tim dalam satu tampilan.', 'Dashboard ba Mobile Network Operations ne’ebé halibur informasaun operasionál importante ekipa nian iha vista ida.', '面向移动网络运营的仪表盘，将团队的关键运营信息集中在一个视图中。'],
    'UME Power Monitoring with Telegram Notifications': ['Monitoring Power UME dengan Notifikasi Telegram', 'Monitorizasaun Power UME ho Notifikasaun Telegram', 'UME 电源监控与 Telegram 通知'],
    'Monitoring of power status from UME, with Telegram notifications so the team is alerted to power events as they happen.': ['Monitoring status power dari UME, dengan notifikasi Telegram agar tim langsung tahu saat ada kejadian power.', 'Monitorizasaun estadu power husi UME, ho notifikasaun Telegram atu ekipa hatene kedas bainhira iha eventu power.', '监控来自 UME 的电源状态，通过 Telegram 通知让团队第一时间获知电源事件。'],
    'Site Monitoring for Ericsson BTS': ['Monitoring Site untuk BTS Ericsson', 'Monitorizasaun Site ba BTS Ericsson', 'Ericsson BTS 站点监控'],
    'Monitoring of Ericsson BTS sites, giving the team visibility of site status across the network.': ['Monitoring site BTS Ericsson, memberi tim gambaran status site di seluruh jaringan.', 'Monitorizasaun site BTS Ericsson, fó ba ekipa vizibilidade kona-ba estadu site iha rede tomak.', '监控 Ericsson BTS 站点，让团队掌握全网站点状态。'],
    'Grafana Monitoring for IP Transit, Datacom, IT & VAS Services': ['Monitoring Grafana untuk IP Transit, Datacom, Layanan TI & VAS', 'Monitorizasaun Grafana ba IP Transit, Datacom, Servisu IT & VAS', 'IP Transit、Datacom、IT 与 VAS 服务的 Grafana 监控'],
    'Grafana dashboards that track IP transit and Datacom links together with IT and VAS services, so issues can be spotted from a single place.': ['Dashboard Grafana yang memantau link IP transit dan Datacom bersama layanan TI dan VAS, sehingga masalah bisa terlihat dari satu tempat.', 'Dashboard Grafana ne’ebé tuir link IP transit no Datacom hamutuk ho servisu IT no VAS, atu bele haree problema husi fatin ida deit.', '用 Grafana 仪表盘统一跟踪 IP 转接和 Datacom 链路以及 IT 和 VAS 服务，在一处即可发现问题。'],
    'VAS services & platforms': ['Layanan & platform VAS', 'Servisu & plataforma VAS', 'VAS 服务与平台'],
    'Service Autorenewal — VAS': ['Layanan Perpanjangan Otomatis — VAS', 'Servisu Renova Automátiku — VAS', '自动续订服务 — VAS'],
    'An automatic renewal service for VAS subscriptions, so subscribed services renew without manual action.': ['Layanan perpanjangan otomatis untuk langganan VAS, sehingga layanan yang dilanggan diperpanjang tanpa tindakan manual.', 'Servisu renova automátiku ba asinatura VAS, atu servisu ne’ebé asina renova la presiza asaun manuál.', 'VAS 订阅的自动续订服务，已订阅的服务无需手动操作即可续订。'],
    'OTP Service — BNF': ['Layanan OTP — BNF', 'Servisu OTP — BNF', 'OTP 服务 — BNF'],
    'A one-time password (OTP) service built for BNF to generate, deliver and verify OTP codes.': ['Layanan one-time password (OTP) untuk BNF yang membuat, mengirim dan memverifikasi kode OTP.', 'Servisu one-time password (OTP) ba BNF atu kria, haruka no verifika kódigu OTP.', '为 BNF 构建的一次性密码（OTP）服务，用于生成、发送和验证 OTP 验证码。'],
    'Revamp of Games.tl — Offline Charging': ['Revamp Games.tl — Offline Charging', 'Revamp Games.tl — Offline Charging', 'Games.tl 改版 — 离线计费'],
    'Revamped offline charging for Games.tl with automatic rotation across partners SGN, TTW and NUON.': ['Revamp offline charging Games.tl dengan rotasi otomatis antar mitra SGN, TTW dan NUON.', 'Revamp offline charging Games.tl ho rotasaun automátiku entre parseiru SGN, TTW no NUON.', '改版 Games.tl 离线计费，在合作伙伴 SGN、TTW 和 NUON 之间自动轮换。'],
    'Revamp of XGRR': ['Revamp XGRR', 'Revamp XGRR', 'XGRR 改版'],
    'A full revamp of the Xanana Gusmão Reading Room (XGRR) portal —': ['Revamp total portal Xanana Gusmão Reading Room (XGRR) —', 'Revamp kompletu ba portál Xanana Gusmão Reading Room (XGRR) —', 'Xanana Gusmão Reading Room（XGRR）门户全面改版 ——'],
    'see the project card': ['lihat kartu proyek', 'haree kartaun projetu', '查看项目卡片'],
    'TDEMY Course Bonus Service': ['Layanan Bonus Kursus TDEMY', 'Servisu Bónus Kursu TDEMY', 'TDEMY 课程奖励服务'],
    'A service integrated with TDEMY that grants a specific bonus giving access to courses on the Tdemy web app.': ['Layanan yang terintegrasi dengan TDEMY untuk memberi bonus khusus berupa akses kursus di web app Tdemy.', 'Servisu ne’ebé integra ho TDEMY atu fó bónus espesífiku hodi asesu kursu iha web app Tdemy.', '与 TDEMY 集成的服务，发放特定奖励以访问 Tdemy 网页应用上的课程。'],
    'VAS Beduku — Setup & Deployment': ['VAS Beduku — Setup & Deployment', 'VAS Beduku — Setup & Deployment', 'VAS Beduku — 搭建与部署'],
    'Supported the setup and deployment of the Beduku VAS service.': ['Mendukung setup dan deployment layanan VAS Beduku.', 'Suporta setup no deployment servisu VAS Beduku.', '支持 Beduku VAS 服务的搭建与部署。'],
    'Integrations & APIs': ['Integrasi & API', 'Integrasaun & API', '集成与 API'],
    'OCS API Integration': ['Integrasi API OCS', 'Integrasaun API OCS', 'OCS API 集成'],
    'Integration with the Online Charging System (OCS) through a set of APIs:': ['Integrasi dengan Online Charging System (OCS) melalui sejumlah API:', 'Integrasaun ho Online Charging System (OCS) liuhusi API balun:', '通过一组 API 与在线计费系统（OCS）集成：'],
    'Authentication': ['Autentikasi', 'Autentikasaun', '身份验证'],
    'Data Usage CDR': ['CDR Pemakaian Data', 'CDR Uza Data', '数据用量 CDR'],
    'Voice & SMS Usage CDR': ['CDR Pemakaian Suara & SMS', 'CDR Uza Voz & SMS', '语音与短信用量 CDR'],
    'Transfer Query': ['Query Transfer', 'Query Transferénsia', '转账查询'],
    'Account Book Query': ['Query Buku Akun', 'Query Livru Konta', '账本查询'],
    'Order Entry': ['Order Entry', 'Order Entry', '订单录入'],
    'Deleted Card Query': ['Query Kartu Terhapus', 'Query Kartaun Hamoos', '已删除卡查询'],
    'VC Card Query': ['Query Kartu VC', 'Query Kartaun VC', 'VC 卡查询'],
    'SMTP Integration for External Apps': ['Integrasi SMTP untuk Aplikasi Eksternal', 'Integrasaun SMTP ba Aplikasaun Esternu', '外部应用的 SMTP 集成'],
    'Connected external applications to SMTP for email delivery: E‑Procurement, the new VoIP dashboard and the new HCPortal apps.': ['Menghubungkan aplikasi eksternal ke SMTP untuk pengiriman email: E‑Procurement, dashboard VoIP baru dan aplikasi HCPortal baru.', 'Liga aplikasaun esternu ba SMTP atu haruka email: E‑Procurement, dashboard VoIP foun no aplikasaun HCPortal foun.', '将外部应用接入 SMTP 发送邮件：E‑Procurement、新版 VoIP 仪表盘和新版 HCPortal 应用。'],
    'Telegram Approval Notifications': ['Notifikasi Persetujuan Telegram', 'Notifikasaun Aprovasaun Telegram', 'Telegram 审批通知'],
    'Telegram notifications for approval steps in external apps: E‑Procurement, IF, Inventory and HCPortal.': ['Notifikasi Telegram untuk tahap persetujuan di aplikasi eksternal: E‑Procurement, IF, Inventory dan HCPortal.', 'Notifikasaun Telegram ba etapa aprovasaun iha aplikasaun esternu: E‑Procurement, IF, Inventory no HCPortal.', '外部应用审批环节的 Telegram 通知：E‑Procurement、IF、Inventory 和 HCPortal。'],
    'SMS Notifications from IGTL': ['Notifikasi SMS dari IGTL', 'Notifikasaun SMS husi IGTL', '来自 IGTL 的短信通知'],
    'Improved the SMS notifications triggered from IGTL, using an SMTP and SMS gateway (SMSGW) setup.': ['Memperbaiki notifikasi SMS yang dipicu dari IGTL, dengan setup SMTP dan SMS gateway (SMSGW).', 'Hadi’a notifikasaun SMS ne’ebé hahú husi IGTL, uza setup SMTP no SMS gateway (SMSGW).', '改进由 IGTL 触发的短信通知，采用 SMTP 与短信网关（SMSGW）方案。'],
    'Support, testing & operations': ['Dukungan, pengujian & operasional', 'Suporta, teste & operasaun', '支持、测试与运维'],
    'UAT & Security Testing for HC': ['UAT & Pengujian Keamanan untuk HC', 'UAT & Teste Seguransa ba HC', '为 HC 进行 UAT 与安全测试'],
    'Supported HC with UAT and security testing of applications in the staging stage, before they go to production.': ['Mendukung HC dengan UAT dan pengujian keamanan aplikasi di tahap staging, sebelum masuk produksi.', 'Suporta HC ho UAT no teste seguransa ba aplikasaun iha etapa staging, molok ba produsaun.', '在应用上线生产前的预发布（staging）阶段，协助 HC 进行 UAT 和安全测试。'],
    'VAS Service Support & Monitoring': ['Dukungan & Monitoring Layanan VAS', 'Suporta & Monitorizasaun Servisu VAS', 'VAS 服务支持与监控'],
    'Supported and monitored VAS services during the period before the new VAS team was in place.': ['Mendukung dan memantau layanan VAS selama periode sebelum tim VAS baru terbentuk.', 'Suporta no monitoriza servisu VAS durante períodu molok ekipa VAS foun hahú.', '在新 VAS 团队到位之前，负责支持和监控 VAS 服务。'],
    'Tracing Stuck Revenue': ['Penelusuran Revenue Tertahan', 'Buka Revenue ne’ebé Para', '追踪滞留收入'],
    'Traced issues where revenue was stuck, following the flow to find where it stopped.': ['Menelusuri masalah revenue yang tertahan, mengikuti alurnya untuk menemukan titik berhentinya.', 'Buka problema revenue ne’ebé para, tuir fluxu atu hetan fatin ne’ebé nia para.', '追踪收入滞留问题，沿着流程找到停滞的环节。'],

    // ----- Moxtel -----
    'My software': ['Software saya', "Software ha'u nian", '我的软件'],
    'A free all-in-one terminal for Windows 10 and 11 — one window for every server you manage.': ['Terminal all-in-one gratis untuk Windows 10 dan 11 — satu jendela untuk semua server yang Anda kelola.', 'Terminal all-in-one gratuitu ba Windows 10 no 11 — janela ida ba server hotu ne’ebé ita jere.', '免费的 Windows 10/11 一体化终端——一个窗口管理你的所有服务器。'],
    'SSH, Telnet, RDP, VNC, SFTP/FTP/S3, Serial, Mosh, WSL — 15 session types': ['SSH, Telnet, RDP, VNC, SFTP/FTP/S3, Serial, Mosh, WSL — 15 jenis sesi', 'SSH, Telnet, RDP, VNC, SFTP/FTP/S3, Serial, Mosh, WSL — tipu sesaun 15', 'SSH、Telnet、RDP、VNC、SFTP/FTP/S3、串口、Mosh、WSL —— 15 种会话类型'],
    'Auto Transfer: scheduled upload, download, mirror and sync with history and alerts': ['Auto Transfer: upload, download, mirror dan sync terjadwal dengan riwayat dan alert', 'Auto Transfer: upload, download, mirror no sync tuir oráriu ho istóriku no alerta', '自动传输：定时上传、下载、镜像和同步，带历史记录和告警'],
    'Jump hosts, proxies, tunnels, Pageant and SSH certificates': ['Jump host, proxy, tunnel, Pageant dan sertifikat SSH', 'Jump host, proxy, tunnel, Pageant no sertifikadu SSH', '跳板机、代理、隧道、Pageant 和 SSH 证书'],
    'Network tools, terminal recording, encrypted local password vault': ['Network tools, perekaman terminal, brankas password lokal terenkripsi', 'Ferramenta rede, gravasaun terminal, kofre password lokál enkriptadu', '网络工具、终端录制、本地加密密码库'],
    'Download for Windows': ['Unduh untuk Windows', 'Download ba Windows', '下载 Windows 版'],
    'Learn more': ['Selengkapnya', 'Hatene liu tan', '了解更多'],
    'Freeware · no account, no cloud, no telemetry · Windows 10/11 (64-bit) ·': ['Freeware · tanpa akun, tanpa cloud, tanpa telemetri · Windows 10/11 (64-bit) ·', 'Freeware · la presiza konta, la iha cloud, la iha telemetria · Windows 10/11 (64-bit) ·', '免费软件 · 无需账号、无云端、无遥测 · Windows 10/11（64 位）·'],
    'Privacy policy': ['Kebijakan privasi', 'Polítika privasidade', '隐私政策'],
    'Moxtel with four SSH terminals side by side': ['Moxtel dengan empat terminal SSH berdampingan', 'Moxtel ho terminal SSH haat lado-ba-lado', 'Moxtel 并排显示四个 SSH 终端'],

    // ----- skills -----
    'What I work with': ['Yang saya gunakan', "Saida mak ha'u uza", '我的技术栈'],
    'Frameworks': ['Framework', 'Framework', '框架'],
    'Databases': ['Database', 'Database', '数据库'],
    'Integration & security': ['Integrasi & keamanan', 'Integrasaun & seguransa', '集成与安全'],
    'QR codes': ['Kode QR', 'Kódigu QR', '二维码'],
    'Cyber security': ['Keamanan siber', 'Seguransa sibernétika', '网络安全'],
    'IT troubleshooting': ['Troubleshooting TI', 'Rezolve problema IT', 'IT 故障排查'],
    'System documentation': ['Dokumentasi sistem', 'Dokumentasaun sistema', '系统文档'],
    'Asset management': ['Manajemen aset', 'Jestaun asset', '资产管理'],
    'Training & coaching': ['Pelatihan & coaching', 'Formasaun & coaching', '培训与辅导'],

    // ----- recognition -----
    'Recognition': ['Penghargaan', 'Rekoñesimentu', '荣誉'],
    'Awards': ['Penghargaan', 'Prémiu', '奖项'],
    'Learning': ['Belajar', 'Aprende', '学习'],
    'Certifications': ['Sertifikasi', 'Sertifikasaun', '认证'],
    'Show all 17 certifications': ['Tampilkan semua 17 sertifikasi', 'Hatudu sertifikasaun 17 hotu', '显示全部 17 项认证'],
    'Ongoing: Merdeka Siber bootcamp · Akademi Crypto · Codepolitan KelasFullstack.': ['Sedang berjalan: bootcamp Merdeka Siber · Akademi Crypto · Codepolitan KelasFullstack.', 'La’o hela: bootcamp Merdeka Siber · Akademi Crypto · Codepolitan KelasFullstack.', '进行中：Merdeka Siber 训练营 · Akademi Crypto · Codepolitan KelasFullstack。'],
    "Organizations I've worked with": ['Organisasi yang pernah bekerja sama dengan saya', "Organizasaun ne’ebé ha'u servisu hamutuk ona", '合作过的机构'],

    // ----- contact, footer -----
    "Let's build something useful": ['Mari membangun sesuatu yang bermanfaat', 'Mai ita harii buat ida ne’ebé útil', '一起做点有用的东西'],
    'A project, a collaboration or a training session? Send me a message — I usually reply within a few days.': ['Ada proyek, kolaborasi atau sesi pelatihan? Kirim pesan — biasanya saya membalas dalam beberapa hari.', "Iha projetu, kolaborasaun ka sesaun formasaun ruma? Haruka mensajen mai — baibain ha'u hatán iha loron balun nia laran.", '有项目、合作或培训需求？给我发消息——我通常会在几天内回复。'],
    'Download CV (PDF)': ['Unduh CV (PDF)', 'Download CV (PDF)', '下载简历（PDF）'],
    'Email': ['Email', 'Email', '邮箱'],

    // ----- names with places (only the place changes) -----
    'IT & Application Officer, Telkomcel': ['IT & Application Officer, Telkomcel', 'IT & Application Officer, Telkomcel', 'Telkomcel IT 与应用专员'],
    'Telkomcel · Dili, Timor-Leste': ['Telkomcel · Dili, Timor-Leste', 'Telkomcel · Dili, Timor-Leste', 'Telkomcel · 东帝汶帝力'],
    'INDMO · Dili, Timor-Leste': ['INDMO · Dili, Timor-Leste', 'INDMO · Dili, Timor-Leste', 'INDMO · 东帝汶帝力'],
    'Multi Science Academy (MSA) · Dili, Timor-Leste': ['Multi Science Academy (MSA) · Dili, Timor-Leste', 'Multi Science Academy (MSA) · Dili, Timor-Leste', 'Multi Science Academy（MSA）· 东帝汶帝力'],
    'Sergio Jose Valente Da Cruz · Dili, Timor-Leste': ['Sergio Jose Valente Da Cruz · Dili, Timor-Leste', 'Sergio Jose Valente Da Cruz · Dili, Timor-Leste', 'Sergio Jose Valente Da Cruz · 东帝汶帝力'],
    'Mobile Network Operation, Telkomcel': ['Mobile Network Operation, Telkomcel', 'Mobile Network Operation, Telkomcel', 'Telkomcel 移动网络运营部'],
    'Platform & DevOps': ['Platform & DevOps', 'Plataforma & DevOps', '平台与 DevOps'],
    'MNO Dashboard': ['Dashboard MNO', 'Dashboard MNO', 'MNO 仪表盘'],
    'IP Transit Traffic ChatOps': ['ChatOps Trafik IP Transit', 'ChatOps Tráfiku IP Transit', 'IP Transit 流量 ChatOps']
  };

  // Month names for dates such as "Mar 2026 – Present".
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var MON = {
    id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    tet: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  };
  var PRESENT = { id: 'Sekarang', tet: 'Agora', zh: '至今' };
  var DATE_RE = /^(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?: \d{4})?|\d{4})(?: – (?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}|Present))?(?: ·)?$/;

  function translateDate(s, lang) {
    if (!DATE_RE.test(s)) return null;
    if (lang === 'zh') {
      // "Aug – Oct 2026" -> "2026 年 8 月 – 10 月"; "Mar 2026 – Present" -> "2026 年 3 月 – 至今"
      var dot = / ·$/.test(s) ? ' ·' : '';
      var parts = s.replace(/ ·$/, '').split(' – ');
      // "Aug – Oct 2026": put the shared year first -> "2026 年 8 月 – 10 月".
      var shared = parts.length === 2 && /^[A-Z][a-z]{2}$/.test(parts[0]) && parts[1].match(/^([A-Z][a-z]{2}) (\d{4})$/);
      if (shared) return shared[2] + ' 年 ' + (MONTHS.indexOf(parts[0]) + 1) + ' 月 – ' + (MONTHS.indexOf(shared[1]) + 1) + ' 月' + dot;
      var out = parts.map(function (p) {
        if (p === 'Present') return PRESENT.zh;
        var m = p.match(/^([A-Z][a-z]{2})(?: (\d{4}))?$/);
        if (!m) return p + ' 年';
        var mon = MONTHS.indexOf(m[1]) + 1;
        return (m[2] ? m[2] + ' 年 ' : '') + mon + ' 月';
      });
      return out.join(' – ') + dot;
    }
    return s.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, function (m) {
      return MON[lang][MONTHS.indexOf(m)];
    }).replace('Present', PRESENT[lang]);
  }

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function lookup(en, lang) {
    if (lang === 'en') return en;
    var row = T[en];
    if (row) return row[COL[lang]];
    var d = translateDate(en, lang);
    return d === null ? en : d;
  }

  // Collect text nodes and translatable attributes once, keeping the English source.
  var texts = [];
  var attrs = [];
  var ATTR_NAMES = ['alt', 'aria-label', 'title'];

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p || p.closest('script, style, svg, [translate="no"]')) return NodeFilter.FILTER_REJECT;
        return /[A-Za-z]/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var v = n.nodeValue;
      var m = v.match(/^(\s*)([\s\S]*?)(\s*)$/);
      texts.push({ node: n, lead: m[1], en: norm(m[2]), trail: m[3] });
    }
    document.querySelectorAll('[alt], [aria-label], [title]').forEach(function (el) {
      if (el.closest('[translate="no"]')) return;
      ATTR_NAMES.forEach(function (a) {
        if (el.hasAttribute(a) && el.getAttribute(a).trim()) attrs.push({ el: el, name: a, en: norm(el.getAttribute(a)) });
      });
    });
    document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach(function (el) {
      attrs.push({ el: el, name: 'content', en: norm(el.getAttribute('content')) });
    });
    attrs.push({ title: true, en: norm(document.title) });
  }

  var current = 'en';

  function apply(lang, persist) {
    if (LANGS.indexOf(lang) < 0) lang = 'en';
    current = lang;
    texts.forEach(function (t) {
      if (!t.node.isConnected) return;
      var v = t.lead + lookup(t.en, lang) + t.trail;
      if (t.node.nodeValue !== v) t.node.nodeValue = v;
    });
    attrs.forEach(function (a) {
      var v = lookup(a.en, lang);
      if (a.title) document.title = v;
      else a.el.setAttribute(a.name, v);
    });
    var root = document.documentElement;
    root.lang = HTML_LANG[lang];
    root.classList.remove('i18n-wait');
    var sel = document.getElementById('lang');
    if (sel && sel.value !== lang) sel.value = lang;
    if (persist) { try { localStorage.setItem('lang', lang); } catch (e) {} }
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  // Public helpers for site.js (dynamic strings such as the "Show all N projects" button).
  window.i18n = {
    t: function (en, vars) {
      var s = lookup(en, current);
      if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
      return s;
    },
    get lang() { return current; },
    set: function (lang) { apply(lang, true); },
    // For checking coverage: English strings on the page that have no translation.
    missing: function () {
      var seen = {};
      texts.map(function (t) { return t.en; }).concat(attrs.map(function (a) { return a.en; })).forEach(function (en) {
        if (!T[en] && translateDate(en, 'id') === null) seen[en] = true;
      });
      return Object.keys(seen);
    }
  };

  collect();
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  apply(saved || 'en');

  var sel = document.getElementById('lang');
  if (sel) sel.addEventListener('change', function () { apply(sel.value, true); });
})();
