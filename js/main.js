const appRoot = document.getElementById('app');
if (appRoot && window.React && window.ReactDOM) {
  const { createElement: h, useMemo, useState } = React;
  const locale = document.documentElement.lang || 'en';

  const contentByLocale = {
    en: {
      hero: {
        title: 'Curated companions for premium experiences.',
        description:
          'Discover exclusive profiles, availability, and a seamless booking journey. Every model has a dedicated page with galleries, stats, and pricing.',
        ctaText: 'Explore available models',
        ctaLink: '#models',
        quickTitle: 'Quick booking',
        quickDescription:
          'Share your preferred date, time, and duration, and our team will confirm within minutes.',
        quickCtaText: 'View Sweety profile',
        quickCtaLink: 'models/sweety.html',
      },
      modelsTitle: 'Model summary',
      availabilityLabel: 'Show only currently available',
      showProfileLabel: 'Show profile',
      hideProfileLabel: 'Hide profile',
      pricingLabel: 'Pricing',
      adminNotice: null,
      models: [
        {
          id: 'sweety',
          name: 'Sweety',
          availabilityStatus: 'available',
          availabilityText: 'Available today',
          description:
            'Warm, playful, and elegant. Signature experience with cocktail bar tours and rooftop views.',
          pricingText: 'From $320 / hour',
          details: [
            { label: 'Languages', value: 'English, Mandarin' },
            { label: 'Location', value: 'Central City' },
            { label: 'Highlights', value: 'Art galleries, fine dining, VIP events.' },
          ],
          link: { href: 'models/sweety.html', label: 'View full profile' },
          image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'aria',
          name: 'Aria',
          availabilityStatus: 'available',
          availabilityText: 'Available this week',
          description: 'Chic, confident, and adventurous. Ideal for luxury shopping and private events.',
          pricingText: 'From $350 / hour',
          details: [
            { label: 'Languages', value: 'English, Japanese' },
            { label: 'Location', value: 'Harbor District' },
            { label: 'Highlights', value: 'Yacht dinners, cultural tours.' },
          ],
          link: { href: 'models/aria.html', label: 'View full profile' },
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'nova',
          name: 'Nova',
          availabilityStatus: 'unavailable',
          availabilityText: 'Currently booked',
          description: 'Graceful and attentive. Specializes in gala evenings and corporate dinners.',
          pricingText: 'From $300 / hour',
          details: [
            { label: 'Languages', value: 'English, Russian' },
            { label: 'Location', value: 'Riverside' },
            { label: 'Highlights', value: 'Opera nights, art previews.' },
          ],
          link: null,
          image:
            'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=600&q=80',
        },
      ],
      why: {
        title: 'Why Lumina',
        cards: [
          {
            title: 'Fast, clean galleries',
            description:
              'High-resolution photos delivered with lazy loading for an instant, smooth browsing experience.',
          },
          {
            title: 'Secure & discreet',
            description:
              'SSL-ready infrastructure and privacy-first workflows to keep every booking safe and confidential.',
          },
          {
            title: '24/7 concierge',
            description: 'Reach us via WeChat, WhatsApp, LINE, Telegram, or mobile phone from any page.',
          },
        ],
      },
    },
    zh: {
      hero: {
        title: '精选陪伴服务，尊享高端体验。',
        description: '浏览模特档案、查看档期，并通过便捷的预约流程快速确认。',
        ctaText: '查看当前可预约模特',
        ctaLink: '#models',
        quickTitle: '快速预约',
        quickDescription: '填写期望日期、时间与时长，我们将在数分钟内确认。',
        quickCtaText: '查看 Sweety 档案',
        quickCtaLink: 'models/sweety.html',
      },
      modelsTitle: '模特概览',
      availabilityLabel: '仅显示可预约',
      showProfileLabel: '显示档案',
      hideProfileLabel: '隐藏档案',
      pricingLabel: '价格',
      adminNotice: {
        text: '管理员入口：',
        link: { href: '/admin', label: '/admin' },
        trailing: '（需要后台口令）',
      },
      models: [
        {
          id: 'sweety',
          name: 'Sweety',
          availabilityStatus: 'available',
          availabilityText: '今日可约',
          description: '温柔俏皮，适合鸡尾酒吧与高空夜景。',
          pricingText: '$320 / 小时起',
          details: [
            { label: '语言', value: '英语，中文' },
            { label: '地点', value: '中心城区' },
            { label: '亮点', value: '艺术展览、精致餐饮、VIP 活动。' },
          ],
          link: { href: 'models/sweety.html', label: '完整档案' },
          image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'aria',
          name: 'Aria',
          availabilityStatus: 'available',
          availabilityText: '本周可约',
          description: '优雅自信，适合高端购物与私人活动。',
          pricingText: '$350 / 小时起',
          details: [
            { label: '语言', value: '英语，日语' },
            { label: '地点', value: '海港区' },
            { label: '亮点', value: '游艇晚餐、文化之旅。' },
          ],
          link: { href: 'models/aria.html', label: '完整档案' },
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        },
      ],
      why: null,
    },
    ja: {
      hero: {
        title: '上質な時間を提供する厳選プロフィール。',
        description: 'モデル一覧・空き状況・予約フォームを一つの場所でご案内します。',
        ctaText: '利用可能なモデルを見る',
        ctaLink: '#models',
        quickTitle: 'クイック予約',
        quickDescription: 'ご希望の日時と滞在時間を入力いただければ、すぐに確認します。',
        quickCtaText: 'Sweety プロフィールへ',
        quickCtaLink: 'models/sweety.html',
      },
      modelsTitle: 'モデル概要',
      availabilityLabel: '空きありのみ表示',
      showProfileLabel: 'プロフィール表示',
      hideProfileLabel: 'プロフィール非表示',
      pricingLabel: '料金',
      adminNotice: null,
      models: [
        {
          id: 'sweety',
          name: 'Sweety',
          availabilityStatus: 'available',
          availabilityText: '本日空きあり',
          description: '明るく上品で、ルーフトップやバーに最適です。',
          pricingText: '$320 / 時間〜',
          details: [
            { label: '言語', value: '英語、中国語' },
            { label: 'エリア', value: '中心部' },
            { label: '特長', value: 'アートギャラリー、上質なディナー。' },
          ],
          link: { href: 'models/sweety.html', label: '詳細ページ' },
          image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'aria',
          name: 'Aria',
          availabilityStatus: 'available',
          availabilityText: '今週空きあり',
          description: '洗練された雰囲気で、ショッピングやイベントに最適。',
          pricingText: '$350 / 時間〜',
          details: [
            { label: '言語', value: '英語、日本語' },
            { label: 'エリア', value: 'ハーバー地区' },
            { label: '特長', value: 'ヨットディナー、文化ツアー。' },
          ],
          link: { href: 'models/aria.html', label: '詳細ページ' },
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        },
      ],
      why: null,
    },
  };

  const copy = contentByLocale[locale] || contentByLocale.en;

  const App = () => {
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [openProfiles, setOpenProfiles] = useState(() => new Set());
    const isFileProtocol = window.location.protocol === 'file:';

    const visibleModels = useMemo(() => {
      if (!showAvailableOnly) {
        return copy.models;
      }
      return copy.models.filter((model) => model.availabilityStatus === 'available');
    }, [showAvailableOnly]);

    const toggleProfile = (id) => {
      setOpenProfiles((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    return h(
      React.Fragment,
      null,
      h(
        'section',
        { className: 'container hero' },
        h(
          'div',
          { className: 'hero-card' },
          h('h1', null, copy.hero.title),
          h('p', null, copy.hero.description),
          h('a', { className: 'button', href: copy.hero.ctaLink }, copy.hero.ctaText),
        ),
        h(
          'div',
          { className: 'hero-card' },
          h('h2', null, copy.hero.quickTitle),
          h('p', null, copy.hero.quickDescription),
          h('a', { className: 'button', href: copy.hero.quickCtaLink }, copy.hero.quickCtaText),
        ),
      ),
      h(
        'section',
        { id: 'models', className: 'section' },
        h(
          'div',
          { className: 'container' },
          h('h2', { className: 'section-title' }, copy.modelsTitle),
          h(
            'div',
            { className: 'controls' },
            h(
              'label',
              { className: 'toggle' },
              h('input', {
                type: 'checkbox',
                checked: showAvailableOnly,
                onChange: (event) => setShowAvailableOnly(event.target.checked),
              }),
              copy.availabilityLabel,
            ),
          ),
          copy.adminNotice
            ? h(
                'div',
                { className: 'notice admin-notice' },
                isFileProtocol
                  ? '管理员入口：请通过服务器访问 /admin（本地文件模式不可用）'
                  : [
                      copy.adminNotice.text,
                      h('a', { href: copy.adminNotice.link.href }, copy.adminNotice.link.label),
                      copy.adminNotice.trailing,
                    ],
              )
            : null,
          h(
            'div',
            { className: 'cards' },
            visibleModels.map((model) =>
              h(
                'article',
                { key: model.id, className: 'card' },
                h('img', { src: model.image, alt: model.name, loading: 'lazy' }),
                h(
                  'div',
                  { className: `availability ${model.availabilityStatus}` },
                  model.availabilityText,
                ),
                h('h3', null, model.name),
                h('p', null, model.description),
                h(
                  'p',
                  null,
                  h('strong', null, `${copy.pricingLabel}:`),
                  ` ${model.pricingText}`,
                ),
                h(
                  'button',
                  {
                    className: 'toggle',
                    type: 'button',
                    onClick: () => toggleProfile(model.id),
                  },
                  openProfiles.has(model.id) ? copy.hideProfileLabel : copy.showProfileLabel,
                ),
                h(
                  'div',
                  {
                    className: `profile-details${openProfiles.has(model.id) ? ' show' : ''}`,
                  },
                  model.details.map((detail) =>
                    h(
                      'p',
                      { key: detail.label },
                      h('strong', null, `${detail.label}:`),
                      ` ${detail.value}`,
                    ),
                  ),
                  model.link
                    ? h('a', { className: 'button', href: model.link.href }, model.link.label)
                    : null,
                ),
              ),
            ),
          ),
        ),
      ),
      copy.why
        ? h(
            'section',
            { className: 'section' },
            h(
              'div',
              { className: 'container' },
              h('h2', { className: 'section-title' }, copy.why.title),
              h(
                'div',
                { className: 'cards' },
                copy.why.cards.map((card) =>
                  h(
                    'div',
                    { key: card.title, className: 'card' },
                    h('h3', null, card.title),
                    h('p', null, card.description),
                  ),
                ),
              ),
            ),
          )
        : null,
    );
  };

  ReactDOM.createRoot(appRoot).render(h(App));
}

const bookingForm = document.querySelector('[data-booking-form]');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    const form = event.target;
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
      }
    });
    if (!valid) {
      event.preventDefault();
      alert('Please complete all required fields.');
    }
  });
}
