block('contacts').content()([
    {
        elem: 'contact',
        elemMods: { type: 'phone' },
        content: '+7 978 859 29 63'
    },
    {
        elem: 'contact',
        elemMods: { type: 'email' },
        content: 'info@gorod-mechty.org'
    }
]);

/*
block('contacts').content()(function() {
    return [
        {
            block: 'contacts',
            content: [
                {
                    elem: 'phone',
                    content: '+7 978 859 29 63'
                },
                {
                    elem: 'email',
                    content: 'info@gorod-mechty.org'
                }
            ]
        }
    ];
});
*/
