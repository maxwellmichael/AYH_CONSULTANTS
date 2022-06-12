import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


import {
  RevealFromLeft,
  RevealFromRight,
} from '../../animation/ContentAnimations'

const schema = yup.object({
  fullname: yup.string().required('Full name is Required.'),
  email: yup.string().email().required('Email is Required.'),
  telephone: yup
    .number('Must be a Valid Number')
    .positive('Must be a Valid Number')
    .integer('Must be a Valid Number')
    .max(10)
    .min(10)
    .required('Telephone is Required.'),
  comment: yup.string().max(120).required('Please give a Comment.'),
})

export default function Section4() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const form = useRef()

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        'service_553xl99',
        'template_q1eyram',
        form.current,
        'user_4b3btXxpzQyO4cLqbyMLU',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div id="contact" className="section4-main">
      <div style={{ height: '12rem' }}></div>
      <RevealFromLeft>
        <div className="headline2 main-title">Let's Talk</div>
      </RevealFromLeft>
      <div className="subtitle section4-description">
        We’re always happy to hear from anyone interested in working with us.
      </div>

      <div style={{ height: '2rem' }}></div>
      <RevealFromRight>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="form-container"
        >
          <div className="form-error">{errors.fullname?.message}</div>
          <input
            className="section4-input"
            type="text"
            placeholder="Full name"
            name="fullname"
            {...register('fullname')}
          />

          <div className="form-error">{errors.email?.message}</div>
          <input
            className="section4-input"
            type="email"
            placeholder="Email"
            name="email"
            {...register('email')}
          />
          <div className="form-error">{errors.telephone?.message}</div>
          <input
            className="section4-input"
            type="number"
            placeholder="Telephone"
            name="telephone"
            {...register('telephone')}
          />
          <div className="form-error">{errors.comment?.message}</div>
          <textarea
            className="section4-textarea"
            type="text"
            placeholder="Comment"
            name="comment"
            {...register('comment')}
          />
          <button type="submit" className="section4-button">
            Submit
          </button>
        </form>
      </RevealFromRight>
      <div style={{ height: '20rem' }}></div>
      <div
        className="line"
        style={{ width: '100%', backgroundColor: '#d7baac' }}
      ></div>
    </div>
  )
}
