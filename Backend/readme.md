This is the Backend part where the core parts will be added .


## Shadcn 

Shadcn is a comprehensive user interface (UI) library designed to elevate the visual aesthetics and user experience of your applications. With a wide range of customizable components and stunning design elements, Shadcn UI empowers developers to create captivating interfaces that captivate users.

# Installation

To install Shadcn in your project, you can use npm or yarn:
Run the `shadcn-ui` init command to setup your project:

```bash
npx shadcn-ui@latest init
```
# Configure components.json
You will be asked a few questions to configure `components.json`:
```bash
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? › no / yes


```
## Usage of Shadcn in this website

## Form
```bash
npx shadcn-ui@latest add form
```
## Button

```bash
npx shadcn-ui@latest add button

```
## Checkbox

```bash
npx shadcn-ui@latest add checkbox

```
## Select
```bash
npx shadcn-ui@latest add select

```
## Input
```bash
npx shadcn-ui@latest add input

```
## Textarea
```bash
npx shadcn-ui@latest add textarea

```
## Toast
```bash
npx shadcn-ui@latest add toast
```
<img src="public/img/contact.png" alt="home screen" />



## Stripe

Getting started
Welcome to Stripe. Here's how to get up and running quickly and easily.

Sign up and complete your business profile
Step 1: Sign up for a Stripe account.

If you are looking to connect a Stripe account to one of our platform partners, follow these instructions instead.

Step 2: Verify your email.

You'll receive an email immediately after signing up with a link to verify your email address.

Step 3: Complete your business profile to activate your account.

This is necessary to enable certain capabilities for your account, such as accepting live payments, and for Stripe to comply with know your customer (KYC) regulations.


Create a new Payment Link 

<img src="public/img/stripe.png" alt="home screen" />



<img src="public/img/pricing.png" alt="home screen" />

```tsx
<div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="Your_Stripe_url_link"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="Your_Stripe_url_link"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
```



## Usage of Calendly

Calendly is a scheduling tool that allows users to schedule meetings and appointments with others. It offers a simple and intuitive interface that makes it easy to set up and manage meetings. With Calendly, users can create personalized scheduling links, share them with others, and allow invitees to book time slots based on their availability. Calendly integrates with popular calendar apps like Google Calendar, Outlook, and iCloud, making it easy to keep track of scheduled meetings. Whether you're scheduling a one-on-one meeting, a group event, or a webinar, Calendly provides the tools you need to streamline the scheduling process and save time.


## Installation

To install Calendly in your project, you can use npm or yarn:

```bash
npm install @calendly/react
# or
yarn add @calendly/react
```

## Usage

To use Calendly in your project, you can import the `Calendly` component and pass the `url` prop with your scheduling link:

```tsx
"use client";

import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div>
      <h1>Book a Meeting</h1>
      <InlineWidget url="https://calendly.com/your-scheduling-link" />
    </div>
  );
}
```
Go to the [Calendly](https://calendly.com/) create a new meeting schedule and copy the link and paste it in the url prop.

<img src="public/img/mail.png" alt="home screen" />
<img src="public/img/mailhaywin.png" alt="home screen" />
