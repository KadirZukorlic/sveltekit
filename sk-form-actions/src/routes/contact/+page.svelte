<script>
    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
        // Handle form submission
        console.log('Form submitted');
        // Add your logic here
    }

    function handleCancel() {
        // Handle cancel action
        console.log('Form canceled');
        // Add your logic here
    }

    export const snapshot = {
        capture: () => ({ name, email, message }),
        restore: (data) => {
            name = data.name;
            email = data.email;
            message = data.message;
        }
    }
</script>

<main>
    <form method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} required />

        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />

        <label for="message">Message:</label>
        <textarea id="message" bind:value={message} required></textarea>

        <button type="submit">Send</button>
        <a href="/">Cancel</a>
    </form>
</main>