document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', () => {
        const username = prompt('ユーザー名を入力してください:');
        const password = prompt('パスワードを入力してください:');

        // ログインの処理をここに追加します（例: サーバーにデータを送信して認証を行う）

        // デモ用のアラートメッセージ
        if (username === 'hi' && password === 'hi') {
            alert('ログインに成功しました！管理ページに移動します。');
            window.location.href = 'admin.html';
        } else {
            alert('ユーザー名またはパスワードが間違っています。');
        }
    });
});
