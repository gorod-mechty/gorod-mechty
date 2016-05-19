block('social').content()(() => {
    var channels = [
        {
            channel: 'fb',
            title: 'Facebook',
            url: 'https://facebook.com/bla'
        },
        {
            channel: 'tw',
            title: 'Facebook',
            url: 'https://facebook.com/bla'
        },
        {
            channel: 'vk',
            title: 'Facebook',
            url: 'https://facebook.com/bla'
        },
        {
            channel: 'ok',
            title: 'Facebook',
            url: 'https://facebook.com/bla'
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
