//#layer css
Botex.CSS.add({
    '.$$': {
        'font': '14px arial',

        'height': '100%'
    },
    '.$$__content': {
        'height': '100%',

        'display': 'flex'
    },
    '.$$__checkboxes': {
        'width': '30px',

        'background': '#ccc'
    },
    '.$$__text': {
        'font': 'inherit',

        'padding': '10px',

        'flex-grow': '2',
        'line-height': '25px',

        'border': '0 none',
        'resize': 'none'
    }
});
//#endlayer

Todo.App = Bricks.inherit(Botex.Widget, {
    _render: function() {
        return {
            className: '$$',
            content: Botex.zen('.$$__content', [
                Botex.zen('.$$__checkboxes'),
                Botex.zen('textarea.$$__text')
            ])
        };
    }
});
