export default function ContactPage() {
    return(
        <div className="contact" id="contact">
            <h2>Contact</h2>
            <form action="">
                <div className="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}