block('contact-form').content()([
    {
        elem: 'title',
        content: 'Напишите нам'
    },
    {
        block: 'input',
        mix: { block: 'contact-form', elem: 'input', elemMods: { first: true } },
        placeholder: 'Имя и фамилия'
    },
    {
        block: 'input',
        mix: { block: 'contact-form', elem: 'input' },
        placeholder: 'Электронная почта'
    },
    {
        block: 'textarea',
        mix: { block: 'contact-form', elem: 'textarea' },
        placeholder: 'Сообщение'
    },
    {
        block: 'button',
        mix: { block: 'contact-form', elem: 'button' },
        text: 'Отправить'
    }
]);
