import React , {useState, useEffect} from "react";
import 'aos/dist/aos.css'
import '../App.css';
import './FAQ.css';
import {axios} from './axios';

function FrequentlyAskedQuestions() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios
        .get("/faqs")
        .then(response => {
            console.log("Response:", response)
            setFaqs(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    return(
    <div>
        <div className='faq-container'>
            <div data-aos='fade-up' className='faq-title'>
                <h1> Frequently Asked Questions!</h1>
            </div>
            <div className='faq-content'>
                <div>
                    <ul>
                        {
                            faqs.map(faq =>
                            <div key={faq.id}>
                                <h2 data-aos='fade-up'>{faq.question}</h2>
                                <h3 data-aos='fade-up'>{faq.answer}</h3>
                            </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )

}

export default FrequentlyAskedQuestions