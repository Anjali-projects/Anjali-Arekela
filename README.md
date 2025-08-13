# Portfolio Setup Instructions

## EmailJS Configuration

To enable form submissions to be sent to your email and phone, you need to set up EmailJS:

1. **Create an EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account (anjaliarekela29@gmail.com)

3. **Create an Email Template**
   - Go to "Email Templates"
   - Create a new template with these variables:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: Portfolio Contact: {{subject}}
     
     Message: {{message}}
     
     Contact Details:
     - Email: {{from_email}}
     - Phone: {{phone_number}}
     
     This message was sent from your portfolio contact form.
     ```

4. **Get Your Keys**
   - Note down your Service ID, Template ID, and Public Key
   - Replace the placeholders in `src/components/Contact.tsx`:
     - `YOUR_SERVICE_ID` with your actual service ID
     - `YOUR_TEMPLATE_ID` with your actual template ID  
     - `YOUR_PUBLIC_KEY` with your actual public key

5. **Optional: SMS Integration**
   - For SMS notifications to 6302086670, you can integrate with services like:
     - Twilio
     - AWS SNS
     - Or add SMS functionality to your EmailJS template

## Contact Information
- Email: anjaliarekela29@gmail.com
- Phone: 6302086670

The form will now send submissions to your email with all the contact details included.