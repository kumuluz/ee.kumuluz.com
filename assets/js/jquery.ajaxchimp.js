/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
Use:
===
$('#form_id').ajaxchimp(options);
- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.
Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}
Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/

(function ($) {
    'use strict';

    $.ajaxChimp = {
        responses: {
            'Please enter a value'                                                              : 0,
            'All fields are required'                                                           : 1,
            'An email address must contain a single @'                                          : 2,
            'The domain portion of the email address is invalid (the portion after the @: )'    : 3,
            'The username portion of the email address is invalid (the portion before the @: )' : 4,
            'This email address looks fake or invalid. Please enter a real email address'       : 5
        },
        translations: {
            'en': [
                'All fields are required.'
            ]
        },
        init: function (selector, options) {
            $(selector).ajaxChimp(options);
        }
    };

    $.fn.ajaxChimp = function (options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find('input[type=email]');
            var label = form.find('label[for=' + email.attr('id') + ']');
            var error = false;
            var msgError = form.find('#mce-error-response');
            var msgSuccess = form.find('#mce-success-response');
            var loading = form.find('#mce-loading');

            var settings = $.extend({
                'url': form.attr('action'),
                'language': 'en'
            }, options);

            var url = settings.url.replace('/post?', '/post-json?').concat('&c=?');

            form.attr('novalidate', 'true');
            email.attr('name', 'EMAIL');

            form.submit(function (event) {
                msgError.html('').hide();
                msgSuccess.html('').hide();
                loading.show();

                function validateData () {
                    var fName = $("input[name=FNAME]").val();
                    var lName = $("input[name=LNAME]").val();
                    var email = $("input[name=EMAIL]").val();
                    var phone = $("input[name=PHONE]").val();
                    var company = $("input[name=COMPANY]").val();
                    var title = $("input[name=TITLE]").val();

                    if (!fName || fName.length === 0) return "You must fill in your first name.";
                    if (!lName || lName.length === 0) return "You must fill in your last name.";
                    if (!email || email.length === 0) return "You must fill in your email address.";
                    if (!phone || phone.length === 0) return "You must fill in your phone number.";
                    if (!company || company.length === 0) return "You must fill in your company/organisation.";
                    if (!title || title.length === 0) return "You must fill in your job title.";

                    var emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
                    if (!emailReg.test(email)) return "Please enter a valid email address.";

                    var phoneReg = /^[0-9-/+() ]+$/;
                    if (!phoneReg.test(phone)) return "Please enter a valid phone address.";

                    return null;
                }

                var msg = validateData();

                if (msg !== null) {
                    event.preventDefault();
                    msgError.html(msg).show();
                    loading.hide();
                    return;
                }

                function successCallback(resp) {
                    if (resp.result === 'success') {
                        msg = 'Submission was successful, we have sent you a confirmation email.';
                        label.removeClass('error').addClass('valid');
                        email.removeClass('error').addClass('valid');
                        error = false;
                    } else {
                        email.removeClass('valid').addClass('error');
                        label.removeClass('valid').addClass('error');
                        error = true;
                        var index = -1;
                        try {
                            var parts = resp.msg.split(' - ', 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg;
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1];
                                } else {
                                    index = -1;
                                    msg = resp.msg;
                                }
                            }
                        }
                        catch (e) {
                            index = -1;
                            msg = resp.msg;
                        }
                    }

                    // Translate and display message
                    console.log($.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]])
                    if (
                        /*settings.language !== 'en'
                        && */$.ajaxChimp.responses[msg] !== undefined
                        && $.ajaxChimp.translations
                        && $.ajaxChimp.translations[settings.language]
                        && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    ) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]];
                    }

                    loading.hide();
                    msgError.html('').hide(0);
                    msgSuccess.html('').hide(0);
                    if (error) {
                        msgError.html(msg).show(0);
                    }
                    else
                        msgSuccess.html(msg).show(0);

                    label.show(0);
                    if (settings.callback) {
                        settings.callback(resp);
                    }
                }

                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function (index, item) {
                    data[item.name] = item.value;
                });

                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: 'jsonp',
                    error: function (resp, text) {
                        console.log('mailchimp ajax submit error: ' + text);
                    }
                });

                // Translate and display submit message
                var submitMsg = 'Submitting...';
                if(
                    settings.language !== 'en'
                    && $.ajaxChimp.translations
                    && $.ajaxChimp.translations[settings.language]
                    && $.ajaxChimp.translations[settings.language]['submit']
                ) {
                    submitMsg = $.ajaxChimp.translations[settings.language]['submit'];
                }
                
                //loading.show();

                return false;
            });
        });
        return this;
    };
})(jQuery);