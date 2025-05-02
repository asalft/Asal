// تأكد من أنك أضفت مكتبة tonconnect-ui.min.js في HTML قبل هذا الملف
// <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: 'https://asalft.github.io/Asal/tonconnect-manifest.json',
  buttonRootId: 'ton-connect'
});

// مثال: يمكنك مراقبة حالة الاتصال هنا
tonConnectUI.onStatusChange(async (walletInfo) => {
  if (walletInfo) {
    console.log('تم الاتصال بالمحفظة:', walletInfo);
    alert('تم الاتصال بمحفظتك بنجاح!');
  } else {
    console.log('لم يتم الاتصال بعد.');
  }
});
