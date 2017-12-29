export function message(msg, timer) {
    timer = timer || 3000
    let div = document.createElement('div')
    div.innerHTML= `<div class="message">
                        <span>
                            <div class="message-notice">${msg}</div>
                        </span>
                    </div>`
    document.body.appendChild(div)
    setTimeout(function() {
        document.body.removeChild(div)
    }, timer)
}