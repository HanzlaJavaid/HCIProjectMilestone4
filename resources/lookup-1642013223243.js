(function(window, undefined) {
  var dictionary = {
    "9bae030b-56cb-44bf-af86-f4e8026d510b": "Looking Schedule",
    "c8b54396-3bf1-46db-99cb-72379bf28501": "Login",
    "6eb27c6f-fe1a-4be2-98e6-d368bf3812d1": "Managing Requests",
    "7d9b6bf3-169c-4496-94cf-e31a2ff64f54": "Managing Memberships",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);