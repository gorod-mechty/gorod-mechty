block('requisites').content()([
    {
        elem: 'title',
        content: 'Реквизиты'
    },
    {
        elem: 'items',
        content: [
            {
                elem: 'item-title',
                content: 'Организация'
            },
            {
                elem: 'item-description',
                content: 'БО «Фонд Місто Мрії» в ЧБРР'
            },
            {
                elem: 'item-title',
                content: 'Счет'
            },
            {
                elem: 'item-description',
                content: '26003000141343'
            },
            {
                elem: 'item-title',
                content: 'МФО'
            },
            {
                elem: 'item-description',
                content: '384577'
            },
            {
                elem: 'item-title',
                content: 'ОКПО'
            },
            {
                elem: 'item-description',
                content: '38711011'
            },
            {
                elem: 'item-title',
                content: 'ОКПО Банка'
            },
            {
                elem: 'item-description',
                content: '20929956'
            },
        ]
    },
    {
        elem: 'donate',
        content: [
            {
                elem: 'p',
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
