export const LoginForm = () => {
    return (
        <div className='l-loginForm'>
            <form>
                <div className='form-group'>
                    <label htmlFor='username'>ユーザーID: </label>
                    <input type='text' id='username' name='username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>パスワード: </label>
                    <input type='password' id='password' name='password' />
                </div>
                <button type='submit'>ログイン</button>
            </form>
            <div><a href='#'>アカウントの作成</a></div>
        </div>
    )
}