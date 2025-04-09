let mnemonic = '';
let walletIndex = 0;

function generateMnemonic() {
  const randomWallet = ethers.Wallet.createRandom();
  mnemonic = randomWallet.mnemonic.phrase;
  document.getElementById('mnemonicDisplay').innerText = `Mnemonic: ${mnemonic}`;
  walletIndex = 0;
  document.getElementById('wallets').innerHTML = '';
}

function addWallet() {
  if (!mnemonic) {
    alert("Generate a mnemonic first!");
    return;
  }

  const path = `m/44'/60'/0'/0/${walletIndex}`;
  const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);

  const walletDiv = document.createElement('div');
  walletDiv.className = 'wallet';
  walletDiv.innerHTML = `
    <strong>Wallet ${walletIndex + 1}</strong><br>
    Public Address: ${wallet.address}
  `;
  document.getElementById('wallets').appendChild(walletDiv);
  walletIndex++;
}
