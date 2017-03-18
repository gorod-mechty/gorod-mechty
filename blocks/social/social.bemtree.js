block('social').content()([
        {
            channel: 'fb',
            title: 'Facebook',
            url: 'https://www.facebook.com/groups/598279340197050/'
        },
        {
            channel: 'tw',
            title: 'Twitter',
            url: 'https://twitter.com/gorod_mechty'
        },
        {
            channel: 'vk',
            title: 'ВКонтакте',
            url: 'https://vk.com/gorod.mechty'
        },
        {
            channel: 'ok',
            title: 'Одноклаcсники',
            url: 'https://ok.ru/group/54637469958162'
        }
    ].map(channel => {
        return {
            elem: 'channel',
            content: {
                block: 'link',
                mix: {
                    block: 'social',
                    elem: 'link',
                    elemMods: { channel: channel.channel }
                },
                url: channel.url,
                content: channel.title
            }
        };
    })
);
