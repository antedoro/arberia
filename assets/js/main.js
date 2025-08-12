/*
  Code block copy-to-clipboard
  - Injects a small "Copy" button into each `.highlight` code block
  - On click, copies the text content of the inner <code> (or <pre>) to the clipboard
  - Uses `navigator.clipboard.writeText` when available, with a safe `execCommand('copy')` fallback
  - Gives visual feedback by temporarily swapping the icon to a checkmark or error icon
*/
(function () {
  function createCopyButton() {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code');
    button.setAttribute('title', 'Copy');
    button.innerHTML = '<i class="fa fa-clone" aria-hidden="true"></i>';
    return button;
  }

  function extractCodeText(container) {
    // Prefer the innermost <code>, else fallback to <pre>, else the container text
    var code = container.querySelector('code');
    if (code) return code.innerText;
    var pre = container.querySelector('pre');
    if (pre) return pre.innerText;
    return container.innerText;
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for older browsers
    return new Promise(function (resolve, reject) {
      try {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '-1000px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        var successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        successful ? resolve() : reject(new Error('execCommand failed'));
      } catch (err) {
        reject(err);
      }
    });
  }

  function enhanceCodeBlocks() {
    var blocks = document.querySelectorAll('.highlight');
    blocks.forEach(function (block) {
      // Avoid duplicate buttons
      if (block.querySelector('.copy-code-button')) return;
      var btn = createCopyButton();
      btn.addEventListener('click', function () {
        var text = extractCodeText(block);
        copyToClipboard(text)
          .then(function () {
            btn.classList.add('copied');
            btn.setAttribute('title', 'Copied!');
            console.log('Tooltip set to Copied!'); // Added for debugging
            btn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
            setTimeout(function () {
              btn.classList.remove('copied');
              btn.setAttribute('title', 'Copy');
              console.log('Tooltip reverted to Copy'); // Added for debugging
              btn.innerHTML = '<i class="fa fa-clone" aria-hidden="true"></i>';
            }, 3000); // Increased duration to 3 seconds
          })
          .catch(function () {
            btn.classList.add('copy-error');
            btn.setAttribute('title', 'Error!');
            console.log('Tooltip set to Error!'); // Added for debugging
            btn.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
            setTimeout(function () {
              btn.classList.remove('copy-error');
              btn.setAttribute('title', 'Copy');
              console.log('Tooltip reverted to Copy'); // Added for debugging
              btn.innerHTML = '<i class="fa fa-clone" aria-hidden="true"></i>';
            }, 3000); // Increased duration to 3 seconds
          });
      });
      block.appendChild(btn);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceCodeBlocks);
  } else {
    enhanceCodeBlocks();
  }
})();