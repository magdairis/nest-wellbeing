import sgMail from "@sendgrid/mail"
import { NowRequest, NowResponse } from "@now/node"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const msg = {
      to: "magdapetford@gmail.com",
      from: "nestwellbeingmailer@bearjam.dev",
      subject: "Booking Form Submission",
      html: `
        Name: ${req.body.name}<br>
        Email: ${req.body.email}<br>
        Phone: ${req.body.phone}<br>
        Baby's age: ${req.body.age}<br>
        Interested in: ${Object.entries(req.body.class)
          .filter(([k, v]) => v === true)
          .map(([k, v]) => k)
          .join(", ")}
        `,
    }
    const sgRes = await sgMail.send(msg)
    res.status(200).json(JSON.stringify(sgRes))
    console.log("success")
  } catch (error) {
    res.status(400).json({ error })
    console.log("error", error)
  }
}
