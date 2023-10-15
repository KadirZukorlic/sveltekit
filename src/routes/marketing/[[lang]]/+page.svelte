<script>
    import { page } from '$app/stores'
    const greetins = {
        en: 'Hello!',
        es: 'Hola!',
        fr: 'Bonjour!',
    }

    const { lang = 'en' } = $page.params
    const greeting = greetins[lang]
</script>

<h1>{greeting}</h1>
