import React from 'react'
import Testimonial from './Testimonial'
import John from '../assets/john.png'
import Mary from '../assets/mary.png'
import Tom from '../assets/tom.png'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div>
          <Testimonial image={John} name="John Doe" rating="5.0" testimonial="I have been a regular at Little Lemon for years and I can confidently say that it is one of the best restaurants in town. The food is always delicious, made with the freshest ingredients and cooked to perfection. The service is also top-notch, the staff is always friendly and attentive. I highly recommend this place to anyone looking for a great dining experience." />
          <Testimonial image={Mary} name="Mary Jane" rating="4.7" testimonial="I had the pleasure of trying Little Lemon for the first time last week and I was blown away. The ambiance was cozy and inviting, and the food was some of the best I've ever had. I especially loved the bruchetta and lemon dessert, both were expertly prepared and absolutely delicious. I will definitely be returning!" />
          <Testimonial image={Tom} name="Tom McGill" rating="4.9" testimonial="I recently attended a friend's birthday party at Little Lemon and was impressed by the quality of the food and service. The staff was very kind and accommodating to make sure that everything was perfect for the special occasion. The food was amazing and everyone was raving about it. I would highly recommend Little Lemon for any event, big or small." />
        </div>
      </div>
    </section>
  )
}

export default Testimonials