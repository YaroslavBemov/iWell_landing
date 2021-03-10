export default function modal(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    function _createModal(params) {
        const modal = document.createElement('section')
        modal.classList.add('ymodal')
        modal.insertAdjacentHTML('afterbegin', `
        <div class="ymodal__overlay">
            <div class="ymodal__window">
                <div class="ymodal__close">
                    <img src="../img/times.png" alt="close">
                </div>
                <h2 class="ymodal__heading">
                    Вход / регистрация
                </h2>
                <div class="ymodal__social">
                    <img src="../img/facebook.png" alt="facebook">
                    <img src="../img/vk.png" alt="vk">
                    <img src="../img/google.png" alt="google">
                </div>
                <div class="ymodal__avatar">
                    <img src="../img/account.svg" alt="account">
                </div>
                <p class="ymodal__text">
                    polsovatel@yandex.ru
                </p>
                <input type="text" class="ymodal__input ymodal__input-text" placeholder="Имя">
                <input type="email" class="ymodal__input ymodal__input-email" placeholder="E-mail">
                <input type="tel" class="ymodal__input ymodal__input-tel" placeholder="Телефон">
                <input type="password" class="ymodal__input ymodal__input-pass" placeholder="Введите пароль">
                <p class="ymodal__text-small">
                    Забыли пароль?
                </p>
                <button class="ymodal__button">
                    Продолжить
                </button>
                <p class="ymodal__text-small">
                    Продолжая, вы соглашаетесь с Условиями и Политикой конфиденциальности
                </p>
            </div>
        </div>
    `)
        document.body.appendChild(modal)

        return modal
    }

    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }
}