document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('showTags');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
        var tagpop = d.createElement('div');
        tagpop.innerHTML = "<strong>Required tags</strong>"
        d.body.appendChild(tagpop);

        /*
        var f = d.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
        */

      });
    }, false);
  }, false);