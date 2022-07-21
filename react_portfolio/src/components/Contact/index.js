import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_5ytx4rr',
                'template_n3flizh',
                form.current,
                'J6asWlRaFJJQpcfNt'
            )
            .then(
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
                I am interested in learning opportunities - especially with a hands-on approach. 
                However, if you have other request or question,
                don't hesitate to contact me using the from below.
            </p>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                    <input placeholder="Name" type="text" name="from_name" required />
                    </li>
                    <li className="half">
                    <input
                        placeholder="Email"
                        type="email"
                        name="reply_to"
                        required
                    />
                    </li>
                    <li>
                    <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                    />
                    </li>
                    <li>
                    <textarea
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    </li>
                    <li>
                    <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </ul>
                </form>
            </div>
            </div>
            <div className="info-map">
            Sebastian Lezama,
            <br />
            Argentina,
            <br />
            Malabia 2167 <br />
            CABA <br />
            <br />
            <span>slezama.dev@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[-34.587361, -58.421799]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-34.587361, -58.421799]}>
                    <Popup>Hire Me :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact
