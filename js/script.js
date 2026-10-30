
$(document).on('click', '.copy', function () {
    const tokenText = $(this).closest('.token-block').find('.token').text();

    if (!navigator.clipboard) {
        console.error('Clipboard API non disponible');
        return;
    }

    navigator.clipboard.writeText(tokenText)
        .then(() => {
            $(this).text("Copié !").delay(2000).queue(function () {
                $(this).text("Copier").dequeue();
            });
        })
        .catch(err => {
            console.error("Erreur :", err);
        });
});

//token block
$('.token').wrap('<div class="token-block"></div>');   
	$('.token-block').each(function(){     
    	$(this).append('<button type="button" class="copy" aria-hidden="false" aria-label="Copy to clipboard">Copier</button>');
	});   

/***********************************************/
/* mailtolink */
/***********************************************/

$("#linkTo, #linkSubject, #linkBody").on("input", function(){
  let outputHTML  = "";
  const linkTo       = $('#linkTo').val();
  const linkSubject  = encodeURIComponent($('#linkSubject').val());
  const linkBody     = encodeURIComponent($('#linkBody').val());
  let connectorMark = "?";
  function connector() {
    outputHTML += connectorMark;
    if ( connectorMark === "?" ) {
      connectorMark = "&";
    }
  }
  outputHTML = "mailto:" + linkTo;
  if ( linkSubject !== "" ) {
    connector();
    outputHTML += "subject=" + linkSubject;
  }
  if ( linkBody !== "" ) {
    connector();
    outputHTML += "body=" + linkBody;
  }   
  $('#outputHTML').text(outputHTML);
});
