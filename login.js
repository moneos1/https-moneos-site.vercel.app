
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const connectWalletBtn = document.getElementById('connectWallet');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      window.location.href = 'index.html';
    }
  });

  connectWalletBtn.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert("Wallet connecté ! Redirection en cours...");
        window.location.href = 'index.html';
      } catch (error) {
        alert('Connexion refusée.');
      }
    } else {
      alert('MetaMask est requis pour se connecter avec un wallet.');
    }
  });
});
