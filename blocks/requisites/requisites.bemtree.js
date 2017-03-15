block('requisites').content()([
    {
        elem: 'title',
        tag: 'h2',
        content: 'Реквизиты'
    },
    {
        elem: 'items',
        tag: 'dl',
        content: [
            {
                elem: 'item-title',
                tag: 'dt',
                content: 'Организация'
            },
            {
                elem: 'item-description',
                tag: 'dd',
                content: 'БО «Фонд Місто Мрії» в ЧБРР'
            },
            {
                elem: 'item-title',
                tag: 'dt',
                content: 'Счет'
            },
            {
                elem: 'item-description',
                tag: 'dd',
                content: '26003000141343'
            },
            {
                elem: 'item-title',
                tag: 'dt',
                content: 'МФО'
            },
            {
                elem: 'item-description',
                tag: 'dd',
                content: '384577'
            },
            {
                elem: 'item-title',
                tag: 'dt',
                content: 'ОКПО'
            },
            {
                elem: 'item-description',
                tag: 'dd',
                content: '38711011'
            },
            {
                elem: 'item-title',
                tag: 'dt',
                content: 'ОКПО Банка'
            },
            {
                elem: 'item-description',
                tag: 'dd',
                content: '20929956'
            },
        ]
    },
    {
        elem: 'donate',
        content: [
            {
                tag: 'p',
                content: 'Необязательно идти в банк, вы можете воспользоваться более простым и удобным способом переводов'
            },
            {
                block: 'link',
                url: '',
                mix: { block: 'requisites', elem: 'link' },
                content: 'Помочь фонду'
            }
        ]
    }
]);
