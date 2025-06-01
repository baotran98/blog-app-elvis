import { useState } from "react";

const SubscribeArticle = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email !== "") {
            setSubscribed(true)
            console.log(email);
        }

    }

    return (
        <article className="newsletter">
            { subscribed
                ? ( <h4 className="newsletter__thanks">Thank you subscribed for newsletter</h4> )
                : (
                    <>
                        <div className="newsletter__info">
                            <h4>subscribe to our newsletter</h4>
                            <div className="copy">Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch</div>
                        </div>
                        <form onSubmit={handleSubmit} className="newsletter__form">
                            <input
                                type="text"
                                className="newsletter__email"
                                placeholder="Enter your E-mail address"
                                value={email}
                                onChange={(e) => handleEmail(e)}
                            />
                            <button type="submit" className="newsletter__subscribe btn btn--medium btn--turquoise" >SUBSCRIBE</button>
                        </form>
                    </>
                )}
        </article>
    )
}

export default SubscribeArticle;
