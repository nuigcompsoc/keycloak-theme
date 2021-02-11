
window.onload = () => {
  const form = document.getElementById("kc-form-buttons");
  form.insertAdjacentHTML('beforeend',`
    <button type="button" style="background-color: #4CAF50" class="btn" onclick="window.open('https://compsoc.ie/accounts/#sign-up');">Sign Up</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('https://compsoc.ie/accounts/#password-reset');">Reset Password</button>
    <div style="
      margin: 0 auto;
      text-align: center;
      padding-top: 16px;
      font-size: 11px;
      color: gray;
    ">
      <a target="_blank" href="https://discord.compsoc.ie">Discord</a>
      <span> &bull; </span>
      <a target="_blank" href="https://wiki.compsoc.ie/en/About-CompSoc/Terms-Of-Use">Terms of Service</a>
    </div>
  `);
}


