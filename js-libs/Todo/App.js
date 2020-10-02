//#layer css
Botex.CSS.add({
    '.$$': {
        'font': '14px arial',

        'min-height': '100%',
        'display': 'flex',

        'background': '#ccc'
    },
    '.$$__checkboxes': {
        'position': 'relative',

        'width': '30px'
    },
    '.$$__checkbox': {
        'position': 'absolute',
        'left': '0',

        'width': '20px',
        'height': '20px',
        'padding': '5px'
    },
    '.$$__text': {
        'padding': '10px',

        'flex-grow': '2',
        'line-height': '25px',

        'background': '#fff'
    }
});
//#endlayer

Todo.App = Bricks.inherit(Botex.Widget, {
    constructor: function() {
        Todo.App.superclass.constructor.apply(this, arguments);
        this._lines = new Botex.MutableArray();
        this._on('$$__text', 'input', this.$$_onInput);
    },

    mount: function() {
        Todo.App.superclass.mount.apply(this, arguments);
        this._checkLines();
    },

    _render: function() {
        return {
            className: '$$',
            content: [
                Botex.zen('.$$__checkboxes', this._lines.transform(function(line) {
                    return Botex.if(line.hasText, function() {
                        return Botex.zen('input.$$__checkbox[type=checkbox]', {
                            style: {
                                'top': line.offset
                            }
                        });
                    })
                }, this)),
                Botex.zen('.$$__text[contenteditable=true]', Botex.zen('div', Botex.zen('br')))
            ]
        };
    },

    _checkLines: function() {
        [].slice.call(this._getEls('$$__text')[0].childNodes, 0).forEach(function(el) {
            if (el.$$_meta) {
                el.$$_meta.hasText.setValue(el.innerText.trim().length > 0);
                el.$$_meta.offset.setValue(el.offsetTop);
            } else {
                el.$$_meta = {
                    width: el.offsetWidth,
                    hasText: new Quantum.Quant(el.innerText.trim().length > 0),
                    offset: new Quantum.Quant(el.offsetTop)
                };
                this._lines.push(el.$$_meta);
            }
        }, this);
        this._lines.filter(function(line) {
            return line.width > 0;
        });
    },

    $$_onInput: function() {
        this._checkLines();
    }
});
