block('social').content()(() => {
    var channels = [
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
        },
    ];

    return channels.map(channel => {
        return {
            elem: 'channel',
            content: {
                elem: 'link',
                elemMods: { channel: channel.channel },
                attrs: { href: channel.url },
                content: channel.title
            }
        };
    });
});
/*

    [
    {
        elem: 'channel',
        content: {
            elem: 'link',
            elemMods: { channel: 'fb' },
            url: 'https://facebook.com/bla',
            content: 'Facebook'
        }
    },
    {
        elem: 'channel',
        content: {
            elem: 'link',
            elemMods: { channel: 'tw' },
            url: 'https://facebook.com/bla',
            content: 'Tweeter'
        }
    },
    {
        elem: 'channel',
        content: {
            elem: 'link',
            elemMods: { channel: 'vk' },
            url: 'https://facebook.com/bla',
            content: 'VKontakte'
        }
    },
    {
        elem: 'channel',
        content: {
            elem: 'link',
            elemMods: { channel: 'ok' },
            url: 'https://facebook.com/bla',
            content: 'Odnoklassniky'
        }
    }
]);
*/
