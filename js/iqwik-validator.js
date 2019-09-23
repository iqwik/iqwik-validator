/* author: Artem Zubarev
 *  git: https://github.com/iqwik/iqwik-validator/
 */
(function($){
    $.fn.iqwikValidator = function(options) {
        var settings = $.extend( {
            text        : /^([\w|\d]|\s){2,}$/i,
            name        : /^[а-яА-ЯёЁa-zA-Z]{2,}$/i,
            phone       : /^\+7[-]\d{3}[-]\d{3}[-]\d{4}$/,
            email       : /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.(org|com|co|net|io|ru)$/i,
            errorClass  : true
        }, options);
        return this.each(function(){
            var errors = [];
            var checkField = function(){
                var result = true;
                var $this = $(this);
                var type = $this.data('type');
                var pattern = typeof type !== 'undefined' && typeof settings[type] !== 'undefined' ? settings[type] : settings.text;
                var errorText = $this.data('err-text');
                if($this.data('req') === true) {
                    result = false;
                    if(!pattern.test($this.val())){
                        if(settings.errorClass === true) {
                            $this.addClass('error-border');
                            if ($this.siblings('.error').length < 1) {
                                $('<span class="error">' + errorText + '</span>').insertAfter($this);
                            } else {
                                $this.siblings('.error').html(errorText);
                            }

                        } else {
                            var name = $this.attr('name');
                            var $data = $('[data-err-class="'+name+'"]');
                            $data.addClass('error-border');
                            if ($data.siblings('.error').length < 1) {
                                $('<div class="error">' + errorText + '</div>').insertAfter($data);
                            } else {
                                $data.siblings('.error').html(errorText);
                            }
                        }
                        if(errors.indexOf(errorText) === -1) {
                            errors.push(errorText);
                        }
                    } else {
                        if(settings.errorClass === true) {
                            $this.removeClass('error-border');
                            $this.siblings('.error').remove();
                        } else {
                            name = $this.attr('name');
                            $data = $('[data-err-class="'+name+'"]');
                            $data.removeClass('error-border');
                            $data.siblings('.error').remove();
                        }
                        if(errors.indexOf(errorText) !== -1){
                            errors.splice(errors.indexOf(errorText),1);
                        }
                        result = true;
                    }
                }
                return result;
            };
            $(this).on('focus', 'input, textarea', checkField);
            $(this).on('keyup', 'input, textarea', checkField);
            $(this).on('submit', function(){
                $(this).find('input, textarea').map(checkField);
                if(errors.length > 0) { return false; }
            });
        });
    };
})( jQuery );
