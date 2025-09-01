<script>
  (function(){
    const btn = document.getElementById('copy-template');
    const pre = document.getElementById('email-template');
    const toast = document.getElementById('copied');
    if(!btn || !pre) return;

    btn.addEventListener('click', async () => {
      const text = pre.textContent;
      try {
        await navigator.clipboard.writeText(text);
        if (toast) {
          toast.hidden = false;
          setTimeout(() => toast.hidden = true, 1800);
        }
      } catch(e) {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        if (toast) {
          toast.hidden = false;
          setTimeout(() => toast.hidden = true, 1800);
        }
      }
    });
  })();
</script>
