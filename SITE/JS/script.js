// Pour attendre le fin du chargement du document
$(function () { 

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  //Dans Firefox et Safari, l'événement click ne conserve pas le focus
   // sur le bouton cliqué. Par conséquent, l'événement de flou ne se déclenchera pas sur
   // l'utilisateur clique ailleurs dans la page et le gestionnaire d'événement blur
   // qui est configuré ci-dessus ne sera pas appelé.
   // Reportez-vous au problème #28 dans le référentiel.
   // Solution : forcer le focus sur l'élément sur lequel l'événement click s'est déclenché
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


(function(global){
    var grandsPins ={}; //NameSpace

    var titre = "/Snippets/titre_snippet.html";
    var videos = "/Snippets/videos_snippet.html";
<<<<<<< HEAD
    //var plan = "/Snippets/map_snippet.html";
=======
    var plan = "/Snippets/map_snippet.html";
>>>>>>> 48ccd9408eabafe6ea867795e3d71940194959c8

    //fonction pour insérer le html sur la sélection
    var insertHtml = function(selecteurCSS,code_html){
        var element_cible = document.querySelector(selecteurCSS);
        element_cible.innerHTML = code_html;
    };

    //Icon de chargement ajax
    var showLoading = function(selecteurCSS){
        var code_html = "<div class='text-center'>";
        code_html += "<img src='images/Hourglass.gif'></div";
        insertHtml(selecteurCSS,code_html);
    };

    /**************** ajoute un div à la suite de main-content *************/
    /**************** Comme c'est du text, Json sur false *****************/
<<<<<<< HEAD
    /*var ajouterUnSnippet =  function(pageHtml){
=======
    var ajouterUnSnippet =  function(pageHtml){
>>>>>>> 48ccd9408eabafe6ea867795e3d71940194959c8
      $ajaxUtils.sendGetRequest(pageHtml,function(responseText){
            var contenu = document.getElementById("main-content");
            var ajout = document.createElement('div');
            ajout.innerHTML = responseText;
            contenu.appendChild(ajout);
            },false);
<<<<<<< HEAD
        };*/
=======
        };
>>>>>>> 48ccd9408eabafe6ea867795e3d71940194959c8

    // une fois la page chargée
    document.addEventListener('DOMContentLoaded',function(event){
        
      showLoading("#main-content");
<<<<<<< HEAD
        /***********Titre vidéos et plan ***************/
        $ajaxUtils.sendGetRequest(videos,function(responseText){document.querySelector("#main-content").innerHTML = responseText},false);
        
        /*************** vidéos + plan ************/
        //ajouterUnSnippet(videos);
=======
        /***********Titre***************/
        $ajaxUtils.sendGetRequest(titre,function(responseText){document.querySelector("#main-content").innerHTML = responseText},false);
        
        /*************** vidéos + plan ************/
        ajouterUnSnippet(videos);
>>>>>>> 48ccd9408eabafe6ea867795e3d71940194959c8


                   

        global.$grandsPins = grandsPins;
    });


})(window);
