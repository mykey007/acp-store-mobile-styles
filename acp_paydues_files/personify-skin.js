$('.MTGDetailRightContent').closest('body').addClass('mtgDetail');
$('div.productDetail').closest('body').addClass('prodDetail');
$(document).ready(function () {
    $('img[src*="administrator_lock"]').closest('table[cellpadding="4"]').addClass('moduleMessage module-lock');
    $('img[src*="administrator_info"]').closest('table[cellpadding="4"]').addClass('moduleMessage module-info');
    $('img[src*="red-error.gif"]').closest('table[cellpadding="4"]').addClass('moduleMessage module-error');
    $('img[src*="green-ok.gif"]').closest('table[cellpadding="4"]').addClass('moduleMessage module-success');
    $('img[src*="anonymous_48.gif"]').closest('table[cellpadding="4"]').addClass('moduleMessage module-anon');
    $('img[src*="afilmgmt.gif"]').closest('div').addClass('affiliateHeader');
    $('div[id*="EmployeeRelationship"]').addClass('affilTable');
    $('.EmployeeRelationshipContent #floatingdiv').css('width', '500px').css('border', '2px solid #ccc');
    $('div[id*="pnlCommunications"]').addClass('pnlCommunications');
    $('input[id*="EmergencyContacts_btnSave"],input[id*="EmergencyContacts_btnCancel"]').addClass('Button');

    $('.free-shipping-promotion').load($(".free-shipping-promotion").attr("pageURL"));
    
    $('.myAccount span[id*="MyAccountInfo_lblEmailAddress"]').addClass('lblEmail');
    $('table[id*="dgDmgView"]').addClass('data custDemographics');

    $('table[id*="tblLegend"]').addClass('tblLegend');

    $('.loginPane input.NormalTextBox, .general .ModPersonifyLoginC input.NormalTextBox, .general .AuthenticationContent input.NormalTextBox').removeAttr('style');
    $('td[id*="Login_"]').removeAttr('width');
    $('td[id*="Login_tdLogin"]').addClass('logintd');
    $('td[id*="Login_tdRegister"]').addClass('registertd');
    $('.chrome .registertd input').appendTo($('.logintd'));

    $('input.StandardButton').removeAttr('style');

    $('img[id*="_imgIcon"]').closest('td[valign="top"]').addClass('moduleIcon');
    $('hr[size="1"]').addClass('moduleHr');
    $('.cartInteger').appendTo($('.showItems'));
    $('.cartAmount').appendTo($('.showAmount'));

    $('.oneClickRight *').removeAttr('style');

    $('.OrderCreateContent .tmar_DataTable2').addClass('orderCreate');
    $('.PayOrdersContent .tmar_DataTable').addClass('payOrders');

    $('.tmar_DataTable2 td').removeAttr('width');
    $('input.button, .prdl-pager div, .prdl-pager span').removeAttr('style');


    $('table.payOrders td[align="right"]').addClass('values');
    $('a[id*="btnApplyCoupon"]').addClass('btnapply');
    $('.CalendarContent table:first').addClass('first');

    $('.search input.NormalTextBox').addClass('swap');
    $('.search input.NormalTextBox').attr('value', 'Search Site...');
    $('.productThumb img').attr('alt', 'product thumbnail');
    $('.mainProductImage img').attr('alt', 'large image');


    $('.OrderSummaryContent td hr').closest('tr').addClass('spacerRow');

    $('span[id*="AdvanceMeetingMenu_lblDaysLeft"]').addClass('daysLeft');
    $('input[id*="rdApplyTo"]').addClass('applyTo');

    $('span.daysLeft').removeAttr('style');

    $('.MyDonationHistoryContent table.tmar_DataTable, .MyTranscriptsContent table.tmar_DataTable, .ContactsContent table.tmar_cucm_communication, .AffiliateListContent .tmar_DataTable').addClass('data');

    $('table.tmar_cucm_communication tr:first td:last').attr("colspan", "4");
    $("a.lbtnMtgSesHideAllDesc").click(function () {
        return false; // Prevent browser from visiting `#`
    });

    $('.MyDonationHistoryContent table.tmar_DataTable tr:first, .MyTranscriptsContent table.data tr:first').addClass('th');

    $('table[id*="CustomerDCDFiles_gvDCDFileList"]').addClass('data custDCD').removeAttr('style');
    $('input[id*="MyDonationHistory_btnSearch"], input[id*="CustomerOptInChoices_btn"]').addClass('button');

    $('tr.ShoppingWishListItem').closest('body').addClass('saved');
    $('input[id*="AddForGroupButton"]').closest('body').addClass('forGroup');

    $('.Shopping.Cart .tmar_HeadlineDiv:last').addClass('savedTitle');

    // $('.ProductDetailImageCell div[id*="DivSmallImage2"]').closest('.ProductDetailImageCell').addClass('multi');

    $('td[bgcolor="#dddddd"] span').addClass('h4');

    $('.data tr:nth-child(odd)').children('td').addClass('odd');
    $('.data tr:nth-child(even)').children('td').addClass('even');

    $('body.prde .breadCrumbs li span a:last, body.mtgDetail .breadCrumbs li span a:last, body.prodDetail .breadCrumbs li span a:last').addClass('lastBc');
    $('body.prde .breadCrumbs li span a:last').parent().contents().filter(function () {
        return this.nodeType == 3;
    }).remove();

    $('.MtgCalendarYourSelectionBarControl_PersonifyDefault').closest('body').addClass('mtgCalendar');
    $('.MTGDetailRightContent').closest('body').addClass('mtgDetail');
    $('.RegistrationControl_PersonifyDefault').closest('body').addClass('RegistrationControl');
    $('.GuestCheckoutControl_PersonifyDefault').closest('body').addClass('GuestCheckoutControl');
    $('.CheckoutControl_PersonifyDefault').closest('body').addClass('CheckoutControl');

    $('.MTGDetailRegisterButton').addClass('purchaseButton');
    $('.MtgCalendarGrdEvents .dvRegNow input').addClass('purchaseButton');
    $('input.processOrder').addClass('purchaseButton');

    $("a.closeCart").click(function () {
        $('.action #cartPreview').slideUp();
    });

    var hidePreviewTimeoutId;

    $('#cartPreview').click(function(event) {
        if (hidePreviewTimeoutId) {
            window.clearTimeout(hidePreviewTimeoutId);
            hidePreviewTimeoutId = null;
        }
        event.stopPropagation();
    });

    $('#cartPreview').hover(function() {
        if (hidePreviewTimeoutId) {
            window.clearTimeout(hidePreviewTimeoutId);
            hidePreviewTimeoutId = null;
        }
    });

    $('html').click(function() {
        $(".action #cartPreview").slideUp('slow');
    });

    var selectSegment = function (btnSelectSegment) {
        var segmentQualifier = btnSelectSegment.val();

        $('.action #cartPreview .loadCart .ShoppingCartItemControl_Container').hide();
        $('.action #cartPreview .loadCart .segmentSubtotal').hide();
        $('.action #cartPreview .loadCart input[type="hidden"][name*="hfSegmentQualifier"][value="' + segmentQualifier + '"]').parent().show();

        $(".action #cartPreview .loadCart .cartPreviewSelectSegment").removeClass('cartPreviewSeletedSegment');
        btnSelectSegment.addClass('cartPreviewSeletedSegment');
    };

    var onPreviewLoaded = function () {
        $(".action #cartPreview .loadCart .cartPreviewSelectSegment").click(function () {
            selectSegment($(this));
        });

        selectSegment($("#cartPreview .loadCart .cartPreviewSelectSegment").first());
    };

    $(function () {
        var timeoutId;
        $("a.cart").hover(function () {
            var itemsCount = parseInt($('.cartCountLabel').first().html(), 10);

            if (itemsCount && !isNaN(itemsCount) && itemsCount > 0) {
                if (!timeoutId) {
                    timeoutId = window.setTimeout(function () {
                        timeoutId = null;
                        var prevCacheFlag = $.ajaxSettings.cache;
                        $('.action #cartPreview').slideDown();
                        $.ajaxSettings.cache = false;
                        $('.action #cartPreview .loadCart').load('/ebizATPRO/AlternatePreview.aspx .ContentPane', onPreviewLoaded);
                        $.ajaxSettings.cache = prevCacheFlag;
                        if (!hidePreviewTimeoutId) {
                            hidePreviewTimeoutId = window.setTimeout(function () {
                                hidePreviewTimeoutId = null;
                                $(".action #cartPreview").slideUp('slow');
                            }, 3000);
                        }
                    }, 1000);
                }
            }
        },
    function () {
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            timeoutId = null;
        }
        else {
            //$(".action #cartPreview").slideUp('slow');
        }
    });
    });

    $("a.cart").click(function () {
        $(".action #cartPreview").remove();
    });
    $('.panelShoppingCart span.noRecords').closest('.panelShoppingCart').addClass('empty');
});



$(document).ready(function () {
    Sys.Application.add_load(function () {
        $('.showItems').empty();
        $('.cartCountLabel').clone().appendTo($('.showItems'));
        var cartCountLabelNode = $('.cartCountLabel');
		if (cartCountLabelNode.length > 0) {
            var cartCount = "(" + cartCountLabelNode.first().html() + ")";
            $('.cart-count-number').html(cartCount);
			
		    var cartMobileLink = $('.shopping-cart-url');
			var nodeCartAnchor = $(cartCountLabelNode).parent().parent("a");
			if(nodeCartAnchor.length > 0)
			{
				var cartUrl = nodeCartAnchor.attr("href");
				cartMobileLink.attr("href", cartUrl);
			    $('.cart-count-number').parent().parent("a").attr("href", cartUrl);
				cartMobileLink.html("<li>Cart " + cartCount + "</li>");
			}
		}
		var mbStoreLink = $('#wrapper.mobile-store');
		if (mbStoreLink && mbStoreLink.length > 0) {
		    var mbStoreUrlField = $(".mobile-store-url");
		    if (mbStoreUrlField && mbStoreUrlField.length > 0) {
		        var mbStoreUrl = mbStoreUrlField.first().val();
		        if (mbStoreUrl) {
		            $(".store-url").removeClass("hide");
		            $(".store-url").attr("href", mbStoreUrl);
		        }
		    } else {
		        $(".store-url").addClass("hide");
		    }
		} else {
		    $(".store-url").addClass("hide");
		}

        var bottomNavigation = $('.bottom-navigation');
        if (bottomNavigation) {
            var homeAnchor = bottomNavigation.children("ul").children().last();
            if (homeAnchor) {
                var homeLinkURL = homeAnchor.attr("href");
                var mobileHeader = $(".mobile-logo-url");
                if (mobileHeader) {
                    mobileHeader.attr("href", homeLinkURL);
                }
            }
            var loginDNNLink = $(".logInOut");
            var mobileStoreLogin = bottomNavigation.children("ul").children("a.login-url");
            if (loginDNNLink && mobileStoreLogin) {
                mobileStoreLogin.html("<li>" + loginDNNLink.attr("title") + "</li>");
                mobileStoreLogin.attr("href", loginDNNLink.attr("href"));
            }
        }

        $('input[id*="btnEmailCheck"]').addClass('btnEmailCheck');
        $('.productThumb img[id*="SmallImage2"]').parent().parent().parent().addClass('multi');
        $('.MeetingDetailControl_PersonifyDefault').closest('body').addClass('mtgDetail');
        $('.prevNextCancelButtons, .dvMtgSesActionButtons').addClass('buttonRow');
        $('.prevNextCancelButtons, .dvMtgSesActionButtons .linkButton').addClass('cancel');
        $('.panelShoppingCart span.noRecords').closest('.panelShoppingCart').addClass('empty');
        $('div[id*="EndEmploymentWindow"]').addClass('EndEmploymentWindow');

        // move to control
        $('input[id*="AFMBuyForGroupRegistrationInformationControl_ButtonNext"]').parent().addClass('buttonRow');
        $('input[id*="AFMBuyForGroupRegistrationInformationControl_ButtonCancel"]').addClass('cancel');

        //$('.ProductDetailCECreditText').closest('td').addClass('credit');
        $('.dvFilterItem').parent().parent().addClass('hasFacets');
        $('.dvMtgStatus:contains("Cancel")').parent().parent().addClass('cancelRow');
        $('.dvMtgStatus:contains("Close")').parent().parent().addClass('closeRow');
        $('.quickShowEvent').attr('Title', 'Quick View');

        //Commented out PatrickW to add button to MTG short description 
         //     $('.DateGo, .mtgDesc *, .MTGDetailShortDescription *, .MTGDetailLongDescription *').removeAttr('style');

        // $('div.dvMtgLegend').insertAfter('.MtgCalendarEventsControl_PersonifyDefault');
        $('a.clearAll').appendTo('.yourSelections h3');
        $(".btnMtgSesShowHideGroup").click(function () {
            $(this).toggleClass("alt");
        });
        $('input[id*="ButtonContinueShopping"]').addClass('continueShopping');
        $('div[id*="ExpirationDateRow"]').addClass('ExpirationDateRow');
        $('div.ResultsPanel').removeAttr('style');
        //$('.MtgCalendarFilterBarControl_PersonifyDefault .header span:first-child').addClass('arw');
        $('.MtgCalendarControl_PersonifyDefault a[id*="PrintLink"]').parent().addClass('printLink');
        $('a[id*="LegendLink"]').addClass('LegendLink');
        $('.GuestEmailLookupControl_PersonifyDefault').closest('body').addClass('guestEmailLookup');
        $('.MeetingsMeetingExhibitorListing_PersonifyDefault .formLayout').removeClass('formLayout');
        $('.OrderSummaryControl_PersonifyDefault span[id*="lblBalance"]').parent().parent().parent().addClass('balanceRow');
        $('.OrderSummaryControl_PersonifyDefault span[id*="lblPaymentInfo"]').addClass('lblPaymentInfo');
        $('.OrderSummaryControl_PersonifyDefault span[id*="lblUnitPrice"]').parent().addClass('lblUnitPrice');
        $('.OrderSummaryControl_PersonifyDefault span[id*="lblTotal"]').parent().addClass('lblTotal');
        $('ul.breadCrumbs li .ProductDetailNameDisplay, ul.breadCrumbs li .MTGDetailMainHeader').remove();
        $('.MTGDetailMainHeader').clone().appendTo('ul.breadCrumbs li:last');
        $('h1 .ProductDetailNameDisplay').clone().appendTo('ul.breadCrumbs li:last');
        $(".ProductItemControl_PersonifyDefault li span:empty").parent().addClass('empty');
        //$('div[id*="PanelGroupCustomer"]').addClass('PanelGroupCustomer');
        // $('.prde-mktg .ShoppingCartSavingsControl_PersonifyDefault ').appendTo('td.ProductDetailLeftCell');
        $('.ProductDetailCECreditText').replaceWith(
    		function (i, h) {
    		    return h.replace(/(\d+.\s)([\d\D]*)/g, '$1 <em>$2</em>');
    		});


    });


});



