block('text-about').content()(node => {
    const root = node.data.root;

    return [
        {
            elem: 'photo',
            attrs: {
                src: `${root}/text-about__photo.png`,
                alt: 'Директор'
            }
        },
        {
            elem: 'content',
            content: [
                {
                    elem: 'fio',
                    tag: 'h2',
                    content: 'Визенкова Наталья Игоревна'
                },
                {
                    elem: 'activity',
                    tag: 'p',
                    content: 'директор фонда'
                },
                {
                    block: 'text',
                    mix: { block: 'text-about', elem: 'text' },
                    content: [
                        {
                            elem: 'p',
                            content: 'Родилась и выросла в городе Симферополе. Окончила Крымский институт экономики и хозяйственного права по специальности «экономист» и Таврический Национальный Университет им. Вернадского по специальности «правовед».'
                        },
                        {
                            elem: 'p',
                            content: 'Активный участник благотворительных организаций: Лига защиты животных «Верный друг», Крымское объединение волонтеров «Братья наши меньшие», Общественное объединение волонтеров «Добро мира».'
                        }
                    ]
                },
                {
                    block: 'contacts',
                    mix: { block: 'text-about', elem: 'contacts' }
                },
            ]
        }
    ];
});
