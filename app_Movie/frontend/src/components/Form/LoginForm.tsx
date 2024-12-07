export const LoginForm = () => {
    const test = () => {
        console.log('test');
    }
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
                <button type='submit' onClick={test}>ログイン</button>
            </form>
        </div>
    )
}