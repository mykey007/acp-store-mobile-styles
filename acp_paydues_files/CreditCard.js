
function requestrefund(id) {
    if (jQuery('[id$=_CustomerServiceText]').hide()) {
        //if (document.getElementById('dnn_ctr673_ACP_OnlineDues_CustomerServiceText').style.display == 'none')
        jQuery('[id$=_CustomerServiceText]').attr('display', 'inline');
        //document.getElementById('dnn_ctr673_ACP_OnlineDues_CustomerServiceText').style.display = 'inline'		
        jQuery('[id$=_CustomerServiceText]').show();
        //document.getElementById('dnn_ctr673_ACP_OnlineDues_CustomerServiceText').style.visibility = 	'visible';		
    }
}

function getElementByPartialId1(id) {
    if (document.forms[0].elements != null) for (i = 0; i < document.forms[0].elements.length - 1; i++)
    if (document.forms[0].elements[i].id.indexOf(id) > 0) {
        return document.forms[0].elements[i];
    }
}

function getElementByPartialId(id) {
    if (document.forms[0].elements != null) for (i = 0; i < document.forms[0].elements.length - 1; i++)
    if (document.forms[0].elements[i].name.indexOf(id) > 0) {
        return document.forms[0].elements[i];
    }
}


function FillCustomerCreditCardInfo(checked, cctypeid, cctype, ccnumberid, ccnumber, expmonth, expmonthid, expyear, expyearid, nameoncardid, nameoncard, remembercardid) {
    //	When the user check use preferred card, set the values here expyear expmonth
    if (checked == true) {
        var occtype = getElementByPartialId(cctypeid)
        occtype.value = cctype;
        occtype.disabled = true;

        var occno = getElementByPartialId(ccnumberid)
        occno.value = ccnumber;
        occno.disabled = true;
        //alert(Date.parse(expdate));
        //alert(expdate);	
        var oexpmonth = getElementByPartialId(expmonthid)
        var tempstr = expmonth.substring(0, 1)
        if (tempstr == "0") {
            expmonth = expmonth.substring(1, 2);
        }
        oexpmonth.value = expmonth;
        //oexpmonth.disabled=true;
        var oexpyear = getElementByPartialId(expyearid)
        oexpyear.value = expyear;
        //oexpyear.disabled=true;
        var onameoncard = getElementByPartialId(nameoncardid)
        onameoncard.value = nameoncard;
        //onameoncard.disabled=true;
        var oremembercardid = getElementByPartialId(remembercardid)
        oremembercardid.checked = false;
        oremembercardid.disabled = true;

    } else {
        var occtype = getElementByPartialId(cctypeid)

        occtype.disabled = false;
        //occtype.value = '';
        var occno = getElementByPartialId(ccnumberid)
        occno.value = '';
        occno.disabled = false;

        var oexpmonth = getElementByPartialId(expmonthid)
        oexpmonth.disabled = false;

        var oexpyear = getElementByPartialId(expyearid)

        oexpyear.disabled = false;

        var onameoncard = getElementByPartialId(nameoncardid)
        //onameoncard.value='';
        onameoncard.disabled = false;

        var oremembercardid = getElementByPartialId(remembercardid)
        oremembercardid.checked = false;
        oremembercardid.disabled = false;

    }

}


function CalculateTotal(howmany, id) {

    xtotal = 0;
    for (i = 0; i <= howmany; i++) {
        val = parseFloat(document.getElementById('HiddenPrice' + i).value);
        if (!isNaN(val)) xtotal += val;
        //alert(val+ " "+ xtotal);
    }
    document.getElementById(id).innerHTML = '$' + (parseFloat(xtotal)).toFixed(2);
    document.getElementById('Total').innerHTML = '$' + (parseFloat(xtotal)).toFixed(2);
    document.getElementById('AllTotal').value = (parseFloat(xtotal)).toFixed(2);
    document.getElementById('newTotal').value = (parseFloat(xtotal)).toFixed(2);

}

function isNumber(str) { 
isPrice = /^\d+(\.\d{2}){0,1}$/;
return isPrice.test( str ); 
}

function showCC(link, id, id1) {

if (jQuery('[id*=rblstChpvol2]').length > 0) {
    if (!jQuery('[id*=rblstChpvol2]:checked').length > 0) {
        alert("Please select an option under Voluntary Contributions.");
        return false;
    } else {
        if (jQuery('#testing2').length > 0) {
            var amount = jQuery('#testing2').val();
            if (!isNumber(amount)) {
                alert("Please enter a valid voluntary amount.");
                return false;
            }
        }
        if (jQuery('#testing1').length > 0) {
            var amount = jQuery('#testing1').val();
            if (!isNumber(amount)) {
                alert("Please enter a valid voluntary amount.");
                return false;
            }
        }
    }
}

if (jQuery('input[id*=rblstContribution]').length > 1) {
    if (!(jQuery('input[id*=rblstContribution]:first').val() > 0)) {
        jQuery('input[id*=rblstContribution_0]:first').css('display', 'none');
    }
}

if (jQuery('input[id*=rblstChpvol2]').length > 1) {
    if (!(jQuery('input[id*=rblstChpvol2]:first').val() > 0)) {
        jQuery('input[id*=rblstChpvol2_0]:first').css('display', 'none');
    }
}


if (jQuery('[id*=rblstContribution]').length > 0) {
    if (!jQuery('[id*=rblstContribution]:checked').length > 0) {
        alert("Please select an option under Voluntary Contributions."); return false;
    } else {
        var amount = jQuery('#testing4').val();
        if (!isNumber(amount)) {
            alert("Please enter a valid voluntary amount."); return false;
        }
    }
}

//safe function to show an element with a specified id
if (document.getElementById) { // DOM3 = IE5, NS6
    /* Wmearns 1146 Back button fix start*/
    var btnLabel = link.text;
    /* Wmearns 1146 Back button fix end*/
    if (document.getElementById(id).style.display == 'inline') {
        jQuery('[id$=_balancepanel]')[0].style.display = 'inline';
        jQuery('[id$=_balancepanel]')[0].style.visibility = 'visible';

        var allbalance = parseFloat(document.getElementById('AllTotal').value);

        if (allbalance < 0) {
            jQuery('[id$=_customerservicepanel]')[0].style.display = 'inline';
            jQuery('[id$=_customerservicepanel]')[0].style.visibility = 'visible';
            jQuery('[id$=_placeorderpanel]')[0].style.display = 'inline';
            jQuery('[id$=_placeorderpanel]')[0].style.visibility = 'visible';

            document.getElementById(id1).style.display = 'none';
            document.getElementById(id).style.display = 'none';

        } else if (allbalance==0){
            document.getElementById(id).style.display = 'none';
			jQuery('[id$=_placeorderpanel]')[0].style.display = 'inline';
            jQuery('[id$=_placeorderpanel]')[0].style.visibility = 'visible';
        }
        else {
            document.getElementById(id1).style.display = 'inline';
            document.getElementById(id1).style.visibility = 'visible'

            document.getElementById(id).style.display = 'none';
        }
        //curtotal = document.getElementById('curTotal').value;
        //AllTotal = parseFloat(document.getElementById('AllTotal').value);
        //if (AllTotal < 0) {
		if (allbalance < 0) {
            jQuery('[id$=_CustomerServiceMessage]').show();
        }

        link.innerHTML = 'Go Back';
        jQuery(link).prependTo(jQuery('[id$=btnProcessOrder]').eq(0).parent());
    } else {
        jQuery('[id$=_balancepanel]').hide();
        document.getElementById(id).style.display = 'inline';
        document.getElementById(id1).style.display = 'none';
        jQuery('[id$=_customerservicepanel]').hide();
        jQuery('[id$=_placeorderpanel]').hide();
        jQuery('[id$=_CustomerServiceMessage]').hide();
        jQuery('[id$=_CustomerServiceText]').hide();
        jQuery('#txtContinue').html('Continue');
        jQuery('#txtContinue').appendTo(jQuery('#txtContinueSpan'));
        /* Wmearns 1146 Back button fix start*/
        if (btnLabel == "Continue") {
            showCC(link, id, id1);
        }
        /* Wmearns 1146 Back button fix end*/
	}
}

} //showCC
