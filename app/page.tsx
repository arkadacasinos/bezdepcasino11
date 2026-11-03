import React from 'react'

const REF_URL = 'https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603'

export default function Page() {
  return (
    <div className="x4v7-shell flex flex-col min-h-screen">
      {/* Top Header */}
      <header className="x4v7-topbar">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger link targeting #mobile-sidebar-drawer */}
          <a
            href="#mobile-sidebar-drawer"
            className="md:hidden p-2 text-[#b1bad3] hover:text-white rounded"
            aria-label="Открыть меню"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Nav switcher pills: Казино | Спорт */}
          <div className="x4v7-nav-pill-group">
            <a href={REF_URL} className="x4v7-nav-pill is-active">
              Казино
            </a>
            <a href={REF_URL} className="x4v7-nav-pill">
              Спорт
            </a>
          </div>

          {/* Logo */}
          <a href={REF_URL} className="flex items-center gap-2 ml-1 md:ml-4" aria-label="Stake главная">
            <span className="text-white font-extrabold text-2xl tracking-tight italic select-none">
              Stake
            </span>
          </a>
        </div>

        {/* Right CTA buttons: Войти, Зарегистрироваться */}
        <div className="flex items-center gap-2">
          <a href={REF_URL} className="x4v7-btn-login">
            Войти
          </a>
          <a href={REF_URL} className="hidden sm:inline-flex x4v7-btn-primary">
            Зарегистрироваться
          </a>
        </div>
      </header>

      {/* Main Container with Sidebar + Main Content */}
      <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
        {/* Desktop Left Sidebar Rail */}
        <aside className="hidden md:flex flex-col w-[240px] shrink-0 bg-[#1a2c38] border-r border-[#213743] p-3 justify-between">
          <div className="flex flex-col gap-1">
            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="8" width="18" height="13" rx="2" />
                <path d="M12 8V21M3 13h18M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
              </svg>
              <span>Акции</span>
              <svg className="ml-auto text-xs" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
              <span>Конкурсы</span>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Партнерам</span>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-2.34M14 14.66V17c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.34M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
              <span>ВИП-клуб</span>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
                <path d="M6 6h10M6 10h10" />
              </svg>
              <span>Блог</span>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Форум</span>
            </a>
          </div>

          <div className="flex flex-col gap-1 pt-4 border-t border-[#213743]">
            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Спонсорство</span>
              <svg className="ml-auto text-xs" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Ответственная игра</span>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              <span>Поддержка</span>
            </a>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Язык: Русский</span>
              <svg className="ml-auto text-xs" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex flex-col p-3 md:p-6 gap-5 overflow-hidden">
          {/* Hero Banner Section (1st Screen like Screen 2) */}
          <section className="x4v7-hero-card flex flex-col items-center justify-center p-6 md:p-10 relative text-center">
            {/* Background art image */}
            <img
              src="/hero-banner.png"
              alt="Крупнейшее в мире онлайн-казино и букмекерская контора"
              className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071824] via-[#071824]/60 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-5">
                Крупнейшее в мире онлайн-казино и букмекерская контора
              </h1>

              {/* Big primary CTA */}
              <a
                href={REF_URL}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1475e1] hover:bg-[#1f86f8] text-white font-bold text-base rounded shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Зарегистрироваться
              </a>

              {/* Social login row */}
              <div className="flex flex-col items-center mt-5">
                <span className="text-xs text-[#b1bad3] mb-3">Или продолжить с</span>
                <div className="flex items-center gap-3">
                  {/* Google */}
                  <a
                    href={REF_URL}
                    className="w-12 h-9 bg-[#213743] hover:bg-[#2f4553] rounded flex items-center justify-center transition-colors"
                    aria-label="Google вход"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" />
                      <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z" />
                      <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href={REF_URL}
                    className="w-12 h-9 bg-[#213743] hover:bg-[#2f4553] rounded flex items-center justify-center transition-colors"
                    aria-label="Facebook вход"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Kick / K */}
                  <a
                    href={REF_URL}
                    className="w-12 h-9 bg-[#213743] hover:bg-[#2f4553] rounded flex items-center justify-center transition-colors"
                    aria-label="Kick вход"
                  >
                    <span className="text-[#53fc18] font-black text-base select-none">K</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats Banner (Casino / Sport counters) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={REF_URL} className="x4v7-stat-pill">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 bg-[#2f4553] rounded text-[#1475e1]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14-4-4 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
                  </svg>
                </span>
                <span className="text-white text-sm font-bold">Казино</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#53fc18]" />
                <span className="text-[#53fc18] text-xs font-semibold">20 321 в игре</span>
              </div>
            </a>

            <a href={REF_URL} className="x4v7-stat-pill">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 bg-[#2f4553] rounded text-[#1475e1]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M4.93 4.93 12 12m0 0 7.07 7.07M12 12l7.07-7.07M12 12 4.93 19.07" />
                  </svg>
                </span>
                <span className="text-white text-sm font-bold">Спорт</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#53fc18]" />
                <span className="text-[#53fc18] text-xs font-semibold">47 969 в ставках</span>
              </div>
            </a>
          </div>

          {/* Search bar mock wrapped in an anchor link for 100% pure HTML */}
          <a
            href={REF_URL}
            className="relative w-full block cursor-pointer text-left"
            aria-label="Искать Stake.com"
          >
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b1bad3]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <div className="x4v7-search-input text-[#b1bad3]">
              Искать Stake.com
            </div>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#b1bad3] bg-[#2f4553] px-2 py-0.5 rounded">
              Ctrl + K
            </span>
          </a>

          {/* Trend Games Link Bar */}
          <a href={REF_URL} className="flex items-center gap-2 text-white font-bold text-base hover:text-[#1475e1] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <span>Игры в тренде</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>

          {/* ========================================================================= */}
          {/* SEO Content Article Sheet (300-400 words dense keyword coverage)           */}
          {/* ========================================================================= */}
          <article className="x4v7-seo-section flex flex-col gap-6 mt-2">
            <div>
              <h2 id="bezdepozitnye-bonusy" className="x4v7-seo-h2">
                <span className="text-[#1475e1]">●</span>
                Бездепозитные бонусы и бездепозитный бонус казино: как получить максимум выгоды
              </h2>
              <p className="x4v7-seo-p">
                Современные <strong>бездепозитные бонусы</strong> открывают пользователям уникальную возможность опробовать популярные слоты и настольные игры без личных финансовых рисков. Получая желанный <strong>бездепозитный бонус</strong>, каждый игрок сразу может оценить отдачу автоматов, работу службы поддержки и скорость вывода средств. Надежный <strong>бездепозитный бонус казино</strong> доступен каждому новому пользователю сразу после прохождения простой регистрации и подтверждения учетной записи.
              </p>
            </div>

            <div>
              <h2 id="bonus-za-registraciyu" className="x4v7-seo-h2">
                <span className="text-[#1475e1]">●</span>
                Бездепозитный бонус за регистрацию и бездепозитные бонусы за регистрацию
              </h2>
              <p className="x4v7-seo-p">
                Наиболее популярным приветственным поощрением заслуженно считается <strong>бездепозитный бонус за регистрацию</strong>. Лицензированные игровые площадки предлагают щедрые <strong>бездепозитные бонусы за регистрацию</strong> в виде пакетов бесплатных вращений или фиксированной денежной суммы на баланс. Активировав такой подарок, вы сразу приступаете к ставкам на реальные деньги, не рискуя своим кошельком, при этом все заработанные выигрыши легко выводятся на карту или криптовалютный кошелек.
              </p>
            </div>

            <div>
              <h2 id="bezdep-bonus" className="x4v7-seo-h2">
                <span className="text-[#1475e1]">●</span>
                Бездеп, бездепы и эксклюзивный бездеп бонус для игроков
              </h2>
              <p className="x4v7-seo-p">
                Сегодня классический <strong>бездеп</strong> привлекает как начинающих гемблеров, так и опытных энтузиастов. Свежие <strong>бездепы</strong> начисляются мгновенно без скрытых условий и депозитов. Используя специальный <strong>бездеп бонус</strong> и регулярные <strong>бездеп бонусы</strong>, участники клуба могут тестировать последние новинки от ведущих провайдеров мира. Лояльные условия отыгрыша делают каждый такой подарок действительно выгодным и доступным.
              </p>
            </div>

            <div>
              <h2 id="bezdepy-za-registraciyu" className="x4v7-seo-h2">
                <span className="text-[#1475e1]">●</span>
                Бездепы за регистрацию и моментальный бездеп за регистрацию
              </h2>
              <p className="x4v7-seo-p">
                Если вы ищете гарантированные <strong>бездепы за регистрацию</strong>, переходите в наш каталог акций. Быстрый <strong>бездеп за регистрацию</strong> зачисляется в считанные секунды: достаточно заполнить форму, указать актуальные данные и нажать кнопку активации. Прозрачные правила, отсутствие скрытых комиссий и моментальный доступ ко всем сертифицированным слотам делают этот старт максимально комфортным.
              </p>
            </div>

            <div>
              <h2 id="bonusy-v-kazino" className="x4v7-seo-h2">
                <span className="text-[#1475e1]">●</span>
                Бездепы в казино, бездепы казино и топовые бонусы в казино
              </h2>
              <p className="x4v7-seo-p">
                Регулярные <strong>бездепы в казино</strong> позволяют наслаждаться азартом без непредвиденных затрат. Рейтинговые <strong>бездепы казино</strong> обновляются еженедельно, предоставляя участникам турниров дополнительные шансы на крупный куш. Каждый актуальный <strong>бонус казино</strong> и разнообразные <strong>бонусы в казино</strong> созданы для того, чтобы увеличить банкролл и подарить яркие эмоции от каждой сыгранной сессии. Забирайте лучший подарок прямо сейчас!
              </p>
            </div>

            <div>
              <h2 id="pravila-vyvoda" className="x4v7-seo-h2">
                <span className="text-[#1475e1]">●</span>
                Правила отыгрыша и быстрый вывод выигрышей
              </h2>
              <p className="x4v7-seo-p">
                Чтобы успешно обналичить полученный <strong>бездепозитный бонус</strong> или выигранные средства с бесплатных вращений, обращайте внимание на вейджер и сроки отыгрыша. Надежные <strong>бонусы в казино</strong> отличаются прозрачными правилами: после выполнения простых условий выигрыш мгновенно поступает на ваш баланс и доступен к выводу любым удобным способом без лишних проверок.
              </p>
            </div>

            {/* Bottom Call to action inside SEO text */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#213743]">
              <span className="text-white font-semibold text-sm">
                Готовы забрать свой бездепозитный бонус за регистрацию?
              </span>
              <a
                href={REF_URL}
                className="w-full sm:w-auto x4v7-btn-primary py-2.5 px-6 font-bold"
              >
                Получить бездеп бонус
              </a>
            </div>
          </article>

          {/* Footer Hashtags navigation according to memory */}
          <footer className="mt-8 pt-6 pb-10 border-t border-[#213743] flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#b1bad3] mr-2">Тематические разделы:</span>
              <a href="#bezdepozitnye-bonusy" className="x4v7-tag-chip">
                #бездепозитные_бонусы
              </a>
              <a href="#bezdepozitnye-bonusy" className="x4v7-tag-chip">
                #бездепозитный_бонус
              </a>
              <a href="#bonus-za-registraciyu" className="x4v7-tag-chip">
                #бездепозитный_бонус_за_регистрацию
              </a>
              <a href="#bonus-za-registraciyu" className="x4v7-tag-chip">
                #бездепозитные_бонусы_за_регистрацию
              </a>
              <a href="#bezdep-bonus" className="x4v7-tag-chip">
                #бездеп
              </a>
              <a href="#bezdep-bonus" className="x4v7-tag-chip">
                #бездепы
              </a>
              <a href="#bezdep-bonus" className="x4v7-tag-chip">
                #бездеп_бонусы
              </a>
              <a href="#bezdep-bonus" className="x4v7-tag-chip">
                #бездеп_бонус
              </a>
              <a href="#bezdepy-za-registraciyu" className="x4v7-tag-chip">
                #бездепы_за_регистрацию
              </a>
              <a href="#bezdepy-za-registraciyu" className="x4v7-tag-chip">
                #бездеп_за_регистрацию
              </a>
              <a href="#bezdepozitnye-bonusy" className="x4v7-tag-chip">
                #бездепозитный_бонус_казино
              </a>
              <a href="#bonusy-v-kazino" className="x4v7-tag-chip">
                #бездепы_в_казино
              </a>
              <a href="#bonusy-v-kazino" className="x4v7-tag-chip">
                #бездепы_казино
              </a>
              <a href="#bonusy-v-kazino" className="x4v7-tag-chip">
                #бонус_казино
              </a>
              <a href="#bonusy-v-kazino" className="x4v7-tag-chip">
                #бонусы_в_казино
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#557086] pt-4">
              <span>© 2025 Stake. Все права защищены. 18+ Играйте ответственно.</span>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a href={REF_URL} className="hover:text-[#b1bad3]">Условия использования</a>
                <a href={REF_URL} className="hover:text-[#b1bad3]">Политика конфиденциальности</a>
                <a href={REF_URL} className="hover:text-[#b1bad3]">AML политика</a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Drawer (CSS :target anchored) */}
      <div id="mobile-sidebar-drawer" className="fixed inset-0 z-50 md:hidden">
        {/* Scrim click to close */}
        <a
          href="#!"
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          aria-label="Закрыть меню"
        />

        {/* Drawer panel */}
        <div className="relative w-[280px] h-full bg-[#1a2c38] p-4 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-[#213743]">
              <span className="text-white font-extrabold text-2xl italic">Stake</span>
              <a href="#!" className="p-2 text-[#b1bad3] hover:text-white" aria-label="Закрыть">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </a>
            </div>

            <a href={REF_URL} className="x4v7-sidebar-item">
              <span>Акции</span>
            </a>
            <a href={REF_URL} className="x4v7-sidebar-item">
              <span>Конкурсы</span>
            </a>
            <a href={REF_URL} className="x4v7-sidebar-item">
              <span>Партнерам</span>
            </a>
            <a href={REF_URL} className="x4v7-sidebar-item">
              <span>ВИП-клуб</span>
            </a>
            <a href={REF_URL} className="x4v7-sidebar-item">
              <span>Блог</span>
            </a>
            <a href={REF_URL} className="x4v7-sidebar-item">
              <span>Форум</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#213743] flex flex-col gap-2">
            <a href={REF_URL} className="x4v7-btn-primary w-full text-center py-2.5">
              Зарегистрироваться
            </a>
            <a href={REF_URL} className="x4v7-btn-login w-full text-center py-2.5">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
