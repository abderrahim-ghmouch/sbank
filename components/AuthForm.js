'use strict'

export const AuthForm = function ({
    title,
    titleId,
    fields,
    buttonText,
    helperText,
    helperHref,
    helperLinkText,
    cardClass = ''
}) {
    const fieldsHtml = fields.map(field => `
            <div class="form-group">
                <label for="${field.id}">${field.label}</label>
                <input
                    type="${field.type}"
                    id="${field.id}"
                    name="${field.name}"
                    autocomplete="${field.autocomplete}"
                    required>
            </div>
    `).join('')

    return `
<main class="auth-page">
    <section class="auth-shell" aria-labelledby="${titleId}">
        <h1 id="${titleId}">${title}</h1>

        <form class="auth-form auth-card ${cardClass}">
            <img class="auth-logo" src="./assets/sbank.png" alt="SBank">

${fieldsHtml}
            <button type="submit">${buttonText}</button>

            <p>
                ${helperText}
                <a href="${helperHref}">${helperLinkText}</a>
            </p>
        </form>
    </section>
</main>
`
}
