jQuery(document).ready(function($) {
    $(".smartpay-edd-alert-close").click(function() {
        $(this)
            .parent(".smartpay-edd-alert")
            .fadeOut();
    });
});
